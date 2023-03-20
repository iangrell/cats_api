import { Cat, fakeDB} from "../db/FakeDB.js" 
import { BadRequest } from "../utils/Errors.js"



class CatsService{

    async getCats(query) {
        let cats = []
        if (query.color) {
            cats = await fakeDB.cats.filter(c => c.color.toLowerCase() == query.color.toLowerCase())
        } else {
            cats = await fakeDB.cats
        }
        return cats
    }

    async getCatById(catId) {
        const cat = await fakeDB.cats.find(c => c.id == catId)
        if (!cat) {
            throw new BadRequest("Invalid ID, no cat was found")
        }
        return cat
    }

    async createCat(catData) {
        if (!catData.name || !catData.id || !catData.color) {
            throw new BadRequest("Required cat data not found")
        }
        const newCat = new Cat(catData)
        await fakeDB.cats.push(newCat)
        return newCat
    }

    async deleteCat(catId) {
        const catIndex = await fakeDB.cats.findIndex(c=> c.id == catId)
        if (catIndex == -1) {
            throw new BadRequest('Cat not found')
        }
        fakeDB.cats.splice(catIndex, 1)
    }

}

export const catsService = new CatsService()