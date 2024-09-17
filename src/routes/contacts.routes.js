const express = require('express');
const contactsController = require('../controllers/contacts.controller');
const { methodNotAllowed } = require('../controllers/errors.controller');

const router = express.Router();

module.exports.setup = (app) => {
    app.use('/api/v1/contacts', router);

    /**
     * @swagger
     * /api/v1/contacts:
     *   get:
     *     summary: Get contacts by filter
     *     description: Retrieve contacts by applying filters.
     *     parameters:
     *       - in: query
     *         name: favorite
     *         schema:
     *           type: boolean
     *         description: Filter contacts by favorite status
     *       - in: query
     *         name: name
     *         schema:
     *           type: string
     *         description: Filter contacts by name
     *     tags:
     *       - contacts
     *     responses:
     *       200:
     *         description: A list of contacts
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                   type: string
     *                   description: The response status
     *                   enum: [success]
     *                 data:
     *                   type: object
     *                   properties:
     *                     contacts:
     *                       type: array
     *                       items:
     *                         $ref: '#/components/schemas/Contact'
     */

    /**
     * @swagger
     * /api/v1/contacts:
     *   post:
     *     summary: Create a new contact
     *     description: Add a new contact to the list.
     *     requestBody:
     *       required: true
     *       content:
     *         multipart/form-data:
     *           schema:
     *             $ref: '#/components/schemas/Contact'
     *     tags:
     *       - contacts
     *     responses:
     *       201:
     *         description: A new contact
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                   type: string
     *                   description: The response status
     *                   enum: [success]
     *                 data:
     *                   type: object
     *                   properties:
     *                     contact:
     *                       $ref: '#/components/schemas/Contact'
     */

    /**
     * @swagger
     * /api/v1/contacts:
     *   delete:
     *     summary: Delete all contacts
     *     description: Remove all contacts from the list.
     *     tags:
     *       - contacts
     *     responses:
     *       200:
     *         description: All contacts deleted
     *         $ref: '#/components/responses/200NoData'
     */
    /**
     * @swagger
     * /api/v1/contacts{id}:
     *   get:
     *     summary: Get contact by ID
     *     description: Get contact by Id
     *     paramenters:
     *       - ref: '#/components/parameters/contactIdParam'
     *     tags:
     *       - contacts:
     *     responses:
     *       200:
     *         description: A contact
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                   type: string
     *                   description: the responses status
     *                   enum: [success]
     *                 data:
     *                   type: object
     *                   properties:
     *                     contact:
     *                       $ref: '#/components/schemas/Contact'
     */
    /**
     * @swagger
     * /api/v1/contacts/{id}:
     *   put:
     *     summary: Update contact by ID
     *     description: Update contact by ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: The ID of the contact to update
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         multipart/form-data:
     *           schema:
     *             $ref: '#/components/schemas/Contact'
     *     tags:
     *       - contacts
     *     responses:
     *       200:
     *         description: Updated contact
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                   type: string
     *                   description: The response status
     *                   enum: [success]
     *                 data:
     *                   type: object
     *                   properties:
     *                     contact:
     *                       $ref: '#/components/schemas/Contact'
     */
    /**
     * @swagger
     * /api/v1/contacts:
     *   delete:
     *     summary: Delete by ID
     *     description: Delete contact by ID
     *     paramenters:
     *       - ref: '#/components/parameters/contactIdParam'
     *     tags:
     *       - contacts
     *     responses:
     *       200:
     *         description: Contact deleted
     *         $ref: '#/components/responses/200NoData'
     */

    router.get('/', contactsController.getContactsByFilter);
    router.post('/', contactsController.createContact);
    router.delete('/', contactsController.deleteAllContacts);
    router.all('/', methodNotAllowed);

    router.get('/:id', contactsController.getContact);
    router.put('/:id', contactsController.updateContact);
    router.delete('/:id', contactsController.deleteContact);
    router.all('/:id', methodNotAllowed);
};