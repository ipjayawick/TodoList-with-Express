const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const db = require('./database')
const app = express()

// Handlebars Middleware
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', async (req, res) => {
    const list = await db.getList()
    res.render('index', { items: list })
    //console.log(list)
})

app.post('/add', async (req, res) => {
    let { todo_item } = req.body;
    if (todo_item!="") {
        const result = await db.createTodo(todo_item)
    }
    //console.log(req.body)
    res.redirect('/')
})

app.post('/delete/:id', async (req, res) => {
    const item=req.params.id
    const result = await db.deleteTodo(item)
    //console.log(req.params)
    res.redirect('/')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})