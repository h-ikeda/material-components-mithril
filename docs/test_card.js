import {code} from "./test__utils";
import {card, cardBlock, cardTitles, cardMediaItem, cardActionButton} from "bundle";

export default {
    view: () => [
        m(card, [
            m(cardBlock, {type: "primary"},
                m(cardTitles, ["Title", "Subtitle"])
            ),
            m(cardBlock, {type: "supportingText"}, "Supporting text"),
            m(cardBlock, {type: "actions"}, [
                m(cardActionButton, "Action1"),
                m(cardActionButton, "Action2")
            ])
        ]),
        m(code, 
`m(card, [
    m(cardBlock, {type: "primary"},
        m(cardTitles, ["Title", "Subtitle"])
    ),
    m(cardBlock, {type: "supportingText"}, "Supporting text"),
    m(cardBlock, {type: "actions"}, [
        m(cardActionButton, "Action1"),
        m(cardActionButton, "Action2")
    ])
])`
        ),
        m(card, [
            m(cardBlock, {type: "primary"},
                m(cardTitles, {large: true}, ["Large Title", "Subtitle"])
            ),
            m(cardBlock, {type: "actionsVertical"}, [
                m(cardActionButton, "Vertical action1"),
                m(cardActionButton, "Vertical action2")
            ])
        ]),
        m(code,
`m(card, [
    m(cardBlock, {type: "primary"},
        m(cardTitles, {large: true} ["Large Title", "Subtitle"])
    ),
    m(cardBlock, {type: "actionsVertical"}, [
        m(cardActionButton, "Vertical action1"),
        m(cardActionButton, "Vertical action2")
    ])
])`
        ),
        m(card, {layout: "horizontal", theme: "dark"}, [
            m(cardBlock, {type: "primary"},
                m(cardTitles, ["No subtitle"])
            ),
            m(cardBlock, {type: "actions"},
                m(cardActionButton, "Action")
            )
        ]),
        m(code,
`m(card, {layout: "horizontal", theme: "dark"}, [
    m(cardBlock, {type: "primary"},
        m(cardTitles, ["No subtitle"])
    ),
    m(cardBlock, {type: "actions"},
        m(cardActionButton, "Action")
    )
])`
        )
    ]
};