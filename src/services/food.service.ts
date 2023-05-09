import { Router } from 'express';
import models from '../models';

const routes = Router();

routes.get('/allFood', async (req, res) => {
  try {
    const foods = await models.Food.findAll();
    return res.status(200).send(foods);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
});

routes.get('/food/:id', async (req, res) => {
  try {
    const foodById = await models.Food.findOne({ where: { id: req.params.id } });
    return res.status(200).send(foodById);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
});

routes.post('/createFood', async (req, res) => {
  try {
    const createdFood = await models.Food.create({
      name: req.body.name,
      description: req.body.description,
      imgUrl: req.body.imgUrl,
    });
    return res.status(200).send(createdFood);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
});

routes.put('/updateFood', async (req, res) => {
  try {
    const updatedFoodId = await models.Food.update(
      {
        name: req.body.name,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        nrOfRatings: req.body.nrOfRatings,
        rating: req.body.rating,
      },
      { where: { id: req.body.id } }
    );
    return res.status(200).send({ updatedFoodId });
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
});

routes.delete('/deleteFoodById', async (req, res) => {
  try {
    const isDeleted =
      (await models.Food.destroy({
        where: {
          id: req.body.id,
        },
      })) === 1
        ? true
        : false;
    return res.status(200).send({ successfulDelete: isDeleted });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ error: e.message });
  }
});

export default routes;
