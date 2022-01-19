// STRETCH
const cars = [
    {
        vin: 'JH4DA9460LS000685',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '4S3BD4353T7209207',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '4A3AK24FX6E028812',
        make: 'ford',
        model: 'focus',
        mileage: 1500,
    },
]


exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}