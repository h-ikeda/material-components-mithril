import c from "./commons/component-with-default";
import {MDCRipple} from "@material/ripple/dist/mdc.ripple";

export default c({
    tagName: "button",
    class: "mdc-button",
    ripple: true
}, {
    ripple(v) {
        if (v) {
            this.oncreate = vnode => {
                MDCRipple.attachTo(vnode.dom);
            };
        }
    },
    raised(v) {
        this.class += v ? " mdc-button--raised": "";
    },
    dense(v) {
        this.class += v ? " mdc-button--dense": "";
    },
    compact(v) {
        this.class += v ? " mdc-button--compact": "";
    },
    color(v) {
        if (v === "primary" || v === "accent") {
            this.class += " mdc-button--" + v;
        }
    },
    theme(v) {
        this.class += v === "dark" ? " mdc-button--theme-dark": "";
    }
});
