"use strict";
const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

(async () => {
	const emailComFunc = pug.compileFile(`${__dirname}/templates/email.pug`);
	const html = emailComFunc({
		name: "James"
	});
	const text = htmlToText.fromString(html);

	const trans = nodemailer.createTransport({
		host: "127.0.0.1",
		port: 1025,
		secure: false,
		auth: {
			user: "hello",
			pass: "there"
		}
	});

	const response = await trans.sendMail({
		from: "'Omer Abdi' <omer@info.com",
		to: "someone@example.com",
		subject: "Hello World",
		text,
		html
	});

	console.log(response);
})().catch(console.error);
