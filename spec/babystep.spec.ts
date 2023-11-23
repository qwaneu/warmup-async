'use strict';

import { expect, assert } from "chai"
import { CreateTimerHtml } from "../src/babystep"

describe("A new babysteps timer", function() {  
    it ("contains the time", () => {
        expect(document.querySelector("h1")?.innerHTML).to.equal("blah")
    });
})


