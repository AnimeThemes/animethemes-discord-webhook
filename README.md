# AnimeThemes Discord Webhook

1. [Configuration](#configuration)
2. [Deployment](#deployment)
3. [Used technologies](#used-technologies)

## Prerequisites

- Go to [Discord Developer Portal](https://discord.com/developers/applications) and create a application.
- Go to the Bot tab and save the token (reset the token if needed).
- Disable "Public Bot" option and enable the following options: Presence Intent, Server Members Intent and Message Content Intent.
- Replace `<BOT_ID>` with the APPLICATION ID and run this in your browser:

```
https://discord.com/oauth2/authorize?client_id=<BOT_ID>&permissions=8&scope=bot
```

## Configuration

To get started you need to define some environment variables. This can be done by creating a `.env` file in the
root directory:

```ini
; The AnimeThemes URLs.
ANIMETHEMES_GRAPHQL = https://graphql.animethemes.moe
ARTIST_URL = https://animethemes.moe/artist
ANIME_URL = https://animethemes.moe/anime

; The config used to run this API.
API_HOST = animethemes.moe
API_KEY =
API_PORT = 3001

; The Bot Discord Token that you saved above.
DISCORD_TOKEN = ...

; The ID of the Discord Forum Channel.
DISCORD_FORUM_CHANNEL_ID = 1149167546906456124

; The ID of the Discord Trello Text Channel.
DISCORD_TRELLO_CHANNEL_ID = 785620580384505867

; The IDs of the tags on Discord Forum Channel.
DISCORD_WINTER_FORUM_TAG = 1149167724296151120
DISCORD_SPRING_FORUM_TAG = 1149167909235589201
DISCORD_SUMMER_FORUM_TAG = 1149167951950393434
DISCORD_FALL_FORUM_TAG = 1149168000738529290

; The enviroment of the application [production, development, staging, testing]
NODE_ENV=development

; Trello secret to validate trello webhooks.
TRELLO_SECRET=
```

## Add Trello boards

Once the webhook is running you can tell Trello to send board update notifications to it. For that you can use Trello's
REST API (and an HTTP client of your liking):

```http request
POST https://api.trello.com/1/tokens/<YOUR_TRELLO_TOKEN>/webhooks
Content-Type: application/json

{
  "key": "<YOUR_TRELLO_KEY>",
  "callbackURL": "<YOUR_WEBHOOK_URL>",
  "idModel": "<BOARD_ID>",
  "description": "My New Hook"
}
```

- Replace `<YOUR_TRELLO_TOKEN>` and `<YOUR_TRELLO_KEY>` with your [Trello API token and key](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/).
- Replace `<YOUR_WEBHOOK_URL>` with the URL that your webhook is running on. E.g. `https://mydomain.com:3000`.
- Replace `<BOARD_ID>` with the ID of the Trello board you want to receive updates for. You can get the ID for a board
  by appending `.json` to the board URL and reading the `id` field.
- You can set the `description` value to whatever you want.

### Get a list of already connected Trello boards

To get a list of Trello board already added to the webhook, you can make a `GET` request to the same endpoint:

```http request
GET https://api.trello.com/1/tokens/<YOUR_TRELLO_TOKEN>/webhooks?key=<YOUR_TRELLO_KEY>
```

Notice how you need to send the Trello API key as a query parameter instead of in the `POST` body.

### Remove a board

You can also remove boards from webhook, by using the same endpoint, but doing a `DELETE` request instead:

```http request
DELETE https://api.trello.com/1/tokens/<YOUR_TRELLO_TOKEN>/webhooks
Content-Type: application/json

{
  "key": "<YOUR_TRELLO_KEY>",
  "callbackURL": "<YOUR_WEBHOOK_URL>",
  "idModel": "<BOARD_ID>",
  "description": "My New Hook"
}
```

## Used technologies

- [Discord.js](https://discord.js.org/) to communicate with Discord's API.
