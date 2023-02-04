/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';

import { getViteBaseConfig, VitestConfigExport } from '../base/base.config';

export const baseWebViteConfig = (dirname: string) => {
  const { name } = JSON.parse(
    readFileSync(path.join(dirname, 'project.json'), 'utf8'),
  );
  const baseConfig = getViteBaseConfig(dirname);

  return defineConfig({
    plugins: [...(baseConfig.plugins ?? []), react()],

    build: {
      lib: {
        entry: 'src/index.ts',
        name,
        fileName: 'index',
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],
      },
    },

    test: {
      ...baseConfig.test,
      environment: 'jsdom',
      setupFiles: './jest.setup.ts',
    },
  } as VitestConfigExport);
};
