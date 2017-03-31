var button = materialComponentMithril.button;

m.mount(document.querySelector("#buttons"), {
    view: () => [
        m(button, "Flat"),
        m(code, 'm(button, "Flat")'),
        m(button, {mdcButtonRaised: true}, "Raised"),
        m(code, 'm(button, {mdcButtonRaised: true}, "Raised")'),
        m(button, {mdcButtonPrimary: true}, "Primary colored"),
        m(code, 'm(button, {mdcButtonPrimary: true}, "Primary colored")'),
        m(button, {mdcButtonAccent: true}, "Accent colored"),
        m(code, 'm(button, {mdcButtonAccent: true}, "Accent colored")'),
        m(button, {disabled: true}, "Disabled"),
        m(code, 'm(button, {disabled: true}, "Disabled")'),
        m(button, {mdcButtonCompact: true}, "Compact"),
        m(code, 'm(button, {mdcButtonCompact: true}, "Compact")'),
        m(button, {mdcButtonDense: true}, "Dense"),
        m(code, 'm(button, {mdcButtonDense: true}, "Dense")'),
        m(button, {mdcButtonPrimary: true, mdcButtonRaised: true}, "Primary and Raised"),
        m(code, 'm(button, {mdcButtonPrimary: true, mdcButtonRaised: true}, "Primary and Raised")'),
        m(button, {mdcButtonAccent: true, mdcButtonRaised: true}, "Accent and Raised"),
        m(code, 'm(button, {mdcButtonAccent: true, mdcButtonRaised: true}, "Accent and Raised")')
    ]
});