const express = require('express')
const server = express()
const fs = require('fs')
server.use(express.urlencoded())
server.use(express.static('public'))

server.post('/signup', (req, res)=> {
fs.writeFileSync('info.json',JSON.stringify(req.body))
res.send('added to file')

})

server.post('/login', (req, res) =>{
   
let data = JSON.parse(fs.readFileSync('info.json', 'utf8'))
if(data.password == req.body.password){
//res.redirect('http://localhist:3000/home.html') //serven som skickar iväg dynamisc serven som visar
//res.end()
res.sendFile(__dirname + '/public/home.html')
}else{
    res.send('invalid password')
}
})

server.listen(3000, function(err) {
    console.log('connected');
})