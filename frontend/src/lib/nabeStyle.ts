import type { ProductType } from '../types'

// The locked NABE "DNA" — mirrors .claude/skills/nabe-prompt-studio/SKILL.md
export const NABE_STYLE_BLOCK =
  'drawn strictly in a hyper-stylized retro comic aesthetic resembling classic ' +
  'Argentine comic strips, exaggerated cute proportions, a large round face, a ' +
  'prominent nose, and simplified dot-like eyes, watercolor illustration style, ' +
  'expressive thin black ink outlines, delicate watercolor washes, completely ' +
  'solid pure white background, no drop shadows, strictly isolated subject with ' +
  'clean edges'

export interface ProductMeta {
  id: ProductType
  label: string
  emoji: string
  framing: (subject: string) => string
  finishing: string
  aspect: { width: number; height: number }
}

export const PRODUCTS: Record<ProductType, ProductMeta> = {
  sticker: {
    id: 'sticker',
    label: 'Sticker die-cut',
    emoji: '🏷️',
    framing: (s) => `A die-cut sticker design of ${s}`,
    finishing:
      'thick white contour border, strictly isolated subject with clean edges for sticker production',
    aspect: { width: 1024, height: 1024 },
  },
  agenda: {
    id: 'agenda',
    label: 'Tapa de agenda',
    emoji: '📔',
    framing: (s) => `A front-cover illustration for a planner/agenda featuring ${s}`,
    finishing:
      'centered composition with generous margins, room for a title at the top, balanced for a vertical A5 cover',
    aspect: { width: 768, height: 1024 },
  },
  notebook: {
    id: 'notebook',
    label: 'Tapa de cuaderno',
    emoji: '📒',
    framing: (s) => `A notebook cover illustration featuring ${s}`,
    finishing: 'centered hero composition, calm negative space, vertical format',
    aspect: { width: 768, height: 1024 },
  },
  pattern: {
    id: 'pattern',
    label: 'Patrón / papelería',
    emoji: '🎀',
    framing: (s) => `A seamless repeating pattern of ${s}`,
    finishing:
      'evenly scattered motifs, consistent spacing, tileable edges, soft palette',
    aspect: { width: 1024, height: 1024 },
  },
}

// Subject quick-starts to help the user when they have a reference but no words yet.
export const SUBJECT_PRESETS = [
  'a smiling mature woman with shoulder-length straight brown hair, wearing a simple red sweater',
  'a young girl with voluminous messy black hair and a red hair bow, sitting and crocheting a small amigurumi bear',
  'a calm tabby cat curled up asleep',
  'a cheerful young man with round glasses holding a steaming cup of coffee',
  'a small potted monstera plant with two cute leaves',
]
