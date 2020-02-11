// require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
// var spotify = new Spotify(keys.spotify);


var command = process.argv;

if (command[2] === "movie-this") {

    axios
        .get(`http://www.omdbapi.com/?t=${command[3]}&apikey=6e2bb9b`)
        .then(function (response) {
            var result = response.data;
            // console.log(response.data);

            console.log("Movie Title: " + result.Title);
            console.log("Year of release: " + result.Year);
            console.log("Imdb Rating: " + result.imdbRating);
            console.log("Rotten Tomatoes Rating: " + result.Ratings[2].Value);
            console.log("Country: " + result.Country);
            console.log("Language: " + result.Language);
            console.log("Summary: " + result.Plot);
            console.log("Actors: " + result.Actors);







        })
        .catch(function (error) {
            console.log(error);

        })
        .finally({});
}
else if (command[2] === "concert-this") {

    if (command[3] === "") {
        console.log("Please enter a value");

    }
    else {


        axios
            .get(`https://rest.bandsintown.com/artists/${command[3]}/events?app_id=codingbootcamp`)
            .then(function (response) {
                var result = response.data;
                // console.log(result[1]);

                console.log("Artist: " + command[3]);
                console.log("Venue: " + result[1].venue.name);
                console.log("Location: " + result[1].venue.city + ", " + result[1].venue.region);
                console.log("Date: " + result[1].datetime);

            })
            .catch(function (error) {
                console.log(error);

            })
            .finally({});
    }


}
else {
    console.log("invalid command, please try again");
}