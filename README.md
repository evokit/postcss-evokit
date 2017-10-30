[postcss]: https://github.com/postcss/postcss
[postcss-conditionals]: https://github.com/andyjansson/postcss-conditionals
[postcss-each]: https://github.com/outpunk/postcss-each
[postcss-math]: https://github.com/shauns/postcss-math
[postcss-mixins]: https://github.com/postcss/postcss-mixins
[postcss-nested]: https://github.com/postcss/postcss-nested
[postcss-variables]: https://github.com/nathanhood/postcss-variables

# Postcss-evokit

Набор плагинов для [postcss] расширяющие возможности css:

- [postcss-conditionals]
- [postcss-each]
- [postcss-math]
- [postcss-mixins]
- [postcss-nested]
- [postcss-variables]

---

# Пример

### Before
```scss
$block-theme-enable: true;
$block-theme-default: black;
$block-theme-list: red, green, blue;
$block-element-padding: 2px;


.block {
  background-color: $block-theme-default;

  &__element {
    padding: resolve($block-element-padding * 3);
  }
}

@if $block-theme-enable {
  @each $value in ($block-theme-list) {
    .block_theme_$(value) {
      background-color: $value;
    }
  }
}
```

### After
```scss
.block {
    background-color: black;
}

.block__element {
    padding: 6px;
}

.block_theme_red {
    background-color: red;
}

.block_theme_green {
    background-color: green;
}

.block_theme_blue {
    background-color: blue;
}

```
