/*eslint-env browser */
/*globals code m materialComponentsMithril*/

var card = materialComponentsMithril.card;
var cardBlock = materialComponentsMithril.cardBlock;
var cardTitle = materialComponentsMithril.cardTitle;
var cardSubtitle = materialComponentsMithril.cardSubtitle;
var cardActionButton = materialComponentsMithril.cardActionButton;

m.mount(document.querySelector("#cards"), {
    view: () => [
        m(card, [
            m(cardBlock, {type: "mdcCardPrimary"}, [
                m(cardTitle, "Title"),
                m(cardSubtitle, "Subtitle")
            ]),
            m(cardBlock, {type: "mdcCardMedia", style: {backgroundColor: "lightgreen", height: "90px"}}, "Media"),
            m(cardBlock, {type: "mdcCardSupportingText"},
                "Supporting text"
            ),
            m(cardBlock, {type: "mdcCardActions"}, [
                m(cardActionButton, "Action 1"),
                m(cardActionButton, "Action 2")
            ])
        ]),
        m(code,
`m(card, [
    m(cardBlock, {type: "mdcCardPrimary"}, [
        m(cardTitle, "Title"),
        m(cardSubtitle, "Subtitle")
    ]),
    m(cardBlock, {type: "mdcCardMedia", style: {backgroundColor: "lightgreen", height: "90px"}}, "Media"),
    m(cardBlock, {type: "mdcCardSupportingText"},
        "Supporting text"
    ),
    m(cardBlock, {type: "mdcCardActions"}, [
        m(cardActionButton, "Action 1"),
        m(cardActionButton, "Action 2")
    ])
])`
        ),
        m(card, [
            m(cardBlock, {type: "mdcCardMedia", style: {backgroundColor: "lightgreen", height: "90px"}}, "Media"),
            m(cardBlock, {type: "mdcCardPrimary"}, [
                m(cardTitle, {mdcCardTitleLarge: true}, "Large title"),
                m(cardSubtitle, "Subtitle")
            ]),
            m(cardBlock, {type: "mdcCardActions", mdcCardActionsVertical: true}, [
                m(cardActionButton, "Vertical Action 1"),
                m(cardActionButton, "Vertical Action 2")
            ])
        ]),
        m(code,
`m(card, [
    m(cardBlock, {type: "mdcCardMedia", style: {backgroundColor: "lightgreen", height: "90px"}}, "Media"),
    m(cardBlock, {type: "mdcCardPrimary"}, [
        m(cardTitle, {mdcCardTitleLarge: true}, "Large title"),
        m(cardSubtitle, "Subtitle")
    ]),
    m(cardBlock, {type: "mdcCardActions", mdcCardActionsVertical: true}, [
        m(cardActionButton, "Vertical Action 1"),
        m(cardActionButton, "Vertical Action 2")
    ])
])`
        ),
        m(card, {mdcCardThemeDark: true, style: {backgroundColor: "dimgray"}}, [
            m(cardBlock, {type: "mdcCardMedia", style: {backgroundColor: "green", height: "90px"}},
                m(cardTitle, "Title in media block")
            ),
            m(cardBlock, {type: "mdcCardSupportingText"}, "Supporting text"),
            m(cardBlock, {type: "mdcCardActions"}, [
                m(cardActionButton, {mdcButtonThemeDark: true}, "Action 1"),
                m(cardActionButton, {mdcButtonThemeDark: true}, "Action 2")
            ])
        ]),
        m(code,
`m(card, {mdcCardThemeDark: true, style: {backgroundColor: "dimgray"}}, [
    m(cardBlock, {type: "mdcCardMedia", style: {backgroundColor: "green", height: "90px"}},
        m(cardTitle, "Title in media block")
    ),
    m(cardBlock, {type: "mdcCardSupportingText"}, "Supporting text"),
    m(cardBlock, {type: "mdcCardActions"}, [
        m(cardActionButton, {mdcButtonThemeDark: true}, "Action 1"),
        m(cardActionButton, {mdcButtonThemeDark: true}, "Action 2")
    ])
])`
        ),
        m(card, [
            m(cardBlock, {type: "mdcCardHorizontalBlock"}, [
                m(cardBlock, {type: "mdcCardPrimary"}, [
                    m(cardTitle, "Title"),
                    m(cardSubtitle, "Subtitle")
                ]),
                m("img.mdc-card__media-item[alt=Img]", {style: {width: "90px", height: "90px"}})
            ]),
            m(cardBlock, {type: "mdcCardActions"}, [
                m(cardActionButton, "Action 1"),
                m(cardActionButton, "Action 2")
            ])
        ]),
        m(code,
`m(card, [
    m(cardBlock, {type: "mdcCardHorizontalBlock"}, [
        m(cardBlock, {type: "mdcCardPrimary"}, [
            m(cardTitle, "Title"),
            m(cardSubtitle, "Subtitle")
        ]),
        m("img.mdc-card__media-item[alt=Img]", {style: {width: "90px", height: "90px"}})
    ]),
    m(cardBlock, {type: "mdcCardActions"}, [
        m(cardActionButton, "Action 1"),
        m(cardActionButton, "Action 2")
    ])
])`
        )
    ]
});