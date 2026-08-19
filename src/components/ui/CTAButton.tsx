import type { ReactNode } from 'react'
import { brand } from '../../config/brand'

interface CTAButtonProps {
  href?: string
  children?: ReactNode
  className?: string
}

export function CTAButton({
  href = '#reservar',
  children = brand.cta,
  className = '',
}: CTAButtonProps) {
  return (
    <a href={href} className={`btn-primary animate-pulse-neon ${className}`}>
      {children}
    </a>
  )
}
