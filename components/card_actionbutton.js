import m from "mithril";
import button from "./button";

export default {
    view: vnode => m(button, Object.assign({
        mdcButtonCompact: true,
        mdcCardAction: true,
        classNames: Object.assign({
            mdcCardAction: "mdc-card__action"
        }, vnode.attrs.classNames)
    }, vnode.attrs), vnode.children)
};