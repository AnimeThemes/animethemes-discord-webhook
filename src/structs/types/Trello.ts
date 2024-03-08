export interface TrelloEmbedConfig {
    actionTitle: string;
    actionDescription?: string;
    imageUrl?: string;
    color?: number;
    boardName: string;
    boardUrl: string;
    actionUserName: string;
    actionUserImageUrl: string;
};

export interface TrelloCard {
    name: string;
    shortLink: string;
    desc: string;
};

export interface TrelloCreateCardAction {
    action: {
        data: {
            card: TrelloCard;
            list: {
                name: string;
            };
        };
        memberCreator: {
            fullName: string;
        };
    };
};

export interface TrelloUpdateCardAction {
    action: {
        data: {
            card: TrelloCard;
            old: {
                desc?: string;
                name?: string;
                closed: boolean;
            };
            listBefore?: {
                name: string;
            };
            listAfter?: {
                name: string;
            };
        };
        memberCreator: {
            fullName: string;
        };
    };
};

export interface TrelloCommentCardAction {
    action: {
        data: {
            card: TrelloCard;
            text: string;
        };
        memberCreator: {
            fullName: string;
        };
    };
};

export interface TrelloMemberToCardAction {
    action: {
        data: {
            card: TrelloCard;
            member: {
                id: string;
                name: string;
            };
        };
        member: {
            avatarUrl: string;
        };
        memberCreator: {
            id: string;
        };
    };
};

export interface TrelloUpdateCheckItemStateOnCardAction {
    action: {
        data: {
            card: TrelloCard;
            checkItem: {
                name: string;
                state: string;
            };
        };
        memberCreator: {
            fullName: string;
        };
    };
};