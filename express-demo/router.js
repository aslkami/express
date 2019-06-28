const express = require('express')
const router = express.Router()


router.get('/berserker', (req, res) => {
	res.send('berserker')
})



module.exports = router