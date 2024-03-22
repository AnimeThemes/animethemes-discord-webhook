import { Events } from 'discord.js';
import { client } from 'app';

import AnimeThemes from 'AnimeThemes/AnimeThemes';
import Event from 'structs/types/Event';

export default new Event({
    name: Events.ClientReady,
    once: true,
    async execute() {
        console.log('Bot Online');
        let animethemes = new AnimeThemes();
        let featuredtheme = await animethemes.getFeaturedTheme();

        client.user?.setActivity({
            name: `${featuredtheme.anime} ${featuredtheme.theme}`,
            type: 2,
        });

        setInterval(async () => {
            let featuredtheme = await animethemes.getFeaturedTheme();

            client.user?.setActivity({
                name: `${featuredtheme.anime} ${featuredtheme.theme}`,
                type: 2,
            });
        }, 3 * 60 * 60 * 1000);
    },
})