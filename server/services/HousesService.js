import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class HousesService{

  async get_houses(query) {
    const houses = await dbContext.Houses.find(query)
    return houses
  }

 async get_house_by_id(house_id) {
   const house = await dbContext.Houses.findById(house_id)
  if (!house) {
    throw new BadRequest('Not a found House ID pal')
  }
return house
 }
 async create_house(house_data) {
   const house = await dbContext.Houses.create(house_data)
   return house
 }


  async delete_house(house_id) {
    const house = await this.get_house_by_id(house_id)
    await house.remove()
    return house
   }

}

export const housesService = new HousesService()