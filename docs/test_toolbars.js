/*eslint-env browser */
/*globals code m materialComponentsMithril*/

var toolbar = materialComponentsMithril.toolbar;
var toolbarRow = materialComponentsMithril.toolbarRow;
var toolbarSection = materialComponentsMithril.toolbarSection;
var toolbarTitle = materialComponentsMithril.toolbarTitle;

m.mount(document.querySelector("#toolbars"), {
    view: () => [
        m(toolbar,
            m(toolbarRow, [
                m(toolbarSection,
                    m(toolbarTitle, "Title")
                ),
                m(toolbarSection, {mdcToolbarSectionAlignEnd: true}, "Align end")
            ])
        ),
        m(code, 'm(button, "Flat")')
    ]
});