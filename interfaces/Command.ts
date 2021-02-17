export interface Command {
    //now the command options
    commandName: string,
    commandAliases: [],
    commandDescription: string,
    commandUsage: string,
    commandCoolDown: number,
    disabled: boolean,
    ownerOnly: boolean,
}