# Display

Control the `display` property of elements with responsive display utility classes.

## Basic Usage

You can change the display of an element using the `.d-{value}` classes.

- `.d-none`
- `.d-block`
- `.d-flex`
- `.d-inline-flex`
- `.d-grid`
- `.d-inline-block`

### Example

<div class="d-flex" style="background-color: #f8f9fa; padding: 1rem;">
  <div style="background-color: #e9ecef; padding: 1rem; margin-right: 1rem;">Flex item 1</div>
  <div style="background-color: #e9ecef; padding: 1rem;">Flex item 2</div>
</div>

```html
<div class="d-flex">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
</div>
```

## Responsive Usage

You can use responsive display classes to change the display of an element at different breakpoints. The format is `.d-{breakpoint}-{value}`, where `{breakpoint}` is one of `sm`, `md`, `lg`, or `xl`.

- `.d-sm-none`
- `.d-md-block`
- `.d-lg-flex`
- `.d-xl-grid`

### Example

In this example, the first box is hidden on medium screens and up.

<div class="row">
  <div class="col-12 col-md-6 d-md-none"><div style="background-color: #f2f2f2; padding: 1rem; text-align: center;">Visible on mobile only</div></div>
  <div class="col-12 col-md-6"><div style="background-color: #e3e3e3; padding: 1rem; text-align: center;">Always visible</div></div>
</div>

```html
<div class="row">
  <div class="col-12 col-md-6 d-md-none">
    <!-- This column will be hidden on medium screens and up -->
  </div>
  <div class="col-12 col-md-6">
    <!-- This column will always be visible -->
  </div>
</div>
```
