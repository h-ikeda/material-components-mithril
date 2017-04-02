# material-components-mithril
Mithril(v1) components library with [material-components-web](https://github.com/material-components/material-components-web).  
## Usage
This library doesn't treat css at all, just define tags and add classes for MDC components.

So first, you have to implement css from "material-components-web".

In your HTML,
```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
```
or
```
import "material-components-web/dist/material-components-web.css";
```
to css in js with tools like webpack css-loader + style-loader.

See more information about using material-components-web at [the official document](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md).

---
Secondly, load material-components-mithril.

(npm)
```
npm install material-components-mithril
```
(CDN)
```
<script src="https://unpkg.com/material-components-mithril/"></script>
```

---
Then, you can use components as below:

(CommonJS)
```
var m = require("mithril");
var mcm = require("material-components-mithril");
var button = {
    view: function() {
        return m(mcm.button, "Submit");
    }
};
m.mount(document.body, button);
```

(ES6)
```
import m from "mithril";
import {button} from "material-components-mithril";
m.mount(document.body, {
    view: () => m(button, "Submit")
});
```

(Browser)
```
<script src="https://unpkg.com/mithril/mithril.js"></script>
<script>
    var button = {
        view: function() {
            return m(materialComponentsMithril.button, "Submit");
        }
    };
    m.mount(document.body, button);
</script>
```

Codes above will make same results embedding button component at the <body> element.

## Examples
See https://h-ikeda.github.io/material-components-mithril/
