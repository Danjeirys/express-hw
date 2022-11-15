const express = require ('express')
const app = express ()

// const stuff = ['anime', 'food', 'sleep']
const fs = require ('fs')

app.engine ('one', (filePath, options, callback) => {
    fs.readFile (filePath, (err, content) => {
        if (err) return callback (err)
        const rendered = content.toString()
            .replace ('#title#', '<title>' + options.title + '</title>')
            .replace ('#message#', '<h1>' + options.message + '</h1>')
            .replace ('#content#', '<div>' + options.content + '</div>')
        return callback (null, rendered)
    })
})

app.set ('views', './views')
app.set ('view engine', 'one')

app.get ('/1', (req, res) => {
    res.render ('template', {
        title: 'Anime',
        message: 'I love anime', 
        content: 'Anime is the best!'
    })
})

app.get ('/2', (req, res) => {
    res.render ('template', {
        title: 'Food', 
        message: 'Food is awesome',
        content: 'If you dont love food something wrong with you'
    })
})

app.get ('/3', (res, res) => {
    res.render ('template', {
        title: 'You should have hobbies!', 
        message: 'Hobbies are great', 
        content: 'I love to watch anime, I skate, I code'
    })
})

app.get ('/4', (req, res) => {
    res.render ('template', {
        title: 'Careers', 
        message: 'Whats your dream job', 
        content: 'When thinking of what careet path you want to take, consider what can bring you money if you do it having fun.'
    })
})

app.get ('/5', (req, res) => {
    res.render ('template', {
        title: 'Im out of ideas', 
        message: 'Hello', 
        content: 'I like star wars'
    })
})

app.get ('/6', (req, res) => {
    res.render ('template2', {
        title: 'Motivation!', 
        message: 'Motivation is key!', 
        content: 'Find what makes you get up and out of bed in the morning'
    })
})

app.get ('/7', (req, res) => {
    res.render ('template2', {
        title: 'Im bored', 
        message: 'What are you doing?', 
        content: 'Im super bored and dont got anything to really say.'
    })
})

app.get ('/8', (req, res) => {
    res.render ('template2', {
        title: 'Hello!', 
        message: 'Do you play games!', 
        content: 'If you play games add me on playstation, psn XxjaysavagexX12'
    })
})

app.get ('/9', (req, res) => {
    res.render ('template2', {
        title: 'Overwatch 2', 
        message: 'Overwatch 2 is great!', 
        content: 'Ive been playing overwatch 2 non stop for the past couple weeks'
    })
})

app.get ('/10', (req, res) => {
    res.render ('template2', {
        title: 'Finally the last one!', 
        message: 'This was long and tedius', 
        contnet: 'Im going front end for sure in the field'
    })
})