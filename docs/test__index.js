import m from "mithril";

m.mount(document.body, {
    view: () => [
        m("h1", "material-component-mithril: Examples"),
        m("section", [
            m("h2", "Button"),
            m(require("./test_button").default)
        ])
    ]
});