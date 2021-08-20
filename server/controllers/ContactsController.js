const Contacts = require('../models/Contacts');
const apiResponse = require('../helpers/apiResponse');
const datetime = require('../helpers/datetime');

/* 
ContactsController contains function handlers to handle request from Contacts page.
It will recieve the data from client, send to its model and vice versa. 
This model will interact with database to store or update data.
*/
class ContactsController {
    // [POST] /contacts - function to store a contact information
    storeContact(req, res){
        // console.log(req);
        // setTimeout(() => {
            try{
                const contacts = new Contacts(req.body);
                contacts
                    .save()
                    .then(() => {
                        return apiResponse.successResponse(res, 'Add contact successfully');
                    });
    
            }catch(err){
                return apiResponse.ErrorResponse(res, err);
            }
        // }, 1000);
    }

    // [POST] /contacts/list - function to get a list of contacts information
    getListOfContacts(req, res){
        try{
            // const isAdmin = req.isAdmin,
            //     name = req.name;
            // if(!isAdmin){
            //     Contacts
            //         .find({assignedTo : name})
            //         .then((contacts) => {
            //             if(contacts.length > 0)
            //                 return apiResponse.successResponseWithData(res, 'Success', {contacts: mutipleMongooseToObject(contacts)});
            //             else
            //                 return apiResponse.successResponseWithData(res, 'Success', {contacts:[]});
            //         });
            // }
            // else {
                Contacts
                    .find({})
                    .then((contacts) => {
                            return contacts.length > 0 ? 
                                apiResponse.successResponseWithData(res, 'Success', {contacts: contacts}) :
                                apiResponse.successResponseWithData(res, 'Success', );
                    });
            // }
        }catch(err){
            return apiResponse.ErrorResponse(res, err);
        }
    }

    // [GET] /contacts/:id - function to get a contact information by contact ID
    getContact(req, res){
        let contactId = req.params.id;
        try{
            Contacts
                .findOne({ _id: contactId })
                .then((contact) => {
                    return apiResponse.successResponseWithData(res, 'Success', {contact: contact});
                });
        }catch(err){
            return apiResponse.ErrorResponse(res, err);
        }
    }

    // [PUT] /contacts/:id - function to update a contact information by contact ID
    updateContact(req, res){
        let contactId = req.params.id;
        let contactInfo = req.body;
        // setTimeout(() => {
            try{
                Contacts
                    .updateOne({ _id: contactId }, contactInfo)
                    .then(() => {
                        return apiResponse.successResponse(res, 'Update contact successfully');
                    });
            }catch(err){
                return apiResponse.ErrorResponse(res, err);
            }
        // }, 1000);
    }

    // [DELETE] /contacts/:id - function to delete a contact information by contact ID
    deleteContact(req, res){
        let contactId = req.params.id;
        // setTimeout(() => {
            try{
                Contacts
                    .remove({ _id: contactId })
                    .then(() => {
                        return apiResponse.successResponse(res, 'Delete contact successfully');
                    });
    
            }catch(err){
                return apiResponse.ErrorResponse(res, err);
            }
        // }, 1000);
    }

    // [POST] /delete - function to delete multi contacts information by list of contact ID
    multipleDeleteContact(req, res){
        let contactIds = req.body;
        // setTimeout(() => {
            try{
                Contacts
                    .remove({ _id: { $in : contactIds }})
                    .then(() => {
                        return apiResponse.successResponse(res, 'Delete list of contacts successfully');
                    })
            }catch(err){
                return apiResponse.ErrorResponse(res, err);
            }
        // }, 1000);
    }

    // [POST] /search - function to find contacts
    findContacts(req, res){
        try {
            let filterKey = req.body.key,
                filterValue = req.body.value;

            Contacts
                .find({ [filterKey] : filterValue })
                .then((contacts) => {
                    
                    return apiResponse.successResponseWithData(res, 'Success', { contacts: contacts });
                })
        }catch(err){
            return apiResponse.ErrorResponse(res, err);
        }
    }

    // [POST] /search/date - function to find contacts by date range
    findContactsByDate(req, res){
        try {
            let filterKey = req.body.key,
                from = req.body.from,
                to = req.body.to;

            Contacts
                .find({})
                .then((contacts) => {
                    contacts = contacts.filter(contact => {
                        let date = datetime.dateFormat(contact[filterKey]);
                        return ( new Date(date) >= new Date(from)) && (new Date(date) <= new Date(to));
                    });

                    return apiResponse.successResponseWithData(res, 'Success', { contacts: contacts });
                })
        }catch(err){
            return apiResponse.ErrorResponse(res, err);
        }
    }
}

module.exports = new ContactsController();