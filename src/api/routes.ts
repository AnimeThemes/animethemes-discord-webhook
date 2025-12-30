import NotificationController from 'api/controllers/NotificationController';
import ThreadController from 'api/controllers/ThreadController';
import TrelloController from 'api/controllers/TrelloController';

const routes = () => {
    NotificationController();
    ThreadController();
    TrelloController();
};

export default routes;
