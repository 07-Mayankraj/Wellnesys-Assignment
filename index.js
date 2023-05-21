require('dotenv').config();
const express = require('express')
const app = express();
const { userRouter } = require('./routes/user.route');
const {logRequest} = require('./middleware/logRequest.middleware');
const port = process.env.port || 8080;



// middleware
app.use(express.json())
 app.use(logRequest);
// home route
app.get('/', (req, res) => res.status(200).send("Welcome user!"));
// routers
app.use("/users", userRouter)

app.listen(port, () => {
    try {
        console.log('server listening on port ' + port,);
    } catch (error) {
        console.log(error.message);
    }
})
