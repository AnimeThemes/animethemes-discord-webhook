import notification from 'api/notification';
import thread from 'api/thread';
import trelloServer from 'trello/server';

export default () => {
    thread();
    notification();
    trelloServer();
}