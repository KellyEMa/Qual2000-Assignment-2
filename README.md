## What was Built 

`checkIn.js` : database connection, queries that will fill database, queries to search through database

The expected path is: 
1.  Get User input for creation of event
2.  Add information for event into database
3.  Get user input to fill event with attendee information  

## Database 

### `events`

- `eventID` INTEGER PRIMARY KEY AUTOINCREMENT
- `eventName` TEXT NOT NULL 
- `eventDate` DATE NOT NULL

### `attendees`

- `attendee_id` INTEGER PRIMARY KEY AUTOINCREMENT
- `attendeeEmail` TEXT NOT NULL UNIQUE
- `attendeeName` TEXT NOT NULL

### `attendee_event`

- `eventID` INTEGER 
- `attendee_id` INTEGER
- `eventID` FOREIGN KEY
- `attendee_id` FOREIGN KEY

### Service Contract 

### `addEvent`

Input: 

- `responseName`: non-empty string
- `responseDate`: non-empty string

Behaviour: 

- Inserts into `events`

Error Behaviour:

- Invalid input throws `TypeError`


### `addAttendee`

Input: 

- `responseEmail`: unique non-empty string
- `responseFullName`: non-empty string

Behaviour:

- Inserts into `attendees`

Error Behviour:

- Invalid input throws `TypeError`
- Duplicate `responseEmail` fails with `UNIQUE constraint failed` error

### `checkEvent`

Input: 

- `responseEvent` non-empty string

Behaviour: 

- Checks if event name exists in database
- Returns date and name of associated event 

Error Behaviour: 

- Invalid input throws `Type Error`
- Event not existing in database throws `Event Not Found` error

### printReport

- Input `responseEvent ` non-empty string 

Behviour: 

- checks if name exists in database
- counts number of attendees associated with event 
- returns associated information with requested event 

Error Behaviour: 

- Invalid input throws `Type Error`
- Inexistant input throws `Type Error`

## Quick Start for QA 

```js
const test = require("node:test");
const assert = require("node:assert/strict");

const { 
    addEvent,
    addAttendee,
    checkEvent,
    printReport
} = require("../Assignment2/checkIn");

```