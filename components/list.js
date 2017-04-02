import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "ul", {
        mdcList: "mdc-list",
        mdcListDense: "mdc-list--dense",
        mdcListAvatarList: "mdc-list--avatar-list",
        mdcListTwoLine: "mdc-list--two-line",
        mdcListThemeDark: "mdc-list--theme-dark"
    }, cls =>
        (cls === "mdcList") || vnode.attrs[cls]
    )
};