import m from "mithril";
import buttons from "./example-buttons";

var exComp = {
    view() {
        return m(buttons);
    }
};

m.mount(document.body, exComp);