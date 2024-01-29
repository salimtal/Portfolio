const jwt = require('jsonwebtoken')
const secretkey = process.env.KEY_HASH;
const extractBearer = authorization => {

    if(typeof authorization !== 'string'){
        return false
    }

    // On isole le token
    const matches = authorization.match(/(bearer)\s+(\S+)/i)

    return matches && matches[2]

}


const checkTokenMiddleware = (req, res, next) => {

    const token = req.headers.authorization && extractBearer(req.headers.authorization)

    if(!token){
        return res.status(401).json({ message: 'Token manquant'})
    }

    // Vérifier la validité du token
    jwt.verify(token, secretkey, (err, decodedToken) => {
        if(err){
            return res.status(401).json({message: 'Mauvais token'})
        }

        next()
    })
}
module.exports = checkTokenMiddleware