import m from "mithril";

function filteredForEach(obj, f) {
    Object.keys(obj).filter(k =>
        k !== "tagName" &&
        k !== "class" &&
        k !== "oninit" &&
        k !== "oncreate" &&
        k !== "onupdate" &&
        k !== "onbeforeremove" &&
        k !== "onremove" &&
        k !== "onbeforeupdate"
    ).forEach(f);
}

export default defaultProperties => {
    var t = {
        view(vnode) {
            var tag = vnode.attrs.tagName || defaultProperties.tagName;
            var cls = (vnode.attrs.class ? vnode.attrs.class.split(" ").filter(s => s): [])
                .concat(defaultProperties.class ? defaultProperties.class.split(" ").filter(s => s): [])
                .filter((s, i, o) => o.indexOf(s) === i)
                .join(" ");
            var attrs = {};
            filteredForEach(defaultProperties, k => {
                attrs[k] = defaultProperties[k];
            });
            filteredForEach(vnode.attrs, k => {
                attrs[k] = vnode.attrs[k];
            });
            if (cls) {
                attrs.class = cls;
            }
            return m(tag, attrs, vnode.children);
        }
    };
    ["oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate"]
    .forEach(method => {
        if (defaultProperties[method]) {
            t[method] = defaultProperties[method];
        }
    });
    return t;
};