# Borders

Use border utilities to add or remove borders from an element.

## Additive Borders

Add borders to an element using the following classes.

- `.border` - Adds a border to all sides.
- `.border-top` - Adds a border to the top.
- `.border-end` - Adds a border to the right.
- `.border-bottom` - Adds a border to the bottom.
- `.border-start` - Adds a border to the left.

### Example

<div class="d-flex" style="gap: 1rem;">
  <div class="border" style="padding: 1rem; background-color: #f8f9fa;">.border</div>
  <div class="border-top" style="padding: 1rem; background-color: #f8f9fa;">.border-top</div>
  <div class="border-bottom" style="padding: 1rem; background-color: #f8f9fa;">.border-bottom</div>
</div>

```html
<div class="border">...</div>
<div class="border-top">...</div>
<div class="border-bottom">...</div>
```

## Subtractive Borders

Remove borders from an element using the following classes.

- `.border-0` - Removes the border from all sides.
- `.border-top-0` - Removes the border from the top.
- `.border-end-0` - Removes the border from the right.
- `.border-bottom-0` - Removes the border from the bottom.
- `.border-start-0` - Removes the border from the left.

# Border Radius

Add rounded corners to an element with the `.rounded` utilities.

- `.rounded` - Adds a default border radius.
- `.rounded-sm` - Adds a small border radius.
- `.rounded-lg` - Adds a large border radius.
- `.rounded-pill` - Creates a pill shape.
- `.rounded-circle` - Creates a circle.
- `.rounded-top`
- `.rounded-end`
- `.rounded-bottom`
- `.rounded-start`

### Example

<div class="d-flex" style="gap: 1rem; align-items: center;">
  <div class="border rounded" style="padding: 1rem;">.rounded</div>
  <div class="border rounded-pill" style="padding: 0.5rem 1.5rem;">.rounded-pill</div>
  <div class="border rounded-circle" style="width: 50px; height: 50px;"></div>
</div>

```html
<div class="rounded">...</div>
<div class="rounded-pill">...</div>
<div class="rounded-circle">...</div>
```
