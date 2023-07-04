import { ChannelType, Events, Message } from 'discord.js';
import ExtendedClient from '../Client';
import { Commands, Event } from '../Interfaces';
import { SupportRequested } from '../Scripts';

function ExecuteCommand(client: ExtendedClient, message: Message) {
    const args = message.content.slice(client.config.PREFIX.length).trim().split(' ')
    const cmd = args.shift().toLowerCase();
    if (!cmd) return;
    const command = client.commands.get(cmd) || client.aliases.get(cmd);
    if (command) (command as Commands).run(client, message, args);
}

export const event: Event = {
    data: {
        event: Events.MessageCreate,
        description: "Event is called when Message is sent."
    },
    run: (client: ExtendedClient, message: Message) => {
        if (message.author.bot) return;
        if (message.channel.type === ChannelType.DM && !message.content.startsWith(client.config.PREFIX)) return SupportRequested(client, message);
        if (message.content.startsWith(client.config.PREFIX)) return ExecuteCommand(client, message)
    }
}