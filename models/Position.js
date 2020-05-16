const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const positionSchema = new Scheme({
    name: {
        type: String,
        required: true
    },
    const: {
        type: Number,
        required: true
    },
    category: {
        ref: 'categories',
        type: Scheme.Types.ObjectId
    }
    }
)

module.exports = mongoose.model('position', positionSchema )