import f from "./commons/vnode";

function checkType(vnode, type) {
    return (type === vnode.attrs.type) || vnode.attrs[type];
}

export default {
    view: vnode => f(vnode, checkType(vnode, "mdcCardHorizontalBlock") ? "": "section", {
        mdcCardMedia: "mdc-card__media",
        mdcCardActions: "mdc-card__actions",
        mdcCardActionsVertical: "mdc-card__actions--vertical",
        mdcCardPrimary: "mdc-card__primary",
        mdcCardSupportingText: "mdc-card__supporting-text",
        mdcCardHorizontalBlock: "mdc-card__horizontal-block"
    }, cls => checkType(vnode, cls))
};