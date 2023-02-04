/// <reference types="vitest" />
import path, { join } from 'path';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import type { UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';

export interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export const getViteBaseConfig = (dirname: string): VitestConfigExport => {
  const relativePath = path.relative(process.cwd(), dirname);

  return {
    plugins: [
      dts({
        tsConfigFilePath: join(dirname, 'tsconfig.lib.json'),
        skipDiagnostics: true,
      }),
      viteTsConfigPaths({
        root: '../../../',
      }),
    ],

    test: {
      globals: true,
      reporters: ['default', 'json', 'html'],
      cache: {
        dir: '../../../../node_modules/.vitest',
      },
      coverage: {
        reporter: ['text', 'json', 'html', 'lcov'],
        reportsDirectory: `../../../../coverage/${relativePath}`,
        '100': true,
      },
      environment: 'node',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  };
};
