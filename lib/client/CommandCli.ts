import { Command } from '../../interfaces/Command';
// @ts-ignore
import Eris from 'eris';
import cli from './getClient';
import commands from '../Command/getCommand';

// its supposed to be client but there was an error
class CommandCli implements Command {
    get defaultAliases(): [] {
        return this._defaultAliases;
    }

    /**
     * @private
     */
    private defaultCommandName: any;
    private defaultCoolDown: number;
    private defaultDescription: any;
    private readonly _defaultAliases: [];
    private defaultUsage: any;
    private defaultDisabled: boolean;
    private defaultOwnerOnly: boolean;

    constructor() {

        this.defaultCommandName = null;
        this.defaultCoolDown = 10;
        this.defaultDescription = null;
        this._defaultAliases = [];
        this.defaultUsage = null;
        this.defaultDisabled = false;
        this.defaultOwnerOnly = false;
    }

    intClient() {
        let newClient = new Eris.Client(cli.ClientToken)
        newClient.on("messageCreate", (message) => {
            commands(message);
        })
    }

    commandAliases: [];
    commandCoolDown: number;
    commandDescription: string;
    commandName: string;
    commandUsage: string;
    disabled: boolean;
    ownerOnly: boolean;
}