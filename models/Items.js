var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
  title: String,
  price: String,
  quantitys: {type: Number, default: 0}
});

ItemSchema.methods.quantity = function(cb) {
  this.quantitys += 1;
  this.save(cb);
};

mongoose.model('Item', ItemSchema);
