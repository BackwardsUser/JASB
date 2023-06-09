import { GatewayIntentBits } from "discord.js";
import Client from "./Client";

const Intents: GatewayIntentBits[] = [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds
]

new Client({
    intents: Intents
}).init();