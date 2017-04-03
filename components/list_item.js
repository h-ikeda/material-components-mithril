import f from "./commons/vnode";
import {MDCRipple} from "@material/ripple";

export default {
    oncreate: vnode => {MDCRipple.attachTo(vnode.dom);},
    view: vnode => f(vnode, "li", {
        mdcListItem: "mdc-list-item"
    })
};