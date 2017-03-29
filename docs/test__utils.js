import m from "mithril";

export var hFlex = {
    view: vnode => m("", {
        style: {
            display: "flex"
        }
    }, vnode.children)
};

export var code = {
    view: vnode => m("pre", m("code", vnode.children))
};