/*eslint-env mocha, browser*/

import assert from "assert";
import m from "mithril";
import componentWithDefault from "../components/commons/component-with-default";

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

describe("component-with-default", () => {
    var parent1;
    var parent2;
    beforeEach(() => {
        parent1 = document.createElement("div");
        parent2 = document.createElement("div");
    });
    it("should draw default component when only default tagName supplied.", () => {
        m.render(parent1, m(componentWithDefault({tagName: "button"})));
        var actual = parent1.innerHTML;
        m.render(parent2, m({view(){return m("button");}}));
        var expected = parent2.innerHTML;
        assert.equal(actual, expected);
    });
    it("should draw default component when default tagName and classNames supplied.", () => {
        m.render(parent1, m(componentWithDefault({tagName: "button", class: "test-cls test2-cls"})));
        var actual = parent1.innerHTML;
        m.render(parent2, m({view(){return m("button.test-cls.test2-cls");}}));
        var expected = parent2.innerHTML;
        assert.equal(actual, expected);
    });
    it("tagName should be overwritten when tagName supplied.", () => {
        m.render(parent1, m(componentWithDefault({tagName: "button", class: "test-cls test2-cls"}), {tagName: "a"}));
        var actual = parent1.innerHTML;
        m.render(parent2, m({view(){return m("a.test-cls.test2-cls");}}));
        var expected = parent2.innerHTML;
        assert.equal(actual, expected);
    });
    it("classNames should be appended when classNames supplied.", () => {
        m.render(parent1, m(componentWithDefault({tagName: "button", class: "test-cls test2-cls"}), {class: "test3-cls test4-cls"}));
        var actual = parent1.innerHTML;
        m.render(parent2, m({view(){return m("button.test3-cls.test4-cls.test-cls.test2-cls");}}));
        var expected = parent2.innerHTML;
        assert.equal(actual, expected);
    });
    it("classNames should be unique.", () => {
        m.render(parent1, m(componentWithDefault({tagName: "button", class: "test-cls test2-cls"}), {class: "test3-cls test2-cls"}));
        var actual = parent1.innerHTML;
        m.render(parent2, m({view(){return m("button.test3-cls.test2-cls.test-cls");}}));
        var expected = parent2.innerHTML;
        assert.equal(actual, expected);
    });
    it("should trigger events when event methods are supplied.", () => {
        var output = "";
        m.render(parent1, m(componentWithDefault({tagName: "button", class: "test-cls test2-cls"}), {onclick(){output+="clicked.";}}));
        eventFire(parent1.childNodes[0], "click");
        assert.equal(output, "clicked.");
    });
    it("should trigger lifecycle events when lifecycle methods are supplied.", () => {
        var output = "";
        m.render(parent1, m(componentWithDefault({tagName: "button", class: "test-cls test2-cls"}), {oncreate(){output+="created.";}}));
        assert.equal(output, "created.");
    });
    it("should trigger lifecycle events once when default lifecycle methods are defined.", () => {
        var output = "";
        m.render(parent1, m(componentWithDefault({tagName: "button", class: "test-cls test2-cls", oncreate(){output+="created.";}})));
        assert.equal(output, "created.");
    });
    it("should trigger each lifecycle events when default lifecycle methods are defined and additional lifecycle methods are passed.", () => {
        var output = "";
        m.render(parent1, m(componentWithDefault({tagName: "button", class: "test-cls test2-cls", oncreate(){output+="created1.";}}), {oncreate(){output+="created2."}}));
        assert.equal(output, "created2.created1.");
    });
});
