export interface Client {
    ClientName: string,
    ClientID: string,
    //usually the same as ClientID but who cares
    ClientUserID: string,
    ClientAvatarURL: string,
    //required by discord to login
    ClientToken: string,
    compress: boolean,
    getUsers: boolean,
    disableEvents: boolean,
    disabledEvents: [],
    Status: string,
    statusURL: string,
}