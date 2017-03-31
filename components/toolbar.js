import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "header", {
        mdcToolbar: "mdc-toolbar",
        mdcToolbarFixed: "mdc-toolbar--fixed"
    }, cls =>
        (cls === "mdcToolbar") || vnode.attrs[cls]
    )
};