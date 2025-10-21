// Create a new router
const express = require("express");
const router = express.Router();
const path = require("path");

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!")); 
router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
router.get("/contact", (req, res) => res.send("<h1>Contact me via hwane001@campus.goldsmiths.ac.uk"));
router.get("/date", (req, res) => {
    const now = new Date(); // Istantiate a new Date object
    // Format the date and time so it is mor readable
    const formattedDateTime = now.toLocaleString("en-GB", {
        weekday: "long",    // e.g., Tuesday
        year: "numeric",    // e.g., 2025
        month: "long",      // e.g., October
        day: "numeric",     // e.g., 21
        hour: "2-digit",    // e.g., 14
        minute: "2-digit",  // e.g., 12
        second: "2-digit",  // e.g., 05
        hour12: false       // 24-hour format
    });
        res.send(`<h1>Today's date and time is ${formattedDateTime}</h1>`);
    });
    router.get("/welcome/:name", (req, res) => res.send(`<h1>Welcome ${req.params.name}</h1>`));
    router.get("/chain", (req, res, next) => {
        console.log("This comes from the 1st part of the chain :)");
        next()
    }, (req, res) => {
        res.send("<h1>This comes from the 2nd part of the chain ;)");
    });
    // Use .. to go into parent folder where a.html is
    router.get("/file", (req, res) => res.sendFile(path.join(__dirname, "..", "a.html"))); // Use path.join to safely construct full path to file

// Export the router object so index.js can access it
module.exports = router;
