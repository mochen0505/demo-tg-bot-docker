# demo-tg-bot-docker

A demo telegram bot

Add a *.env* file to the root directory
```shell
TOKEN=<YOUR_TELEGRAM_TOKEN>
MY_TG_ID=<YOUR_TELEGRAM_ID>
```

```shell
docker build .
docker run -p 3000:3000 <image_id>
```