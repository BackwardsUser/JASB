import { Message } from "discord.js";
import ExtendedClient from "../Client";
import { ActiveThread } from "../Interfaces";
import { SupportRequestEmbed } from "../Embeds";

const activeThreads: ActiveThread[] = []; // Move to JSON File for permanence through crash/restart.

export function SupportRequested(client: ExtendedClient, message: Message) {
    let activeThread: ActiveThread = {
        UserID: message.author.id,
        Position: 0,
        SupportStatus: "unresolved",
        SupportType: undefined
    }
    activeThreads.push(activeThread);
    message.reply({ embeds: [ SupportRequestEmbed(client, message) ]})
}