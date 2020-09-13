
exports.up = function(knex) {
    return knex.schema
    .createTable('listings', tbl => {
        tbl.increments()
        tbl.string('title', 255).notNullable()
        tbl.string('employer', 255).notNullable()
        tbl.string('employer_website', 255).notNullable()
        tbl.string('employer_logo', 255).notNullable()
        tbl.string('employer_logo_public_id', 255).notNullable()
        tbl.string('hospital', 255).notNullable()
        tbl.string('type', 255).notNullable() // Select - Emergency, Intensive Care, Primary Care

        tbl.string('description', 255).notNullable()
        tbl.string('location', 255).notNullable()
        tbl.string('address', 255).notNullable()
        tbl.string('city', 255).notNullable()
        tbl.string('state', 255).notNullable()
        tbl.string('zip', 255).notNullable()

        tbl.string('pay_amount', 255).notNullable()
        tbl.string('pay_type', 255).notNullable()
        tbl.string('shift_length', 255).notNullable()
        tbl.string('shift_amount', 255).notNullable()
        tbl.string('application_email', 255).notNullable()

        tbl
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl.timestamp('created_at').defaultTo(knex.fn.now())
    })
        
  }
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('listings')
  }