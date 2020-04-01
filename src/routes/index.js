const express =  require('express');
const router = express.Router();

//routes
router.get('/', (req, res) => {
    res.render('index.html', {title: 'pageWeb-node-express'});
})

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact pageWeb-node-express'});
})

module.exports = router;