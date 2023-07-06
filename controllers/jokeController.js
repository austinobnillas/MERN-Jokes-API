const Joke = require("../models/Jokes");

module.exports = {
    getAllJokes: (req, res) => {
        Joke.find()
            .then( allJokes => res.json({jokes: allJokes}))
            .catch( err => console.log(err));
    },

    getOneJoke: (req, res) => {
        Joke.findById({_id: req.params.id})
            .then( oneJoke => res.json({joke: oneJoke}))
            .catch( err => console.log(err));
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then( newJoke => res.json({joke: newJoke}))
            .catch( err => console.log(err));
    },

    updateJoke: ( req, res ) => {
        Joke.findByIdAndUpdate({_id: req.params.id}, 
            req.body, {
                new: true, 
                runValidators: true
            })
            .then( updatedJoke => res.json({joke: updatedJoke}))
            .catch(err => console.log(err));
    },

    deleteJoke: ( req, res ) => {
        Joke.findByIdAndDelete({ _id: req.params.id })
            .then(result => res.json({ results: result}))
            .catch(err => console.log(err));
    }
}