# Interactivity

Control user interaction cues like the cursor and element opacity.

## Cursor

Change the cursor to provide feedback to the user.

- `.cursor-pointer` - Shows a pointer (hand) cursor.
- `.cursor-not-allowed` - Shows a "not allowed" cursor.
- `.cursor-grab` - Shows a "grab" cursor.

### Example

<div class="d-flex" style="gap: 1rem; text-align: center;">
  <div class="cursor-pointer" style="padding: 1rem; background-color: #f8f9fa; border: 1px solid #e9ecef;">
    .cursor-pointer
  </div>
  <div class="cursor-not-allowed" style="padding: 1rem; background-color: #f8f9fa; border: 1px solid #e9ecef;">
    .cursor-not-allowed
  </div>
</div>

```html
<div class="cursor-pointer">...</div>
<div class="cursor-not-allowed">...</div>
```

## Opacity

Control the opacity of an element.

- `.opacity-100` - Opacity: 1
- `.opacity-75` - Opacity: 0.75
- `.opacity-50` - Opacity: 0.5
- `.opacity-25` - Opacity: 0.25
- `.opacity-0` - Opacity: 0

### Example

<div class="d-flex" style="gap: 1rem;">
  <div class="opacity-75" style="padding: 1rem; background-color: #6c757d; color: white;">
    .opacity-75
  </div>
  <div class="opacity-50" style="padding: 1rem; background-color: #6c757d; color: white;">
    .opacity-50
  </div>
</div>

```html
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
```
