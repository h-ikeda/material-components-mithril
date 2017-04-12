import m from "mithril";
import {MDCDialog} from "@material/dialog";
import button from "./button";

function changeState(vnode) {
    if (vnode.attrs.open) {
        vnode.dom.MDCDialog.show();
    } else {
        vnode.dom.MDCDialog.close();
    }
    if (typeof vnode.attrs.onaccept === "function") {
        vnode.dom.MDCDialog.listen("MDCDialog:accept", vnode.attrs.onaccept);
    }
    if (typeof vnode.attrs.oncancel === "function") {
        vnode.dom.MDCDialog.listen("MDCDialog:cancel", vnode.attrs.oncancel);
    }
}

export default {
    oncreate(vnode) {
        vnode.dom.MDCDialog = new MDCDialog(vnode.dom);
        changeState(vnode);
    },
    onupdate: changeState,
    view(vnode) {
        var children = [];
        if (vnode.attrs.title) {
            children.push(m("header.mdc-dialog__header", m("h2.mdc-dialog__header__title", vnode.attrs.title)));
        }
        children.push(m("section.mdc-dialog__body", {class: vnode.attrs.scrollable ? "mdc-dialog__body--scrollable": ""}, vnode.children));
        var footer = [];
        if ("cancelText" in vnode.attrs) {
            footer.push(m(button, {class: "mdc-dialog__footer__button mdc-dialog__footer__button--cancel"}, vnode.attrs.cancelText));
        }
        if ("acceptText" in vnode.attrs) {
            footer.push(m(button, {class: "mdc-dialog__footer__button mdc-dialog__footer__button--accept"}, vnode.attrs.acceptText));
        }
        if (footer.length) {
            children.push(m("footer.mdc-dialog__footer", footer));
        }
        return m("aside.mdc-dialog", [m(".mdc-dialog__surface", children), m(".mdc-dialog__backdrop")]);
    }
};