import {code} from "./test__utils";
import {toolbar, toolbarTitle} from "bundle";

export default {
    view: () => [
        m(toolbar, "Aligned center"),
        m(code, 'm(toolbar, "Aligned center")'),
        m(toolbar, {align: "start"}, "Aligned start"),
        m(code, 'm(toolbar, {align: "start"}, "Aligned start")'),
        m(toolbar, {align: "end"}, "Aligned end"),
        m(code, 'm(toolbar, {align: "end"}, "Aligned end")'),
        m(toolbar, ["Aligned start", "Aligned end"]),
        m(code, 'm(toolbar, ["Aligned start", "Aligned end"])'),
        m(toolbar, {align: "start"}, ["Aligned start", "Aligned center"]),
        m(code, 'm(toolbar, {align: "start"}, ["Aligned start", "Aligned center"])'),
        m(toolbar, {align: "end"}, ["Aligned center", "Aligned end"]),
        m(code, 'm(toolbar, {align: "end"}, ["Aligned center", "Aligned end"])'),
        m(toolbar, ["Aligned start", "Aligned center", "Aligned end"]),
        m(code, 'm(toolbar, ["Aligned start", "Aligned center", "Aligned end"])'),
        m(toolbar, m(toolbarTitle, "Title")),
        m(code, 'm(toolbar, m(toolbarTitle, "Title"))')
    ]
};