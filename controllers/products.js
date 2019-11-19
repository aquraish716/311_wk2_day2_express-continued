const products = require("../data/products");

const list = (req, res) => {
    res.json(products)
};


const show = (req, res) => {
    const id = req.params.id;
    const match = products.find(products  => products._id === Number(id));
    
    res.json(match);
};


const create = (req, res) => {
    let id = products.length + 1;
    const product = {
        _id: id,
        postId: 1,
        ...req.body
    }

    products.push(product);
};

module.exports = {list, show, create};