# Introduction

Welcome to the documentation for Minimal CSS Utility. This is designed to provide a solid foundation for building modern, responsive websites with minimal effort. It includes a CSS reset, a responsive grid system, and a variety of utility classes to help you style your content quickly and efficiently.

## Motivation

I wanted a minimal CSS utility that provides just basic features to get started quickly without the bloat of larger frameworks.

For my projects, I use reset.css and a set of utility classes without external libraries, I move them from project to project. This eliminates it and makes it easier to maintain and view the docs.

## Installation

::: code-group
```bash [npm]
npm install minimal-css-utility
```
```bash [yarn]
yarn add minimal-css-utility
```
```bash [pnpm]
pnpm add minimal-css-utility
```
:::

To use this utility in your project, you can either link to the compiled CSS file from the `dist` directory or import the SCSS files into your own stylesheet.

### Linking with CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/minimal-css-utility/dist/min.css">
```

### Importing in your CSS or SCSS 

```css
@import 'minimal-css-utility/dist/min.css';
```

```scss
@import 'minimal-css-utility/scss/style.scss';
```

## Usage

This provides a set of utility classes and a responsive grid system to help you build your website quickly and easily. Refer to the documentation for each feature to learn more about how to use them.
