# Sizing

Control the width of elements with responsive sizing utility classes.

## Width

You can change the width of an element using the `.w-{value}` classes.

- `.w-100`: Sets `width: 100%`
- `.w-auto`: Sets `width: auto`

### Example

<div style="background-color: #f8f9fa; padding: 1rem;">
  <div class="w-100" style="background-color: #e9ecef; padding: 1rem; text-align: center;">.w-100</div>
</div>

```html
<div class="w-100">
  <!-- This element will take up 100% of its parent's width -->
</div>
```

## Responsive

You can use responsive sizing classes to change the width of an element at different breakpoints. The format is `.w-{breakpoint}-{value}`, where `{breakpoint}` is one of `sm`, `md`, `lg`, or `xl`.

- `.w-sm-100`
- `.w-md-auto`
- `.w-lg-100`
- `.w-xl-auto`

### Example

In this example, the first box takes up 100% width on mobile, and its natural width on medium screens and up.

<div class="d-flex" style="background-color: #f8f9fa; padding: 1rem;">
  <div class="w-100 w-md-auto" style="background-color: #e9ecef; padding: 1rem; text-align: center;">.w-100 .w-md-auto</div>
  <div class="flex-grow-1" style="background-color: #d4d4d4; padding: 1rem; text-align: center; margin-left: 1rem;">Flex item</div>
</div>

```html
<div class="d-flex">
  <div class="w-100 w-md-auto">
    <!-- This element will be 100% width on mobile, and auto width on medium screens and up -->
  </div>
  <div class="flex-grow-1">
    <!-- This flex item will grow to fill the remaining space -->
  </div>
</div>
```
