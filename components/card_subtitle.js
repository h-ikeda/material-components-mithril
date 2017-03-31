import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "h2", {
        mdcCardSubtitle: "mdc-card__subtitle"
    })
};