// @ts-check

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // =====================================================
  // BASE: Next.js + TypeScript + Prettier
  // =====================================================
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier'
  ),

  // =====================================================
  // REGLAS GENERALES (JS / TS)
  // =====================================================
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Código moderno y consistente
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',

      // Formato alineado con Prettier
      quotes: ['error', 'single'],
      semi: ['error', 'always'],

      // Logs solo para advertencias reales
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // =====================================================
  // TYPESCRIPT ESTRICTO (solo TS/TSX)
  // =====================================================
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Evita basura en el código
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Imports de tipos optimizados
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
    },
  },

  // =====================================================
  // REACT / JSX / TSX
  // =====================================================
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      // Evita {foo} innecesarios
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],

      /**
       * ERROR ORIGINAL:
       * Props JSX desordenadas → warnings constantes
       *
       * SOLUCIÓN:
       * Se mantiene la regla con configuración tolerante
       */
      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          reservedFirst: true,
          callbacksLast: true,
          shorthandFirst: true,
          multiline: 'ignore',
        },
      ],

      // JSX más limpio
      'react/self-closing-comp': 'error',
    },
  },

  // =====================================================
  // NEXT.JS APP ROUTER – SERVER CODE
  // =====================================================
  {
    files: [
      'src/app/api/**/*',
      'src/app/**/route.ts',
      'src/app/**/middleware.ts',
    ],
    rules: {
      // En server code está permitido
      'no-process-env': 'off',

      // Handlers deben ser async
      'require-await': 'error',

      // Ignora req/res no usados
      'no-unused-vars': ['error', { argsIgnorePattern: '^(req|res|_)' }],
    },
  },

  // =====================================================
  // CONFIG / TOOLING FILES
  // =====================================================
  {
    files: ['**/*.config.{js,ts}', 'next.config.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // =====================================================
  // TESTS (Vitest)
  // =====================================================
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    rules: {
      'no-console': 'off',
    },
  },

  // =====================================================
  // IGNORADOS
  // =====================================================
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/build/**',
      '**/out/**',
      '**/coverage/**',
      '**/*.d.ts',
      '**/public/**',
    ],
  },
];

export default eslintConfig;
