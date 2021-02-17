import { Client } from '../../interfaces/Client';

class getClient implements Client {
    ClientAvatarURL: string;
    ClientID: string;
    ClientName: string;
    ClientToken: string;
    ClientUserID: string;
    Status: string;
    compress: boolean;
    disableEvents: boolean;
    disabledEvents: [];
    getUsers: boolean;
    statusURL: string;
}

export default new getClient()