const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const orderSchema = new Scheme({
    date:{
        type: Date
    },
    order:{
        type: Number,
        required:true,
    },
    list:[
        {
            name:{
                type: String,
            },
            quantity:{
                type: Number,
            },
            cost:{
                type: Number,
            }
        }
    ],
    user:{
        ref: 'users',
        type: Scheme.Types.ObjectId
    }
})

module.exports = mongoose.model('orders', orderSchema )