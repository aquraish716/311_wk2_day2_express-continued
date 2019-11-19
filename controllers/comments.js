const comments = require("./data/comments");

const list = (req, res) => {
    res.json(comments)
};


const show = (req, res) => {
    const id = req.params.id;
    const match = comments.find(comments  => comments._id === Number(id));
    
    res.json(match);
};


const create = (req, res) => {
    let id = comments.length + 1;
    const comment = {
        _id: id,
        postId: 1,
        ...req.body
    }

    comments.push(comment);
};

module.exports = {list, show, create};