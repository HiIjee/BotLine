const express = require('express')
const config = require('./config.json')
const app = express();
const port = 3000
app.get('/', (req , res) =>
    res.send('ready'))
    app.listen(port,() =>
    console.log('Ready'));
    

    const { Client, GatewayIntentBits } = require('discord.js')
    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
                 GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMembers,
        ]
    })


client.on("ready", ()=> {
    client.user.setActivity("by:Jee")
        console.log(`  Logged in ${client.user.tag} `)
})

client.on('messageCreate' , (Jee) => {
    if (Jee.author.bot) return;
    if (Jee.channel.id === 'ID'){//ايدي الروم
        Jee.channel.send({ content: ' LINK ' })// رابط الخط
        }
    console.log(`Replied to message"${Jee.content}"`)
})




client.login(config.TOKEN)//  توكن البوت حطه بملف ال config
//امن للبوت اذا م تعرف او واجهتك اي مشاكل يمكنك التواصل معي ديسكورد  
// Jee#3798





