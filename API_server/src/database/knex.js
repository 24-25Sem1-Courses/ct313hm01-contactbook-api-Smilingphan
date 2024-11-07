const { avatarUpload } = require('../middlewares/avatar-upload.middleware');
const { readContact, contactRepository } = require('../services/contacts.services');

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '',
        database: 'ct313h_lab',
    },
    pool: { min: 0, max: 10 },
});