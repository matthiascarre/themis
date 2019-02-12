const mongoose = require('mongoose');

const FirstModelSchema = mongoose.Schema({
  itemName: {
    type : String,
    required: true
  },
  itemQuantity: {
    type: String,
    required: true
  },
  itemBought:{
    type: Boolean,
    required: true
  }
});

const Item = module.exports = mongoose.model('Item', FirstModelSchema);
