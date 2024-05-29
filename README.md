# Line Widget Addition

This repo contains the markup and styling for adding a floating line widget in TH MKT ACQ landing pages.

### Adding the widget markup

1. Make sure the `line-widget.svg` file is imported in the directory and take note of its path
2. Append the markup enclosed with the `aside` tag in the `index.html` file of the directory after the `footer` tag.
   - If the page is written with php, an `aside.php` file can be created in the templates subfolder and appended as a module in the `index.php` file

### Styling

1. First locate the `.social__media__icon--line` rule. Most of the directories already have these rules, along with `.social__media__icon`. This is where the svg's path must be declared as the value of the `background-image` property.

```
.social__media__icon--line {
     background-image: url(./line-widget.svg);
}
```

The path must be passed to the url() function. This may vary where you put the svg file.

2. Append the styles in the css file of this repo, with the following classes:
   - `aside`
   - `@keyframes anim-glow`
   - `.sticky-icon`
   - `.glow`
