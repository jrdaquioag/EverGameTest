require("dotenv").config();
const axios = require('axios');
// const db = require('../models');
const keys = require('../keys')

module.exports = {

    search: (req, res) => {

        axios.get("https://api-v3.igdb.com/games", {
            headers: {
                "user-key": "dd3daba0559c0275f3cdcbfbb826ef0e",
                Accept: "application/json"
            },
            params: {

                search: req.body.searchContent,
                fields: "name,genres.name,involved_companies.company,involved_companies.developer,involved_companies.publisher,involved_companies.company.name,cover.image_id,release_dates.date,release_dates.human,summary",
                "filter[cover.image_id][exists]": "null",
                "filter[involved_companies][exists]": "null",
                "filter[release_dates][exists]": "null",
                "filter[genres][exists]": "null",
                limit: 50

            }


        })
            .then((response) => {
                console.log("****************  THIS IS THE DATA COMING FROM IGDB API *********************")
                console.log(response.data);
                console.log("END OF ********  THIS IS THE DATA COMING FROM IGDB API *********************")
                res.json(response.data)
            })
            .catch(e => {
                console.log("error", e);
            });

    },
    queryPopular: function (req, res) {
        axios.get("https://api-v3.igdb.com/games", {
            headers: {
                "user-key": "dd3daba0559c0275f3cdcbfbb826ef0e",
                Accept: "application/json"
            },
            params: {
                fields: "name,popularity,genres.name,involved_companies.company,involved_companies.developer,involved_companies.publisher,involved_companies.company.name,cover.image_id,release_dates.date,release_dates.human,summary",
                "filter[cover.image_id][exists]": "null",
                "filter[involved_companies][exists]": "null",
                "filter[release_dates][exists]": "null",
                "filter[genres][exists]": "null",
                order: "popularity:desc",
                limit: 10
            }
        })
            .then((response) => {
                console.log("****************  THIS IS THE POPULAR LIST DATA COMING FROM IGDB API *********************")
                console.log(response.data);
                console.log("END OF ********  THIS IS THE DATA COMING FROM IGDB API *********************")
                res.json(response.data)
            })
            .catch(e => {
                console.log("error", e);
            });

    }

}
