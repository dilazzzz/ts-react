interface dataType  {
    name: string,
    surname: string,
    age: number,
    work: string,
    isDaun: boolean,
    address:  {
        country: string,
        city: string,
        street: string,
        house: number,
    },
    'favoriteGames': (string | number)[]
}

const data = [

                {
                name: 'Egor',
                surname: 'Tilin',
                age: 25,
                work: 'Frontend-junior',
                isDaun: false,
                address: {
                    country: 'Turkey',
                    city: 'Fethie',
                    street: 'Erasta str',
                    house: 42,
                },
                'favoriteGames': ['dota', 'couter-strike', 2048]
                },

                {
                    name: 'Sasha',
                    surname: 'Pol',
                    age: 26,
                    work: 'Frontend-god',
                    isDaun: true,
                    address: {
                        country: 'Turkey',
                        city: 'Fethie',
                        street: 'Erasta str',
                        house: 42,
                    },
                    'favoriteGames': ['dota', 'minecraft', 1488]
                },

                {
                    name: 'Tema',
                    surname: 'Koz',
                    age: 27,
                    work: 'Frontend-jun',
                    isDaun: false,
                    address: {
                        country: 'Turkey',
                        city: 'Fethie',
                        street: 'Erasta str',
                        house: 42,
                    },
                    'favoriteGames': ['assassin', 'couter-strike', 1337]
                },
]

type GetDataType = (data: dataType) => {
    initials: string,
    age: number,
    work:string,
    isDaun: boolean,
    address: string,
    favGames: (string | number)[]
}

const getData: GetDataType = (data) => {
    return  {
        initials: `${data.name} ${data.surname}`,
        age: data.age,
        work: data.work,
        isDaun: data.isDaun,
        address: `${data.address.country}, ${data.address.city}, ${data.address.street}, ${data.address.house}`,
        favGames: data.favoriteGames
    }
}

export {getData, data}

