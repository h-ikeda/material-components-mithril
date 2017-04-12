import m from "mithril";
import {checkbox, formField} from "../index";

var checked1 = false;
var checked2 = false;
var indeterminate = false;
var disabled = false;

export default {
    view(vnode) {
        return m("main", [
            m("h1", "MDC Checkbox with material-components-mithril"),
            m("section.example-checkbox", [
                m(formField, [
                    m(checkbox, {
                        indeterminate: indeterminate,
                        checked: checked1,
                        onchange(e) {
                            indeterminate = e.target.indeterminate;
                            checked1 = e.target.checked;
                        }
                    }),
                    m("label", "This is my checkbox")
                ]),
                " ",
                m("button", {onclick() {indeterminate = true;}}, "Make indeterminate")
            ]),
            m("section.mdc-theme--dark.example-checkbox", [
                m("h2", "Dark Theme"),
                m(formField, [
                    m(checkbox, {
                        theme: "dark",
                        disabled: disabled,
                        checked: checked2,
                        onchange(e) {
                            checked2 = e.target.checked;
                        }
                    }),
                    m("label", "This is my checkbox")
                ]),
                " ",
                m("button", {onclick() {disabled = !disabled;}}, "Toggle Disabled")
            ])
        ]);
    }
};