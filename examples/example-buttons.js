import m from "mithril";
import {button} from "../index";

export default {
    view() {
        return m("main", [
            m("h1", "MDC WEB BUTTON with material-components-mithril"),
            m("section", [
                m("fieldset", [
                    m("legend", "Buttons"),
                    m(button, "Default"),
                    m(button, {raised: true}, "Raised"),
                    m(button, {dense: true}, "Dense Default"),
                    m(button, {dense: true, raised: true}, "Dense Raised"),
                    m(button, {compact: true}, "Compact"),
                    m(button, {compact: true, raised: true}, "Compact Raised"),
                    m(button, {color: "primary"}, "Default with Primary"),
                    m(button, {color: "primary", raised: true}, "Raised with Primary"),
                    m(button, {color: "accent"}, "Default with Accent"),
                    m(button, {color: "accent", raised: true}, "Raised with Accent"),
                    m(button, {tagName: "div", raised: true}, "Div")
                ]),
                m("fieldset", [
                    m("legend", "Buttons without Ripples"),
                    m(button, {ripple: false}, "Default"),
                    m(button, {raised: true, ripple: false}, "Raised"),
                    m(button, {dense: true, ripple: false}, "Dense Default"),
                    m(button, {dense: true, raised: true, ripple: false}, "Dense Raised"),
                    m(button, {compact: true, ripple: false}, "Compact"),
                    m(button, {compact: true, raised: true, ripple: false}, "Compact Raised"),
                    m(button, {color: "primary", ripple: false}, "Default with Primary"),
                    m(button, {color: "primary", raised: true, ripple: false}, "Raised with Primary"),
                    m(button, {color: "accent", ripple: false}, "Default with Accent"),
                    m(button, {color: "accent", raised: true, ripple: false}, "Raised with Accent"),
                    m(button, {tagName: "div", raised: true, ripple: false}, "Div")
                ]),
                m("fieldset", [
                    m("legend", "Links with Button Style"),
                    m(button, {tagName: "a", href: "Button", oncreate: m.route.link}, "Default"),
                    m(button, {tagName: "a", href: "Button", oncreate: m.route.link, raised: true}, "Raised"),
                    m(button, {tagName: "a", href: "Button", oncreate: m.route.link, dense: true}, "Dense Default"),
                    m(button, {tagName: "a", href: "Button", oncreate: m.route.link, dense: true, raised: true}, "Dense Raised"),
                    m(button, {tagName: "a", href: "Button", oncreate: m.route.link, compact: true}, "Compact"),
                    m(button, {tagName: "a", href: "Button", oncreate: m.route.link, compact: true, raised: true}, "Compact Raised"),
                    m(button, {tagName: "a", href: "Button", oncreate: m.route.link, color: "primary"}, "Default with Primary"),
                    m(button, {tagName: "a", href: "Button", oncreate: m.route.link, color: "primary", raised: true}, "Raised with Primary"),
                    m(button, {tagName: "a", href: "Button", oncreate: m.route.link, color: "accent"}, "Default with Accent"),
                    m(button, {tagName: "a", href: "Button", oncreate: m.route.link, color: "accent", raised: true}, "Raised with Accent")
                ]),
                m("fieldset", [
                    m("legend", "Disabled Buttons"),
                    m(button, {disabled: true}, "Default"),
                    m(button, {disabled: true, raised: true}, "Raised"),
                    m(button, {disabled: true, dense: true}, "Dense Default"),
                    m(button, {disabled: true, dense: true, raised: true}, "Dense Raised"),
                    m(button, {disabled: true, compact: true}, "Compact"),
                    m(button, {disabled: true, compact: true, raised: true}, "Compact Raised"),
                    m(button, {disabled: true, color: "primary"}, "Default with Primary"),
                    m(button, {disabled: true, color: "primary", raised: true}, "Raised with Primary"),
                    m(button, {disabled: true, color: "accent"}, "Default with Accent"),
                    m(button, {disabled: true, color: "accent", raised: true}, "Raised with Accent"),
                    m(button, {disabled: true, tagName: "div", raised: true}, "Div")
                ])
            ]),
            m("h2", "Dark theme"),
            m("section.mdc-theme--dark", [
                m("fieldset", [
                    m("legend", "Buttons"),
                    m(button, "Default"),
                    m(button, {raised: true}, "Raised"),
                    m(button, {dense: true}, "Dense Default"),
                    m(button, {dense: true, raised: true}, "Dense Raised"),
                    m(button, {compact: true}, "Compact"),
                    m(button, {compact: true, raised: true}, "Compact Raised"),
                    m(button, {color: "primary"}, "Default with Primary"),
                    m(button, {color: "primary", raised: true}, "Raised with Primary"),
                    m(button, {color: "accent"}, "Default with Accent"),
                    m(button, {color: "accent", raised: true}, "Raised with Accent"),
                    m(button, {tagName: "div", raised: true}, "Div")
                ]),
                m("fieldset", [
                    m("legend", "Buttons without Ripples"),
                    m(button, {ripple: false}, "Default"),
                    m(button, {raised: true, ripple: false}, "Raised"),
                    m(button, {dense: true, ripple: false}, "Dense Default"),
                    m(button, {dense: true, raised: true, ripple: false}, "Dense Raised"),
                    m(button, {compact: true, ripple: false}, "Compact"),
                    m(button, {compact: true, raised: true, ripple: false}, "Compact Raised"),
                    m(button, {color: "primary", ripple: false}, "Default with Primary"),
                    m(button, {color: "primary", raised: true, ripple: false}, "Raised with Primary"),
                    m(button, {color: "accent", ripple: false}, "Default with Accent"),
                    m(button, {color: "accent", raised: true, ripple: false}, "Raised with Accent"),
                    m(button, {tagName: "div", raised: true, ripple: false}, "Div")
                ]),
                m("fieldset", [
                    m("legend", "Disabled Buttons"),
                    m(button, {disabled: true}, "Default"),
                    m(button, {disabled: true, raised: true}, "Raised"),
                    m(button, {disabled: true, dense: true}, "Dense Default"),
                    m(button, {disabled: true, dense: true, raised: true}, "Dense Raised"),
                    m(button, {disabled: true, compact: true}, "Compact"),
                    m(button, {disabled: true, compact: true, raised: true}, "Compact Raised"),
                    m(button, {disabled: true, color: "primary"}, "Default with Primary"),
                    m(button, {disabled: true, color: "primary", raised: true}, "Raised with Primary"),
                    m(button, {disabled: true, color: "accent"}, "Default with Accent"),
                    m(button, {disabled: true, color: "accent", raised: true}, "Raised with Accent"),
                    m(button, {disabled: true, tagName: "div", raised: true}, "Div")
                ])
            ])
        ]);
    }
};