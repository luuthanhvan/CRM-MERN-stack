const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/ContactsController');
// const authController = require('../controllers/AuthController');
// const jwtHelper = require('../config/jwtHelper');

router.post('/', contactsController.storeContact); // store a contact
router.post('/list', contactsController.getListOfContacts); // get list of contacts
router.get('/:id', contactsController.getContact); // get a contact by contact ID
router.put('/:id', contactsController.updateContact); // update a contact by contact ID
router.delete('/:id', contactsController.deleteContact); // delete a contact by contact ID
router.post('/delete', contactsController.multipleDeleteContact); // delete multi contacts
router.post('/search', contactsController.findContacts);
router.post('/search/date', contactsController.findContactsByDate);

// router.post('/list', jwtHelper.verifyJwtToken, authController.verifyUser, contactsController.getListOfContacts); // get list of sales order

module.exports = router;