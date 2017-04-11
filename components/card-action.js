import m from "mithril";
import button from "./button";
import lcmNames from "./commons/lifecycle-methods";

export default {
    view(vnode) {
        var attrs = {};
        Object.keys(vnode.attrs).filter(k =>
            lcmNames.indexOf(k) < 0
        ).forEach(k => {
            attrs[k] = vnode.attrs[k];
        });
        attrs.class = (attrs.class || "") + " mdc-card__action";
        attrs.compact = true;
        return m(button, attrs, vnode.children);
    }
};