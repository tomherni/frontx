import { createSpaConfig } from '@open-wc/building-rollup';
import merge from 'deepmerge';
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
      // TODO: use imagemin
      targets: [{ src: 'assets', dest: 'dist' }],
    }),
  ],
});
