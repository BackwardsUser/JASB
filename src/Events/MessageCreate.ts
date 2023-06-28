import { ChannelType, Events, Message } from 'discord.js';
import ExtendedClient from '../Client';
import { Event } from '../Interfaces';
import { SupportRequested } from '../Scripts';

export const event: Event = {
    data: {
        event: Events.MessageCreate,
        description: "Event is called when Message is sent."
    },
    run: (client: ExtendedClient, message: Message) => {
        console.log(message.content)
        if (message.author.bot) return;
        if (message.channel.type === ChannelType.DM) return SupportRequested(client, message);
        
    }
}