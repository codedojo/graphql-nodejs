const crypto = require('crypto');

const Todo = require('./model');

module.exports = {
    todo: ({ id }) => Todo.findById(id),
    todos: ({ status }) => Todo.find({ status }),

    createTodo: ({ input }) => {
        return Todo.create(input);
    },

    updateTodo: ({ id, input }) => {
        return Todo.findByIdAndUpdate(id, input, { new: true });
    },

    deleteTodo: ({ id }) => {
        return Todo.deleteOne({ _id: id }).then(() => id);
    }
};