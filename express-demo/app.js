const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router')
const app = express()


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


app.use(express.static('assets'))  //http://127.0.0.1:4796/js/test.js
app.use('assets', express.static(path.join(__dirname, 'assets'))) //http://127.0.0.1:4796/assets/js/test.js
app.use('node_modules', express.static(path.join(__dirname, 'node_modules'))) 
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))



app.use(router)
/*
 * 解析get请求参数，req.query
 * 解析post请求参数，req.body
 */
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res) => res.send('圣杯战争!'))
app.get('/saber', (req, res) => res.send('I\'am sbaer'))
app.get('/archer', (req, res) => {
	res.render('404.html', {
		name: 'archer'
	})
})

app.listen(4796, () => console.log('Example app listening on port 4796!'))