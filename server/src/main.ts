import * as fastify from 'fastify';
import { notifyMembersAboutMember, notifyMembersAboutCustomer } from './mailer';

const server = fastify({ logger: true });

const MEMBERS = JSON.parse(process.env.MEMBERS) as string[];

server.post('/api/v1/join', async (request, reply) => {
    await notifyMembersAboutMember(MEMBERS, request.body);
    server.log.info('Email notification about member message was sended...');
    reply.send();
});

server.post('/api/v1/customer', async (request, reply) => {
    await notifyMembersAboutCustomer(MEMBERS, request.body)
    server.log.info('Email notification about customer message was sended...');
    reply.send();
});

server.listen(process.env.PORT, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`Server listening on ${address}`);
});
