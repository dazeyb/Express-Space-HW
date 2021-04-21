/* ===== External Modules ===== */
// bring in OUTSIDE code
const express = require("express");
// const methodOverride = require("method-override"); This is for posting or deleting on server


/* ===== Internal Modules ===== */
// bring in code from another file
const db = require("./models");
const controllers = require("./controllers");


/* ===== Instanced Modules ===== */
const app = express(); // the express module requires us to create an object from the express function

/* ===== Configuration Variables / PORT ===== */
const PORT = 3000;

/* ===== App Configuration ===== */
// set the view engine to ejs
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));

// run `npm install` to install dependencies in package.json  DONE

// * Your mission is to complete the app
// * The app will need routes for index and show DONE
// * The app will need views for index and show DONE
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page to view the data
//

// We'll need a for loop to write out the mission names, pulling from the array (bond hw).
// This will make a button


// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed   DONE
// views folder has not been created    DONE
// views/missions folder has not been created   DONE



// DATA - move this to a file called marsMissions.js inside of a models folder    DONE
// remember to export (module.exports)    DONE
// remember to require it in the server    DONE


// INDEX Route
// send data to 'missions/index.ejs' view    DONE
// the view should display just the names of each mission     DONE
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

// LISTENER,  Put at the very end
/* ===== Server Bind ==== */
// Bind our server to a port
app.listen(PORT, function() {
  console.log('Missions to Mars running on port: ', PORT);
});



// This is going to use the file in the directory into the index.js, to grab the variable exportedShowsController
app.use("/", controllers.exportedShowController);






module.exports = app;