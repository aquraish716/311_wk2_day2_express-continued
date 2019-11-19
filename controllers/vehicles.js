const vehicles = require("../data/vehicles");


const list = (req, res) => {
    res.json(vehicles)
};


const show = (req, res) => {
    const id = req.params.id;
    const match = vehicles.find(vehicles  => vehicles._id === Number(id));
    
    res.json(match);
};


const create = (req, res) => {
    let id = vehicles.length + 1;
    const vehicle = {
        _id: id,
        postId: 1,
        ...req.body
    }

    vehicles.push(vehicle);
};

module.exports = {list, show, create};