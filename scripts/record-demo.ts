import { chromium } from 'playwright'
import { mkdir, readdir, rename } from 'fs/promises'
import { join } from 'path'

const BASE_URL = process.env.DEMO_URL ?? 'http://localhost:5173'
const OUT_DIR = join(process.cwd(), 'demo-video')
const FINAL_NAME = 'studiocrazy-demo.webm'

async function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

async function smoothScroll(page: import('playwright').Page, pixels: number) {
  await page.evaluate(async (y) => {
    const step = y / 20
    for (let i = 0; i < 20; i++) {
      window.scrollBy(0, step)
      await new Promise((r) => setTimeout(r, 40))
    }
  }, pixels)
}

async function goTo(page: import('playwright').Page, hash: string) {
  await page.locator(hash).scrollIntoViewIfNeeded()
  await wait(1200)
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: {
      dir: OUT_DIR,
      size: { width: 1280, height: 720 },
    },
    locale: 'es-AR',
  })

  const page = await context.newPage()
  page.setDefaultTimeout(25000)

  console.log('🎬 Grabando demo en', BASE_URL)

  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' })
  await wait(3000)

  await smoothScroll(page, 200)
  await wait(1500)

  await goTo(page, '#servicios')
  await wait(2000)
  await smoothScroll(page, 350)
  await wait(1500)

  await goTo(page, '#reservar')
  await wait(1500)

  const booking = page.locator('#reservar')

  // Paso 1 — Servicio
  await booking.getByText('¿Qué servicio querés?').waitFor()
  await booking.getByRole('button', { name: /Extensiones Híbridas/i }).click()
  await wait(600)
  await booking.getByRole('button', { name: 'Continuar', exact: true }).click()
  await wait(1000)

  // Paso 2 — Fecha
  await booking.getByText('Elegí una fecha').waitFor()
  await booking.locator('.mt-6.grid button').first().click()
  await wait(600)
  await booking.getByRole('button', { name: 'Continuar', exact: true }).click()
  await wait(1000)

  // Paso 3 — Horario
  await booking.getByText('Elegí un horario').waitFor()
  await booking.getByRole('button', { name: '10:00 hs' }).click()
  await wait(600)
  await booking.getByRole('button', { name: 'Continuar', exact: true }).click()
  await wait(1000)

  // Paso 4 — Datos
  await booking.getByText('Tus datos de contacto').waitFor()
  await page.fill('#name', 'María González')
  await page.fill('#phone', '11 5555 1234')
  await page.fill('#email', 'maria@email.com')
  await page.fill('#notes', 'Primera vez — quiero look natural')
  await wait(700)
  await booking.getByRole('button', { name: 'Confirmar reserva' }).click()
  await wait(3500)

  await booking.getByText('¡Turno reservado!').waitFor()
  await wait(2000)

  await goTo(page, '#testimonios')
  await wait(2000)

  await goTo(page, '#nosotros')
  await wait(2000)

  await goTo(page, '#faq')
  await page.locator('#faq button').filter({ hasText: /Cuánto cuesta/i }).click()
  await wait(1500)

  await goTo(page, '#contacto')
  await wait(2000)

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  await wait(2500)

  await page.close()
  await wait(500)
  await context.close()
  await browser.close()

  const files = await readdir(OUT_DIR)
  const webms = files.filter((f) => f.endsWith('.webm') && f !== FINAL_NAME)
  if (webms.length === 0) {
    console.log('⚠️ No se encontró el archivo de video en', OUT_DIR)
    return
  }

  // Usar el archivo más reciente / grande
  const { stat } = await import('fs/promises')
  let best = webms[0]
  let bestSize = 0
  for (const f of webms) {
    const s = (await stat(join(OUT_DIR, f))).size
    if (s > bestSize) {
      bestSize = s
      best = f
    }
  }

  const finalPath = join(OUT_DIR, FINAL_NAME)
  await rename(join(OUT_DIR, best), finalPath)
  console.log('✅ Video guardado en:', finalPath)
  console.log(`   Duración aprox. del recorrido · ${(bestSize / 1024 / 1024).toFixed(1)} MB`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
