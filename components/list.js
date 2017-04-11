import c from "./commons/component-with-default";

export default c({
    tagName: "ul",
    class: "mdc-list"
}, {
    dense(v) {
        this.class += v ? " mdc-list--dense": "";
    },
    twoLine(v) {
        this.class += v ? " mdc-list--two-line": "";
    },
    avater(v) {
        this.class += v ? " mdc-list--avatar-list": "";
    }
});