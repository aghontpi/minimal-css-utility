# Overflow

Control how content overflows an element's box.

## Basic Usage

- `.overflow-auto` - Adds scrollbars only when content overflows.
- `.overflow-hidden` - Hides content that overflows.
- `.overflow-visible` - Lets content overflow (default).
- `.overflow-scroll` - Always shows scrollbars, even if not needed.

### Example

<div class="d-flex" style="gap: 1rem;">
  <div class="overflow-auto" style="width: 150px; height: 100px; border: 1px solid #e9ecef;">
    This is a bunch of text inside a container with .overflow-auto. If the text gets too long, a scrollbar will appear.
  </div>
  <div class="overflow-hidden" style="width: 150px; height: 100px; border: 1px solid #e9ecef;">
    This is a bunch of text inside a container with .overflow-hidden. Any text that overflows the container's box will be clipped and hidden from view.
  </div>
</div>

```html
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
```
