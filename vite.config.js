import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biome';
import ImagePresetsPlugin, { widthPreset } from 'vite-plugin-image-presets';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactClickToComponent(),
    VitePluginSvgSpritemap('./src/icons/*.svg'),
    ImagePresetsPlugin({
      thumbnail: widthPreset({
        class: 'img thumb',
        loading: 'lazy',
        widths: [48, 96],
        formats: {
          webp: { quality: 50 },
          jpg: { quality: 70 },
        },
      }),
    }),
    biomePlugin({
      mode: 'check',
      files: '.',
      applyFixes: true,
    }),
  ],
  base: '/vite-project/',
});
