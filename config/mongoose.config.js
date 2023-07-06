const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/jokes_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Established connection to DB!"))
    .catch(err => console.log("Failed to establish connection to DB!", err));