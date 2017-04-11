import m from "mithril";
import {checkbox, formField} from "../index";

export default {
    view() {
        return m("main", [
            m("h1", "MDC Checkbox with material-components-mithril"),
            m("section.example-checkbox", [
                m(formField, [
                    m(checkbox),
                    m("label", "This is my checkbox")
                ]),
                m("button", "Make indeterminate")
            ]),
            m("section.mdc-theme--dark.example-checkbox", [
                m("h2", "Dark Theme"),
                m(formField, [
                    m(checkbox, {theme: "dark"}),
                    m("label", "This is my checkbox")
                ]),
                m("button", "Toggle Disabled")
            ])
        ]);
    }
}