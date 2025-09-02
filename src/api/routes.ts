import NotificationController from 'api/controllers/NotificationController';
import ThreadController from 'api/controllers/ThreadController';
import TrelloController from 'api/controllers/TrelloController';
import MessageController from 'api/controllers/MessageController';

const routes = () => {
    MessageController();
    NotificationController();
    ThreadController();
    TrelloController();
};

export default routes;
