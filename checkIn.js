let mysql = require('mysql');

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQL",
    database: "assignment2"
});

conn.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
})

// create an event, will register the name and date 
const addEvent = () =>{
   
    const readline = require('node:readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(`What is the name of your event?`, responseName => {
        console.log(`Event ${responseDate} has been successfully registered.`);
        rl.close();
    });

    rl.question(`What is the date of your event?`, responseDate => {
        console.log(`Event ${responseDate} has been successfully registered.`);
        rl.close();
    });
     
    conn = `INSERT INTO events (eventName, eventDate) VALUES (${responseName}, ${responseDate})`;

};

// register an attendee with name and email 
const addAttendee = () => {

      const readline = require('node:readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(`What is the email of your attendee?`, responseEmail => {
        console.log(`Email ${responseEmail} has been successfully registered.`);
        rl.close();
    });

    rl.question(`What is the full name of the attendee?`, responseFullName => {
        console.log(`Attendee ${responseFullName} has been successfully registered.`);
        rl.close();
    });
     
    conn = `INSERT INTO attendees (attendeeEmail, attendeeName) VALUES (${responseEmail}, ${responseFullName})`;

};

// check to see if an event has been registered, will show date and name of the event 
const checkEvent = () => {
      const readline = require('node:readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(`What event would you like to check?`, responseEvent => {
        conn.query(`SELECT * FROM events WHERE eventName = ${responseEvent}`, function (err, result, fields){
            if(err) throw err;
            console.log(result);
        });
        rl.close();
    });
};

// generate report about event including: number of attendees 

const printReport = () => {
      const readline = require('node:readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(`What event would you like a report for?`, responseEvent => {
        conn.query(`SELECT eventName, eventDate, COUNT(attendee_id) FROM events 
                    WHERE eventName = ${responseEvent}
                    JOIN attendee_event WHERE eventID = eventID 
                    JOIN attendee WHERE attendee_id = attendee_id`, function(err, result, fields){
                        if(err) throw err;
                        console.log(result);
                    });
        rl.close();    
    });
};