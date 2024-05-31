import createNotification from 'api/create-notification';
import createThread from 'api/create-thread';
import trelloServer from 'trello/server';

export default () => {
    createThread();
    createNotification();
    trelloServer();
}