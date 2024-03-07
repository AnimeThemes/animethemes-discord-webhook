# AnimeThemes Discord Webhook

1. [Configuration](#configuration)
2. [Deployment](#deployment)
3. [Used technologies](#used-technologies)

## Prerequisites

- Create a Discord webhook linked to the channel where you want notifications to be sent to. You'll receive an URL
  containing the webhook ID and token, it will look something like this:
  ```
  https://discord.com/api/webhooks/123456789/abcdefghijklmnopqrstuvwxyz
  ```
  In this example `123456789` is the ID and `abcdefghijklmnopqrstuvwxyz` is the token. Save these for later.

## Configuration

To get started you need to define some environment variables. This can be done by creating a `.env` file in the
root directory:

```ini
; The ID of the Discord webhook as explained above.
DISCORD_WEBHOOK_ID = ...

; The token of the Discord webhook as explained above.
DISCORD_WEBHOOK_TOKEN = ...

; (Optional) The host and port to run the webhook on. If not set, localhost and 3000 will be used.
SERVER_HOST = animethemes.moe
SERVER_PORT = 3001
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