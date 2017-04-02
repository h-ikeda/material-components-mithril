/*eslint-env browser */
/*globals code m materialComponentsMithril*/

var toolbar = materialComponentsMithril.toolbar;
var toolbarRow = materialComponentsMithril.toolbarRow;
var toolbarSection = materialComponentsMithril.toolbarSection;
var toolbarTitle = materialComponentsMithril.toolbarTitle;

m.mount(document.querySelector("#toolbars"), {
    view: () => [
        m(toolbar, [
            m(toolbarSection, {mdcToolbarSectionAlignStart: true}, 
                m(toolbarTitle, "Title (Align start)")
            ),
            m(toolbarSection, "Align center"),
            m(toolbarSection, {mdcToolbarSectionAlignEnd: true}, "Align end")
        ]),
        m(code,
`m(toolbar, [
    m(toolbarSection, {mdcToolbarSectionAlignStart: true}, 
        m(toolbarTitle, "Title (Align start)")
    ),
    m(toolbarSection, "Align center"),
    m(toolbarSection, {mdcToolbarSectionAlignEnd: true}, "Align end")
])`
        )
    ]
});