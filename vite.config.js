import react from '@vitejs/plugin-react-swc';
import TurboConsole from 'unplugin-turbo-console/vite';
import { defineConfig, loadEnv } from 'vite';
import biomePlugin from 'vite-plugin-biome';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'process.env': env,
    },
    base: env.VITE_BASE_URL || '/',
    server: {
      port: mode === 'development' ? 3000 : 8080,
    },
    build: {
      outDir: mode === 'production' ? 'dist' : 'build',
      sourcemap: true,
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        plugins: [['@swc/plugin-emotion', {}]],
      }),
      ViteMinifyPlugin({}),
      TurboConsole({}),
      reactClickToComponent(),
      vitePluginFaviconsInject('./src/assets/favicons/logo.svg', {
        path: '/',
        appName: 'vite-project',
        appShortName: 'vite-project',
        appDescription: 'the starting template of the project',
        developerName: 'Pishta Oleksandr',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        developerURL: 'https://livegp.github.io',
        cacheBustingQueryParam: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        theme_color: '#fff',
        appleStatusBarStyle: 'black-translucent',
        display: 'standalone',
        orientation: 'any',
        scope: '/',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        start_url: '/?homescreen=1',
        preferRelatedApplications: false,
        relatedApplications: undefined,
        version: '1.0',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        pixel_art: false,
        loadManifestWithCredentials: false,
        manifestMaskable: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          windows: true,
          yandex: false,
        },
        failGraciously: false,
      }),
      // ImagePresetsPlugin({
      //   thumbnail: widthPreset({
      //     class: 'img thumb',
      //     loading: 'lazy',
      //     widths: [48, 96],
      //     formats: {
      //       webp: { quality: 50 },
      //       jpg: { quality: 70 },
      //     },
      //   }),
      // }),
      biomePlugin({
        mode: 'check',
        files: '.',
        applyFixes: true,
        failOnError: false,
      }),
    ],
  };
});
