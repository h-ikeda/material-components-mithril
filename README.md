# material-components-mithril
Mithril(v1) components library with [material-components-web](https://github.com/material-components/material-components-web).
## Usage
```
import m from "mithril";
import mdc from "material-components-mithril";

var button = {
    view: () => m(mdc.button, "Submit");
};

m.mount(document.body, button);

// -> Material button with the text "Submit".
```
## Examples
See https://h-ikeda.github.io/material-components-mithril/