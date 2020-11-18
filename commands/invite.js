const Discord = require("discord.js")
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    message.reply ('https://discord.com/api/oauth2/authorize?client_id=776317141057667082&permissions=8&scope=bot')
}

module.exports.config = {
    name: "invite",
    description: "invite me",
    usage: "/invite",
    accessableby: "Members",
    aliases: []
}