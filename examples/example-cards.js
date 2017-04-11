import m from "mithril";
import {card, cardBlock, cardTitle, cardSubtitle, cardAction, cardMediaItem} from "../index";

export default {
    view() {
        return m("main", [
            m("h1", "MDC Cards with material-components-mithril"),
            m("section.example-cards", [
                m(card, [
                    m(cardBlock, {type: "media", class: "background_16-9"}),
                    m(cardBlock, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.")
                ]),
                m(card, [
                    m(cardBlock, {type: "primary"}, [
                        m(".avatar"),
                        m(cardTitle, "Title"),
                        m(cardSubtitle, "Subhead")
                    ]),
                    m(cardBlock, {type: "media", class: "background_16-9"}),
                    m(cardBlock, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."),
                    m(cardBlock, {type: "actions"}, [
                        m(cardAction, "Action 1"),
                        m(cardAction, "Action 2")
                    ])
                ]),
                m(card, [
                    m(cardBlock, {type: "primary"}, [
                        m(".avatar"),
                        m(cardTitle, "Title"),
                        m(cardSubtitle, "Subhead")
                    ]),
                    m(cardBlock, {type: "media", class: "background_16-9"}),
                    m(cardBlock, {type: "actionsVertical"}, [
                        m(cardAction, "Action 1"),
                        m(cardAction, "Action 2")
                    ])
                ]),
                m(card, [
                    m(cardBlock, {type: "media", class: "background_16-9"}),
                    m(cardBlock, {type: "primary"}, [
                        m(cardTitle, {large: true}, "Title goes here"),
                        m(cardSubtitle, "Subtitle here")
                    ]),
                    m(cardBlock, {type: "actions"}, [
                        m(cardAction, "Action 1"),
                        m(cardAction, "Action 2")
                    ])
                ]),
                m(card, [
                    m(cardBlock, {type: "primary"}, [
                        m(cardTitle, {large: true}, "Title goes here"),
                        m(cardSubtitle, "Subtitle here")
                    ]),
                    m(cardBlock, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
                    m(cardBlock, {type: "actions"}, [
                        m(cardAction, "Action 1"),
                        m(cardAction, "Action 2")
                    ])
                ]),
                m(card, {theme: "dark", class: "background1-1"}, [
                    m(cardBlock, {type: "primary"}, [
                        m(cardTitle, {large: true}, "Title goes here"),
                        m(cardSubtitle, "Subtitle here")
                    ]),
                    m(cardBlock, {type: "actions"}, [
                        m(cardAction, {theme: "dark"}, "Action 1"),
                        m(cardAction, {theme: "dark"}, "Action 2")
                    ])
                ]),
                m(card, {class: "small"}, [
                    m(cardBlock, {type: "media", class: "background1-1"},
                        m(cardTitle, {large: true}, "Title")
                    ),
                    m(cardBlock, {type: "actions"},
                        m(cardAction, "Action 1")
                    )
                ]),
                m(card, [
                    m(cardBlock, {type: "horizontalBlock"}, [
                        m(cardBlock, {type: "primary"}, [
                            m(cardTitle, {large: true}, "Title here"),
                            m(cardSubtitle, "Subtitle here")
                        ]),
                        m(cardMediaItem, {src: "images/1-1.jpg"})
                    ]),
                    m(cardBlock, {type: "actions"}, [
                        m(cardAction, "Action 1"),
                        m(cardAction, "Action 2")
                    ])
                ]),
                m(card, [
                    m(cardBlock, {type: "horizontalBlock"}, [
                        m(cardBlock, {type: "primary"}, [
                            m(cardTitle, {large: true}, "Title here"),
                            m(cardSubtitle, "Subtitle here")
                        ]),
                        m(cardMediaItem, {size: 1.5, src: "images/1-1.jpg"})
                    ]),
                    m(cardBlock, {type: "actions"}, [
                        m(cardAction, "Action 1"),
                        m(cardAction, "Action 2")
                    ])
                ]),
                m(card, [
                    m(cardBlock, {type: "horizontalBlock"}, [
                        m(cardBlock, {type: "primary"}, [
                            m(cardTitle, {large: true}, "Title here"),
                            m(cardSubtitle, "Subtitle here")
                        ]),
                        m(cardMediaItem, {size: 2, src: "images/1-1.jpg"})
                    ]),
                    m(cardBlock, {type: "actions"}, [
                        m(cardAction, "Action 1"),
                        m(cardAction, "Action 2")
                    ])
                ]),
                m(card, [
                    m(cardBlock, {type: "horizontalBlock"}, [
                        m(cardMediaItem, {size: 3.1, src: "images/1-1.jpg"}),
                        m(cardBlock, {type: "actionsVertical"}, [
                            m(cardAction, "A1"),
                            m(cardAction, "A2")
                        ])
                    ])
                ])
            ])
        ]);
    }
};