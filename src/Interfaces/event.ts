import { Client, Events } from "discord.js";

interface Data {
    event: Events,
    description: string
}

interface Run {
    (client: Client, ...args: any[])
}

export interface Event {
    data: Data,
    run: Run
}