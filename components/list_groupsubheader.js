import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "h3", {
        mdcListGroupSubheader: "mdc-list-group__subheader"
    })
};