import m from "mithril";
import {button} from "../dist/bundle";

export default {
    view: () => [
        m("h3", "Flat button"),
        m(button, "Flat button"),
        m("h3", "Raised button"),
        m(button, {raised: true}, "Raised button"),
        m("h3", "Primary colored button"),
        m(button, {primary: true}, "Primary colored"),
        m("h3", "Accent colored button"),
        m(button, {accent: true}, "Accent colored"),
        m("h3", "Disabled button"),
        m(button, {disabled: true}, "Disabled button")
    ]
};