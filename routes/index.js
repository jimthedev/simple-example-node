var express = require('express');
const { Pool } = require('pg');
var router = express.Router();

const pool = new Pool({
  connectionString: process.env.QOVERY_DATABASE_MY_DB_CONNECTION_URI,
})

/* GET home page. */
router.get('/', async function (req, res, next) {
    // you can also use async/await
    const res = await pool.query('SELECT NOW()')
    
    res.render('index', {title: 'Express' + res});
    await pool.end()
});



module.exports = router;
