import m from "mithril";
import styles from "@material/button/mdc-button.scss";
import {MDCRipple} from "@material/ripple";

export default {
    oncreate: vnode => {
        MDCRipple.attachTo(vnode.dom);
    },
    view: vnode => m("button." + styles.mdcButton, {
        class: (vnode.attrs.accent ? styles.mdcButtonAccent: " ") +
            (vnode.attrs.primary ? styles.mdcButtonPrimary: " ") +
            (vnode.attrs.raised ? styles.mdcButtonRaised: " ") +
            (vnode.attrs.dense ? styles.mdcButtonDense: " ") +
            (vnode.attrs.compact ? styles.mdcButtonCompact: " "),
        disabled: vnode.attrs.disabled
    }, vnode.children)
};