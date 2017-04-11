import c from "./commons/component-with-default";

export default c({
    tagName: "h1",
    class: "mdc-card__title"
}, {
    large(v) {
        this.class += v ? " mdc-card__title--large": "";
    }
});
