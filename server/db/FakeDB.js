export class Cat {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.color = data.color
    }
}

class FakeDB {
    cats = [
        new Cat({
            id: 1,
            name: 'Lou',
            color: 'gray',
        }),
        new Cat({
            id: 2,
            name: 'Bill',
            color: 'orange',
        }),
        new Cat({
            id: 3,
            name: 'Sally',
            color: 'black',
        }),
        new Cat({
            id: 4,
            name: 'Stella',
            color: 'brown',
        }),
        new Cat({
            id: 5,
            name: 'John',
            color: 'gray',
        }),

    ]
}

export const fakeDB = new FakeDB()