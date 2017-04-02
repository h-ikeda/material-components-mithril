import m from "mithril";

function objectFilter(obj, filter) {
    Object.keys(obj).forEach(k => {
        if (!filter(k, obj)) {
            delete obj[k];
        }
    });
    return obj;
}

export default (vnode, tagName, classNames, classFilter) =>
    m(vnode.attrs.tagName || tagName, objectFilter(objectFilter(Object.assign({}, vnode.attrs, {
        class: (vnode.attrs.class || "").split(" ").filter(c => c)
            .concat(Object.keys(Object.assign(classNames, vnode.attrs.classNames || {})).filter(classFilter || (() => 1)))
            .filter((v, i, s) => s.indexOf(v) === i)
            .map(c => (vnode.attrs.classNames ? vnode.attrs.classNames[c]: "") || classNames[c])
            .join(" ")
    }), (k, s) => !(s.classNames ? (s.classNames[k] || classNames[k]): classNames[k]) && k !== "tagName"),
    k => k !== "classNames"), vnode.children);