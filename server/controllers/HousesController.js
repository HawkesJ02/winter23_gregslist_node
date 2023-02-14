import BaseController from "../utils/BaseController.js";
import { housesService } from "../services/HousesService.js";

export class HousesController extends BaseController {
constructor(){
  super('api/houses')
  this.router
    .get('', this.get_houses)
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
}