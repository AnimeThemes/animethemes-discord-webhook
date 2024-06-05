import notification from 'api/controllers/NotificationController';
import thread from 'api/controllers/ThreadController';
import trello from 'api/controllers/TrelloController';

const routes = () => {
    notification();
    thread();
    trello();
};

export default routes;