import { Events } from "discord.js"
import { Event } from "../Interfaces"

export const event: Event = {
    data: {
        event: Events.ClientReady,
        description: "Event is called when Client is ready."
    },
    run: (client) => {
        console.log(`Successfully logged in as ${client.user.tag}!`);
    }
}