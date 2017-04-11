import c from "./commons/component-with-default";

export default c({
    tagName: "section",
    class: "mdc-toolbar__section"
}, {
    align(v) {
        if (v === "start" || v === "end") {
            this.class += " mdc-toolbar__section--align-" + v;
        }
    }
});