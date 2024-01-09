import { Socket } from '../index';

describe('default', () => {
    let socket: Socket;

    beforeEach(() => {
        socket = new Socket();
    });

    it("basic", () => {
        expect(socket.connected()).toBe(false);
    });
});