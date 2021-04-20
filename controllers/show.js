// Why do we need this twice? Because need to access the router
const express = require("express");
const { Missions } = require("../models");

const router = express.Router(); // Okay so this is saying router is the specific method within express that already exists.

// This is here because we'll be pulling data from models, and sending through controller directory...
const db = require("../models");

router.get("/", function(req, res) {
    const context = {
		allMissions: db.Missions,
	};
	res.render("missions/index", context);
});




router.get("/missions/:name", function (req, res) {
	const missionName = req.params.name;
	const foundMission = db.Missions.find(function (mission) {
		return Missions.name === missionName;
	});
	const context = {
		mission: foundMission,
	};
	res.render("missions/show", context);
});












module.exports = router; // What does this mean? We need a router exported somewhere?


