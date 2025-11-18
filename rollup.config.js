import postcss from 'rollup-plugin-postcss';

export default {
  input: 'scss/style.scss',
  output: {
    file: 'dist/min.css',
    format: 'es',
  },
  plugins: [
    postcss({
      extract: true,
      use: ['sass'],
      sourceMap: false,
      minimize: true,
    }),
  ],
};
