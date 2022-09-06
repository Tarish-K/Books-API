const mongoose = require('mongoose')


const Books= new mongoose.Schema ({ 
    
    name: { type: String, required: true },
    pic: { type: String, default: 'http://placekitten.com/350/350'},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
   

})



const RR = mongoose.model('RR', Books)
module.exports = RR