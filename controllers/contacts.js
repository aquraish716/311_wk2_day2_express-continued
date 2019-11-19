const contacts = require("../data/contacts");

const list = (req, res) => {
    res.json(contacts)
};


const show = (req, res) => {
    const id = req.params.id;
    const match = contacts.find(contacts  => contacts._id === Number(id));
    
    res.json(match);
};


const create = (req, res) => {
    let id = contacts.length + 1;
    const contact = {
        _id: id,
        postId: 1,
        ...req.body
    }

    contacts.push(contact);
};

module.exports = {list, show, create};