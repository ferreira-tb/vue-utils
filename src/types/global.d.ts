/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-inner-declarations */

import type { App } from 'vue';
import type { Option } from '@tb-dev/utils';
import type { ErrorHandler } from 'src/utils/error';

declare global {
  var __VUEUTILS__: {
    app?: Option<App>;
    errorHandler?: Option<ErrorHandler>;
  };
}
