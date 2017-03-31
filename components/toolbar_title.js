import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "span", {
        mdcToolbarTitle: "mdc-toolbar__title"
    })
};