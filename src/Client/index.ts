import ConfigJson from "../JSON/config.development.json";
import { Client, ClientOptions, Collection } from "discord.js";
import { Config, Commands, Event } from "../Interfaces";

import { join } from "node:path";
import { readdirSync } from "node:fs";


export default class ExtendedClient extends Client {

    constructor(options: ClientOptions) {
        super(options);
    }

    public commands: Collection<string, Commands> = new Collection();
    public events: Collection<string, Event> = new Collection();
    public config: Config = ConfigJson;
    public aliases: Collection<string, Commands> = new Collection();

    public async init() {
        this.login(this.config.TOKEN);
        
        const commandPath = join(__dirname, "..", "Commands");
        readdirSync(commandPath).forEach( (dir: string) => {
            const commands = readdirSync(`${commandPath}\\${dir}`).filter(file => file.endsWith('.ts'));
            for (const file of commands) {
                const { command } = require(`${commandPath}\\${dir}\\${file}`);
                this.commands.set(command.data.name, command);
                if(command?.aliases == undefined) return;
                command.data.aliases.forEach(alias => {
                    this.aliases.set(alias, command);
                });
            }
        });

        const eventPath = join(__dirname, "..", "Events");
        readdirSync(eventPath).forEach(async file => {
            const { event } = await import(`${eventPath}/${file}`);7
            this.events.set(event.data.event, event);
            this.on(event.data.event, event.run.bind(null, this));
        });
    }
}