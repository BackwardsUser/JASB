import { Status, SupportTypes } from "../Types";

export interface ActiveThread {
    UserID: string
    Position: number
    SupportStatus: Status
    SupportType: SupportTypes
}