import m from "mithril";
import {list, listItem, listItemContent, listGroup, listGroupSubheader, listDivider} from "../index";
import {code} from "./example-utils";

export default {
    view() {
        return [
            m(list, [
                m(listItem, "Single-line item 1"),
                m(listItem, "Single-line item 2"),
                m(listItem, "Single-line item 3")
            ]),
            m(code,
`m(list, [
    m(listItem, "Single-line item 1"),
    m(listItem, "Single-line item 2"),
    m(listItem, "Single-line item 3")
])`
            ),
            m(list, {dense: true}, [
                m(listItem, "Single-line item dense 1"),
                m(listItem, "Single-line item dense 2"),
                m(listItem, "Single-line item dense 3")
            ]),
            m(code,
`m(list, {dense: true}, [
    m(listItem, "Single-line item dense 1"),
    m(listItem, "Single-line item dense 2"),
    m(listItem, "Single-line item dense 3")
])`
            ),
            m(list, {twoLine: true}, [
                m(listItem, [
                    m(listItemContent, [
                        m(listItemContent, {type: "primaryText"}, "Primary text 1"),
                        m(listItemContent, {type: "secondaryText"}, "Secondary text 1")
                    ]),
                ]),
                m(listItem, [
                    m(listItemContent, [
                        m(listItemContent, {type: "primaryText"}, "Primary text 2"),
                        m(listItemContent, {type: "secondaryText"}, "Secondary text 2")
                    ]),
                ]),
                m(listItem, [
                    m(listItemContent, [
                        m(listItemContent, {type: "primaryText"}, "Primary text 3"),
                        m(listItemContent, {type: "secondaryText"}, "Secondary text 3")
                    ]),
                ])
            ]),
            m(code,
`m(list, {twoLine: true}, [
    m(listItem, [
        m(listItemContent, {mdcListItemText: true}, [
            m(listItemContent, {mdcListItemTextPrimary: true}, "Primary text 1"),
            m(listItemContent, {mdcListItemTextSecondary: true}, "Secondary text 1")
        ]),
    ]),
    m(listItem, [
        m(listItemContent, {mdcListItemText: true}, [
            m(listItemContent, {mdcListItemTextPrimary: true}, "Primary text 2"),
            m(listItemContent, {mdcListItemTextSecondary: true}, "Secondary text 2")
        ]),
    ]),
    m(listItem, [
        m(listItemContent, {mdcListItemText: true}, [
            m(listItemContent, {mdcListItemTextPrimary: true}, "Primary text 3"),
            m(listItemContent, {mdcListItemTextSecondary: true}, "Secondary text 3")
        ]),
    ])
])`
            )
        ];
    }
};