import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "h1", {
        mdcCardTitle: "mdc-card__title",
        mdcCardTitleLarge: "mdc-card__title--large"
    }, cls =>
        (cls === "mdcCardTitle") || vnode.attrs[cls]
    )
};