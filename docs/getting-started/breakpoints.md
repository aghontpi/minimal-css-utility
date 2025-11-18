# Breakpoints

This theme uses a set of responsive breakpoints to ensure that your layouts and utilities adapt to different screen sizes. All of my utility systems (Grid, Display, Flexbox, Sizing, Spacing, and Typography) use these same breakpoints.

## How it Works

This theme's utility classes are applied from the specified breakpoint and up, meaning they affect that screen size and all larger ones. For example, a class with a `-md-` infix will apply to medium screens, large screens, and extra-large screens.

## Breakpoint Values

Here are the breakpoints I use throughout my system:

- **`xs`** (extra-small): 0px (default, no media query needed)
- **`sm`** (small): 576px
- **`md`** (medium): 768px
- **`lg`** (large): 992px
- **`xl`** (extra-large): 1200px
- **`xxl`** (extra-extra-large): 1440px

## Example Usage

You can use these breakpoints as suffixes to utility classes to create responsive designs.

<div class="d-block d-md-flex d-lg-none d-xxl-block" style="background-color: #f8f9fa; padding: 1rem; border: 1px solid #dee2e6;">
  <div style="background-color: #e9ecef; padding: 1rem; margin: 0.5rem;">Item 1</div>
  <div style="background-color: #e9ecef; padding: 1rem; margin: 0.5rem;">Item 2</div>
</div>

<p><strong>Resize your browser to see the changes:</strong></p>
<ul>
  <li><strong>On extra-small and small screens (<code>&lt;768px</code>):</strong> The container is a block element, and the items are stacked vertically.</li>
  <li><strong>On medium screens (<code>&ge;768px</code> and <code>&lt;992px</code>):</strong> The container becomes a flex container, and the items are displayed side-by-side.</li>
  <li><strong>On large and extra-large screens (<code>&ge;992px</code> and <code>&lt;1440px</code>):</strong> The entire container is hidden.</li>
  <li><strong>On extra-extra-large screens (<code>&ge;1440px</code>):</strong> The container will reappear as a block element.</li>
</ul>

```html
<div class="d-block d-md-flex d-lg-none">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```
