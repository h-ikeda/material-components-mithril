import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "li", {
        mdcListDivider: "mdc-list-divider",
        mdcListDividerInset: "mdc-list-divider--inset"
    }, cls =>
        (cls === "mdcListDivider") || vnode.attrs[cls]
    )
};