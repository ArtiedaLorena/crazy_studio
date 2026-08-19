import {
  getBreadcrumbSchema,
  getFaqSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
} from '../config/schema'

const schemas = [
  getLocalBusinessSchema(),
  getWebSiteSchema(),
  getFaqSchema(),
  getBreadcrumbSchema(),
]

export function SeoSchema() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
