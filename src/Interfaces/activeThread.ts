export interface ActiveThread {
    UserID: string,
    Position: number,
    SupportStatus: "unresolved" | "active" | "resolved",
    SupportType: "account" | "moderation" | "bug" | "other" | undefined
}