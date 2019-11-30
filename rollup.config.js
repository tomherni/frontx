import { createDefaultConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy';

const config = createDefaultConfig({ input: './index.html' });

export default {
  ...config,
  plugins: [
    ...config.plugins,
    copy({
      targets: [{ src: 'assets', dest: 'dist' }],
    }),
  ],
};
