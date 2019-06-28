const http = require('http')
const path = require('path')
const url = require('url')
const express = require('express')
const app = express()

// const server = http.createServer((req, res)=>{
// 	req.query = url.parse(req.url, true).query
// 	req.body = {
// 		name : 'saber'
// 	}
// })





// 1. 任意方法都可以进入中间件，应用级别的中间件
// next 进入下一个中间件
app.use((req, res, next)=>{
	console.log(1)
	next()
})

app.use((req, res, next)=>{
	console.log(2)
	next()
})

// 2.路由级别的中间件
app.use('/saber', (req, res, next)=>{
	//  /saber/archer => req.url => /archer
	console.log('saber')
})


// 3. 404， 在app.use(router)之后调用
// 只有前面路由都不匹配才404
app.use((req, res, next)=>{
	//  /saber/archer => req.url => /archer
	console.log('404')
	res.render('404.html')
})

// 4. 错误级别中间件 通过next(err)传输参数触发
app.use((err, req, res, next)=>{
	console.log(err)
})


app.listen(4796, ()=>{
	console.log('running')
})
