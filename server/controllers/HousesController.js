import BaseController from "../utils/BaseController.js";
import { housesService } from "../services/HousesService.js";

export class HousesController extends BaseController {
constructor(){
  super('api/houses')
  this.router
    .get('', this.get_houses)
    .get('/:house_id', this.get_house_by_id)
    .post('', this.create_house)
    .delete('/:house_id', this.delete_house)
}

async get_houses(req, res, next){
  try {
    const query = req.query
    const houses = await housesService.get_houses(query)
    res.send(houses)
  } catch (error) {
    next(error)
  }
}

async create_house(req, res, next){
  try {
    const house_data = req.body
    const house = await housesService.create_house(house_data)
    res.send(house)
  } catch (error) {
    next(error)
  }
}

async get_house_by_id(req, res, next){
  try {
    const house_id = req.params.house_id
    const house = await housesService.get_house_by_id(house_id)
    return res.send(house)
  } catch (error) {
    next(error)
  }
}

async delete_house(req, res, next){
try {
  const house_id = req.params.house_id
  const house = await housesService.delete_house(house_id)
  return res.send(house)
} catch (error) {
  next(error)
}
}
}