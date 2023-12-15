import { Message } from 'discord.js';
import ExtendedClient from '../../Client';
import { Commands } from '../../Interfaces';

export const command: Commands = {
    data: {
        name: "user",
        aliases: ["getuser", "userget", "guser"],
        description: "A Command used to obtain users from games, uses Game API Request.",
        staff_only: true
    },
    run: async (client: ExtendedClient, message: Message) => {
        if (client.config.STAFF.ROLE) {
            var a = await message.guild.members.fetch(message.author.id).then(function (user) {
                for (var r of user.roles.cache) {
                    var role = r[1]
                    if (client.config.STAFF.ROLES.includes(role.id) || client.config.STAFF.ROLES.includes(role.name)) return true
                    else continue;
                };
            });
        }
        console.log(a)
        if (client.config.STAFF.USERS.includes(message.author.id) || client.config.STAFF.ROLE && a) console.log("Yay!")
    }
}