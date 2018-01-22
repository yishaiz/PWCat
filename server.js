const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
/*
const favicon = require('serve-favicon')
const path = require('path')
*/

const app = express()

app.use((req, res, next) => {
        console.log('process.env.NODE_ENV', process.env.NODE_ENV)

        if (process.env.NODE_ENV === 'production' && req.headers[ 'x-forwarded-proto' ] !== 'https') {

            const sslUrl = [ 'https://', req.hostname, req.url ].join('')

            return res.redirect(sslUrl);
        }

        next()
    }
)

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


//
// const data = require('./app/data/data')
// const beerRoute = require('./app/routes/beerRoute')


app.use(express.static('dist'))
app.use(bodyParser.json())

app.use(morgan('dev'))

// app.use("/images", express.static('images'))


// app.use('/data', data)
// app.use('/beer', beerRoute)


const port = process.env.PORT || 7000
const server = app.listen(port, () => console.log(`Server listening on ${port}`))
