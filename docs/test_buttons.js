/*eslint-env browser */
/*globals code m materialComponentsMithril*/

var button = materialComponentsMithril.button;

m.mount(document.querySelector("#buttons"), {
    view: () => [
        m(button, "Flat"),
        m(code, 'm(button, "Flat")'),
        m(button, {disabled: true}, "Disabled"),
        m(code, 'm(button, {disabled: true}, "Disabled")'),
        m(button, {mdcButtonRaised: true}, "Raised"),
        m(code, 'm(button, {mdcButtonRaised: true}, "Raised")'),
        m(button, {disabled: true, mdcButtonRaised: true}, "Disabled and Raised"),
        m(code, 'm(button, {disabled: true, mdcButtonRaised: true}, "Disabled and Raised")'),
        m(button, {mdcButtonDense: true}, "Dense"),
        m(code, 'm(button, {mdcButtonDense: true}, "Dense")'),
        m(button, {mdcButtonDense: true, disabled: true}, "Dense and Disabled"),
        m(code, 'm(button, {mdcButtonDense: true, disabled: true}, "Dense and Disabled")'),
        m(button, {mdcButtonDense: true, mdcButtonRaised: true}, "Dense and Raised"),
        m(code, 'm(button, {mdcButtonDense: true, mdcButtonRaised: true}, "Dense and Raised")'),
        m(button, {mdcButtonDense: true, disabled: true, mdcButtonRaised: true}, "Dense, Disabled and Raised"),
        m(code, 'm(button, {mdcButtonDense: true, disabled: true, mdcButtonRaised: true}, "Dense, Disabled and Raised")'),
        m(button, {mdcButtonCompact: true}, "Compact"),
        m(code, 'm(button, {mdcButtonCompact: true}, "Compact")'),
        m(button, {mdcButtonCompact: true, disabled: true}, "Compact and Disabled"),
        m(code, 'm(button, {mdcButtonCompact: true, disabled: true}, "Compact and Disabled")'),
        m(button, {mdcButtonCompact: true, mdcButtonRaised: true}, "Compact and Raised"),
        m(code, 'm(button, {mdcButtonCompact: true, mdcButtonRaised: true}, "Compact and Raised")'),
        m(button, {mdcButtonCompact: true, disabled: true, mdcButtonRaised: true}, "Compact, Disabled and Raised"),
        m(code, 'm(button, {mdcButtonCompact: true, disabled: true, mdcButtonRaised: true}, "Compact, Disabled and Raised")'),
        m(button, {mdcButtonPrimary: true}, "Primary colored"),
        m(code, 'm(button, {mdcButtonPrimary: true}, "Primary colored")'),
        m(button, {mdcButtonPrimary: true, disabled: true}, "Primary colored and Disabled"),
        m(code, 'm(button, {mdcButtonPrimary: true, disabled: true}, "Primary colored and Disabled")'),
        m(button, {mdcButtonPrimary: true, mdcButtonRaised: true}, "Primary colored and Raised"),
        m(code, 'm(button, {mdcButtonPrimary: true, mdcButtonRaised: true}, "Primary colored and Raised")'),
        m(button, {mdcButtonPrimary: true, disabled: true, mdcButtonRaised: true}, "Primary colored, Disabled and Raised"),
        m(code, 'm(button, {mdcButtonPrimary: true, disabled: true, mdcButtonRaised: true}, "Primary colored, Disabled and Raised")'),
        m(button, {mdcButtonAccent: true}, "Accent colored"),
        m(code, 'm(button, {mdcButtonAccent: true}, "Accent colored")'),
        m(button, {mdcButtonAccent: true, disabled: true}, "Accent colored and Disabled"),
        m(code, 'm(button, {mdcButtonAccent: true, disabled: true}, "Accent colored and Disabled")'),
        m(button, {mdcButtonAccent: true, mdcButtonRaised: true}, "Accent colored and Raised"),
        m(code, 'm(button, {mdcButtonAccent: true, mdcButtonRaised: true}, "Accent colored and Raised")'),
        m(button, {mdcButtonAccent: true, disabled: true, mdcButtonRaised: true}, "Accent colored, Disabled and Raised"),
        m(code, 'm(button, {mdcButtonAccent: true, disabled: true, mdcButtonRaised: true}, "Accent colored, Disabled and Raised")'),
        m(button, {tagName: "div"}, "Div"),
        m(code, 'm(button, {tagName: "div"}, "Div")'),
        m(button, {tagName: "a", href: "#"}, "Link"),
        m(code, 'm(button, {tagName: "a", href: "#"}, "Link")')
    ]
});