
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '1234GHTYDDBNDBSD', make: 'Nissan', model: 'Altima', mileage: 30000, transmission_type: 'automatic', salvage: true},
        {vin: '3454JHFCNBCHFDHS', make: 'Buick', model: 'LeSabre', mileage: 50000, transmission_type: 'automatic', salvage: false},
        {vin: '567HDBSGE7347473', make: 'Toyota', model: 'Prius', mileage: 60000, transmission_type: 'automatic', salvage: true},
        {vin: '635HSQ6547DHCBSS', make: 'Tesla', model: 'S', mileage: 60000, transmission_type: 'electric', salvage: false}
      ]);
    });
};
