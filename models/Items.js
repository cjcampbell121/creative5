var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
  title: String,
  price: String,
  quantity: Number
});

/*
ItemSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
*/

mongoose.model('Item', ItemSchema);
