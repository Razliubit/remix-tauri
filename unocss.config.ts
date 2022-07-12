import {
  defineConfig,
  presetWind,
  presetIcons,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind({
      dark: 'class'
    }),
    presetIcons(),
    presetAttributify()
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})