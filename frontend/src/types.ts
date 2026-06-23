export type ProductType = 'sticker' | 'agenda' | 'notebook' | 'pattern'

export interface ReferenceImage {
  id: string
  name: string
  dataUrl: string
}

export interface GenSettings {
  product: ProductType
  variance: number // 0-10
  accent: string // hex accent color
  count: number // number of variants
}

export interface GeneratedImage {
  id: string
  prompt: string
  seed: number
  url: string
  status: 'loading' | 'done' | 'error'
}
