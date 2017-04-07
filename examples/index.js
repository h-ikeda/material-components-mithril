import m from "mithril";
import buttons from "./example-buttons";

var field = {
    view(vnode) {
        return m("fieldset", [
            m("legend", vnode.attrs.group),
            vnode.children
        ]);
    }
};

var exComp = {
    view() {
        return [
            m("h1", "material-components-mithril: Examples"),
            m(field, {group: "Button"}, m(buttons))
        ];
    }
};

m.mount(document.body, exComp);