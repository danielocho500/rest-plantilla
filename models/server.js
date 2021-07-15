require('dotenv').config()

const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 8080
        this.usuariosPath= '/api/usuarios'

        this.middlewares()

        this.routes()
        this.listen()
    }

    middlewares(){
        
        this.app.use(cors())
        //lectura y parseo
        this.app.use( express.json()) 

        //directorio publico        
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en puerto: "+this.port)
        })
    }
}

module.exports = Server