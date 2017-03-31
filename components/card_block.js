import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "section", {
        mdcCardMedia: "mdc-card__media",
        mdcCardActions: "mdc-card__actions",
        mdcCardActionsVertical: "mdc-card__actions--vertical",
        mdcCardPrimary: "mdc-card__primary",
        mdcCardSupportingText: "mdc-card__supporting-text"
    }, cls =>
        (cls === vnode.attrs.type) || vnode.attrs[cls]
    )
};