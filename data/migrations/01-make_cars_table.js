exports.up = function (knex) {
  return knex.schema.createTable('cars', table => {
    table.increments() //leaving this empty because i.d is the default

    table.string('vin', 17).notNullable().unique()

    table.string('make', 128).notNullable()

    table.string('model', 128).notNullable()

    table.integer('mileage').unsigned().notNullable() //unsigned is to make it so mileage is not a negative number

    table.string('title', 128)
    
    table.string('transmission', 128)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
