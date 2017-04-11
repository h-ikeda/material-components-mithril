import c from "./commons/component-with-default";

export default c({
    class: "mdc-form-field"
}, {
    align(v) {
        this.class += v === "end" ? " mdc-form-field--align-end": "";
    }
});
