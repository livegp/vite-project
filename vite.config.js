import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import ImagePresetsPlugin, { widthPreset } from 'vite-plugin-image-presets';
import ViteMinifyPlugin from 'vite-plugin-minify';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactClickToComponent(),
    ViteMinifyPlugin({}),
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
  ],
  base: '/vite-project/',
});
