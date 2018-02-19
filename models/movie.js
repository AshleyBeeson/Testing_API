const restful = require("node-restful");
const mongoose = restful.mongoose;

// create ninja Schema & model
const MovieSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, 'title field is required']
    },
    US_Gross:{
        type: Number
    },
    Worldwide_Gross:{
        type: Number
    },
    US_DVD_Sales:{
        type: Number
    },
    Production_Budget:{
        type: Number
    },
    Release_Date:{
        type: String
    },
    MPAA_Rating:{
        type: String
    },
    Running_Time_min: {
        type: Number
    },
    Distributor:{
        type: String
    },
    Source: {
        type: String
    },
    Major_Genre:{
        type: String
    },
    Creative_Type:{
        type: String
    },
    Director:{
        type: String
    },
    Rotten_Tomatoes_Rating:{
        type: Number
    },
    IMDB_Rating:{
        type: Number
    },
    IMDB_Votes:{
        type: Number
    }
});

module.exports = restful.model("movie", MovieSchema);
