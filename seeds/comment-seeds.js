const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "fireee!!!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Wow, great work team!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Very Usefull"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Thanks for the tutorial!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "this is great!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "thanks for the tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Thanks! this is nice"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;