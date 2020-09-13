const db = require('../database/db-config.js')

module.exports = {
  add,
  find,
  deleteById,
  findBy,
  findById,
  updateById,
}


// POSTGRE & SQLITE
async function add(listing) {
  let ids = await db('listings').insert(listing, 'id')
  const [id] = ids
  return findById(id) // returns the newly added record
}

// async function add(user) {
//   let [id] = await db("users").insert(user, "id")
//   return db('users').where({ id }).first()
// }

function find() {
  return db('listings').select('*')
}

function findBy(filter) {
  return db('listings').select('*').where(filter).first()
}

function findById(id) {
  return db('listings')
  .select('*').where({id}).first()
}


async function deleteById(id) {
  try {
      const delUserCount = await db('listings').where({
          id
      }).del()
      return delUserCount
  } catch (error) {
      return {
          code: error.code,
          errno: error.errno,
          message: error.message,
      }
  }
}


async function updateById(id, listing) {
  try {
    const count = await db('listings').where({ id }).update(listing)
    return count
  } catch (error) {
      return {
          message: error.message
      }
  }
}





