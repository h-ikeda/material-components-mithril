import c from "./commons/component-with-default";
import {MDCRipple} from "@material/ripple/dist/mdc.ripple";

export default c({
    tagName: "button",
    class: "mdc-button",
    oncreate(vnode) {
        MDCRipple.attachTo(vnode.dom);
    }
});
