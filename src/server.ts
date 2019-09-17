import * as express from 'express'

const app = express()
const PORT = process.env.PORT || 3111

app.get('/', (_req, res) => {
    res.send('Hello from File Cabinet!')
})

app.listen(PORT, () => {
    console.log(`🗄 File Cabinet running on port:`, PORT)
})