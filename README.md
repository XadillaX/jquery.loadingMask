jQuery Loading Mask
==================

To quickly build a loading mask.

Usage
------------------

Include the `*.js` and `*.css` files.

```html
<script src="loadingMask/jquery.loadingMask.js"></script>
<link href="loadingMask/theme/default/jquery.loadingMask.css" rel="stylesheet" />
```

> ***Notice:*** You can even create a theme by yourself.

And then choose an element to create the mask.

```javascript
$("your-element").loadingMask();
$("your-element").loadingMask("show");
$("your-element").loadingMask("hide");
$("your-element").loadingMask("toggle");
```

However, you can get the `mask object` by equaling the `*.loadingMask()`:

```javascript
var mask = $("your-element").loadingMask();
mask.show();
mask.hide();
mask.toggle();
```

> ***By the way:*** If you want to get the `mask object`, make sure there's only one object matches your element.
>
> The code below will not make sense if you have several `.cls`:
>
> ```javascript
> var mask = $(".cls").loadingMask();
> ```

