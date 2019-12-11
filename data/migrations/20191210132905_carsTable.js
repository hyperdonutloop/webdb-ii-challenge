
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl.string('vin')
      .notNullable()
      .unique();
    
    tbl.string('make', 128)
      .notNullable();

    tbl.string('model', 128)
    .notNullable();

    tbl.integer('mileage')
      .notNullable();


    tbl.string('transmission_type');

    tbl.boolean('salvage').defaultTo(false);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
