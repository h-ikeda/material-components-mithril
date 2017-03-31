import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "section", {
        mdcToolbarSection: "mdc-toolbar__section",
        mdcToolbarSectionAlignStart: "mdc-toolbar__section--align-start",
        mdcToolbarSectionAlignEnd: "mdc-toolbar__section--align-end"
    }, cls =>
        (cls === "mdcToolbarSection") || vnode.attrs[cls]
    )
};