# Grid System

This grid system provides a powerful and flexible way to create responsive layouts. It's a 12-column system built with flexbox.

## How It Works

The grid is composed of three fundamental building blocks: containers, rows, and columns.



- **`.row`**: Rows are horizontal groups of columns. They use `display: flex` and a negative margin trick to ensure the columns inside align correctly without unwanted extra space on the sides. **Direct children of a `.row` must only be columns (`.col-*` classes).**

- **`.col-*`**: These are the columns where your content lives. Columns create the vertical divisions in your layout. You can specify how many of the 12 available columns a single `col` should span. For example, `.col-6` spans 6 out of 12 columns, meaning it takes up 50% of the width.

## Breakpoints

The grid is designed to be responsive, meaning styles you apply are for the current breakpoint and *up*. The following breakpoints are used:

-   **`xs`** (extra-small): 0px (default, no media query needed)
-   **`sm`** (small): 576px
-   **`md`** (medium): 768px
-   **`lg`** (large): 992px
-   **`xl`** (extra-large): 1200px

You can use these breakpoints as suffixes to column classes (e.g., `.col-md-6`) to define different layouts at different screen sizes.

## Basic Example: Two-Column Layout

Here is a simple two-column layout. Each column spans 6 of the 12 available columns.

<div class="row">
  <div class="col-6"><div style="background-color: #f2f2f2; padding: 1rem; text-align: center;">.col-6</div></div>
  <div class="col-6"><div style="background-color: #e3e3e3; padding: 1rem; text-align: center;">.col-6</div></div>
</div>

```html
  <div class="row">
    <div class="col-6">
      <!-- Your content here -->
    </div>
    <div class="col-6">
      <!-- Your content here -->
    </div>
  </div>
```

## Responsive Layouts

The grid is responsive. The classes you use define the layout for that screen size *and up*. For example, if you want a single column on mobile and a three-column layout on medium screens (`md`) and up, you would do the following:

- **`.col-12`**: On extra-small screens (the default), each column takes up the full width.
- **`.col-md-4`**: On medium screens (≥768px) and larger, each column takes up 4 of the 12 columns (12 / 4 = 3 columns per row).

<div class="row">
  <div class="col-12 col-md-4"><div style="background-color: #f2f2f2; padding: 1rem; text-align: center;">.col-12 .col-md-4</div></div>
  <div class="col-12 col-md-4"><div style="background-color: #e3e3e3; padding: 1rem; text-align: center;">.col-12 .col-md-4</div></div>
  <div class="col-12 col-md-4"><div style="background-color: #f2f2f2; padding: 1rem; text-align: center;">.col-12 .col-md-4</div></div>
</div>

```html
  <div class="row">
    <div class="col-12 col-md-4">
      <!-- Spans 100% on mobile, 33.3% on medium screens and up -->
    </div>
    <div class="col-12 col-md-4">
      <!-- Spans 100% on mobile, 33.3% on medium screens and up -->
    </div>
    <div class="col-12 col-md-4">
      <!-- Spans 100% on mobile, 33.3% on medium screens and up -->
    </div>
  </div>
```

## More Examples

### Mixed Column Sizes

You can mix and match column sizes in a single row.

<div class="row">
  <div class="col-4"><div style="background-color: #f2f2f2; padding: 1rem; text-align: center;">.col-4</div></div>
  <div class="col-8"><div style="background-color: #e3e3e3; padding: 1rem; text-align: center;">.col-8</div></div>
</div>

```html
  <div class="row">
    <div class="col-4">
      <!-- Spans 4 of 12 columns -->
    </div>
    <div class="col-8">
      <!-- Spans 8 of 12 columns -->
    </div>
  </div>
```

### Nesting

You can nest a `.row` inside a `.col-*` to create more complex layouts. The nested columns will be based on the width of their parent column.

<div class="row" style="background-color: #f8f9fa; padding: 1rem;">
  <div class="col-8" style="background-color: #e9ecef; padding: 1rem;">
    <p style="text-align: center; font-weight: bold;">Parent .col-8</p>
    <div class="row">
      <div class="col-6"><div style="background-color: #f2f2f2; padding: 1rem; text-align: center;">Nested .col-6</div></div>
      <div class="col-6"><div style="background-color: #e3e3e3; padding: 1rem; text-align: center;">Nested .col-6</div></div>
    </div>
  </div>
  <div class="col-4" style="background-color: #d4d4d4; padding: 1rem; text-align: center; display: flex; align-items: center; justify-content: center;">
    <p style="font-weight: bold;">Sibling .col-4</p>
  </div>
</div>

```html
  <div class="row">
    <div class="col-8">
      <!-- Parent column -->
      <div class="row">
        <div class="col-6">
          <!-- Nested column -->
        </div>
        <div class="col-6">
          <!-- Nested column -->
        </div>
      </div>
    </div>
    <div class="col-4">
      <!-- Sibling column -->
    </div>
  </div>
```

## How to Use

1.  **Add a `.row`**: This creates a horizontal group for your columns.
2.  **Add columns**: Place `.col-*` classes inside the `.row`.
3.  **Add content**: Place your content inside the `.col-*` elements.

## What Not to Do

Following these rules will help you avoid common layout issues.

### 1. Do Not Place Content Directly in a `.row`

A `.row` is only for holding columns. Placing text or other elements directly inside a row will cause them to ignore the column structure and break the layout.

```html
<!-- ❌ INCORRECT -->
<div class="row">
  This text is not in a column!
  <div class="col-6">...</div>
</div>

<!-- ✅ CORRECT -->
<div class="row">
  <div class="col-12">
    This text is properly placed in a column.
  </div>
  <div class="col-6">...</div>
</div>
```

### 2. Do Not Add Custom Padding or Margins to Columns

The `.col-*` classes have specific `padding` to create the "gutter" (the space between columns). Adding your own `margin` or `padding` directly to a column can break the grid alignment. If you need custom spacing, add a wrapper `<div>` inside the column.

```html
<!-- ❌ INCORRECT -->
<div class="row">
  <div class="col-6" style="margin-left: 20px;">
    This will misalign the grid.
  </div>
  <div class="col-6">...</div>
</div>

<!-- ✅ CORRECT -->
<div class="row">
  <div class="col-6">
    <div style="margin-left: 20px;">
      The spacing is applied inside the column, preserving the grid.
    </div>
  </div>
  <div class="col-6">...</div>
</div>
```


