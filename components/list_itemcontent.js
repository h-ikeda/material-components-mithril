import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "span", {
        mdcListItemText: "mdc-list-item__text",
        mdcListItemTextPrimary: "mdc-list-item__text__primary",
        mdcListItemTextSecondary: "mdc-list-item__text__secondary",
        mdcListItemStartDetail: "mdc-list-item__start-detail",
        mdcListItemEndDetail: "mdc-list-item__end-detail"
    }, cls =>
        vnode.attrs[cls]
    )
};