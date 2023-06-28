import { GatewayIntentBits, Partials } from "discord.js";
import Client from "./Client";

const Intents: GatewayIntentBits[] = [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
]

const PartialsArray: Partials[] = [
    Partials.Channel
]

new Client({
    intents: Intents,
    partials: PartialsArray
}).init();