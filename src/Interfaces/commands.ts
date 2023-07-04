import Client from "../Client";
import { Message } from "discord.js";

interface Data {
    name: string
    aliases?: string[]
    description: string
    staff_only: boolean
}

interface Run {
    (client: Client, message: Message, args: string[])
}

export interface Commands {
    data: Data
    run: Run
}