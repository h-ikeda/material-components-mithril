import c from "./commons/component-with-default";

export default c({
    tagName: "header",
    class: "mdc-toolbar"
}, {
    fixed(v) {
        this.class += v ? " mdc-toolbar--fixed": "";
    }
});