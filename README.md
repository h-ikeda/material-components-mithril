# material-components-mithril
Mithril(v1) components library with [material-components-web](https://github.com/material-components/material-components-web).
## Example
```
var m = require("mithril");
var mdc = require("material-components-mithril");

var button = {
    view: function() {
        return m(mdc.button, "Submit");
    }
};

m.mount(document.body, button);

// -> Material button with the text "Submit".
```