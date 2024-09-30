import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import react from '@vitejs/plugin-react-swc';
import TurboConsole from 'unplugin-turbo-console/vite';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biome';
import ImagePresetsPlugin, { widthPreset } from 'vite-plugin-image-presets';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-project',
  esbuild: {
    minify: true,
    treeShaking: true,
    drop: ['console', 'debugger'],
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', {}]],
    }),
    TurboConsole({}),
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
      failOnError: false,
    }),
  ],
});
