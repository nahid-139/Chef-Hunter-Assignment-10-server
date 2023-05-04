const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./chef.json');
const recipes = require('./recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef Custody is running')
});

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(n => n.id === id);
    res.send(selectedChef)
})

app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    if (id === 0) {
        res.send(recipes)
    }
    else {
        const categoryRecipes = recipes.find(n => parseInt(n.id) === id);
        res.send(categoryRecipes)
    }

})

app.listen(port, () => {
    console.log(`Chef Recipe API is running on port: ${port}`)
})