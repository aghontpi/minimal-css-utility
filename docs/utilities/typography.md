# Typography

Control the font size and weight of text with responsive typography utility classes.

## Font Size

You can change the font size of text using the `.text-{size}` classes.

- `.text-xs`: 0.75rem (12px)
- `.text-sm`: 0.875rem (14px)
- `.text-base`: 1rem (16px)
- `.text-lg`: 1.125rem (18px)
- `.text-xl`: 1.25rem (20px)
- `.text-2xl`: 1.5rem (24px)
- `.text-3xl`: 1.875rem (30px)
- `.text-4xl`: 2.25rem (36px)
- `.text-5xl`: 3rem (48px)
- `.text-6xl`: 4rem (64px)

### Example

<div style="background-color: #f8f9fa; padding: 1rem;">
  <p class="text-lg">This is large text.</p>
  <p class="text-sm">This is small text.</p>
</div>

```html
<p class="text-lg">This is large text.</p>
<p class="text-sm">This is small text.</p>
```

## Font Weight

You can change the font weight of text using the `.fw-{weight}` classes.

- `.fw-light`: 300
- `.fw-normal`: 400
- `.fw-medium`: 500
- `.fw-semibold`: 600
- `.fw-bold`: 700
- `.fw-black`: 900

### Example

<div style="background-color: #f8f9fa; padding: 1rem;">
  <p class="fw-bold">This is bold text.</p>
  <p class="fw-light">This is light text.</p>
  </div>
  
  ```html
  <p class="fw-bold">This is bold text.</p>
  <p class="fw-light">This is light text.</p>
  ```
  
  ## A Note on Responsiveness
  
  Unlike other utility systems, the typography classes (`.text-*` and `.fw-*`) are **not** responsive. They will apply at all screen sizes.

## Text Alignment

Control the horizontal alignment of text.

- `.text-start`
- `.text-end`
- `.text-left`
- `.text-right`
- `.text-center`
- `.text-justify`

### Example

<div class="text-center" style="background-color: #f8f9fa; padding: 1rem;">
  This text is centered.
</div>

```html
<div class="text-center">...</div>
```

## Text Wrapping

Control how text wraps within an element.

- `.text-wrap` - Allows text to wrap normally (default behavior).
- `.text-nowrap` - Prevents text from wrapping.

### Example

The example below compares default wrapping with `.text-nowrap`. Both boxes are 150px wide inside a container that forces them to wrap to a new line.

<style>
.wrapping-example-container { display: flex; flex-wrap: wrap; gap: 1rem; width: 250px; border: 1px dashed #999; padding: 0.5rem; }
.wrapping-example-box { width: 150px; background-color: #f8f9fa; padding: 1rem; border: 1px solid #e9ecef; }
</style>
<div class="wrapping-example-container">
<div class="wrapping-example-box text-wrap"><strong>Default Wrap</strong><br>This long line of text will wrap to fit inside the container.</div>
<div class="wrapping-example-box text-nowrap" style="overflow: hidden; text-overflow: ellipsis;"><strong>.text-nowrap</strong><br>This long line of text will not wrap and will instead be truncated.</div>
</div>

```html
<!-- In a container that is too narrow, flex-wrap will move the second item to a new line -->
<div class="d-flex" style="flex-wrap: wrap;">
  <div class="text-wrap" style="width: 150px;">...</div>
  <div class="text-nowrap" style="width: 150px;">...</div>
</div>
```
