import c from "./commons/component-with-default";

export default c({
    tagName: "span",
    type: "text"
}, {
    type(v) {
        var cls = this.class || "";
        switch (v) {
            case "startDetail":
                cls += " mdc-list-item__start-detail";
                break;
            case "endDetail":
                cls += " mdc-list-item__end-detail";
                break;
            case "primaryText":
                cls += " mdc-list-item__text__primary";
                break;
            case "secondaryText":
                cls += " mdc-list-item__text__secondary";
                break;
            default:
                cls += " mdc-list-item__text";
        }
        this.class = cls.trim();
    }
});
