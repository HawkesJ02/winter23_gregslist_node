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

 async update_house(house_id, house_data) {
  const found_house = await this.get_house_by_id(house_id)
  found_house.description = house_data.description || found_house.description
  found_house.bedrooms = house_data.bedrooms || found_house.bedrooms
  found_house.price = house_data.price || found_house.price
  found_house.imgUrl = house_data.imgUrl|| found_house.imgUrl
  found_house.year = house_data.year || found_house.year
  await found_house.save()
  return found_house
}


  async delete_house(house_id) {
    const house = await this.get_house_by_id(house_id)
    await house.remove()
    return house
   }

}

export const housesService = new HousesService()