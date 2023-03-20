import BaseController from "../utils/BaseController.js";
import { catsService } from "../services/CatsService.js";




export class CatsController extends BaseController {
    constructor() {
        super('api/cats')
        this.router
            .get('', this.getCats)
            .get('/:catId', this.getCatById)
            .post('', this.createCat)
            .delete('/:catId', this.deleteCat)
    }

    async getCats(req, res, next) {
        try {
            const query = req.query
            const cats = await catsService.getCats(query)
            return res.send(cats)
        } catch (error) {
            next(error)
        }
    }

    async getCatById(req, res, next) {
        try {
            const catId = req.params.catId
            const cat = await catsService.getCatById(catId)
            return res.send(cat)
        } catch (error) {
            next(error)
        }
    }

async createCat(req, res, next) {
    try {
        const catData = req.body
        const cat = await catsService.createCat(catData)
        return res.send(cat)
    } catch (error) {
        next(error)
    }
    }

    async deleteCat(req, res, next) {
        try {
            const catId = req.params.catId
            await catsService.deleteCat(catId)
            return res.send('Cat deleted')
        } catch (error) {
            next(error)
        }
    }
}