/*eslint-env browser */
/*globals materialComponentsMithril m code*/

var list = materialComponentsMithril.list;
var listItem = materialComponentsMithril.listItem;
var listItemContent = materialComponentsMithril.listItemContent;
var listGroup = materialComponentsMithril.listGroup;
var listGroupSubheader = materialComponentsMithril.listGroupSubheader;
var listDivider = materialComponentsMithril.listDivider;

m.mount(document.querySelector("#lists"), {
    view: () => [
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
        m(list, {mdcListDense: true}, [
            m(listItem, "Single-line item dense 1"),
            m(listItem, "Single-line item dense 2"),
            m(listItem, "Single-line item dense 3")
        ]),
        m(code,
`m(list, {mdcListDense: true}, [
    m(listItem, "Single-line item dense 1"),
    m(listItem, "Single-line item dense 2"),
    m(listItem, "Single-line item dense 3")
])`
        ),
        m(list, {mdcListTwoLine: true}, [
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
        ]),
        m(code,
`m(list, {mdcListTwoLine: true}, [
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
    ]
});