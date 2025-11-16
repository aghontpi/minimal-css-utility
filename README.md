# Minimal CSS Utility

<p align="center">
  <a href="https://github.com/aghontpi/minimal-css-utility/releases"><img src="https://img.shields.io/github/v/release/aghontpi/minimal-css-utility?include_prereleases&style=flat-square&label=github-release" alt="release"></a>
  <a href="https://www.npmjs.com/package/minimal-css-utility"><img src="https://img.shields.io/npm/v/minimal-css-utility?style=flat-square" alt="npm"></a>
  <a href="https://github.com/aghontpi/minimal-css-utility/blob/main/LICENSE"><img src="https://img.shields.io/github/license/aghontpi/minimal-css-utility?style=flat-square" alt="license"></a>
</p>

A lightweight CSS utility library to ease development.


## Documentation
You can view the documentation at [minimal-css-utility](https://bluepie.in/minimal-css-utility/). The full documentation for the utility classes can also be found in the `docs/` directory of this repository.


## Motivation 

I wanted a minimal CSS utility that provides just basic features to get started quickly without the bloat of larger frameworks.


For my projects, I use reset.css and a set of utility classes without external libraries, I move them from project to project. This eliminates it and makes it easier to maintain and view the docs.

## Features

- Reset CSS
- Grid Layout
- Utility classes for:
  - Display
  - Flexbox
  - Sizing
  - Spacing
  - Typography

## Installation

Install the package from npm:

```bash
# using npm

npm install minimal-css-utility

# or using yarn

yarn add minimal-css-utility

# or using pnpm
pnpm add minimal-css-utility
```

## CDN

You can also use the compiled CSS file from a CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/minimal-css-utility/dist/min.css">
```

Link: https://cdn.jsdelivr.net/npm/minimal-css-utility/dist/min.css

## Usage

You can either import the compiled CSS file into your project or import the SCSS files.

### CSS

Import the `min.css` file in your main CSS file:

```css
@import "minimal-css-utility/dist/min.css";
```

### SCSS

Import the `style.scss` file in your main SCSS file:

```scss
@import "minimal-css-utility/scss/style.scss";
```

## Building from source

If you want to build the CSS from the source SCSS files, you can do so by following these steps:

1.  Clone the repository:

    ```bash
    git clone https://github.com/aghontpi/minimal-css-skeleton.git
    ```

2.  Install the dependencies:

    ```bash
    pnpm install
    ```

3.  Build the project:

    ```bash
    pnpm build
    ```

This will generate the `dist/min.css` file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

