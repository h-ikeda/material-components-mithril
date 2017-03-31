import m from "mithril";

export default (vnode, tagName, classNames, classFilter) =>
    m(vnode.attrs.tag || tagName, Object.assign({}, vnode.attrs, {
        class: (vnode.attrs.class || "").split(" ").filter(c => c)
            .concat(Object.keys(Object.assign(classNames, vnode.attrs.classNames || {})).filter(classFilter || (() => 1)))
            .filter((v, i, s) => s.indexOf(v) === i)
            .map(c => (this ? this[c]: "") || classNames[c], vnode.attrs.classNames)
            .join(" ")
    }), vnode.children);