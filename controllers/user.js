
const userGet = (req, res) => {
    res.json({
        msg: 'get API'
    })
}

const userPost = (req, res) => {
    const {edad} = req.body;

    const {id} = req.params

    const { q, nombre, apikey} = req.query

    res.json({
        msg: 'post API',
        nombre,
        edad,
        id,
        q,
        nombre,
        apikey
    })
}

const userPut = (req, res) => {
    

    res.json({
        msg: 'put API',
        nombre,
        edad
    })
}

const userDelete =(req, res) => {
    res.json({
        msg: 'delete API'
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}