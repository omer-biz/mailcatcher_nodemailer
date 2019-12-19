"use strict";
const nodemailer = require("nodemailer");

(async () => {
	const trans = nodemailer.createTransport({
		host: "127.0.0.1",
		port: 1025,
		secure: false,
		auth: {
			user: "",
			pass: ""
		}
	});

	const response = await trans.sendMail({
		from: "'Omer Abdi' <omer@info.com",
		to: "someone@example.com",
		subject: "Hello World",
		text: "Hello World",
		html: "<h1>Hello World</h1>"
	});

	console.log(response);
})().catch(console.error);
