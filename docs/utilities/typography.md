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
  