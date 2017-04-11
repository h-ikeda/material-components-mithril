import m from "mithril";
import lcmNames from "./lifecycle-methods";

function merge() {
    var t = {};
    for (var i = 0; i < arguments.length; ++i) {
        if (arguments[i]) {
            Object.keys(arguments[i]).forEach(k => {
                t[k] = arguments[i][k];
            });
        }
    }
    return t;
}

function filter(obj, f) {
    var t = {};
    Object.keys(obj).filter(f).forEach(k => {
        t[k] = obj[k];
    });
    return t;
}

export default (defaultAttrs, specialAttrs) => {
    var df = merge(defaultAttrs), spm = specialAttrs || {}, lcm = {};
    Object.keys(df).filter(p =>
        lcmNames.indexOf(p) >= 0
    ).forEach(m => {
        lcm[m] = df[m];
        delete df[m];
    });
    return merge(lcm, {
        view(vnode) {
            var attrs = merge(df, filter(vnode.attrs, p => lcmNames.indexOf(p) < 0));
            if ("class" in df && "class" in vnode.attrs) {
                attrs.class = df.class.split(" ")
                    .concat(vnode.attrs.class.split(" "))
                    .filter((c, i, s) => c && (s.indexOf(c) === i))
                    .join(" ");
            }
            Object.keys(spm).filter(m => m in attrs).forEach(f => {
                spm[f].call(attrs, attrs[f], vnode.attrs);
                delete attrs[f];
            });
            var tag = "";
            if ("tagName" in attrs) {
                tag = attrs.tagName;
                delete attrs.tagName;
            }
            return m(tag, attrs, vnode.children);
        }
    });
};
