# Flexbox

Flexbox utilities provide a powerful way to align and distribute content.

## Flex Direction

Use `.flex-{direction}` to change the direction of flex items.

- `.flex-row`
- `.flex-row-reverse`
- `.flex-column`
- `.flex-column-reverse`

### Example

<div class="d-flex flex-column" style="background-color: #f8f9fa; padding: 1rem;">
  <div style="background-color: #e9ecef; padding: 1rem; margin-bottom: 1rem;">Flex item 1</div>
  <div style="background-color: #e9ecef; padding: 1rem;">Flex item 2</div>
</div>

```html
<div class="d-flex flex-column">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
</div>
```

## Justify Content

Use `.justify-content-{alignment}` to change the alignment of flex items along the main axis.

- `.justify-content-start`
- `.justify-content-end`
- `.justify-content-center`
- `.justify-content-between`
- `.justify-content-around`
- `.justify-content-evenly`

### Example

<div class="d-flex justify-content-between" style="background-color: #f8f9fa; padding: 1rem;">
  <div style="background-color: #e9ecef; padding: 1rem;">Flex item 1</div>
  <div style="background-color: #e9ecef; padding: 1rem;">Flex item 2</div>
</div>

```html
<div class="d-flex justify-content-between">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
</div>
```

## Align Items

Use `.align-items-{alignment}` to change the alignment of flex items along the cross axis.

- `.align-items-start`
- `.align-items-end`
- `.align-items-center`
- `.align-items-baseline`
- `.align-items-stretch`

### Example

<div class="d-flex align-items-center" style="background-color: #f8f9fa; padding: 1rem; height: 150px;">
  <div style="background-color: #e9ecef; padding: 1rem; margin-right: 1rem;">Flex item 1</div>
  <div style="background-color: #e9ecef; padding: 1rem;">Flex item 2</div>
</div>

```html
<div class="d-flex align-items-center" style="height: 150px;">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
</div>
```

## Grow and Shrink

Use `.flex-grow-1` and `.flex-shrink-1` to allow a flex item to grow or shrink.

### Example

<div class="d-flex" style="background-color: #f8f9fa; padding: 1rem;">
  <div style="background-color: #e9ecef; padding: 1rem;">Flex item 1</div>
  <div class="flex-grow-1" style="background-color: #e9ecef; padding: 1rem; margin-left: 1rem; text-align: center;">.flex-grow-1</div>
</div>

```html
<div class="d-flex">
  <div>Flex item 1</div>
  <div class="flex-grow-1">
    <!-- This item will grow to fill the available space -->
  </div>
</div>
```

## Responsive

All flexbox utilities are also available in responsive variants. The format is `.{property}-{breakpoint}-{value}`, where `{breakpoint}` is one of `sm`, `md`, `lg`, or `xl`.

### Example

In this example, we have a product card with an image and some text. On mobile, the image and text are stacked vertically. On medium screens and up, they are displayed side-by-side.

<div class="d-flex flex-column flex-md-row" style="background-color: #f8f9fa; padding: 1rem;">
  <div style="margin-right: 1rem; margin-bottom: 1rem; display: flex; justify-content: center;">
    <img src="https://placehold.co/150x150" alt="placeholder">
  </div>
  <div>
    <h4>Product Title</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
  </div>
</div>

```html
<div class="d-flex flex-column flex-md-row">
  <div>
    <img src="..." alt="...">
  </div>
  <div>
    <h4>Product Title</h4>
    <p>...</p>
  </div>
</div>
```