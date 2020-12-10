var nodemailer = require("nodemailer");
var config = require("../../configs/config");

var Mailgen = require("mailgen");

module.exports = {
    sendMail: async function (name, email, code) {
        try {
            let transporter = await nodemailer.createTransport({
                service: "Yahoo",
                secure: true,
                auth: {
                    user: config.email.user,
                    pass: config.email.pass
                },
            });
            let MailGenerator = new Mailgen({
                theme: "default",
                product: {
                    name: "JobPortal",
                    link: "https://robosoftin.com",
                },
            });
            let response = {
                body: {
                    name,
                    intro: "Check the following   " + code,
                },
            };
            let mail = MailGenerator.generate(response);
            let message = {
                from: config.email.user,
                to: email,
                subject: "Verify your email",
                html: mail
            };

            await transporter
                .sendMail(message);
        } catch (error) {
            console.log(error);
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }

    
}
