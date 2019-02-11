let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let fthing = require('../models/fthings');

/* GET Favourite things List page - READ Operation */
router.get('/', (req, res, next) =>{
    fthing.find((err, fthingList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(contactList);

            res.render('fthings/index', {
                title: 'Favourite Things',
                fthingList: fthingList
            });
            
        }
    });
});

module.exports = router; 