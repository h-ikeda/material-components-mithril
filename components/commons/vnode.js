import m from "mithril";

function objectFilter(obj, filter) {
    Object.keys(obj).forEach((k, i) => {
        if (!filter(k, i, obj)) {
            delete obj[k];
        }
    });
    return obj;
}

export default (vnode, tagName, classNames, classFilter) =>
    m(vnode.attrs.tag || tagName, objectFilter(Object.assign({}, vnode.attrs, {
        class: (vnode.attrs.class || "").split(" ").filter(c => c)
            .concat(Object.keys(Object.assign(classNames, vnode.attrs.classNames || {})).filter(classFilter || (() => 1)))
            .filter((v, i, s) => s.indexOf(v) === i)
            .map(c => (vnode.attrs.classNames ? vnode.attrs.classNames[c]: "") || classNames[c])
            .join(" ")
    }), (k, _, s) => !(s.classNames ? s.classNames[k]: classNames[k])), vnode.children);