
# Peer-to-peer communication

Hey there amazing people! This repository holds all the most authentic way, for transferring files (images, video, pdf, etc) over WebRTC datachannels.

## Previous knowledge

From the last few months I have been working with WebRTC live streams & one-to-one chat's. But as soon as it comes to file transfer, the system used to crash.

### Reasons for system crash:
- dataChhannel.BufferedAmount() get's full.

### Solution:

- We need to implement a callback listener to listen when the dataChannel bufferedAmount decreases below 16Kib

```bash
if (dataChannel.bufferedAmount > dataChannel.bufferedAmountLowThreshold) {
    dataChannel.onbufferedamountlow = () => {
        dataChannel.onbufferedamountlow = null;
        send();
    };
    return;
}
```

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start 
```

The defauly `port` for the express server is 3000. Visit http://localhost:3000 to view it on browser.


## Establishing Connection

To establish connection between two peer's whether on same network or on different networks, follow the steps mentioned below:

`Suppose:` 👨‍🎓 This is George `&` 🙋‍♀️ This is Anna. Let George intiate the connection with Anna, later they can transfer files to each other.

- `George: ` Open http://localhost:3000 after executing `npm start` in his machine.
-  `Anna: ` Open http://localhost:3000 after executing `npm start` in her machine.
- `George: ` Click on `Create Local Offer` and copy the text i'e automatically generated. Now pass this text to Anna via `WhatsApp` or `Telegram` (Note: `WhatsApp`/`Telegram` are behaving as our signaling server as of now.)
- `Anna: ` Copy the text passed by george and past it inside `Remote Offer` text box, then click on `Connect`. Now you are gonna see some text automatically generated inside your `Local Offer` text box. Copy that & pass it to George.
- `George: ` Copy the text passed by Anna and paste it under your `Remote Offer` text box, and click on `Connect`.

If the connecton above was successfull, the the status text above will change to `Connected to peer`.

`Note:` In future we will use WebScokets which will act as our signalling servers and we will get rid of all this text passing heck.

## Sending files

File transfer with WebRTC can be bi-directional. To send files to your peer:
- Click on choose file button, choose the file you want to send, and boom the file has been sent to your peer.
- Transfer speed will depend on both of your bandwidths.
- If you are behind a `NAT` then transfer speeds can really decrease, becasue `TURN` servers used in this project are not the best.

## Protocols
- SDP (Session Description Protocol)

## Alternatives
- Building and SFU and transfer files over it.
- Check [EasyFi Db](https://github.com/priyangsubanerjee/easyfi-db) for more information.
## Authors

- 👔 [@priyangsubanerjee](https://www.github.com/priyangsubanerjee)


## Features

- 🔑 No API key is required to upload a file.
- 💰 Uploads are completely free as of now.
- 📱 Send large files easily.
