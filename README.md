# brock-bot

The Brock Osweiler Slack Bot

## Deploy with Docker

1. Install [docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/)

1. Get slack token at [http://my.slack.com/services/new/bot](http://my.slack.com/services/new/bot)

1. Clone this repo

  ```
    git clone https://github.com/RichardWLaub/brock-bot.git
    cd brock-bot
  ```

1. Add your slack token to a `.env` file

  ```
    echo 'token=<my-token>' > .env
  ```

1. Deploy with docker-compose

  ```
    docker-compose up -d
  ```

1. Brock 'n' roll baby!

Built with [botkit](https://github.com/howdyai/botkit).
