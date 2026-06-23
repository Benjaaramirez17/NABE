import { PRODUCTS } from './nabeStyle'
import type { ProductType } from '../types'

/**
 * Pollinations.ai — free, no API key, no backend.
 * The image is produced by requesting a URL; we just point an <img> at it.
 * Docs: https://pollinations.ai
 */
const ENDPOINT = 'https://image.pollinations.ai/prompt'

export function pollinationsUrl(
  prompt: string,
  seed: number,
  product: ProductType,
): string {
  const { width, height } = PRODUCTS[product].aspect
  const params = new URLSearchParams({
    width: String(width),
    height: String(height),
    seed: String(seed),
    model: 'flux',
    nologo: 'true',
    enhance: 'false',
  })
  return `${ENDPOINT}/${encodeURIComponent(prompt)}?${params.toString()}`
}

/** Trigger a browser download of a generated image (fetched as a blob). */
export async function downloadImage(url: string, filename: string): Promise<void> {
  const res = await fetch(url)
  const blob = await res.blob()
  const objectUrl = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = objectUrl
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(objectUrl)
}
