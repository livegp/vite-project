import react from '@vitejs/plugin-react-swc';
import TurboConsole from 'unplugin-turbo-console/vite';
import { defineConfig, loadEnv } from 'vite';
import biomePlugin from 'vite-plugin-biome';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import ogPlugin from 'vite-plugin-open-graph';
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
      ogPlugin({
        basic: {
          url: 'https://livegp.github.io/vite-project/',
          title: 'vite-project',
          type: 'image.webp',
          image: {
            url: 'https://livegp.github.io/vite-project/vite.png',
            // secureUrl:
            //   'https://livegp.github.io/vite-project/avatar-secure.png',
            type: 'image/webp',
            width: 800,
            height: 600,
            alt: 'Avatar Image',
          },
          determiner: 'auto',
          description: 'livegp, Front-end Developer.',
          locale: 'en_US',
          // localeAlternate: ['fr_FR', 'es_ES'],
          siteName: 'vite-project',
          // video: {
          //   url: 'https://livegp.github.io/vite-project/video.mp4',
          //   secureUrl: 'https://livegp.github.io/vite-project/video-secure.mp4',
          //   type: 'video/mp4',
          //   width: 1280,
          //   height: 720,
          // },
        },
        twitter: {
          card: 'summary_large_image',
          site: '@lmmmmmm',
          siteId: '123456789',
          creator: '@lmmmmmm',
          creatorId: '987654321',
          description: 'Twitter description for _lmmmmmm.',
          title: 'Twitter Title for _lmmmmmm',
          image: 'https://lmmmmmm.me/twitter-image.png',
          imageAlt: 'Twitter Image Alt Text',
          player: 'https://lmmmmmm.me/player',
          playerWidth: 1200,
          playerHeight: 600,
          playerStream: 'https://lmmmmmm.me/player-stream',
          // app: {
          //   name: {
          //     iphone: 'vite-project',
          //     ipad: 'vite-project',
          //     googleplay: 'vite-project',
          //   },
          //   id: {
          //     iphone: 'iphone-app-id',
          //     ipad: 'ipad-app-id',
          //     googleplay: 'googleplay-app-id',
          //   },
          //   url: {
          //     iphone: 'https://lmmmmmm.me/iphone-app',
          //     ipad: 'https://lmmmmmm.me/ipad-app',
          //     googleplay: 'https://lmmmmmm.me/googleplay-app',
          //   },
          // },
        },
        facebook: {
          appId: 'oleksandr.pishta',
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
      biomePlugin({
        mode: 'check',
        files: '.',
        applyFixes: true,
        failOnError: false,
      }),
    ],
  };
});
