import bcrypt from 'bcrypt'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'John@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'Jane@example.com',
        password: bcrypt.hashSync('1234567', 10),
    },

]


export default users;
