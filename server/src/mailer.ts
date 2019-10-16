import { createTransport } from 'nodemailer';
import { compile } from 'handlebars';
import { IClientFormApi, IJoinFormApi } from 'interfaces/api';

const mailTransporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSOWRD,
    },
});

export async function notifyMembersAboutCustomer(members: string[], data: IClientFormApi) {
    const promises = members.map((member) => mailTransporter.sendMail({
        to: member,
        from: 'Code of Power',
        priority: 'high',
        subject: 'Новое сообщение от потенциального заказчика.',
        text: `${data.name} (${data.email}) из ${data.company} отправил нам сообщение:
        \n\n
        ${data.message}.
        \n
        Его интересует: ${data.interested}.`
    }));
    await Promise.all(promises);
}

export async function notifyMembersAboutMember(members: string[], data: IJoinFormApi) {
    const promises = members.map((member) => mailTransporter.sendMail({
        to: member,
        from: 'Code of Power',
        priority: 'high',
        subject: 'Новое сообщение от потенциального участника.',
        text: `${data.name} (${data.email}) отправил нам сообщение:
        \n\n
        ${data.message}.
        \n
        Его специализация: ${data.specialisation}.`
    }));
    await Promise.all(promises);
}