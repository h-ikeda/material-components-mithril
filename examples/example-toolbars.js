import m from "mithril";
import {toolbar, toolbarRow, toolbarSection, toolbarTitle} from "../index";
import {code} from "./example-utils";

export default {
    view() {
        return [
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
        ];
    }
};