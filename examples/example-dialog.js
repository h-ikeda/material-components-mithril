import m from "mithril";
import {dialog} from "../index";
import {list, listItem} from "../index";
import {button} from "../index";

var open1 = false;
var open2 = false;

function close1() {
    open1 = false;
}

function close2() {
    open2 = false;
}

export default {
    view(vnode) {
        return [
            m(dialog, {
                title: "Use Google's location service?",
                cancelText: "decline",
                acceptText: "accept",
                open: open1,
                onaccept: close1,
                oncancel: close1,
            }, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."),
            m(dialog, {
                title: "Choose a Ringtone",
                cancelText: "decline",
                acceptText: "accept",
                open: open2,
                onaccept: close2,
                oncancel: close2,
                scrollable: true,
            }, m(list, [
                m(listItem, "None"),
                m(listItem, "Callisto"),
                m(listItem, "Ganymede"),
                m(listItem, "Luna"),
                m(listItem, "Marimba"),
                m(listItem, "Schwifty"),
                m(listItem, "Callisto"),
                m(listItem, "Ganymede"),
                m(listItem, "Luna"),
                m(listItem, "Marimba"),
                m(listItem, "Schwifty")
            ])),
            m("section.example-dialog", [
                m("", [
                    m("h2", "MDC Web Dialog with material-components-mithril"),
                    m("p", "Modal dialog windows for the web")
                ]),
                m(button, {color: "primary", raised: true, onclick() {open1 = true;}}, "Show Dialog"),
                " ",
                m(button, {color: "primary", raised: true, onclick() {open2 = true;}}, "Show Scrolling Dialog")
            ])
        ];
    }
};