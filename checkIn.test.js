const test = require("node:test");
const assert = require("node:assert/strict");

const { 
    addEvent,
    addAttendee,
    checkEvent,
    printReport
} = require("../Assignment2/checkIn");

//addEvent
test.describe("Testing addEvent function", () => {
    test("addEvent function should take a string for the name", () =>{
        assert.strictEqual(addEvent("QA and You: Examing Your Role in the Development Lifespan"))
    });
    test("addEvent function should take a date following YYYY-MM-DD format", () => {
        assert.strictEqual(addEvent("2026-12-31"))
    })
    test("addEvent throws an error for non-string input", () => {
        assert.throws(() => addEvent(TBD), {name: "TypeError"})
    });
    test("addEvent throws an error for formats that don't follow YYYY-MM-DD format", () => {
        assert.throws(() => addEvent("01-12-2026"), {name: "TypeError"})
    });
});

//addAttendee 
test.describe("Testing addAttendee function", () => {
    test("addAttendee function should take a string for the email", () => {
        assert.strictEqual(addAttendee("thisisanemail@email.com"))
    });
    test("addAttendee should only take unique emails once, otherwise throw an error due to replication", () => {
        assert.strictEqual(addAttendee("thisisauniqueemail@email.com", "thisisadifferentemail@email.com"))
    });
    test("addAttendee throws an error for non-string input for emails", () => {
        assert.throws(() => addAttendee(thisisabademailATemail.com), {name: "TypeError"})
    });
    test("addAttendee should throw an error if an email is used more than once", () => {
        assert.throws(() => addAttendee("thisisanemail@email.com", "thisisanemail@email.com"), {name: "UNIQUE constraint failed"})
    });
    test("addAttendee function should accept a string for the name", () => {
        assert.strictEqual(addAttendee("John Doe"))
    });
    test("addAttendee should throw an error for non-string inputs for the name", () => {
        assert.throws(() => addAttendee(John), {name: "TypeError"} )
    });     
});

//checkEvent 
test.describe("Testing checkEvent function", () => {
    test("checkEvent function should take a string for the request and return the name and date of the associated event", () => {
        assert.strictEqual(checkEvent("QA and You: Examing Your Role in the Development Lifespan"), 
        "QA and You: Examing Your Role in the Development Lifespan","2026-12-31")
    });
    test("checkEvent should throw an Error if the event name is not in the database", () => {
        assert.throws(() => checkEvent ("Extra Special Topics: Adding AI to Your AI"), {name: "Event Not Found"});
    });
    test("checkEvent should throw an error if the request is not formatted as a string", () => {
        assert.throws(() => checkEvent (Extra), {name: "TypeError"});
    });
});

//printReport
test.describe("Testing the printReport function", () => {
    test("printReport function should take a string for the request and combine tables from" +
        "the database to showcase the event information and the number of people that are attending", () =>{
            assert.strictEqual(printReport("QA and You: Examing Your Role in the Development Lifespan"), 
            "QA and You: Examing Your Role in the Development Lifespan", "2026-12-31", 3);
    });

    test("printReport should throw an error if an event name is not in the database", () => {
        assert.throws(() => checkEvent ("Extra Special Topics: Adding AI to Your AI"), {name: "TypeError"});
    });
});