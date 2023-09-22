const { User } = require('../models');

const userData = [
    {
        username: "TEST",
        twitter: "Test",
        github: "test",
        email: "test1@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "test2",
        twitter: "test2",
        github: "test2",
        email: "test2@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "test3",
        github: "test3",
        email: "test3@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "test4",
        twitter: "test4",
        github: "test4",
        email: "test4@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "test5",
        twitter: "test5",
        github: "test5",
        email: "test5@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "test6",
        twitter: "test6",
        github: "test6",
        email: "test6@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;