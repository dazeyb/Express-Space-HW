// This is exporting the shows.js file in controller directory, because express pulls from all the index files
// This is saying grab that file at that location, rename it as the other thing.
module.exports = {
    exportedShowsController: require("./show.js")
};