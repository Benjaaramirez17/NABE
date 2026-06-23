import type { GenSettings } from '../types'
import { NABE_STYLE_BLOCK, PRODUCTS } from './nabeStyle'

function varianceClause(variance: number): string {
  if (variance <= 2) return 'stay faithful to the described subject'
  if (variance <= 5) return 'with a gently playful interpretation'
  if (variance <= 8) return 'with a playful, characterful re-interpretation'
  return 'with a bold, whimsical re-interpretation while keeping the subject recognizable'
}

function accentClause(accent: string): string {
  return `carry a soft ${accent} accent through the palette`
}

/**
 * Assemble a single NABE-style prompt from a subject description + settings.
 * Order matches the grammar in the nabe-prompt-studio skill.
 */
export function buildPrompt(subjectRaw: string, settings: GenSettings): string {
  const product = PRODUCTS[settings.product]
  const subject = subjectRaw.trim().replace(/\.$/, '') || 'a cute character'

  const parts = [
    product.framing(subject),
    NABE_STYLE_BLOCK,
    varianceClause(settings.variance),
    accentClause(settings.accent),
    product.finishing,
  ]

  return parts.join(', ').replace(/\s+,/g, ',') + '.'
}

/** Deterministic-ish seeds so each variant differs but a run is reproducible. */
export function seedsFor(count: number, base?: number): number[] {
  const start = base ?? Math.floor(Math.random() * 1_000_000)
  return Array.from({ length: count }, (_, i) => start + i * 7919)
}
