import c from "./commons/component-with-default";

export default c({
    tagName: "section",
    type: "supportingText"
}, {
    type(v, origin) {
        var cls = this.class || "";
        switch (v) {
            case "actions":
                cls += " mdc-card__actions";
                break;
            case "actionsVertical":
                cls += " mdc-card__actions mdc-card__actions--vertical";
                break;
            case "media":
                cls += " mdc-card__media";
                break;
            case "primary":
                cls += " mdc-card__primary";
                break;
            case "horizontalBlock":
                if (!("tagName" in origin)) {
                    this.tagName = "div";
                }
                cls += " mdc-card__horizontal-block";
                break;
            default:
                cls += " mdc-card__supporting-text";
        }
        this.class = cls.trim();
    }
});
