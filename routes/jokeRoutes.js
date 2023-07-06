const JokeController = require("../controllers/jokeController");

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes)
    app.get('/api/jokes/:id', JokeController.getOneJoke)
    app.post('/api/jokes/new', JokeController.createJoke)
    app.put('/api/jokes/update/:id', JokeController.updateJoke)
    app.delete('/api/jokes/delete/:id', JokeController.deleteJoke)
}