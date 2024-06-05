import notification from 'api/controllers/notification';
import thread from 'api/controllers/thread';
import trello from 'api/controllers/trello';

const routes = () => {
    notification();
    thread();
    trello();
};

export default routes;