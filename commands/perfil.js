const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../config.json")
const moment = require("moment")



moment.locale("pt-br");
const {
    JsonDatabase,
} = require("wio.db");

const dbm = new JsonDatabase({ databasePath:"./databases/myJsonMoney.json"});
const db2 = new JsonDatabase({
  databasePath:"./databases/myJsonDatabase.json"
});
module.exports = {
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {

       
        const member = message.member;

        
        const tag = member.user.username;
        let id = member.user.id;

        const gasto = db2.get(`${id}.gastosaprovados`) || "0";
     const pedidos = db2.get(`${id}.pedidosaprovados`) || "0";
        if(id === "995150954670342164") {
            const embed = new Discord.MessageEmbed()
.setTitle(`${config.nomebot} | Seu Perfil`)
.addField(`Produtos Comprados:`, `${pedidos} Compras realizadas`, true)
.addField(`Dinheiro Gasto:`, `R$${gasto} Reais.`, true)
.setColor(config.cor)
            .setThumbnail(member.user.displayAvatarURL ({dynamic: true, format: "png", size: 1024}))
message.channel.send({embeds: [embed]})
        } else {
            if(gasto <= 100) {
const embed = new Discord.MessageEmbed()
.setTitle(`${config.nomebot} | Seu Perfil`)
.addField(`Produtos Comprados:`, `${pedidos} Compras realizadas`, true)
.addField(`Dinheiro Gasto:`, `R$${gasto} Reais.`, true)
.setColor(`${db.get(`cor`)}`)
      .setThumbnail(member.user.displayAvatarURL ({dynamic: true, format: "png", size: 1024}))
message.channel.send({embeds: [embed]})
     }
     if(gasto >= 101) {
        const embed = new Discord.MessageEmbed()
.setTitle(`${config.nomebot} | Seu Perfil`)
.addField(`Produtos Comprados:`, `${pedidos} Compras realizadas`, true)
.addField(`Seu dinheiro:`, `\`R$${dbm.get(`${id}.dinheiro`)}.00\``)
        .setColor(`${db.get(`imagem`)}`)
        .setThumbnail(member.user.displayAvatarURL ({dynamic: true, format: "png", size: 1024}))
        message.channel.send({embeds: [embed]})
     }
    }}
}
