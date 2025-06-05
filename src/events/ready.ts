import { ActivityType, Events } from 'discord.js';
import { client } from 'app';
import { getFeaturedTheme } from 'animethemes/api';

import Event from 'discord/Event';

export default new Event({
    name: Events.ClientReady,
    once: true,
    async execute() {
        console.log('Bot Online');
        let featuredtheme = await getFeaturedTheme();

        if (featuredtheme !== null) {
            client.user?.setActivity({
                name: `${featuredtheme.anime} ${featuredtheme.theme}`,
                type: ActivityType.Listening,
            });
        }

        setInterval(async () => {
            let featuredtheme = await getFeaturedTheme();

            if (featuredtheme !== null) {
                client.user?.setActivity({
                    name: `${featuredtheme.anime} ${featuredtheme.theme}`,
                    type: ActivityType.Listening,
                });
            }
        }, 3 * 60 * 60 * 1000);
    },
})