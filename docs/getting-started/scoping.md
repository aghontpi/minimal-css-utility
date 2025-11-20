# CSS Scoping

Minimal CSS Utility provides an option to scope all generated styles under a specific parent selector. This is particularly useful when you are using the library in an embedded context (e.g., a widget or a micro-frontend) and want to avoid style conflicts with the host application.

## Configuration

To enable scoping, you need to configure the `$css-scope` variable in the `abstracts/variables` module.

### Using Sass Modules

Since this library uses Sass modules, you should use the `@use ... with` syntax to configure the variable.

```scss
// main.scss

// 1. Configure the variables module with your desired scope selector
@use 'minimal-css-utility/scss/abstracts/variables' with (
  $css-scope: '.my-custom-scope'
);

// 2. Load the styles
@use 'minimal-css-utility/scss/style';
```

### Result

The above configuration will wrap all generated CSS rules (including reset, grid, and utilities) inside the `.my-custom-scope` selector.

```css
.my-custom-scope {
  /* Reset styles */
  margin: 0;
  padding: 0;
  /* ... */
}

.my-custom-scope .row {
  display: flex;
  /* ... */
}

.my-custom-scope .text-center {
  text-align: center !important;
}
```

## HTML Usage

In your HTML, simply wrap your application content with the configured class.

```html
<div class="my-custom-scope">
  <div class="container">
    <h1 class="text-center">Scoped Content</h1>
    <!-- ... -->
  </div>
</div>
```

## Framework Examples

### React

In a React application, you can import the configured SCSS file in your root component (e.g., `App.jsx`) and wrap your application with the scope class.

**1. Create a SCSS file (e.g., `App.scss`)**

```scss
// App.scss
@use 'minimal-css-utility/scss/abstracts/variables' with (
  $css-scope: '.my-react-app'
);
@use 'minimal-css-utility/scss/style';
```

**2. Import and use in `App.jsx`**

```jsx
// App.jsx
import './App.scss';

function App() {
  return (
    <div className="my-react-app">
      <div className="container">
        <h1>Hello React!</h1>
        {/* Your app components */}
      </div>
    </div>
  );
}

export default App;
```
