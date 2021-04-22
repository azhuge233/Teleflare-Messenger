# Teleflare-Messenger
 Send Telegram bot messages with Cloudflare workers

## Usage

1. Create a cloudflare workers

2. Copy the code in workers.js to the workers

3. Fill in your Telegram Bot Token and your Chat ID

4. Send GET request to your workers URL 

    ```
    https://yourworkersname.yourcloudflarename.workers.dev/?title=Title&msg=test_message
    ```

**Note**: The script uses [MarkdownV2](https://core.telegram.org/bots/api#markdownv2-style) as default parse mode, if you want to use plain text or HTML, you need to modify the title bold symbol ** in line 35.