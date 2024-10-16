import react from '@vitejs/plugin-react-swc';
import TurboConsole from 'unplugin-turbo-console/vite';
import { defineConfig, loadEnv } from 'vite';
import { imagetools } from 'vite-imagetools';
import biomePlugin from 'vite-plugin-biome';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import ogPlugin from 'vite-plugin-open-graph';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';
import { webfontDownload } from 'vite-plugin-webfont-dl';

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
      biomePlugin({
        mode: 'check',
        files: '.',
        applyFixes: true,
        failOnError: false,
      }),
      webfontDownload(
        [
          // biome-ignore lint/nursery/noSecrets: <explanation>
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap',
        ],
        {
          injectAsStyleTag: true,
          minifyCss: true,
          embedFonts: false,
          async: true,
          cache: true,
          proxy: false,
        },
      ),
      imagetools({}),
      vitePluginFaviconsInject('./src/assets/favicons/logo.svg', {
        path: '/',
        appName: 'vite-project',
        appShortName: 'vite-project',
        appDescription: 'the starting template of the project',
        developerName: 'Oleksandr Pishta',
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
      ogPlugin({
        basic: {
          url: 'https://livegp.github.io/vite-project/',
          siteName: 'vite-project',
          title: 'vite-project',
          description: 'Oleksandr Pishta, Full Stack Developer',
          type: 'image.png',
          determiner: 'auto',
          locale: 'en_US',
          image: {
            url: 'https://livegp.github.io/vite-project/vite.png',
            type: 'image/png',
            width: 900,
            height: 440,
            alt: 'Vite Image',
          },
        },
        twitter: {
          card: 'summary_large_image',
          site: '@live_gp',
          siteId: '118488504',
          creator: '@live_gp',
          creatorId: '118488504',
          description: 'Oleksandr Pishta, Full Stack Developer',
          title: 'vite-project',
          image: 'https://livegp.github.io/vite-project/vite.png',
          imageAlt: 'Vite Image',
        },
        facebook: {
          appId: '100000506117116',
        },
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
    ],
  };
});
