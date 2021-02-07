const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To add/invite the bot to your server",
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 70282305;

    let invite = new MessageEmbed()
      .setTitle(`**Interested by the functions of our bot**`)
      .setDescription(
        `**Then what are you waiting for? Invite me today!** \n\n [Invite Link](https://discord.com/api/oauth2/authorize?client_id=787555561448669194&permissions=8&scope=bot)`
      )
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=787555561448669194&permissions=8&scope=bot`
      )
      .setColor("#6495ED");
    return message.channel.send(invite);
  }
};
