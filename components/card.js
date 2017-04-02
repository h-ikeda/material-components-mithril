import f from "./commons/vnode";

export default {
    view: vnode => f(vnode, "", {
        mdcCard: "mdc-card",
        mdcCardThemeDark: "mdc-card--theme-dark"
    }, cls =>
        cls === "mdcCard" || vnode.attrs[cls]
    )
};