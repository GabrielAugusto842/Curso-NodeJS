const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //Select
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    //Select by id
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //Insert
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //Update
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    //Delete
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};