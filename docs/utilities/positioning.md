# Positioning

Use positioning utilities to control the placement of elements.

## Position

Set the `position` property of an element.

- `.position-static`
- `.position-relative`
- `.position-absolute`
- `.position-fixed`
- `.position-sticky`

### Example

A common use case is placing an element inside a `.position-relative` container.

<div class="position-relative" style="height: 100px; background-color: #f8f9fa; border: 1px solid #e9ecef;">
  <div class="position-absolute bottom-0 end-0" style="padding: 0.5rem; background-color: #e9ecef;">
    Absolute
  </div>
</div>

```html
<div class="position-relative">
  <div class="position-absolute bottom-0 end-0">...</div>
</div>
```

## Arrange and Center

Use placement and translate utilities to arrange and center elements.

- `.top-0`, `.top-50`, `.top-100`
- `.start-0`, `.start-50`, `.start-100` (for `left`)
- `.bottom-0`, `.bottom-50`, `.bottom-100`
- `.end-0`, `.end-50`, `.end-100` (for `right`)

- `.translate-middle` (centers both horizontally and vertically)
- `.translate-middle-x` (centers horizontally)
- `.translate-middle-y` (centers vertically)

### Centering Example

Center an element within its relative container. To demonstrate the alignment, the example below has a red crosshair marking the exact center of the parent container.

<style>
  .debug-parent {
    position: relative;
  }
  .debug-parent::before, .debug-parent::after {
    content: '';
    position: absolute;
    background: #dc3545;
    z-index: 1;
  }
  .debug-parent::before {
    width: 1px;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .debug-parent::after {
    height: 1px;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .debug-child {
    position: absolute;
    z-index: 2;
  }
</style>

<div class="debug-parent" style="height: 150px; background-color: #f8f9fa; border: 1px solid #e9ecef;">
  <div class="debug-child top-50 start-50 translate-middle" style="padding: 1rem; background-color: #e9ecef;">
    Centered
  </div>
</div>

```html
<div class="position-relative">
  <div class="position-absolute top-50 start-50 translate-middle">
    Centered Content
  </div>
</div>
```
