import { TrelloEmbedConfig } from 'trello/trello-embed';
import { toTrelloCardLink, toTrelloImageUrl } from 'trello/trello-util';

const colors = {
    green: 0x00ff00,
    red: 0xff0000,
} satisfies { [key: string]: number };

const actions: { [key: string]: (data: any) => Partial<TrelloEmbedConfig> | null } = {
    createCard(data) {
        const { action } = data;
        const { card, list } = action.data;

        return {
            actionTitle: `✨ ${action.memberCreator.fullName} created '${card.name}' in '${list.name}'`,
            actionDescription: toTrelloCardLink(card),
            color: colors.green,
        };
    },
    updateCard(data) {
        const { action } = data;
        const { card, old, listBefore, listAfter } = action.data;

        if (old.desc !== undefined) {
            return {
                actionTitle: `✏️ ${action.memberCreator.fullName} updated the description of '${card.name}'`,
                actionDescription: `**Before:** ${old.desc || '*(None)*'}\n**After:** ${card.desc || '*(None)*'}\n\n${toTrelloCardLink(card)}`,
            };
        } else if (old.name !== undefined) {
            return {
                actionTitle: `✏️ ${action.memberCreator.fullName} updated the name of '${card.name}'`,
                actionDescription: `**Before:** ${old.name || '*(None)*'}\n**After:** ${card.name || '*(None)*'}\n\n${toTrelloCardLink(card)}`,
            };
        } else if (old.closed === false) {
            return {
                actionTitle: `🗃️ ${action.memberCreator.fullName} archived '${card.name}'`,
                actionDescription: toTrelloCardLink(card),
                color: colors.red,
            };
        } else if (listBefore && listAfter) {
            return {
                actionTitle: `➡️ ${action.memberCreator.fullName} moved '${card.name}' from '${listBefore.name}' to '${listAfter.name}'`,
                actionDescription: toTrelloCardLink(card),
            };
        }

        return null;
    },
    commentCard(data) {
        const { action } = data;
        const { card, text } = action.data;

        return {
            actionTitle: `💬 ${action.memberCreator.fullName} commented on '${card.name}'`,
            actionDescription: `${text}\n\n${toTrelloCardLink(card)}`,
            color: colors.green,
        };
    },
    addMemberToCard(data) {
        const { action } = data;
        const { card, member } = action.data;

        const emoji = member.id === action.memberCreator.id ? '🫡' : '🫵';

        return {
            actionTitle: `${emoji} ${member.name} was added to '${card.name}'`,
            actionDescription: toTrelloCardLink(card),
            imageUrl: toTrelloImageUrl(action.member.avatarUrl),
            color: colors.green,
        };
    },
    removeMemberFromCard(data) {
        const { action } = data;
        const { card, member } = action.data;

        return {
            actionTitle: `👋 ${member.name} was removed from '${card.name}'`,
            actionDescription: toTrelloCardLink(card),
            imageUrl: toTrelloImageUrl(action.member.avatarUrl),
            color: colors.red,
        };
    },
    updateCheckItemStateOnCard(data) {
        const { action } = data;
        const { card, checkItem } = action.data;
        const isComplete = checkItem.state === 'complete';

        return {
            actionTitle: isComplete
                ? `✅ ${action.memberCreator.fullName} checked episode ${checkItem.name} of '${card.name}'`
                : `❎ ${action.memberCreator.fullName} un-checked episode ${checkItem.name} of '${card.name}'`,
            actionDescription: toTrelloCardLink(action.data.card),
            color: isComplete ? colors.green : colors.red,
        };
    },
};

export function getEmbedConfigForAction(
    action: keyof typeof actions,
    data: any,
): Partial<TrelloEmbedConfig> | null {
    return actions[action]?.(data) ?? null;
}