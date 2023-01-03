<h1 align="center">Bot Anti Spam | Ban for Discord</h1>
<em><h5 align="center">(Programming Language - Node.js)</h5></em>

# Tutorial to install the bot ! FOR LINUX (VPS or Dedicated Server)

## 1 - on Terminal

```shell script
apt update && apt upgrade -y
apt install npm node.js zip
wget https://github.com/Kurama250/Bot-Anti-Spam/archive/refs/heads/main.zip
unzip main.zip
cd Bot-Anti-Spam-main/Anti-Spam/
npm install discord.js
npm install pm2 -g
```
## 2 - on Terminal

```shell script
nano index.js
```

## And you also change this line :

```js
var permission_cmd = [
  "ID DISCORD", // Add your DISCORD ID to be able to ban people !
  "46803715412546559" // Example
```

## After you also change this line :

```js
client.login("TOKEN_BOT");
```

After doing this, press CTRL + X and you press Y and ENTER then you do the following commands !

## 3 - on Terminal

```shell script
pm2 start index.js
```

## The command to ban with the bot is :

```
>ban ID or @User
```

<h1 align="center">Then it's the end you have started the bot have fun !</h1>
