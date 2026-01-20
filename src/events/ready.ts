import { ActivityType, Events } from 'discord.js';
import { client } from 'app';

import Event from 'discord/Event';
import { gql } from 'graphql/client';
import { CurrentFeaturedTheme } from 'types/animethemes';
import { createVideoSlug } from 'utils/description';

interface FeaturedThemeQuery {
    currentfeaturedtheme: CurrentFeaturedTheme | null;
}

export default new Event({
    name: Events.ClientReady,
    once: true,
    async execute() {
        console.log('Bot Online');

        setInterval(
            async () => {
                const { currentfeaturedtheme } = await gql<FeaturedThemeQuery>(currentFeaturedThemeQuery);

                if (currentfeaturedtheme !== null) {
                    const entry = currentfeaturedtheme.animethemeentry;

                    // @ts-expect-error Different context for featuredtheme.
                    const featuredThemeName = `${entry.animetheme.anime.name} ${createVideoSlug(entry.animetheme, entry, currentfeaturedtheme.video)}`;
                    client.user?.setActivity({
                        name: featuredThemeName,
                        type: ActivityType.Listening,
                    });
                    console.log(`Set featured theme activity: ${featuredThemeName}`);
                }
            },
            3 * 60 * 60 * 1000,
        );
    },
});

const currentFeaturedThemeQuery = `
query {
    currentfeaturedtheme {
        animethemeentry {
            animetheme {
                anime {
                    name
                }
                group {
                    slug
                }
                type
            }
            version
        }
        video {
            tags
        }
    }
}
`;
