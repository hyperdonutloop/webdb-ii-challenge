
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl => {
    tbl.increments();

    tbl.integer('vin')
      .notNullable()
      .unique()
      .index();
    
    tbl.string('make', 128)
      .notNullable()
      .unique()
      .index();

    tbl.string('model', 128)
    .notNullable()
    .unique()
    .index();

    tbl.integer('mileage')
      .notNullable()
      .unique()
      .index();

    tbl.string('transmission_type')
    .unique()
    .index();

    tbl.boolean('salvage').defaultTo(false)
      .unique()
      .index();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
