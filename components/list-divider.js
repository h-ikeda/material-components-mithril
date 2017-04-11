import c from "./commons/component-with-default";

export default c({
    tagName: "li",
    class: "mdc-list-divider"
}, {
    inset(v) {
        this.class += v ? " mdc-list-divider--inset": "";
    }
});
