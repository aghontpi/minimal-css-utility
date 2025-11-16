# Spacing

Spacing utilities provide a powerful way to control the margin and padding of elements.

## How it Works

The spacing utilities are based on a `$spacers` map, which defines a set of spacing values.

- `0`: 0
- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `3`: 1rem (16px)
- `4`: 1.5rem (24px)
- `5`: 3rem (48px)
- `auto`: auto

## Margin

You can set the margin of an element using the `.m-{value}` classes. You can also set the margin for a specific side using `.mt-`, `.mb-`, `.ml-`, `.mr-`, `.mx-` (horizontal), and `.my-` (vertical).

### Example

<div style="background-color: #f8f9fa; padding: 1rem;">
  <div class="m-3" style="background-color: #e9ecef; padding: 1rem; text-align: center;">.m-3</div>
</div>

```html
<div class="m-3">
  <!-- This element will have a 1rem margin on all sides -->
</div>
```

## Padding

You can set the padding of an element using the `.p-{value}` classes. You can also set the padding for a specific side using `.pt-`, `.pb-`, `.pl-`, `.pr-`, `.px-` (horizontal), and `.py-` (vertical).

### Example

<div class="p-3" style="background-color: #f8f9fa;">
  <div style="background-color: #e9ecef; padding: 1rem; text-align: center;">.p-3</div>
</div>

```html
<div class="p-3">
  <!-- This element will have a 1rem padding on all sides -->
</div>
```

## Responsive

All spacing utilities are also available in responsive variants. The format is `.{property}-{breakpoint}-{value}`, where `{breakpoint}` is one of `sm`, `md`, `lg`, or `xl`.

### Example

In this example, the margin is `1rem` on mobile and `3rem` on medium screens and up.

<div style="background-color: #f8f9fa; padding: 1rem;">
  <div class="m-3 m-md-5" style="background-color: #e9ecef; padding: 1rem; text-align: center;">.m-3 .m-md-5</div>
</div>

```html
<div class="m-3 m-md-5">
  <!-- This element will have a 1rem margin on mobile, and a 3rem margin on medium screens and up -->
</div>
```