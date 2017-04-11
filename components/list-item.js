import c from "./commons/component-with-default";
import {MDCRipple} from "@material/ripple/dist/mdc.ripple";

export default c({
    tagName: "li",
    class: "mdc-list-item"
}, {
    ripple(v) {
        if (v) {
            this.oncreate = vnode => MDCRipple.attachTo(vnode.dom);
        }
    }
});
