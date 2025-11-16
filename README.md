# Minimal CSS Utility

A SCSS utility library for building modern websites.


## Documentation
you can view it from, the full documentation for the utility classes can be found in the `docs/` directory of this repository.


## Motivation 

For my projects, I use reset.css and a set of utility classes without external libraries, I copy and paste them from project to project. This eliminates it and makes it easier to maintain and see the docs easily as well.

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
npm install minimal-css-utility

# or using yarn

yarn add minimal-css-utility

# or using pnpm
pnpm add minimal-css-utility
```

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
