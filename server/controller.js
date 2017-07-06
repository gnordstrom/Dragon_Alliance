module.exports = {
    getSurfers: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.getSurfers()
            .then( (surfers) => {
                console.log(surfers)
                res.status(200).send(surfers)
            })
            .catch( () => res.status(500).send())
    }
}