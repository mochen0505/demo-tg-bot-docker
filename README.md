# demo-tg-bot-docker

A demo telegram bot

Add a *.env* file to the root directory
```shell
TOKEN=<YOUR_TELEGRAM_TOKEN>
```

```shell
docker build .
docker run -p 3000:3000 <image_id>
```