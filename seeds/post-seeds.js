const { Post } = require('../models');

const postData = [
    {
        title: "10 Essential for coding",
        post_content: "This post covers 10 Topics You Should Prepare for Coding and Programming Interviews",
        user_id: 1
    },
    {
        title: "A Guide on web design using react",
        post_content: "Say no more on hard coding front pages! the tutorial.",
        user_id: 2
    },
    {
        title: "10 things you should never say to you boss",
        post_content: "Phrases to Never Say to Your Boss.",
        user_id: 3

    },
    {
        title: "Tech Blog has been released!",
        post_content: "We created a blog , where developers can publish their blog posts and engage.",
        user_id: 4
    },
    {
        title: "The Future of Artificial Intelligence: 10 things you should know",
        post_content: "Ten Things You Need to Know About AI.",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;