import m from "mithril";

export var code = {
    view: vnode => m("pre", m("code", vnode.children))
};