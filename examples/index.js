/*eslint-env browser */

import m from "mithril";
import buttons from "./example-buttons";
import cards from "./example-cards";
import checkboxes from "./example-checkboxes";
import lists from "./example-lists";
import toolbars from "./example-toolbars";

var exComps = {
    Button: buttons,
    Card: cards,
    Checkbox: checkboxes,
    List: lists,
    Toolbar: toolbars
};

var main = {
    view() {
        return m("main", m("nav", m("ul", Object.keys(exComps).map(k =>
            m("li", m("a", {oncreate: m.route.link, href: k}, k))
        ))));
    }
};

m.route(document.body, "index", Object.assign({"index": main}, exComps));
