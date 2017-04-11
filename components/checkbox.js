import m from "mithril";
import {MDCCheckbox} from "@material/checkbox";

const propertyNames = [
    "checked",
    "indeterminate",
    "disabled",
    "value"
];

function setValues(vnode) {
    propertyNames.forEach(k => {
        vnode.dom.MDCCheckbox[k] = vnode.attrs[k];
    });
}

export default {
    oncreate(vnode) {
        vnode.dom.MDCCheckbox = new MDCCheckbox(vnode.dom);
        setValues(vnode);
    },
    onupdate: setValues,
    view(vnode) {
        var attrs = {};
        Object.keys(vnode.attrs).filter(k =>
            propertyNames.indexOf(k) < 0
        ).forEach(k => {
            attrs[k] = vnode.attrs[k];
        });
        var additionalClass = attrs.theme === "dark" ? ".mdc-checkbox--theme-dark": "";
        delete attrs.theme;
        return m(".mdc-checkbox" + additionalClass, [
            m("input.mdc-checkbox__native-control[type=checkbox]", attrs),
            m(".mdc-checkbox__background", [
                m("svg.mdc-checkbox__checkmark[viewBox=\"0 0 24 24\"]",
                    m("path.mdc-checkbox__checkmark__path[fill=none][stroke=white][d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"]")
                ),
                m(".mdc-checkbox__mixedmark")
            ])
        ]);
    }
};