import f from "./commons/vnode";
import {MDCRipple} from "@material/ripple";

export default {
    oncreate: vnode => {MDCRipple.attachTo(vnode.dom);},
    view: vnode => f(vnode, "button", {
        mdcButton: "mdc-button",
        mdcButtonAccent: "mdc-button--accent",
        mdcButtonPrimary: "mdc-button--primary",
        mdcButtonRaised: "mdc-button--raised",
        mdcButtonDense: "mdc-button--dense",
        mdcButtonCompact: "mdc-button--compact"
    }, cls =>
        (cls === "mdcButton") || vnode.attrs[cls]
    )
};
