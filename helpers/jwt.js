const jwt = require('jsonwebtoken');

const generarJWT = ( user_id, user_name, user_perfil ) => {

    return new Promise ( (resolver, reject) => {

        const payload = { user_id, user_name, user_perfil };

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '12h',
        }, (err, token) => {

            if( err ){
                console.log(err);
                reject('No se pudo generar el token.');
            }

            resolver(token);

        })

    })

}

module.exports = {
    generarJWT
}