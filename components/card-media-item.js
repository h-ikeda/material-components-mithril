import c from "./commons/component-with-default";

export default c({
    tagName: "img",
    class: "mdc-card__media-item"
}, {
    size(v) {
        switch (v) {
            case 1.5:
                this.class += " mdc-card__media-item--1dot5x";
                break;
            case 2:
                this.class += " mdc-card__media-item--2x";
                break;
            case 3:
                this.class += " mdc-card__media-item--3x";
                break;
            default:
                if (!("style" in this)) {
                    this.style = {};
                }
                if (!("width" in this.style)) {
                    this.style.width = "auto";
                }
                if (!("height" in this.style)) {
                    this.style.height = v * 80 + "px";
                }
        }
    }
});
