let express = require("express"),
    nodemailer = require('nodemailer'),
    bodyParser = require('body-parser'),
    cors = require('cors');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.post('/contact', function (request, response) {
    let transporter = nodemailer.createTransport({
        host: 'mail.gmx.net',
        port: 587,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        }
    });

    let mailContent = `
        <h3>Name</h3>${request.body.name}
        <h3>E-Mail</h3>${request.body.email}
        <h3>Selected option</h3>${request.body.selected_option}
        <h3>Description</h3>${request.body.description}
    `;

    let mailOptions = {
        from: '"' + request.body.name + '" simon-isler@gmx.ch',
        to: 'mail@simonisler.ch',
        subject: 'contact request | simonisler.ch',
        html: mailContent,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            response.send(400);
        } else {
            response.send(200);
        }
    });

    response.end();
});

let server = app.listen(8084, function () {
    console.log("Server started at http://localhost:%s", server.address().port);
});
