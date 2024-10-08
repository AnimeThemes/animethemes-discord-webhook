export type TrelloEmbedConfig = {
    actionTitle: string;
    actionDescription?: string;
    imageUrl?: string;
    color?: number;
    boardName: string;
    boardUrl: string;
    actionUserName: string;
    actionUserImageUrl: string;
};

export type TrelloCard = {
    name: string;
    shortLink: string;
    desc: string;
};

export type TrelloCreateCardAction = {
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

export type TrelloUpdateCardAction = {
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

export type TrelloCommentCardAction = {
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

export type TrelloMemberToCardAction = {
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

export type TrelloUpdateCheckItemStateOnCardAction = {
    model: {
        id: string;
    };
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