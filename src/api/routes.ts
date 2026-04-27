import NotificationController from 'api/controllers/NotificationController';
import TrelloController from 'api/controllers/TrelloController';

const routes = () => {
    NotificationController();
    TrelloController();
};

export default routes;
