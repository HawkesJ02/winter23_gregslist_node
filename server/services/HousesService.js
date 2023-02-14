import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class HousesService{
 async create_house(house_data) {
   const house = await dbContext.Houses.create(house_data)
   return house
 }
 async get_houses(query) {
    const houses = await dbContext.Houses.find(query)
    return houses
  }

}

export const housesService = new HousesService()