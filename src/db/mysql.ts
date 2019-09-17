import { createConnection } from 'mysql'

function mysql(): any {
    return createConnection({
        // Where does this information live?
        host: 'localhost',
        user: 'me',
        password: 'secret',
        database: 'my_db'
    })
}

export default mysql