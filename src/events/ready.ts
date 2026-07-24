import { ActivityType, Events } from 'discord.js';
import { client } from 'app';

import Event from 'discord/Event';
import { gql } from 'graphql/client';
import { createVideoSlug } from 'utils/description';
import { graphql } from 'graphql/generated';

const CURRENT_FEATURED_THEME_QUERY = graphql(`
    query CurrentFeaturedTheme {
        currentFeaturedTheme {
            animethemeentry {
                ...createVideoSlugEntry
                animetheme {
                    ...createVideoSlugTheme
                    anime {
                        title {
                            romaji
                        }
                    }
                }
            }
            video {
                ...createVideoSlugVideo
            }
        }
    }
`);

export default new Event({
    name: Events.ClientReady,
    once: true,
    async execute() {
        console.log('Bot Online');

        setInterval(
            async () => {
                const { currentFeaturedTheme } = await gql(CURRENT_FEATURED_THEME_QUERY);

                if (!currentFeaturedTheme) {
                    return;
                }

                const entry = currentFeaturedTheme.animethemeentry;

                // @ts-expect-error Different context for featuredtheme.
                const featuredThemeName = `${entry.animetheme.anime.title.romaji} ${createVideoSlug(entry.animetheme, entry, currentfeaturedtheme.video)}`;
                client.user?.setActivity({
                    name: featuredThemeName,
                    type: ActivityType.Listening,
                });
                console.log(`Set featured theme activity: ${featuredThemeName}`);
            },
            1 * 60 * 60 * 1000,
        );
    },
});
