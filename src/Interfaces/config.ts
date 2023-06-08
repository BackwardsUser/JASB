import { ColorResolvable } from "discord.js";

interface Support {
    SUPPORT_TICKET_CLOSED: boolean,
    SUPPORT_TICKET_CREATED: boolean,
    SUPPORT_TICKET_CLOSED_THREAD: boolean,
    ALERT_STAFF: boolean
}

interface UpdatesChannel {
    CHANNEL: string | null,
    USER_JOIN: boolean,
    USER_LEAVE: boolean,
    USERS_USERNAME_UPDATES: boolean,
    USERS_PROFILE_PICTURE_UPDATES: boolean,
    SUPPORT: Support
}

interface Staff {
    ROLE: boolean,
    ROLES?: string[],
    USERS: string[]
}

export interface Config {
    TOKEN: string,
    STAFF: Staff,
    BLACKLIST: string[],
    SERVER_NAME: string,
    SERVER_COLOR: ColorResolvable[],
    IDENTIFY_STAFF: boolean,
    UPDATES_CHANNEL: UpdatesChannel,
}

