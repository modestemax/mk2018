import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/global.css',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/variables.scss'
      ]
    })
  ]
};
