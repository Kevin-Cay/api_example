import moment from 'moment';

const persons =[
    {
        id: 1,
        name: 'Arto Helias',
        number: '040-123456',
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523',
    },
    {
        id: 3,
        name: 'Dan Abramov',
        number: '12-43-234345',
    },
    {
        id: 4,
        name: 'Mary Poppendieck',
        number: '39-23-6423122',
    }
]

export const getPersons = async (req, res) => {
    try {
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getPerson = async (req, res) => {

    try {
            res.json({
                person: persons.find(person => person.id === Number(req.params.id))
            })        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}