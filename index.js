//Consts
const Discord = require('discord.js');
const BOTCLIENT = new Discord.Client();
const Token = "NzA3NDI2MTQyMTAxMTc2Mzgy.XsyxWQ.mTWZcOorTKRBSUiPc1X4oFHa8-k"
const Prefix = '-';
//Botclient Methods
BOTCLIENT.on('ready', () =>{
    BOTCLIENT.user.setActivity("EpicBot! Admin Version. Prefix = '-'", {type: 'PLAYING'}); 
    console.log('BOT ONLINE, Safe for testing!');
})
BOTCLIENT.on('message', message=>{
    if(message.content == "..."){
        message.channel.send("FUCK YOUUUUUUUUUUUU I HATE PEOPLE WHO DO '...' ITS FUCKING GAYYYYYYYYYYYYYY");
    }
    
        if(message.content == "-Ping"){ // Check if message is "!ping"
    message.channel.send("Pinging ...") // Placeholder for pinging ... 
    .then((msg) => { // Resolve promise
        msg.edit((Date.now() - msg.createdTimestamp) + "MS, Wow, That's my ping!")
    }
    );

    }
    let args2 = message.content.substring(Prefix.length).split(" ");
let args = message.content.substring(Prefix.length).split(" ");
   switch(args[0]){
         case 'Commands':
        if(message.guild.id = "708497185150599271"){
            message.channel.send("My commands are here: 'https://docs.google.com/document/d/1SWgMcJt4rvIuxO2abmtMKLZLreJWhbVDfEHUaBbo6k0/edit?usp=sharing'" )
        }
    else message.channel.send("OOF! This server is not in the whitelist!")
    break;
case 'Invite':
        if(message.guild.id = "708497185150599271"){
            message.channel.send("My invite is 'https://discordapp.com/oauth2/authorize?client_id=707426142101176382&scope=bot&permissions=8'")
        }
        break;
        case'Support':
        message.member.createDM()
        message.member.send('Dm created! How may I help?')
message.member.send('I am currently in Dev, join this for support! https://discord.gg/523Spky')
        break;
        case'DmUser':
        let mentionlegit = message.mentions.users.first();
        let mentionlenght = message.mentions.users.first.length;
        if(!mentionlegit){
            message.channel.send("cant ping lol learn to do it, @");
        }
        else{
                        messagecontent = message.content
            finalmessage = messagecontent.slice (8);
            mentionlegit.send(finalmessage)
           message.channel.send("Yo! I sent the message!") 
           message.delete();         
        }

        break;
    case 'CheckWhitelist':
            if(message.guild.id = "708497185150599271"){
                message.channel.send("This server IS Whitelisted!")
            }
            else{
                message.channel.send("OOF! This server is not in the whitelist!")
            }
            break;
            case 'ClearChannel':
                if(message.guild.id = "708497185150599271"){
                    message.channel.bulkDelete("100")
                    message.channel.bulkDelete("100")
                    message.channel.bulkDelete("100")
                    message.channel.bulkDelete("100")
                    message.channel.bulkDelete("100")
                    message.channel.bulkDelete("100")
                    message.channel.bulkDelete("100")
                    message.channel.bulkDelete("100")
                    message.channel.bulkDelete("100")

                
                message.channel.send("I have cleared the channel!")
                }
  break;
    }      
   }  
)
BOTCLIENT.on('message', message=> {


})
//login (duh)
BOTCLIENT.login(Token);
