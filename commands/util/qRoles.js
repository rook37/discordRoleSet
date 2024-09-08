const { SlashCommandBuilder, Collection } = require('discord.js');
const fs = require('node:fs');
const { parseQ } = require('../../helper')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('qroles')
        .setDescription('Prunes QOTD pings. Saves admin headaches. Slices bread. (note: may not actually slice bread)')
        ,

    async execute(interaction, parseeQ, fss) {
        
//ROLE IDs

qGen = '1094819887043579914'
qBeetle = '1280939966276308992'
qHook = '1282134919157645373'
qUrsu = '1282135172359127040'

teamBeetle = '1085597309242445915'
teamHook = '1085597155382808707'
teamUrs = '1085597367149006908'


       
//https://stackoverflow.com/questions/63202313/how-to-access-values-in-msg-guild-members-fetch
        await interaction.deferReply();
        let memberList = await interaction.guild.members.fetch().then(members=>{
            beetlejuiceMembers = members.filter(member => member.roles.cache.has(qGen) && member.roles.cache.has(teamBeetle))
            hookMembers = members.filter(member => member.roles.cache.has(qGen) && member.roles.cache.has(teamHook))
            ursulaMembers = members.filter(member => member.roles.cache.has(qGen) && member.roles.cache.has(teamUrs))
            beetlejuiceMembers.forEach((i)=> {i.roles.add(qBeetle),i.roles.remove(qGen)})
            hookMembers.forEach((i)=> {i.roles.add(qHook),i.roles.remove(qGen)})
            ursulaMembers.forEach((i)=> {i.roles.add(qUrsu),i.roles.remove(qGen)})
        }).catch()


        await interaction.editReply('Roles assigned.')

        
    },
};



//get guild.members (membermanager)
//go through it. foreach, check if QOTD. if QOTD, check team role and assign correct. bingo bango?

