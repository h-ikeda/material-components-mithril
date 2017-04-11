import c from "./commons/component-with-default";

export default c({
    class: "mdc-card"
}, {
    theme(v) {
        this.class += v === "dark" ? " mdc-card--theme-dark": "";
    }
});
