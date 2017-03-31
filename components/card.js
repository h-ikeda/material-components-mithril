import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "", {
        mdcCard: "mdc-card",
        mdcCardThemeDark: "mdc-card--theme-dark",
        mdcCardHorizontalBlock: "mdc-card__horizontal-block"
    }, cls =>
        cls === "mdcCard" && !vnode.attrs.mdcCardHrizontalBlock || vnode.attrs[cls]
    )
};