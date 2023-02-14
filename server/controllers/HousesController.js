import BaseController from "../utils/BaseController.js";
import { housesService } from "../services/HousesService.js";

export class HousesController extends BaseController {
constructor(){
  super('api/houses')
  this.router
    .get('', this.get_houses)
    .post('', this.create_house)
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


}