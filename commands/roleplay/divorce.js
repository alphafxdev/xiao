const commando = require('discord.js-commando');

module.exports = class DivorceCommand extends commando.Command {
    constructor(Client) {
        super(Client, {
            name: 'divorce',
            group: 'roleplay',
            memberName: 'divorce',
            description: 'Divorces someone. (;divorce @User)',
            examples: [';divorce @User'],
            args: [{
                key: 'thing',
                prompt: 'What do you want to roleplay with?',
                type: 'string'
            }]
        });
    }

    run(message, args) {
        if (message.channel.type !== 'dm') {
            if (!message.channel.permissionsFor(this.client.user).hasPermission(['SEND_MESSAGES', 'READ_MESSAGES'])) return;
        }
        const thingToRoleplay = args.thing;
        return message.say(`${message.author} *divorces* ${thingToRoleplay}`);
    }
};
