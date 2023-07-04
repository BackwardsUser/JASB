import { Embed, EmbedBuilder, Message } from "discord.js";
import ExtendedClient from "../Client";

export function SupportRequestEmbed(client: ExtendedClient, message: Message): EmbedBuilder {
    const embed = client.config.EMBEDS.filter(embed => embed.NAME === "SupportRequestEmbed")[0];
    const Color = client.config.SERVER_COLOR[embed.DATA.COLOR_POS];
    return new EmbedBuilder()
    .setTitle(embed.DATA.TITLE)
    .setDescription(embed.DATA.DESCRIPTION)
    .setColor(Color)
    .setFooter({
        iconURL: client.user.avatarURL(),
        text: client.user.username
    });
}