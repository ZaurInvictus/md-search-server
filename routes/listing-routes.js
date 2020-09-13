const router = require('express').Router()
const Listings = require('../models/listing-models')
const Users = require('../models/user-models')
const auth = require('../middleware/protected.js')
const checkRole = require('../middleware/checkRole.js')



// GET ALL LISTINGS
router.get('/', (req, res) => {
  Listings.find()
   .then(listings => {
      res.status(200).json(listings)
   })
    .catch(err => res.send(err))
})


// POST
router.post('/', async (req, res) => {
    // const item = req.body
    const { 
        title, employer, employer_website, employer_logo, employer_logo_public_id,
        hospital, type, description, location, address, city, state, zip, pay_amount, 
        pay_type, shift_length, shift_amount, application_email, user_id
    } = req.body

    try {
      // Check if id is correct
      let user = await Users.findById(user_id)
      if (!user) {
        return res.status(400).json({ 
            errors: [{ msg: `User with the '${user_id}' not found` }] 
          })
      }  

      // Check if title already used for the client 
      // Will make sure if we need to have listings unique
      let listing = await Listings.findBy({ title })
      if (listing) {
        return res.status(400).json({ 
            errors: [{ msg: `Sorry, listing'${title}' has already been registered.` }] 
          })
      }   
  
        const newItem = await Listings.add({
            title, employer, employer_website, employer_logo, employer_logo_public_id,
            hospital, type, description, location, address, city, state, zip, pay_amount, 
            pay_type, shift_length, shift_amount, application_email, user_id
        })
        res.status(201).json(newItem)
    } catch(error) {
        res.status(500).json({
            errors: [{msg:`Could not add listing`}], 
            error: error
        })
    }
})





// GET LISTING BY ID
router.get('/:id', async (req, res) => {
   const { id } = req.params
   try {
       const listing = await Listings.findById(id)
       if(!listing) {
           return res.status(404).json({
               errors: [{msg: `Could not find item with ID: ${id}`}] 
           })
       }
       res.status(200).json(listing)

   } catch(error) {
       res.status(500).json({
           errors: [{msg: "Server error. Please contact info@ebien.com for assistance."}], 
           error: error
       })
   }
})



// UPDATE
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const newItemData = req.body
    try {

        const updatedItem = await Listings.updateById(id, newItemData)
        //if(!updatedItem || updatedItem !== 1) {
        if(!updatedItem) {
             return res.status(400).json({
                errors: [{msg: `Could not find item with ID: ${id}`}] 
            })
        }

        // RETURNS UPDATED ITEM
        const updatedListing = await Listings.findById(id)
        res.status(200).json(updatedListing)
    } catch(error) {
        res.status(500).json({
            errors: [{ msg: 'Error updating listing data.' }], 
            error: error
        })
    }
})




// DELETE
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const count = await Listings.deleteById(id)
        if (!count) {
            return res.status(404).json({
                errors: [{ msg: `Could not find item with ID: ${id}` }], 
            })
        } 
        res.status(200).json(count)
    } catch(error) {
        res.status(500).json({
            errors: [{ msg: `Could not delete item with ID: ${id}` }], 
            error: error
        })
    }
})



module.exports = router