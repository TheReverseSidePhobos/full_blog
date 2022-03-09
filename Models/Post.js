const {Schema, model} = require('mongoose');

const schema = new Schema({
  title: {type: String, require: true},
  text: {type: String, require: true},
  imgUrl: {type: String, require: true},
})

module.exports = model('Post', schema);