import { createSpaConfig } from '@open-wc/building-rollup';
import merge from 'deepmerge';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-optipng';
import copy from 'rollup-plugin-copy';

const baseConfig = createSpaConfig({
  outputDir: 'dist',
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  input: './index.html',
  plugins: [
    copy({
      targets: [{ src: 'assets', dest: 'dist' }],
    }),
    {
      name: 'imagemin',
      buildEnd: async () => {
        await imagemin(['assets/images/logos/*.png'], {
          destination: 'dist/assets/images/logos',
          plugins: [imageminPngquant()],
        });
      },
    },
  ],
});
