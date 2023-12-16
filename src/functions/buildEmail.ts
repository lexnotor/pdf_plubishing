import { createMimeMessage } from "mimetext";
import ejs from "ejs";
import dotenv from "dotenv";
import fs from "fs/promises";

dotenv.config();

const buildEmail = async (
    text: string,
    user: { lname: string; fname: string; email: string },
) => {
    const msg = createMimeMessage();

    msg.setSender({
        addr: process.env.SEND_TO_EMAIL,
        name: process.env.SEND_TO_NAME,
    });
    msg.setTo({
        addr: process.env.SEND_TO_EMAIL,
        name: process.env.SEND_TO_NAME,
    });

    msg.setSubject(process.env.SEND_TO_SUBJET);

    const temp = await fs.readFile(
        process.cwd() + "/src/functions/mail_template.ejs",
        "utf8",
    );

    const html = await ejs.render(temp, { text, user }, { async: true });

    msg.addMessage({
        contentType: "text/html",
        data: html,
        headers: { "Content-Type": "text/html" },
        charset: "utf8",
    });

    return msg;
};

export default buildEmail;
