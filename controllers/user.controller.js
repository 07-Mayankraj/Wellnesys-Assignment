const fs = require('fs');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    let { name, email, password, address } = req.body;
    try {
        // get data form json and parse it
        let db = fs.readFileSync("./configs/db.json", "utf8");
        db = JSON.parse(db)

        bcrypt.hash(password, 5, async (err, hashPassword) => {
            if (hashPassword) {
                let newuser = ({ name, email, password: hashPassword, address });
                // adding the new user to json
                db.users.push(newuser);
                // updating the json 
                fs.writeFileSync('./configs/db.json', JSON.stringify(db));
                console.log(newuser);
                res.status(201).send('user registered successfully');
            } else {
                res.send("error whhile signup password");
            }

        })
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.getUserData = async (req, res) => {
    try {
        // get data form json and parse it
        let db = fs.readFileSync("./configs/db.json", "utf8");
        db = JSON.parse(db)
        res.status(200).send(db);
    } catch (error) {
        res.status(400).send(error.message);
    }
}