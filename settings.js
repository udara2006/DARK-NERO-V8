const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.ANTI_BADWORD = 'true' // true of false
global.AUTO_REACT = 'false' // true of false
global.INBOX_BLOCK_MSG ='BLOCK !!!'
global.INBOX_BLOCK = 'off' //inbox block
global.alivemsg = 'ᴅᴀʀᴋ-ɴᴇʀᴏ ᴡʜᴀᴛʜᴀᴘᴘ ʙᴏᴛ

╠බොට් 𝗔𝗖𝗧𝗜𝗩𝗘 ද..කියලා බැලිමට ╠[𝐀𝐋𝐈𝐕𝐄] ලෙස පල කරන්න.

╠(24×7) පැය විසිහතර තුළම ╠ක්‍රියාකරයි✅

╠බොට් වැඩද කියලා බලන්න .𝗔𝗟𝗜𝗩𝗘 ╠ලෙස මැසේජ් එකක් දමන්න✅

╠බොට්ගෙ 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧 එක ╠ගන්න .𝗠𝗘𝗡𝗨 හෝ .𝗣𝗔𝗡𝗘𝗟ලෙස ╠මැසේජ් එකක් දමන්න✅

╠𝗦𝗢𝗡𝗚, 𝗩𝗜𝗗𝗘𝗢, 𝗔𝗣𝗣𝗦, 𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗟𝗘, ╠𝗦𝗧𝗜𝗖𝗞𝗘𝗥, 𝗬𝗧 𝗩𝗜𝗗𝗘𝗢, 𝗜𝗠𝗔𝗚𝗘 වැනි දෑ ╠ඩව්න්ලෝඩ් කර ගැනීමට සහ තවත් ╠විශේෂ වැඩ කරගත හැක

╠𝐍𝐎❗𝐒𝐏𝐀𝐌 ╣

╠𝐍𝐎❗𝐑𝐄𝐏𝐎𝐑𝐓 ╣

╠𝐍𝐎❗𝐑𝐄𝐏𝐎𝐑𝐓 𝐆𝐑𝐎𝐔𝐏╣

╠𝐍𝐎❗𝐒𝐄𝐗 ╣

🧩ＭＹ ＮＡＭＥ࿐

 𝙳𝙰𝚁𝙺 🅳𝙴𝚅𝙸𝙻 𝚆𝙿 𝙱𝙾𝚃 ࿐

🧩 ＯＷＮＥＲ࿐

 [ᴿᴵʸᴬᴸ 𝙺𝙸𝙽𝙶 🅳𝙰𝚁𝙺 𝙳𝙴𝚅𝙸𝙻 ]

🧩 ＣＯＮＴＡＣＴ ＭＥ ࿐

 https://wa.me/+94768462285

🧩 ＲＵＮ ＴＩＭＥ ࿐

  24×7 H 

🧩WHATSAPP GROUP LINK ࿐

 https://chat.whatsapp.com/C9XFdf2DA9N3U3wbSjCcnj

🙌  𝚃𝙷𝙰𝙽𝙺 𝙵𝙾𝚁 𝚈𝙾𝚄 !!! 🙌'
global.alivepic = 'https://i.ibb.co/zFYBPcQ/IMG-20230226-WA0115.jpg '
global.owner = ['0768462285'] //ur owner number
global.ownername = "[ᴿᴵʸᴬᴸ 𝙺𝙸𝙽𝙶 🅳𝙰𝚁𝙺 𝙳𝙴𝚅𝙸𝙻 ]" //ur owner name
global.ytname = "YT: Future Sailor ⚓️🍃" //ur yt chanel name
global.socialm = "GitHub: udara2006" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.session = "ZnBTWkx3dWY= " //session Id
global.ownernomer = "94768462285" //ur number
global.lang = "EN" //Select Language "EN" to English "SI" to sinhala 
global.premium = ['94768462285'] //ur premium number
global.botname = 'ᴅᴀʀᴋ-ɴᴇʀᴏ ᴡʜᴀᴛʜᴀᴘᴘ ʙᴏᴛ' //ur bot name
global.linkz = "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/WiIqCdiDjFo" //ur website to be displayed
global.botscript = 'https://www.darknero.ga/' //script link
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Dark Nero By" //ur sticker watermark packname
global.author = "Dark Nero Creating By Cyber Yakuza Team" //ur sticker watermark author
global.wm = "Dark Bot Inc." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'ᴘʟᴇᴀꜱᴇ ᴡɪᴛʜ...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

//media target
global.thum = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
