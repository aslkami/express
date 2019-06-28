const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/animals', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'saber' });
kitty.save().then(() => console.log('meow'));