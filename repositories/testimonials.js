const testimonialsModel = require('../models/testimonial');

// get all testimonials
async function getAll() {
  const response = await testimonialsModel.findAll();
  return response;
}

// get one testimonial by id
async function getById(id) {
  const response = await testimonialsModel.findOne({
    where: { id: id }
  });
  return response;
}

// create testimonial
async function create(data) {
  const response = await testimonialsModel.create({
    name: data.name,
    image: data.image,
    content: data.address,
  });
  return response;
}

// update testimonial
async function update(id, data) {
  const response = await testimonialsModel.update(data, {
    where: { id: id }
  });
  return response;
}

// delete testimonial
async function remove(id) {
  const response = await testimonialsModel.destroy({
    where: { id: id }
  });
  return response;
}

module.exports = { getAll, getById, create, update, remove };