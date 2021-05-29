const {
	WAConnection,
	MessageType,
	Presence,
	Mimetype,
	GroupSettingChange,
	mentionedJid
} = require("@adiwajshing/baileys")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const speed = require('performance-now')
const base64Img = require('base64-img')
const imgbb = require('imgbb-uploader')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { exec } = require("child_process")
const fetch = require('node-fetch')
const ms = require('parse-ms')
const crypto = require('crypto')
const axios = require('axios')
const cheerio = require('cheerio')
const FormData = require('form-data')
const toMs = require('ms')
const fs = require("fs")
const { fetchJson } = require('./lib/fetcher')
const { nad } = require('./language')
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
//const { addFilter, isFiltered } = require('./lib/msgFilter.js')
const a = '```'
const {
	color,
	bgcolor
} = require('./lib/color')
const {
	getBuffer,
	getGroupAdmins,
	getRandom,
	banner,
	start,
	info,
	success,
	close
} = require('./lib/functions')
//Load Json

/*
SETTINGS
*/
botName = "VINZ X GEN" 
ownerName = "Vinz Developer" 
vhtear = "Xfarbotkey" 
xteam = "genbotkey" 
prefix = "#" 
blocked = []
limitawal = "35" 
memberlimit = "0" 
cr = "*VINZ X GEN 2021*" 
lolhuman = "genbotkey"
vinzvhtear = "Xfarbotkey"
const X = "❌"
const O = "⭕️"
const ownerNumber = ["996508932016@s.whatsapp.net", "6282140744548@s.whatsapp.net"] // NOMOR OWNER
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN: Vinz Developer\n' // NAMA OWNER
            + 'ORG:VINZ CHAT BOT;\n' // NAMA BOT
            + 'TEL;type=CELL;type=VOICE;waid=6282140744548:+6282140744548\n' // NOMOR OWNER
            + 'END:VCARD'
/*
SETTINGS
*/
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const cowner = JSON.parse(fs.readFileSync('./database/cowner.json'))
const vip = JSON.parse(fs.readFileSync('./database/vip.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const tictactou = JSON.parse(fs.readFileSync('./database/tictactou.json'))
const audioya = JSON.parse(fs.readFileSync('./media/audio.json'))
const imegya = JSON.parse(fs.readFileSync('./media/image.json'))
const setimker = JSON.parse(fs.readFileSync('./media/stik.json'))
const vidioya = JSON.parse(fs.readFileSync('./media/video.json'))

// End Json
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./database/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./database/level.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
	const obj = { id: sender, xp: 1, level: 1 }
	_level.push(obj)
	fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}

const getRegisteredRandomId = () => {
	return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, time, serials) => {
	const obj = { id: userid, name: sender, time: time, serial: serials }
	_registered.push(obj)
	fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
	let status = false
	Object.keys(_registered).forEach((i) => {
		if (_registered[i].id === sender) {
			status = true
		}
	})
	return status
}

const addATM = (sender) => {
	const obj = { id: sender, uang: 5 }
	uang.push(obj)
	fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
	let position = false
	Object.keys(uang).forEach((i) => {
		if (uang[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		uang[position].uang += amount
		fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
	}
}

const checkATMuser = (sender) => {
	let position = false
	Object.keys(uang).forEach((i) => {
		if (uang[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return uang[position].uang
	}
}

const bayarLimit = (sender, amount) => {
	let position = false
	Object.keys(_limit).forEach((i) => {
		if (_limit[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_limit[position].limit -= amount
		fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
	}
}

const confirmATM = (sender, amount) => {
	let position = false
	Object.keys(uang).forEach((i) => {
		if (uang[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		uang[position].uang -= amount
		fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
	}
}

const limitAdd = (sender) => {
	let position = false
	Object.keys(_limit).forEach((i) => {
		if (_limit[i].id == sender) {
			position = i
		}
	})
	if (position !== false) {
		_limit[position].limit += 1
		fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
	}
}

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);
	return `${pad(hours)} H ${pad(minutes)} M ${pad(seconds)} S`
}
// SLEEp
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
	
async function starts() {
const ivinz = `BOT STARTED`
	const iamvinz = new WAConnection()
	iamvinz.logger.level = 'warn'
	console.log(banner.string)
	iamvinz.on('qr', () => {
		console.log(color('[', 'white'), color('NOTICE', 'red'), color(']', 'white'), color('SCAN NOW - Vinz'))
	})
	iamvinz.on('credentials-updated', () => {
		fs.writeFileSync('./Sesi123.json', JSON.stringify(iamvinz.base64EncodedAuthInfo(), null, '\t'))
		info('2', '[VINZ GEN] Getting Whatsapp Data....')
	})
	fs.existsSync('./Sesi123.json') && iamvinz.loadAuthInfo('./Sesi123.json')
	iamvinz.on('connecting', () => {
		start('2', '[VINZ GEN] Connecting to WhatsApp....')
	})
	iamvinz.on('open', () => {
		success('2', '[VINZ GEN] BOT CONNECTED TO WHATSAPP')
                  
	})
	await iamvinz.connect({ timeoutMs: 30 * 1000 })
	iamvinz.on('message-update', async (anu) => {
        try {
       const from = Lan.key.remoteJid
        const messageStubType = WA_MESSAGE_STUB_TYPES[Lan.messageStubType] || 'MESSAGE'
        const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
        const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
        const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
        const sender = Lan.key.fromMe ? iamvinz.user.jid : Lan.key.remoteJid.endsWith('@g.us') ? Lan.participant : Lan.key.remoteJid
        const isRevoke = Lan.key.remoteJid.endsWith('@s.whatsapp.net') ? true : Lan.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
        const isCtRevoke = Lan.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
        const isBanCtRevoke = Lan.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
        if (messageStubType == 'REVOKE') {
            console.log(`Status untuk Grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
            if (!isRevoke) return
            if (!isCtRevoke) return
            if (!isBanCtRevoke) return
            const from = Lan.key.remoteJid
            const isGroup = Lan.key.remoteJid.endsWith('@g.us') ? true : false
            let int
            let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
            const id_deleted = Lan.key.id
            const conts = Lan.key.fromMe ? iamvinz.user.jid : iamvinz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = Lan.key.fromMe ? iamvinz.user.name : conts.notify || conts.vname || conts.name || '-'
            const totalchat = await iamvinz.chats.all()
            const opt4tag = {
                contextInfo: { mentionedJid: [sender] }
            }
            for (let i = 0; i < infoMSG.length; i++) {
                if (infoMSG[i].key.id == id_deleted) {
                    const dataInfo = infoMSG[i]
                    const type = Object.keys(infoMSG[i].message)[0]
                    const timestamp = infoMSG[i].messageTimestamp
                    int = {
                        no: i,
                        type: type,
                        timestamp: timestamp,
                        data: dataInfo
                    }
                }
            }
            const index = Number(int.no)
            const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
            const mentionUser = type == "extendedTextMessage" ? Lan.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? Lan.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
            const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
            var itsme = `${numbernye}`
                var split = `${fake}`
                // var taged = Lan.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var selepbot72 = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }
            if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                const strConversation = `

┏━━⊱*「   ANTI DELETE   」* 
┃
┣❏ *Nama :* *${pushname}* 
┣❏ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
┣❏ *Tipe :* Text
┣❏ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
┣❏ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
┣❏ *Pesan :* *${body ? body : '-'}*
┣❏ *Anti Delete By Vinz*
┃
┗━━━━━━━━━━━━━━❍
`
                iamvinz.sendMessage(from, strConversation, MessageType.text, selepbot72)
            } else if (int.type == 'stickerMessage') {
                var itsme = `${numbernye}`
                    var split = `${fake}`
                    const pingbro23 = {
                        contextInfo: {
                            participant: itsme,
                            quotedMessage: {
                                extendedTextMessage: {
                                    text: split,
                                }
                            }
                        }
                    }
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await iamvinz.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
                const strConversation = `

┏━━⊱「   *ANTI DELETE*   」
┃
┣❏ *Nama :* *${pushname}* 
┣❏ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
┣❏ *Tipe :* *Sticker*
┣❏ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
┣❏ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
┣❏ *Anti Delete By Vinz*
┃
┗━━━━━━━━━━━━━━❍

`
                const buff = fs.readFileSync(savedFilename)
                iamvinz.sendMessage(from, strConversation, MessageType.text, opt4tag)
                iamvinz.sendMessage(from, buff, MessageType.sticker, pingbro23)
                // console.log(stdout)
                fs.unlinkSync(savedFilename)

            } else if (int.type == 'imageMessage') {
                var itsme = `${numbernye}`
                    var split = `${fake}`
                    const pingbro22 = {
                        contextInfo: {
                            participant: itsme,
                            quotedMessage: {
                                extendedTextMessage: {
                                    text: split,
                                }
                            }
                        }
                    }
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await iamvinz.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
                const buff = fs.readFileSync(savedFilename)
                const strConversation = `

┏━━⊱「   *ANTI DELETE*   」
┃
┣❏ *Nama :* *${pushname}* 
┣❏ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
┣❏ *Tipe :* Image
┣❏ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
┣❏ *Pesan :* ${body ? body : '-'}*
┣❏ *Anti Delete By Vinz*
┃
┗━━━━━━━━━━━━━━❍

`
                iamvinz.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
                fs.unlinkSync(savedFilename)
            }
        }
    } catch (e) {
        console.log('Message : %s', color(e, 'green'))
        // console.log(e)
    }
})

	iamvinz.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			mem = anu.participants[0]
            try {
                var pp_user = await iamvinz.getProfilePicture(mem)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add') {
           let mdata = await iamvinz.groupMetadata(anu.jid)
            memeg = mdata.participants.length
        	num = anu.participants[0]
                anu_user = iamvinz.contacts[mem]
                teks = `*HALLO* 👋 @${num.split('@')[0]}\n*SELAMAT DATANG DI GROUP* ${(mdata.subject)} \n\n*SEMOGA BETAH YAH🤗*\nKetik *#genbot* untuk melihat fitur!`
	        let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${num.split('@')[0]}&descriminator=VINZ BOT&memcount=VINZ527&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.pinimg.com/originals/cb/7a/e8/cb7ae8cb0601ec3167227dbd28f871ae.jpg`)
		iamvinz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove') {
                let mdata = await iamvinz.groupMetadata(anu.jid)
            	num = anu.participants[0]
                anu_user = iamvinz.contacts[mem]
                memeg = mdata.participants.length
                out = `*GoodBay Kawan*\n*Jangan Kesini Lagi Yah* 👋  @${num.split('@')[0]}`
                let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${num.split('@')[0]}&descriminator=VINZ BOT&memcount=VIN7812&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.pinimg.com/originals/cb/7a/e8/cb7ae8cb0601ec3167227dbd28f871ae.jpg`)
                iamvinz.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	iamvinz.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
		for (let i of json[1].blocklist) {
			blocked.push(i.replace('c.us', 's.whatsapp.net'))
		}
	})
	iamvinz.on('message-new', async (Lan) => {
		try {
			if (!Lan.message) return
			if (Lan.key && Lan.key.remoteJid == 'status@broadcast') return
			if (Lan.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(Lan.message)
			const from = Lan.key.remoteJid
			const type = Object.keys(Lan.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = new Date().toLocaleDateString()
			body = (type === 'conversation' && Lan.message.conversation.startsWith(prefix)) ? Lan.message.conversation : (type == 'imageMessage') && Lan.message.imageMessage.caption.startsWith(prefix) ? Lan.message.imageMessage.caption : (type == 'videoMessage') && Lan.message.videoMessage.caption.startsWith(prefix) ? Lan.message.videoMessage.caption : (type == 'extendedTextMessage') && Lan.message.extendedTextMessage.text.startsWith(prefix) ? Lan.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? Lan.message.conversation : (type === 'extendedTextMessage') ? Lan.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && Lan.message.conversation) ? Lan.message.conversation : (type == 'imageMessage') && Lan.message.imageMessage.caption ? Lan.message.imageMessage.caption : (type == 'videoMessage') && Lan.message.videoMessage.caption ? Lan.message.videoMessage.caption : (type == 'extendedTextMessage') && Lan.message.extendedTextMessage.text ? Lan.message.extendedTextMessage.text : ''
			const mesejAnti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = iamvinz.user.jid
			const totalchat = await iamvinz.chats.all()
			const sender = isGroup ? Lan.participant : Lan.key.remoteJid
			pushname = iamvinz.contacts[sender] != undefined ? iamvinz.contacts[sender].vname || iamvinz.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await iamvinz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isEventon = isGroup ? event.includes(from) : false
			const isPublic = isGroup ? public.includes(from) : false
			const isRegistered = checkRegisteredUser(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isCowner = cowner.includes(sender) || isOwner 
			const isPrem = premium.includes(sender) || isOwner ||isCowner
			const isVip = vip.includes(sender) || isOwner ||isPrem ||isCowner
			



const isFiltered = (from) => {
    return !!usedCommandRecently.has(from)
}

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => {
        return usedCommandRecently.delete(from)
    }, 5000) // 5sec is delay before processing next command
}
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }}
      hit = 98821
      if(isCmd) hit + 1
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
			const Rank = getLevelingLevel(sender)
			const isImage = type === 'imageMessage'	
			const isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				iamvinz.sendMessage(from, teks, text, { quoted: Lan })
			}
			const sendMess = (hehe, teks) => {
				iamvinz.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? iamvinz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : iamvinz.sendMessage(from, teks.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": memberr } })
			}
			const sendImage = (teks) => {
				iamvinz.sendMessage(from, teks, image, { quoted: Lan })
			}
			const costum = (pesan, tipe, target, target2) => {
				iamvinz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
			}
			const sendPtt = (teks) => {
				iamvinz.sendMessage(from, audio, mp3, { quoted: Lan })
			}
			const fakelokasi = (teks) => {
				iamvinz.sendMessage(from, teks, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net',
   remoteJid: 'status@broadcast'
  },
  message: {
   locationMessage: {
    degreesLatitude: 0,
    degreesLongitude: 0
   }
  }
 }
})
			}
			const fakevn = (teks) => {
				iamvinz.sendMessage(from, teks, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net',
   remoteJid: 'status@broadcast'
  },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
})
			}
			const faketrolli = (teks) => {
				iamvinz.sendMessage(from, teks, text, { 
				quoted: { 
				key: { 
				participant: '0@s.whatsapp.net', remoteJid: "1598105837@g.us" }, message: { orderMessage: { thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'),
message: 'Hayo Mau Minta SC ya.. \n SC NO FREE !',
orderTitle: 'OWNER',
sellerJid: '0@s.whatsapp.net'  }}}})
}
        const fakestatus = (teks) => {
            iamvinz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        ffromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": cr,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./vinz.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
			var prema = 'Reguler'
			if (isPrem) {
				prema = 'Premium '
			}
			if (isVip) {
				prema = 'VIP'
			}
			if (isCowner) {
				prema = 'CO-Owner'
			}
			if (isOwner) {
				prema = 'Developer'
			}
			var role = 'NEWBIE'
			if (Rank <= 3) {
				role = 'Bronze I'
			} else if (Rank <= 5) {
				role = 'Bronze II'
			} else if (Rank <= 7) {
				role = 'Bronze III'
			} else if (Rank <= 9) {
				role = 'Silver I'
			} else if (Rank <= 11) {
				role = 'Silver II'
			} else if (Rank <= 13) {
				role = 'Silver III'
			} else if (Rank <= 16) {
				role = 'Gold I'
			} else if (Rank <= 18) {
				role = 'Gold II'
			} else if (Rank <= 20) {
				role = 'Gold III'
			} else if (Rank <= 22) {
				role = 'Gold IV'
			} else if (Rank <= 25) {
				role = 'Platinum I'
			} else if (Rank <= 27) {
				role = 'Platinum II'
			} else if (Rank <= 29) {
				role = 'Platinum III'
			} else if (Rank <= 31) {
				role = 'Platinum IV'
			} else if (Rank <= 33) {
				role = 'Diamond I'
			} else if (Rank <= 35) {
				role = 'Diamomd II'
			} else if (Rank <= 37) {
				role = 'Diamond III'
			} else if (Rank <= 39) {
				role = 'Diamond IV'
			} else if (Rank <= 45) {
				role = 'Master'
			} else if (Rank <= 100) {
				role = 'Grand Master'
			}

			if (isGroup && isRegistered && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 10) + 500
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						bayarLimit(sender, 3)
						await reply(nad.levelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel, role))
					}
				} catch (err) {
					console.error(err)
				}
			}
			const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return iamvinz.sendMessage(from, `Limit Habis`, text, { quoted: Lan })
						iamvinz.sendMessage(from, nad.limitcount(isPrem, limitCounts), text, { quoted: Lan })
						found = true
					}

				}
				if (found === false) {
					let obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
					iamvinz.sendMessage(from, nad.limitcount(isPrem, limitCounts), text, { quoted: Lan })
				}
			}
			const isLimit = (sender) => {
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal) {
							position = true
							iamvinz.sendMessage(from, nad.limitend(pushname, prefix), text, { quoted: Lan })
							return true
						} else {
							_limit
							position = true
							return false
						}
					}
				}
				if (position === false) {
					const obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
					return false
				}
			}
			if (isRegistered) {
				const checkATM = checkATMuser(sender)
				try {
					if (checkATM === undefined) addATM(sender)
					const uangsaku = Math.floor(Math.random() * 10) + 90
					addKoinUser(sender, uangsaku)
				} catch (err) {
					console.error(err)
				}
			}
			const limitAdd = (sender) => {
				if (isOwner && isPrem) { return false; }
				let position = false
				Object.keys(_limit).forEach((i) => {
					if (_limit[i].id == sender) {
						position = i
					}
				})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
				}
			}
			if (isGroup) {
				try {
			        const getmemex = groupMembers.length
					if (getmemex <= memberlimit) {
						reply(`maaf kak membernya sedikit, aku gak bisa disini! Minimal member : ${memberlimit}`)
						setTimeout(() => {
							iamvinz.groupLeave(from)
						}, 5000)
						setTimeout(() => {
							iamvinz.updatePresence(from, Presence.composing)
							reply("See you kak")
						}, 4000)
						setTimeout(() => {
							iamvinz.updatePresence(from, Presence.composing)
							reply("Oh iya, jangan lupain aku ya:(")
						}, 3000)
						setTimeout(() => {
							iamvinz.updatePresence(from, Presence.composing)
							reply("Baru undang aku lagi:)")
						}, 2000)
						setTimeout(() => {
							iamvinz.updatePresence(from, Presence.composing)
							reply("Membernya tambahin dulu")
						}, 1000)
						setTimeout(() => {
							iamvinz.updatePresence(from, Presence.composing)
							reply("Aku pamit ya kak:)")
						}, 0)
					}
				} catch (err) { console.error(err) }
			}
				
				for (let kemem of bad) {

				if (budy.includes(kemem)) {

				if (!isGroup) return
				if (!isBadWord) return
				if (isGroupAdmins) return reply('Woiii Admin Ko toxic')
				iamvinz.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`Woyy ${sender.split("@")[0]} Jangan Ngomong Kasar Woiii`)
				setTimeout(() => {
					iamvinz.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 3000)
				setTimeout(() => {
					iamvinz.updatePresence(from, Presence.composing)
					reply("AKhirnya Beban Dah pergi :v")
				}, 2000)
				setTimeout(() => {
					iamvinz.updatePresence(from, Presence.composing)
					reply("Gw Kick ahh....")
				}, 1000)
				setTimeout(() => {
					iamvinz.updatePresence(from, Presence.composing)
					reply("Waduh kata kasar")
				}, 0)		
			}
			}
				if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan:v')
				if (isOwner) return reply('Atasan grup mah bebas yakan:v')
				iamvinz.updatePresence(from, Presence.composing)
				if (budy.includes("#izinmin")) return reply("Iya kak jangan spam ya")
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*
Kamu mengirimkan link grup chat, maaf kamu di kick dari grup :(
`)
				setTimeout(() => {
					iamvinz.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			}
			colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
		//if (isCmd && isFiltered(from) && !isGroup) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        //if (isCmd && isFiltered(from) && isGroup) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        //addFilter(from)
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mVINZ\x1b[1;37m]', time, color(command), 'dari', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mNOT-COMMAND\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mVINZ\x1b[1;37m]', time, color(command), 'dari', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mNOT-COMMAND\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'in', color(groupName), 'args :', color(args.length))
			switch (command) {                
				case 'help':
				case 'menu':
				case 'vinz':
				if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
	    					
          const userLev = getLevelingLevel(sender)
          const userXpop = getLevelingXp(sender)
          const uangkungab = checkATMuser(sender)
					const reqXp = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					const lvl = getLevelingLevel(sender)
					let vinq = []
				let giider = []
				for (mem of totalchat){
					vinq.push(mem.jid)
				}
				for (id of vinq){
					if (id && id.includes('g.us')){
						giider.push(id)
					}
				}
                let timestampivin = speed();
				let latensiial = speed() - timestampivin
                anu = process.uptime()
					mee = iamvinz.user
					ca = totalchat
					ginfo = await getBuffer(mee.imgUrl)
           let a = []
          let good = []
        for (mem of totalchat){
          a.push(mem.jid)
        }
        myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
        myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
          var tgl = new Date();
                    detik = tgl.getSeconds();
                    menit = tgl.getMinutes();
                    jam = tgl.getHours();
              var ampm = jam >= 12 ? 'PM' : 'AM';
              var day = tgl.getDate()
                   bulan = tgl.getMonth()
              var thisDay = tgl.getDay(),
                   thisDay = myDays[thisDay];
              var yy = tgl.getYear()
              var year = (yy < 1000) ? yy + 1900 : yy;
					//const vtime = await fetchJson('https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta')
          const menunye = (`
 Hallo ${pushname}, Selamat Datang

┌── 「 *USER INFO* 」 ──
│
├─❏ NAME : ${pushname}
├─❏ Status User : ${prema}
├─❏ XP    : ${userXpop}
├─❏ LEVEL : ${userLev}
╰─❏ Total User : ${_registered.length}

┌── 「 *BOT INFO* 」 ──
│
❏ *${iamvinz.user.name} Ultimate* ❏
│
├─❏ *Owner Bot* : *I Am Vinz*
├─❏ *Prefix* :  *「 ${prefix} 」*
├─❏ *Total User* : *98${_registered.length}*
├─❏ *Browser* : *${iamvinz.browserDescription[1]}*
├─❏ *Server* : *${iamvinz.browserDescription[0]}*
├─❏ *Personal Chat* : *${totalchat.length - giider.length}*
├─❏ *Group Chat : *90${giider.length}*
├─❏ *Version : ${iamvinz.browserDescription[2]}*
├─❏ *Speed : ${latensiial.toFixed(4)} Second*
├─❏ *Total Chat* : *90${totalchat.length}*
├─❏ *Versi Whatsapp* : *${iamvinz.user.phone.wa_version}*
├─❏ *Tanggal* : *${day} - ${myMonths[bulan]} - ${year}*
├─❏ *TIME* : ${time}
╰─❏ *HIT* : *${hit}*


❏「 *MENU V-BOT* 」
│
├─❏ ${prefix}NEW
├─❏ ${prefix}NEW2
├─❏ ${prefix}GROUP
├─❏ ${prefix}dDOWNLOAD
├─❏ ${prefix}SOUND
├─❏ ${prefix}MAKER
├─❏ ${prefix}GABUT
├─❏ ${prefix}TOOLS
├─❏ ${prefix}MUTUAL
├─❏ ${prefix}NSFW
├─❏ ${prefix}ANIME
├─❏ ${prefix}OTHER
├─❏ ${prefix}BANK
├─❏ ${prefix}STORAGE
├─❏ ${prefix}OWNER
├─❏ ${prefix}SIMPLE
├─❏ ${prefix}ABOUT
│
├─❏THANKS TO❏
├─ VINZ DEV
├─ FAHRI DEV
├─ XFAR DEV
╰─[VBOT ULTMATE]
 `) 
iamvinz.sendMessage(from, { text: `${menunye}`, matchedText: `https://iamvinz.my.id`, canonicalUrl: `https://iamvinz.my.id`, description: `A BOT CLOUD STORAGE`, title: `BOT DATA CENTER`, jpegThumbnail: fs.readFileSync('./vinz.jpeg')}, 'extendedTextMessage', {contextInfo: {mentionedJid: "6283136505591-1614953337@g.us", isForwarded: true, forwardingScore: "999"}, detectLinks: true, quoted: { key: { fromMe: false,remoteJid: "6289643739077-1613049930@g.us", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 900000, status: 200, thumbnail: fs.readFileSync('./vinz.jpeg'), surface: 200, message: `${botName}`, orderTitle: 'VINZ ID', sellerJid: '0@s.whatsapp.net'}}}})	
	break
 case'new':
 const newe = (`
❏「 *NEW FITUR (free)* 」
│
├─❏ ${prefix}jooxlirik
├─❏ ${prefix}cutly
├─❏ ${prefix}tahta
├─❏ ${prefix}tourl
├─❏ ${prefix}shaun
├─❏ ${prefix}vbold
├─❏ ${prefix}carigc
├─❏ ${prefix}google
├─❏ ${prefix}sendkontag
├─❏ ${prefix}sendkontak
├─❏ ${prefix}gcdata
├─❏ ${prefix}costumwp
├─❏ ${prefix}amongus
├─❏ ${prefix}webmatrix
├─❏ ${prefix}redglass
├─❏ ${prefix}facebookp
├─❏ ${prefix}costumwp
├─❏ ${prefix}pantaimal
├─❏ ${prefix}pencil
├─❏ ${prefix}bakar  
├─❏ ${prefix}crossgun
├─❏ ${prefix}hitler
├─❏ ${prefix}trash  
├─❏ ${prefix}joke 
├─❏ ${prefix}sepia  
├─❏ ${prefix}alien  
├─❏ ${prefix}removebg
├─❏ ${prefix}smile  
├─❏ ${prefix}skullmask
├─❏ ${prefix}fisheye
├─❏ ${prefix}deepfry
├─❏ ${prefix}grayscale
├─❏ ${prefix}imageflip
├─❏ ${prefix}pixelate
├─❏ ${prefix}imagerota
├─❏ ${prefix}affect
├─❏ ${prefix}picture
├─❏ ${prefix}blur 
├─❏ ${prefix}invert
├─❏ ${prefix}meme
├─❏ ${prefix}gtav
├─❏ ${prefix}gay
├─❏ ${prefix}nightbeac
├─❏ ${prefix}laptop
├─❏ ${prefix}linephoto
├─❏ ${prefix}raindrop
├─❏ ${prefix}sketch
╰─❏ ${prefix}sketch`)
 fakevn(newe)
	break
 case'new2':
 const new2 = (`
❏「 *NEW FITUR (Prem)* 」
│
├─❏ ${prefix}bikingc
├─❏ ${prefix}timer
├─❏ ${prefix}idtoen
├─❏ ${prefix}entoid
├─❏ ${prefix}spamsms
├─❏ ${prefix}spamtext
├─❏ ${prefix}spamchat
├─❏ ${prefix}googleimag
├─❏ ${prefix}music 
├─❏ ${prefix}get 
├─❏ ${prefix}slot
├─❏ ${prefix}tagsticker
├─❏ ${prefix}superhero         
├─❏ ${prefix}ytkomen        
├─❏ ${prefix}phkomen      
├─❏ ${prefix}amongus      
├─❏ ${prefix}artinama
├─❏ ${prefix}jodoh
├─❏ ${prefix}weton
├─❏ ${prefix}jadian2        
├─❏ ${prefix}jadian         
├─❏ ${prefix}tebakumur      
├─❏ ${prefix}alay          
├─❏ ${prefix}purba         
├─❏ ${prefix}bpurba         
├─❏ ${prefix}hilih          
├─❏ ${prefix}namaninja      
├─❏ ${prefix}tebakbendera   
├─❏ ${prefix}dompet         
├─❏ ${prefix}baka2          
├─❏ ${prefix}bj            
├─❏ ${prefix}wallpaperanime 
├─❏ ${prefix}pictlolicon   
├─❏ ${prefix}semoji       
├─❏ ${prefix}fakedonald   
├─❏ ${prefix}faketoko      
├─❏ ${prefix}ktpmaker      
├─❏ ${prefix}xnxxsearch     
├─❏ ${prefix}xnxx           
├─❏ ${prefix}pixiv          
├─❏ ${prefix}pixivdl        
├─❏ ${prefix}xhamstersearch 
├─❏ ${prefix}xhamster
├─❏ ${prefix}pictwaifu      
├─❏ ${prefix}nsfw_avatar    
├─❏ ${prefix}pictneko
├─❏ ${prefix}senku         
├─❏ ${prefix}kurumi2        
├─❏ ${prefix}nakanomiku     
├─❏ ${prefix}wibu           
├─❏ ${prefix}quotes2       
├─❏ ${prefix}facebookpage   
├─❏ ${prefix}costumwp    
├─❏ ${prefix}pantaimalam   
├─❏ ${prefix}pencil    
├─❏ ${prefix}deteksiwajah   
├─❏ ${prefix}deteksigender  
├─❏ ${prefix}deteksiumur   
├─❏ ${prefix}bakar
├─❏ ${prefix}crossgun
├─❏ ${prefix}hitler
├─❏ ${prefix}trash
├─❏ ${prefix}joke
├─❏ ${prefix}sepia
├─❏ ${prefix}alien
├─❏ ${prefix}removebg
├─❏ ${prefix}smile
├─❏ ${prefix}skullmask
├─❏ ${prefix}fisheye
├─❏ ${prefix}deepfry
├─❏ ${prefix}grayscale
├─❏ ${prefix}imageflip
├─❏ ${prefix}pixelate
├─❏ ${prefix}imagerotate
├─❏ ${prefix}affect
├─❏ ${prefix}picture
├─❏ ${prefix}blur
├─❏ ${prefix}invert
├─❏ ${prefix}meme
├─❏ ${prefix}gtav
├─❏ ${prefix}gay
├─❏ ${prefix}nightbeach
├─❏ ${prefix}laptop
├─❏ ${prefix}linephoto
├─❏ ${prefix}raindrop
├─❏ ${prefix}sketch
├─❏ ${prefix}facebookpage
├─❏ ${prefix}costumwp
├─❏ ${prefix}pantaimalam
├─❏ ${prefix}pencil
├─❏ ${prefix}bakar
├─❏ ${prefix}crossgun
├─❏ ${prefix}nhentai        
├─❏ ${prefix}ramaljadian  
├─❏ ${prefix}memeindo     
├─❏ ${prefix}galaxstyle   
├─❏ ${prefix}attp         
├─❏ ${prefix}thunder       
├─❏ ${prefix}ttp           
├─❏ ${prefix}ttp2          
├─❏ ${prefix}ttp3           
├─❏ ${prefix}ttp4          
├─❏ ${prefix}bokeh         
├─❏ ${prefix}strawberry   
├─❏ ${prefix}metaldark    
├─❏ ${prefix}cerpen         
├─❏ ${prefix}quotesimage   
├─❏ ${prefix}faktaunik      
├─❏ ${prefix}katabijak
├─❏ ${prefix}pantun         
├─❏ ${prefix}bucin         
├─❏ ${prefix}randomnama    
├─❏ ${prefix}jokerlogo       
├─❏ ${prefix}toxic          
├─❏ ${prefix}bloodfrosted  
├─❏ ${prefix}imagetext      
├─❏ ${prefix}itext         
├─❏ ${prefix}itxt           
├─❏ ${prefix}halloween      
├─❏ ${prefix}firework      
├─❏ ${prefix}hororblood     
├─❏ ${prefix}animefanart     
├─❏ ${prefix}megumin         
├─❏ ${prefix}shinobu         
├─❏ ${prefix}baka            
├─❏ ${prefix}eroyuri         
├─❏ ${prefix}wallpaper       
├─❏ ${prefix}smile           
├─❏ ${prefix}happy           
├─❏ ${prefix}dance           
├─❏ ${prefix}slapnime        
├─❏ ${prefix}bj              
├─❏ ${prefix}neko3           
├─❏ ${prefix}wame           
├─❏ ${prefix}tiktokstalk
├─❏ ${prefix}joox
├─❏ ${prefix}play      
├─❏ ${prefix}play2
╰─❏ ${prefix}ytsearch
`)
 fakevn(new2)
 	break
 case'group':
 const group = (`

❏「 *GROUP MENU* 」
│
├─❏ ${prefix}welcome  <1/0>
├─❏ ${prefix}leveling <1/0>
├─❏ ${prefix}antilink <1/0>
├─❏ ${prefix}antibadword <1/0>
├─❏ ${prefix}group
├─❏ ${prefix}admin
├─❏ ${prefix}add
├─❏ ${prefix}kick @tagmember
├─❏ ${prefix}hidetag <text>
├─❏ ${prefix}hidetag20 <text>
├─❏ ${prefix}level
├─❏ ${prefix}linkgroup
├─❏ ${prefix}tagall
├─❏ ${prefix}setname 
├─❏ ${prefix}setdesc
├─❏ ${prefix}demote @tagmember
├─❏ ${prefix}promote @tagmember
├─❏ ${prefix}hedsot @tagmember
├─❏ ${prefix}fitnah
├─❏ ${prefix}jadian
├─❏ ${prefix}ganteng
├─❏ ${prefix}cantik
├─❏ ${prefix}babi
├─❏ ${prefix}pintar
├─❏ ${prefix}bodoh
├─❏ ${prefix}leave
├─❏ ${prefix}delete <reply chat>
├─❏ ${prefix}mining
├─❏ ${prefix}listpenyimak
╰─❏ ${prefix}leaderboard
`)
 fakevn(group)
 	break
 case'download':
 const download = (`

❏「 *DOWNLOAD MENU* 」
│
├─❏ ${prefix}play
├─❏ ${prefix}joox
├─❏ ${prefix}ytmp3
├─❏ ${prefix}ytmp4
├─❏ ${prefix}ytsearch
├─❏ ${prefix}tiktoknowm
├─❏ ${prefix}tiktokmusic
├─❏ ${prefix}joox
├─❏ ${prefix}igvideo
├─❏ ${prefix}igstory
├─❏ ${prefix}igphoto
╰─❏ ${prefix}fbdl

`)
 fakevn(download)
 	break
 case'sound':
 const sound = (`
❏「 *SOUND MENU* 」
│
├ ❏ iri
├ ❏ bernyanyi
├ ❏ pale
├ ❏ pota
├ ❏ welot
├ ❏ alay
├ ❏ bwa
├ ❏ ganteng
├ ❏ gatal
├ ❏ ladida
├ ❏ sholawat
├ ❏ manis
├ ❏ rusher
├ ❏ boong
├ ❏ gratata
├ ❏ tengteng
├ ❏ kaweni
├ ❏ old
├ ❏ zombie
├ ❏ sakit
╰─❏ bermain
`)
 fakevn(sound)
 	break
 case'maker':
 const maker = (`
❏「 *MAKER MENU* 」
│
├─❏ ${prefix}comic
├─❏ ${prefix}heker
├─❏ ${prefix}space
├─❏ ${prefix}ninjalogo
├─❏ ${prefix}marvelstudio
├─❏ ${prefix}lionlogo
├─❏ ${prefix}wolflogo
├─❏ ${prefix}steel3d
├─❏ ${prefix}wallgravity
├─❏ ${prefix}wetglass
├─❏ ${prefix}multicolor3d
├─❏ ${prefix}watercolor
├─❏ ${prefix}luxurygold
├─❏ ${prefix}galaxywallpaper
├─❏ ${prefix}lighttext
├─❏ ${prefix}beautifulflower
├─❏ ${prefix}puppycute
├─❏ ${prefix}royaltext
├─❏ ${prefix}heartshaped
├─❏ ${prefix}birthdaycake
├─❏ ${prefix}galaxystyle
├─❏ ${prefix}hologram3d
├─❏ ${prefix}glossychrome
├─❏ ${prefix}greenbush
├─❏ ${prefix}metallogo
├─❏ ${prefix}noeltext
├─❏ ${prefix}glittergold
├─❏ ${prefix}textcake
├─❏ ${prefix}starsnight
├─❏ ${prefix}wooden3d
├─❏ ${prefix}textbyname
├─❏ ${prefix}writegalacy
├─❏ ${prefix}galaxybat
├─❏ ${prefix}snow3d
├─❏ ${prefix}birthdayday
├─❏ ${prefix}cover
├─❏ ${prefix}naruto
├─❏ ${prefix}eroded
├─❏ ${prefix}wall
├─❏ ${prefix}viettel
├─❏ ${prefix}wings
├─❏ ${prefix}halloween
├─❏ ${prefix}graffiti2
├─❏ ${prefix}graffiti3
├─❏ ${prefix}foil
├─❏ ${prefix}blood
├─❏ ${prefix}heker
├─❏ ${prefix}bokeh
├─❏ ${prefix}carbon
├─❏ ${prefix}avengers
├─❏ ${prefix}water
├─❏ ${prefix}fire
├─❏ ${prefix}metal
├─❏ ${prefix}metallic
├─❏ ${prefix}ballon
├─❏ ${prefix}gembok
├─❏ ${prefix}bannerff
├─❏ ${prefix}aloklogo
├─❏ ${prefix}miyalogo
├─❏ ${prefix}gamelogo
├─❏ ${prefix}blackpink
├─❏ ${prefix}thundername
├─❏ ${prefix}silk
├─❏ ${prefix}ttp1
├─❏ ${prefix}party
├─❏ ${prefix}romance
├─❏ ${prefix}google
├─❏ ${prefix}lovemessage
├─❏ ${prefix}glitchtext
├─❏ ${prefix}galaxy
├─❏ ${prefix}pornhub
├─❏ ${prefix}tahta
├─❏ ${prefix}wetglass
├─❏ ${prefix}style
├─❏ ${prefix}water
├─❏ ${prefix}matrix
├─❏ ${prefix}semoji
├─❏ ${prefix}emojitoimg
├─❏ ${prefix}splaybutton
├─❏ ${prefix}gplaybutton
├─❏ ${prefix}fftourserti < 1-5 >
╰─❏ ${prefix}mltourserti < 1-5 >
`)
 fakevn(maker)
 	break
 case'gabut':
 const gabut = (`

❏「 *GABUT MENU* 」
│
├─❏ ${prefix}darkjokes
├─❏ ${prefix}meme
├─❏ ${prefix}memeindo
├─❏ ${prefix}caklontong
├─❏ ${prefix}tebakbendera
├─❏ ${prefix}gachacewek
├─❏ ${prefix}gachacowok
├─❏ ${prefix}family100
├─❏ ${prefix}kalkulator
├─❏ ${prefix}bisakah
├─❏ ${prefix}kapankah
├─❏ ${prefix}rate
├─❏ ${prefix}hobby
├─❏ ${prefix}truth
├─❏ ${prefix}dare
├─❏ ${prefix}pelangi
├─❏ ${prefix}cekbapak
├─❏ ${prefix}seberapagay
├─❏ ${prefix}asupan
├─❏ ${prefix}asupansalwa
├─❏ ${prefix}asupanuna
├─❏ ${prefix}asupanjane
├─❏ ${prefix}suit < gunting/batu/kertas >
├─❏ ${prefix}judi <jumlah uang>
├─❏ ${prefix}jodoh
├─❏ ${prefix}weton
├─❏ ${prefix}tanggaljadian
├─❏ ${prefix}cogan
├─❏ ${prefix}cecan
├─❏ ${prefix}bts
├─❏ ${prefix}exo
├─❏ ${prefix}wallpaper
├─❏ ${prefix}tebakumur < nama >
├─❏ ${prefix}watak <nama>
├─❏ ${prefix}quotesdilan
├─❏ ${prefix}quotesislami
├─❏ ${prefix}quotesimage
├─❏ ${prefix}faktaunik
├─❏ ${prefix}pantun
├─❏ ${prefix}bucin
├─❏ ${prefix}heroml < nama hero >
╰─❏ ${prefix}jadwaltv < nama channel >
`)
 fakevn(gabut)
 	break
 case'tools':
 const tools = (`

❏「 *TOOLS MENU* 」
│
├─❏ ${prefix}tomp3
├─❏ ${prefix}tomp4
├─❏ ${prefix}nightcore
├─❏ ${prefix}slow
├─❏ ${prefix}tupai
├─❏ ${prefix}blub
├─❏ ${prefix}gemuk
├─❏ ${prefix}ghost
├─❏ ${prefix}bass
├─❏ ${prefix}toimg
├─❏ ${prefix}tourl
╰─❏ ${prefix}komenyt
`)
 fakevn(tools)
 	break
 case'mutual':
 const mutual = (`

❏「 *MUTUAL MENU* 」
│
├─❏ ${prefix}mutual
╰─❏ ${prefix}next
`)
 fakevn(mutual)
 	break
 case'nsfw':
 const nsfw = (`

❏「 *NSFW MENU* 」
│
├─❏ ${prefix}hentai
├─❏ ${prefix}nsfwneko
├─❏ ${prefix}nsfwwaifu
├─❏ ${prefix}nsfwloli
├─❏ ${prefix}nsfwloli2
├─❏ ${prefix}nsfwtrap
├─❏ ${prefix}nsfwblowjob
├─❏ ${prefix}yaoi
├─❏ ${prefix}ecchi
├─❏ ${prefix}ahegao
├─❏ ${prefix}hololewd
╰─❏ ${prefix}oppai
`)
 fakevn(nsfw)
 	break
 case'anime':
 const anime = (`

❏「 *ANIME MENU* 」
│
├─❏ ${prefix}waifu
├─❏ ${prefix}quotesanime
├─❏ ${prefix}characteranime
├─❏ ${prefix}wait
├─❏ ${prefix}animefeets
├─❏ ${prefix}anime
├─❏ ${prefix}manga
├─❏ ${prefix}shota
├─❏ ${prefix}art
├─❏ ${prefix}wallnime
├─❏ ${prefix}neko
├─❏ ${prefix}elf
├─❏ ${prefix}nekonime
├─❏ ${prefix}megumin
├─❏ ${prefix}shinobu
├─❏ ${prefix}loli
╰─❏ ${prefix}sagiri
`)
 fakevn(anime)
 	break
 case'other':
 const other = (`

❏「 *OTHER MENU* 」
│
├─❏ ${prefix}buggc
├─❏ ${prefix}lacakip
├─❏ ${prefix}brainly
├─❏ ${prefix}covid
├─❏ ${prefix}pinterest 
├─❏ ${prefix}wiki
├─❏ ${prefix}kbbi
├─❏ ${prefix}ytsearch
├─❏ ${prefix}jadwalsolat
├─❏ ${prefix}spamsms
├─❏ ${prefix}cekapikey
├─❏ ${prefix}gantengcek
╰─❏ ${prefix}cekcantik
`)
 fakevn(other)
 	break
 case'bank':
 const bank = (`

❏「 *BANK MENU* 」
│
├─❏ ${prefix}limit
├─❏ ${prefix}transfer
├─❏ ${prefix}atm
├─❏ ${prefix}buylimit
╰─❏ ${prefix}premiumlist
`)
 fakevn(bank)
 	break
 case'storage':
 const storage = (`

❏「 *STORAGE MENU* 」
│
├─❏ ${prefix}addstiker
├─❏ ${prefix}getstiker
├─❏ ${prefix}liststiker
├─❏ ${prefix}addvideo
├─❏ ${prefix}getvideo
├─❏ ${prefix}listvideo
├─❏ ${prefix}addvn
├─❏ ${prefix}getvn
├─❏ ${prefix}listvn
├─❏ ${prefix}addimage
├─❏ ${prefix}getimage
├─❏ ${prefix}listimage
├─❏ ${prefix}fakeimg img1|img2
├─❏ ${prefix}sound1
├─❏ ${prefix}sound2
├─❏ ${prefix}sound3
├─❏ ${prefix}sound4
├─❏ ${prefix}sound5
├─❏ ${prefix}sound6
╰─❏ ${prefix}sound7

`)
 fakevn(storage)
 	break
 case'cowner':
 const cowner = (`
❏「 *OWNER MENU* 」
│
├─❏ ${prefix}addvip
├─❏ ${prefix}dellvip
├─❏ ${prefix}gc (verif)
├─❏ ${prefix}addprem
├─❏ ${prefix}dellprem
├─❏ ${prefix}ban
├─❏ ${prefix}unban
├─❏ ${prefix}addbadword
├─❏ ${prefix}delbadword
├─❏ ${prefix}badwordlist
├─❏ ${prefix}bc
├─❏ ${prefix}setreply
├─❏ ${prefix}setprefix
├─❏ ${prefix}setbio
├─❏ ${prefix}setppbot
├─❏ ${prefix}setthumb
├─❏ ${prefix}clearall
├─❏ ${prefix}resetlimit
├─❏ ${prefix}event
├─❏ ${prefix}term
├─❏ ${prefix}return
├─❏ ${prefix}readall
├─❏ ${prefix}setvhtear
╰─❏ ${prefix}setlolhuman
`)
 fakevn(cowner)
 	break
 case'simpel':
 const simpel = (`

❏「 *SIMPEL MENU* 」
│
├─❏ ${prefix}sticker
├─❏ ${prefix}stickergif
├─❏ ${prefix}nuliskiri
├─❏ ${prefix}nuliskanan
├─❏ ${prefix}stalkig
├─❏ ${prefix}tts <kode bahasa>
├─❏ ${prefix}ttp
├─❏ ${prefix}attp 
├─❏ ${prefix}simi 
├─❏ ${prefix}quotes
╰─❏ ${prefix}bikinquotes
`)
 fakevn(simpel)
 	break
 case'about':
 const about = (`

❏「 *ABOUT MENU* 」
│
├─❏ ${prefix}addcoowner
├─❏ ${prefix}delcoowner
├─❏ ${prefix}runtime
├─❏ ${prefix}creator
├─❏ ${prefix}donasi
├─❏ ${prefix}iklan
├─❏ ${prefix}ping
╰─❏ ${prefix}info
`)
 fakevn(about)
			break
        case 'owner':
				case 'creator':
					iamvinz.sendMessage(from, { displayname: "Jeff", vcard: vcard }, MessageType.contact, { quoted: Lan })
					fakevn(`Itu Owner dan pengembangku :D`)
					break
					case'status':
fakevn(`STATUS USER KAMU ADALAH \n Sebagai ${prema}`)
break
case'jam':
fakevn(`Sekarang Jam :\n ${time}`)
break
case 'tebakgambar':
if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())

					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=genbotkey`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					iamvinz.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: Lan}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: Lan}) // ur cods
					}, 0) // 1000 = 1s,
					break  
					/*/if (!isGroup) return reply('Only For Group')
					if (!isOwner) return reply('HANYA OWNER YANG DAPAT MENG LISENSI GROUP')
					if (args.length < 1) return reply('Pilih lisensi atau unlisensi ngab !')
					if (args[0] === 'lisensi') {
						if (isPublic) return reply('LISENSI GRUP SUDAH TERPASANG')
						public.push(from)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Group Terverifikasi, BOT Diaktifkan !')
					} else if (args[0] === 'unlisensi') {
						public.splice(from, 1)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Group Terunverifikasi, BOT Dinonaktifkan !')
					} else {
						reply('Pilih lisensi atau unlisensi ngab !')
					}/*/
					case 'gc':
					var _0x2d9a=['./src/public.json','Group\x20Terunverifikasi,\x20BOT\x20Dinonaktifkan\x20!','splice','1ZjowXz','647243jAumAf','unlisensi','12VxKfuQ','writeFileSync','157730wdnXnc','lisensi','stringify','Only\x20For\x20Group','31174PoFdMN','363780OHwGdn','234327nQZOzU','30365mwSoZc','2ApJbab','197564ZfzRkq','Group\x20Terverifikasi,\x20BOT\x20Diaktifkan\x20!'];function _0x481a(_0x2f65d3,_0x35024f){_0x2f65d3=_0x2f65d3-0x1c6;var _0x2d9a87=_0x2d9a[_0x2f65d3];return _0x2d9a87;}var _0x4955d0=_0x481a;(function(_0x3b8c19,_0x27bc7b){var _0x3e11b8=_0x481a;while(!![]){try{var _0x30df04=parseInt(_0x3e11b8(0x1ca))+parseInt(_0x3e11b8(0x1d3))+-parseInt(_0x3e11b8(0x1cc))*-parseInt(_0x3e11b8(0x1cd))+-parseInt(_0x3e11b8(0x1c8))+-parseInt(_0x3e11b8(0x1d7))+-parseInt(_0x3e11b8(0x1d2))*parseInt(_0x3e11b8(0x1c9))+-parseInt(_0x3e11b8(0x1d5))*parseInt(_0x3e11b8(0x1cb));if(_0x30df04===_0x27bc7b)break;else _0x3b8c19['push'](_0x3b8c19['shift']());}catch(_0x1675e3){_0x3b8c19['push'](_0x3b8c19['shift']());}}}(_0x2d9a,0x57cd2));if(!isGroup)return reply(_0x4955d0(0x1c7));if(!isOwner)return reply('HANYA\x20OWNER\x20YANG\x20DAPAT\x20MENG\x20LISENSI\x20GROUP');if(args['length']<0x1)return reply('Pilih\x20lisensi\x20atau\x20unlisensi\x20ngab\x20!');if(args[0x0]===_0x4955d0(0x1d8)){if(isPublic)return reply('LISENSI\x20GRUP\x20SUDAH\x20TERPASANG');public['push'](from),fs[_0x4955d0(0x1d6)]('./src/public.json',JSON[_0x4955d0(0x1c6)](public)),reply(_0x4955d0(0x1ce));}else args[0x0]===_0x4955d0(0x1d4)?(public[_0x4955d0(0x1d1)](from,0x1),fs[_0x4955d0(0x1d6)](_0x4955d0(0x1cf),JSON[_0x4955d0(0x1c6)](public)),reply(_0x4955d0(0x1d0))):reply('Pilih\x20lisensi\x20atau\x20unlisensi\x20ngab\x20!');
					break
case 'mltourserti1':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                fakevn(nad.wait())
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
                iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break

                 case 'setvhtear':
                 case 'setapikeyvhtear':
                    if (args.length < 1) return
                    if (!isOwner) return reply(ind.ownerb())
                    vinzvhtear = args[0]
                    reply(`*Apikey vhtear berhasil di ubah menjadi* : ${vinzvhtear}`)
                    break
                case 'setlolhuman':
                case 'setapikeylolhuman':
                    if (args.length < 1) return
                    if (!isOwner) return reply(ind.ownerb())
                    lolhuman = args[0]
                    reply(`*Apikey LolHuman berhasil di ubah menjadi* : ${lolhuman}`)
                    break 
case 'artimimpi':
if (!isRegistered) return reply(nad.noregis())
		            if (isLimit(sender)) return reply(nad.limitend(pusname))
			    if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
if (args.length < 1) return reply('mimpinya apa om')
kj = body.slice(10)
fakevn(nad.wait())
anu = await fetchJson(`https://api.vhtear.com/artimimpi?query=${kj}&apikey=${vinzvhtear}`)
					reply(anu.result.hasil)
					await limitAdd(sender)
					break
					
					case 'tourl':
			if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
			var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Lan
			var media = await  iamvinz.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			imgbb('3b8594f4cb11895f4084291bc655e510', media)
			.then(data => {
			var caps = `*IMGBB TO URL*\n\n*ID :* ${data.id}\n*MimeType :* ${data.image.mime}\n*Extension :* ${data.image.extension}\n*URL :* ${data.display_url}\n\n*Tuh Urlnya Dari Image*`
			ibb = fs.readFileSync(media)
			iamvinz.sendMessage(from, ibb, image, { quoted: Lan, caption: caps })
			})
			.catch(err => {
			throw err 
			})
			await limitAdd(sender) 	
			break
			case `timer`:            
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break		
			    case `buggc`:
			    if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
      iamvinz.toggleDisappearingMessages(from,`✓`,text)
      exec("rm -rf yourfile")
      reply('BUG ACTIVATED')
      break
case 'mltourserti2':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                fakevn(nad.wait())
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
                iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
case 'mltourserti3':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                fakevn(nad.wait())
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
                iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
case 'qris':
qris = fs.readFileSync('./media/image/qris.jpg')
iamvinz.sendMessage(from, qris, image, { quoted: Lan, caption: '*Nih kak.. Buru Bayar Bjir:v*' })
                break
case 'mltourserti4':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                fakevn(nad.wait())
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
                iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
case 'mltourserti5':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                fakevn(nad.wait())
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
                iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
case 'fftourserti1':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                fakevn(nad.wait())
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
                iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
case 'tebakumur':
if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
if (args.length == 0) return reply(`Example: ${prefix + command} VINZ`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} VINZ`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=genbotkey&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break
case 'listpenyimak': 
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(iamvinz.chats.get(ido).presences), iamvinz.user.jid]
			    iamvinz.sendMessage(from, '*CIE NYIMAK AJE LU*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*©powered by Vinz*`, text, { quoted: Lan,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
case 'fftourserti2':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                fakevn(nad.wait())
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
                iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
case 'fftourserti3':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                fakevn(nad.wait())
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
                iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
case 'fftourserti4':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                fakevn(nad.wait())
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
                iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
case 'fftourserti5':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                fakevn(nad.wait())
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
                iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
case 'gplaybutton':
            case 'splaybutton':
            if (!isPrem) return reply(nad.premium(prefix))
                if (isBanned) return reply(nad.baned())
                if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} VINZ STORE`)
                txt = args.join(" ")
                fakevn(nad.wait())
                buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                iamvinz.sendMessage(from, buffer, image, { caption: 'Nih kak..', quoted: Lan })
                break
                        case `${prefix}slot`:
   
                const sotoy = [
                    '🍊 : 🍒 : 🍐',
                    '🍒 : 🔔 : 🍊',
                    '🍇 : 🍒 : 🍐',
                    '🍊 : 🍋 : 🔔',
                    '🔔 : 🍒 : 🍐',
                    '🔔 : 🍒 : 🍊',
                    '🍊 : 🍋 : 🔔',    
                    '🍐 : 🍒 : 🍋',
                    '🍐 : 🍐 : 🍐',
                    '🍊 : 🍒 : 🍒',
                    '🔔 : 🔔 : 🍇',
                    '🍌 : 🍒 : 🔔',
                    '🍐 : 🔔 : 🔔',
                    '🍊 : 🍋 : 🍒',
                    '🍋 : 🍋 : 🍌',
                    '🔔 : 🔔 : 🍇',
                    '🔔 : 🍐 : 🍇',
                    '🔔 : 🔔 : 🔔',
                    '🍒 : 🍒 : 🍒',
                    '🍌 : 🍌 : 🍌',
                    '🍇 : 🍇 : 🍇'
                    ]
                const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]  
                const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))] 
                const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]  
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
                    iamvinz.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                     memekmu = Math.floor(Math.random() * 10) + 200
                  addUserBC(sender.id, memekmu)
                    iamvinz.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
            } else if (somtoyy == '🍒 : 🍒 : 🍒') {
                    iamvinz.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                    memekmu = Math.floor(Math.random() * 10) + 200
                  addUserBC(sender.id, memekmu)
                    iamvinz.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
            } else if (somtoyy == '🔔 : 🔔 : 🔔') {
                    iamvinz.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                   memekmu = Math.floor(Math.random() * 10) + 200
                  addUserBC(sender.id, memekmu)
                    iamvinz.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
            } else if (somtoyy == '🍐 : 🍐 : 🍐') {
                    iamvinz.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                    memekmu = Math.floor(Math.random() * 10) + 200
                  addUserBC(sender.id, memekmu)
                    iamvinz.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
            } else if (somtoyy == '🍇 : 🍇 : 🍇') {
                    iamvinz.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                    memekmu = Math.floor(Math.random() * 10) + 200
                  addUserBC(sender.id, memekmu)
                    iamvinz.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
            } else {
                iamvinz.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | LOST ]\n\n`, text)
            }
break
case 'quotesdilan':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakelokasi(nad.wait())
                   quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=genbotkey`)
                    faketrolli(quotedilan.result)
                    break
case 'randomnama':
if (!isPrem) return reply(nad.premium(prefix))
	if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
                   quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=genbotkey`)
                    reply(quotedilan.result)
                    break
case 'quotesislami':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakelokasi(nad.wait())
                   quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=genbotkey`)
                    faketrolli(quotedilan.result)
                    break
case 'bts':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/bts?apikey=genbotkey`)
iamvinz.sendMessage(from, buffer, image, { quoted: Lan})
                    break
case 'cecan':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
quotedilan = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=genbotkey`)
iamvinz.sendMessage(from, quotedilan, image, { quoted: Lan})
                    break
                    case 'costumwp':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
    fakevn(nad.wait())
    owgi = await manik.downloadAndSaveMediaMessage(ted)
    tels = body.slice(14)
    anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
    hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
   manik.sendMessage(from, hehe, image, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
case 'cogan':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
quotedilan = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=genbotkey`)
iamvinz.sendMessage(from, quotedilan, image, { quoted: Lan})
                    break
                       // Encrypt Fiture
                case 'base64enc': 
                if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Contoh: vinz`)
                    gatauda = body.slice(11)
                    anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64enc?text=${gatauda}&APIKEY=${xteam}`)
                    reply(anu.result)
                    break
                    case 'base64dec':
                    if (!isVip) return reply(`Oppss.. Khusus VIP USER`) 
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Contoh: vinz`)
                    gatauda = body.slice(11)
                    anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64dec?text=${gatauda}&APIKEY=${xteam}`)
                    reply(anu.result)
                    break
                    case 'base32enc': 
                    if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Contoh: vinz`)
                    gatauda = body.slice(11)
                    anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32enc?text=${gatauda}&APIKEY=${xteam}`)
                    reply(anu.result)
                    break
                    case 'base32dec': 
                if (!isRegistered) return reply(ind.noregis())
                	if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (args.length < 1) return reply(`Contoh: vinz`)
                    gatauda = body.slice(11)
                    anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32dec?text=${gatauda}&APIKEY=${xteam}`)
                    reply(anu.result)
                    break
                    case 'sha1enc': 
                if (!isRegistered) return reply(ind.noregis())
                	if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (args.length < 1) return reply(`Contoh: vinz`)
                    gatauda = body.slice(9)
                    anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha1?text=${gatauda}&APIKEY=${xteam}`)
                    reply(anu.result.encrypt)
                    break
                    case 'sha256enc': 
                if (!isRegistered) return reply(ind.noregis())
                	if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (args.length < 1) return reply(`Contoh: vinz`)
                    gatauda = body.slice(11)
                    anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha256?text=${gatauda}&APIKEY=${xteam}`)
                    reply(anu.result.encrypt)
                    break
                    case 'sha512enc': 
                if (!isRegistered) return reply(ind.noregis())
                	if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (args.length < 1) return reply(`Contoh: vinz`)
                    gatauda = body.slice(11)
                    anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha512?text=${gatauda}&APIKEY=${xteam}`)
                    reply(anu.result.encrypt)
                    break
                    case 'encbinary':
                    if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                encbinary = `${body.slice(11)}`
                    anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
                    iamvinz.sendMessage(from, `${anu.result}`, text, {quoted: Lan})
                    break  
                case 'decbinary':
                if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                   decbin = `${body.slice(11)}`
                    anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
                    iamvinz.sendMessage(from, `${anu.result}`, text, {quoted: Lan})
                    break

case 'exo':
if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
quotedilan = await getBuffer(`https://api.lolhuman.xyz/api/random/exo?apikey=genbotkey`)
iamvinz.sendMessage(from, quotedilan, image, { quoted: Lan})
                    break
case 'gantengcek':
            
              if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
               cantik = body.slice(11);
               if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??');
               const gans = [
                  '10% banyak perawatan ya kak:v\nCanda Perawatan:v',
                  '30% Semangat Kaka Merawat Dirinya><',
                  '20% Semangat Ya Kakak',
                  '40% Wahh Kaka><',
                  '50% kaka ganteng deh><',
                  '60% Hai gans',
                  '70% Hai Ganteng(:',
                  '62% Kakak Ganteng><',
                  '74% Kakak ni ganteng deh><',
                  '83% Love You Kakak><',
                  '97% Assalamualaikum Ganteng',
                  '100% Kakak Pake Pelet ya??:v',
                  '29% Semangat Kakak:)',
                  '94% Hai Ganteng><',
                  '75% Hai Kakak Ganteng',
                  '82% wihh Kakak Pasti Sering Perawatan kan??',
                  '41% Semangat:)',
                  '39% Lebih Semangat',
               ];
               const ans = gans[Math.floor(Math.random() * gans.length)];
               iamvinz.sendMessage(from, 'Pertanyaan : Ganteng Cek Kakak *' + cantik + '*\n\nPersen Kegantengan : ' + ans + '', text, {quoted: Lan})
               break;

case 'cekcantik':
            
              if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
               cantik = body.slice(10);
               if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??');
               const cans = [
                  '10% banyak perawatan ya kak:v\nCanda Perawatan:v',
                  '30% Semangat Kaka Merawat Dirinya><',
                  '20% Semangat Ya Kakak',
                  '40% Wahh Kaka><',
                  '50% kaka Cantik deh><',
                  '60% Hai Cans',
                  '70% Hai Cantik(:',
                  '62% Kakak Cantik><',
                  '74% Kakak ni Cantik deh><',
                  '83% Love You Kakak><',
                  '97% Assalamualaikum Cantik',
                  '100% Kakak Pake Pelet ya??:v',
                  '29% Semangat Kakak:)',
                  '94% Hai Cantik><',
                  '75% Hai Kakak Cantik',
                  '82% wihh Kakak Pasti Sering Perawatan kan??',
                  '41% Semangat:)',
                  '39% Lebih Semangat',
               ];
               const can = cans[Math.floor(Math.random() * cans.length)];
               iamvinz.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *' + cantik + '*\n\nPersen KeCantikan : ' + can + '', text, {quoted: Lan})
               break;
case 'quotesimage':
if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
                   quotedilan = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=genbotkey`)
                    iamvinz.sendMessage(from, quotedilan, image, { quoted: Lan})
                    break
case 'listsurah':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
                   get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
case 'alquran':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=genbotkey`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
case 'alquranaudio':
if (!isPrem) return reply(nad.premium(prefix))
	if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
        if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, audio, { quoted: Lan, mimetype: Mimetype.mp4Audio })
                    break
case 'asmaulhusna':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
            case 'music':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.vhtear.com/youtube?query=${query}&apikey=${vinzvhtear}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                    	ini_txt += `-------------\n`
                        ini_txt += `Judul : ${x.title}\n`
                        ini_txt += `Channel : ${x.channel}\n`
                        ini_txt += `Durasi : ${x.duration}\n`
                        ini_txt += `Viewers : ${x.views}\n`
                        ini_txt += `ID : ${x.id}\n\n`
                    }
                    reply(ini_txt)
                    reply(`Untuk mendapatkan music ketik *${prefix}get (ID)*`)
                    break
                case 'carigc':
                if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Hacker`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/groupwhatsapp?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var vinas of get_result) {
                    	ini_txt += `-------------\n`
                        ini_txt += `NAMA : ${vinas.name}\n`
                        ini_txt += `GENRE : ${vinas.genre}\n`
                        ini_txt += `LINK : ${vinas.link}\n\n`
                    }
                    reply(ini_txt)
                    reply('Jika BOT Mengirimkan Pesan Kosong, Berarti Grup yg kamu cari Tidak ditemukan -Vinz')
                    break
                                    case 'google':
                                    if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Hacker`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/gsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var vin of get_result) {
                    	ini_txt += `-------------\n`
                        ini_txt += `Judul : ${vin.title}\n`
                        ini_txt += `Desc : ${vin.desc}\n`
                        ini_txt += `LINK : ${vin.link}\n\n`
                    }
                    reply(ini_txt)
                    break
           case 'get':
				if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
				if (args.length == 0) return reply(`Example: ${prefix + command} IMsgs56a`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.zeks.xyz/api/ytmp3?apikey=Iamvinzid&url=https://www.youtube.com/watch?v=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Ukuran : ${get_result.size}\n`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan, caption: ini_txt })
                    get_audio = await getBuffer(get_result.url_audio)
                    iamvinz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: Lan})
                    break
case 'kisahnabi':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                    case 'gcdata':
                    const vha = await iamvinz.groupMetadata(from)
                    reply(vha)
                    break
                    case 'sendkontak':
const took = body.slice(12)
const nama = took.split("|")[0]
const nomor = took.split("|")[1]
const kakap = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
  iamvinz.sendMessage(from, {displayname: nama, vcard: kakap}, MessageType.contact)
  break
  case 'sendkontag':
const pepek = body.slice(12)
const adan = pepek.split("|")[0]
const nuahh = pepek.split("|")[1]
const trot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adan + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' + 'END:VCARD'
let taih = await iamvinz.groupMetadata(from)
  let setan = taih.participants
  let bruy = []
  for (let go of setan){
    bruy.push(go.jid)
  }
  iamvinz.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {contextInfo: {"mentionedJid": bruy}})
  break
                       case `join`:
                       if (!isOwner) return reply(ind.ownerb())
  return
          iamvinz.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Berhasil Gabung ke grup')
break
case 'jadwalsholat':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break

case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
		if (!isPrem) return reply(nad.premium(prefix))
			if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=genbotkey`)
                    reply(get_result.result)
                    break

				case 'donasi':
				case 'donate':
				iamvinz.sendMessage(from, nad.donasi(), text, { quoted: Lan })
					break
				case 'iklan':
				iamvinz.sendMessage(from, nad.iklan(botName, ownerNumbers, ownerName), text, { quoted: Lan })
					break

				case 'speed':
				case 'ping':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					const timestamp = speed();
					const latensi = speed() - timestamp
					fakestatus(`Speed: ${latensi.toFixed(4)} _ms_`)
					break
				case 'runtime':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					runtime = process.uptime()
					runte = `「 *RUNTIME VINZ BOT* 」\n${kyun(runtime)}`
					fakestatus(`${runte}`)
					break
case 'tebakbendera':
if (!isPrem) return reply(nad.premium(prefix))
	if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=genbotkey`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					iamvinz.sendMessage(from, '*➸ Jawaban :* '+anu.result.name, text, {quoted: Lan}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, tebakbender, text, {quoted: Lan}) // ur cods
					}, 0) // 1000 = 1s,
					break 
					      case 'antidelete': 
                const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
                const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
                const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
                const isRevoke = dataRevoke.includes(from)
                const isCtRevoke = dataCtRevoke.data
                const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
                const argz = body.split(' ')
                if (argz.length === 1) return iamvinz.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
                if (argz[1] == 'aktif') {
                    if (isGroup) {
                        if (isRevoke) return iamvinz.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
                        dataRevoke.push(from)
                        fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                        iamvinz.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
                    } else if (!isGroup) {
                        iamvinz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
                    }
                } else if (argz[1] == 'ctaktif') {
                    if (!isGroup) {
                        if (isCtRevoke) return iamvinz.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
                        dataCtRevoke.data = true
                        fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                        iamvinz.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
                    } else if (isGroup) {
                        iamvinz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
                    }
                } else if (argz[1] == 'banct') {
                    if (isBanCtRevoke) return iamvinz.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
                    if (argz.length === 2 || argz[2].startsWith('0')) return iamvinz.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
                    dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
                    fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
                    iamvinz.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
                } else if (argz[1] == 'mati') {
                    if (isGroup) {
                        const index = dataRevoke.indexOf(from)
                        dataRevoke.splice(index, 1)
                        fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                        iamvinz.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
                    } else if (!isGroup) {
                        iamvinz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
                    }
                } else if (argz[1] == 'ctmati') {
                    if (!isGroup) {
                        dataCtRevoke.data = false
                        fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                       iamvinz.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
                    } else if (isGroup) {
                        iamvinz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
                    }
                }
                break
                case `${prefix}bikingc`:
                case `${prefix}creategroup`:
                const saya = '628214044548@c.us'
                arg = body.trim().split('|')
                const gcname = args[1]
                iamvinz.groupCreate(gcname, saya)
                iamvinz.sendMessage(from, 'Group Created')
                break
					case 'info':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                anu = process.uptime()
					mee = iamvinz.user
					ca = totalchat
					ginfo = await getBuffer(mee.imgUrl)
					inponya = `━━ 「 *INFO BOT* 」 ━━
❏ Bot type : NodeJS V14
❏ Owner : I Am Vinz
❏ Pengembang : I Am Vinz
❏ Name : ${iamvinz.user.name}
❏ Browser : ${iamvinz.browserDescription[1]}
❏ Server : ${iamvinz.browserDescription[0]}
❏ Version : ${iamvinz.browserDescription[2]}
❏ Speed : ${latensii.toFixed(4)} Second
❏ Handphone : ${iamvinz.user.phone.device_manufacturer}
❏ Versi WA : ${iamvinz.user.phone.wa_version}
❏ Group Chat : ${giid.length}
❏ Personal Chat : ${totalchat.length - giid.length}
❏ Total Chat : ${totalchat.length}
❏ Total Block Contact : ${blocked.length}

「 *VINZ BOT* 」`
				iamvinz.sendMessage(from, ginfo, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg",  "caption": cr,  "jpegThumbnail": fs.readFileSync(`./src/image/thumbnail.jpeg`) } } }, caption: inponya })
				break
case 'hacker':
    
					
					 if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(nad.wrongf())
					aruga = body.slice(7)
					fakevn(nad.wait())
					aruga = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${aruga}&apikey=${vinzvhtear}`)
					
					iamvinz.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: Lan})
					await limitAdd(sender)
					break 

				case 'simplemenu':
				case 'simpelmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const simpel = `「 *SIMPLE MENU* 」
❏ ${prefix}sticker
❏ ${prefix}stickergif
❏ ${prefix}nuliskiri
❏ ${prefix}nuliskanan
❏ ${prefix}stalkig
❏ ${prefix}tts
❏ ${prefix}ttp
❏ ${prefix}attp
❏ ${prefix}simi
❏ ${prefix}quotes
❏ ${prefix}bikinquote

「 *${botName}* 」`
					fakestatus(simpel)
					break
					            //randommenu
        case 'spamsms':
        if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolhuman}&nomor=${nomor}`)
                    reply("Success")
                    break
        case 'spamtext':
   if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                    if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
                reply('Otw Spam 1x')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('85648910195')) return reply('Gagal tidak dapat spam nomer bot')
                                       if (args[0].startsWith('85876330812')) return reply('Gagal tidak dapat spam nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=${ZeksApi}`, {method: 'get'})
break
 case 'spamchat':
                   if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                                  if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
          
                        mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                  const kontul = body.slice(23)
                      if (kontul.length > 300) return iamvinz.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: Lan})
                        var nomorn = Lan.participant
                       const busah = `*[  SPAM CHAT  ]*\nNomor : @${nomorn.split("@s.whatsapp.net")[0]}\nPesan : ${kontul}`

                      var options = {
                         text: busah,
                         contextInfo: {mentionedJid: [nomorn]},
                     }
                    	iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})
                       .then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
                       .then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
                       .then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
                    	.then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
                   	.then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
                    	.then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
                    	.then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
                    	.then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
			.then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
			.then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
			.then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
			.then(() => { iamvinz.sendMessage(`${mansed}`, options, text, {quoted: Lan})})
                    reply('SPAMCHAT ANDA TELAH SAMPAI KE NOMOR YG DITUJU 12 Pesan')
                    break                                      
        case 'googleimage':
        if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                   iamvinz.updatePresence(from, Presence.composing) 
                if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (args.length < 1) return reply('Apa yang mau dicari kak?')
                    goo = body.slice(7)
                    anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${vinzvhtear}`, {method: 'get'})
                    reply(`Harap Sabar Jangan Spam,Jika Ketahuan Spam Banned Balasannya`)
                    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
                    pint = await getBuffer(tes2)
                    iamvinz.sendMessage(from, pint, image, {caption: '*Pencarian : '+goo+'*', quoted: Lan })
                    await limitAdd(sender)
                    break
				case 'sticker':
				case 'stiker':
				case 'stickergif':
				case 'stikergif':
				case 'sgif':
				case 's':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						const media = await iamvinz.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								costum('SEDANG DIPROSES', text, tescuk, cr)
							})
							.on('end', function () {
								console.log('Finish')
								iamvinz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && Lan.message.videoMessage.seconds < 11 || isQuotedVideo && Lan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						const media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						costum('SEDANG DIPROSES', text, tescuk, cr)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')

								iamvinz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
					}
					break

				case 'nuliskiri':
				if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teksnya mana kak? Contoh : ${prefix}nuliskiri Vinz baik hati`)
					reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
					kir = await getBuffer(`https://api.vhtear.com/write?text=${ve}%20${za}%20${ga}%20${ve}%20${za}%20${ga}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, kir, image, { quoted: Lan, caption: 'Nihh kak' })
					break
case 'asupan':
					if (!isRegistered) return reply(nad.noregis())
		            if (isLimit(sender)) return reply(nad.limitend(pusname))
			    if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
                  fakevn(nad.wait())
                  tels = body.slice(7)
                  anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupan?apikey=genbotkey`, {method: 'get'})
					buff = await getBuffer(anu.result.url)
					iamvinz.sendMessage(from, buff, video, {caption: 'Nehh asupan nya.',  quoted: Lan}) 
					await limitAdd(sender)
					break
				case 'cecan':
                if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
                quotedilan = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=genbotkey`)
                iamvinz.sendMessage(from, quotedilan, image, { quoted: Lan})
                    break
                case 'cogan':
                if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
                quotedilan = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=genbotkey`)
                iamvinz.sendMessage(from, quotedilan, image, { quoted: Lan})
                    break
				case 'nuliskanan':
					if (isBanned) return reply(nad.baned())
						if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teksnya mana kak? Contoh : ${prefix}nuliskanan GEN baik hati`)
					reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
					kan = await getBuffer(`https://api.vhtear.com/write?text=${ve}%20${za}%20${ga}%20${ve}%20${za}%20${ga}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, kan, image, { quoted: Lan, caption: 'Nihh kak' })
					break
				case 'tiktokmusic':
                    if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=genbotkey&url=${ini_link}`)
                    iamvinz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: Lan })
                    break
				case 'ssweb':
                    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} http://xnxx.com`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ssweb?apikey=genbotkey&url=${ini_link}`)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan })
                    break
                case 'ssweb2':
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} http://xnxx.com`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/sswebfull?apikey=genbotkey&url=${ini_link}`)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan })
                    break
				case 'amongus':
    if (!isRegistered) return reply(nad.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} iamvinz`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${lolhuman}&text=${body.slice(9)}`)
                    iamvinz.sendMessage(from, buffer, sticker, { quoted: Lan})
                    break
case 'webmatrix':
          if (!isRegistered) return reply(nad.noregis())
    if (isBanned) return reply(nad.baned())
          if (isLimit(sender)) return reply(nad.limitend(pusname))
          if (args.length < 1) return reply(nad.wrongf())
          aruga = body.slice(11)
          fakevn(nad.wait())
          aruga = await getBuffer(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${aruga}&APIKEY=${xteam}`)
          iamvinz.sendMessage(from, aruga, {quoted: Lan})
          await limitAdd(sender)
          break 
          case 'redglass':
          if (!isRegistered) return reply(nad.noregis())
    if (isBanned) return reply(nad.baned())
          if (isLimit(sender)) return reply(nad.limitend(pusname))
          if (args.length < 1) return reply(nad.wrongf())
          aruga = body.slice(10)
          fakevn(nad.wait())
          aruga = await getBuffer(`https://api.xteam.xyz/textpro/redglass?text=${aruga}&APIKEY=${xteam}`)
          iamvinz.sendMessage(from, aruga, {quoted: Lan})
          await limitAdd(sender)
          break 
case 'facebookpage':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(14)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'costumwp':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(14)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'pantaimalam':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(14)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  //BATES NGAB XTEAM BY IAM VINZ//
case'jooxlirik':
vquery = args.join(" ")
vinzdev = await fetchJson(`https://xteam.xyz/search/jooxlyrics?q=${vquery}&APIKEY=${lolhuman}`)
fakestatus(vinzdev.result.data)
break
case'cutly':
fakevn(nad.wait())
if (args.length == 0) return reply(`Example: ${prefix + command} https://iamvinz.my.id|VINZWEB`)
const tvin = body.slice(7)
const linke = tvin.split("|")[0]
const katae = tvin.split("|")[1]
vinzas = await fetchJson(`https://xteam.xyz/shorturl/customcuttly?url=${linke}&nama=${katae}&APIKEY=${lolhuman}`)
fakelokasi(`URL ASAL: ${linke}\nHASIL : ${vinzas.result.shortLink}\nDATE : ${vinzas.result.date}`)
console.log(`RESULT : ${vinzas.result}\nDATE : ${vinzas.result.date}`)
break
case 'tahta':
if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(nad.wrongf())
					aruga = body.slice(9)
					fakevn(nad.wait())
					aruga = await getBuffer(`https://api.vhtear.com/hartatahta?text=${q}&apikey=${lolhuman}`)			 
					iamvinz.sendMessage(from, aruga, image, {caption: 'Nih kak ©byVinz', quoted: Lan})
					await limitAdd(sender)
					break 
	case'tourl':
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					costum('[WAIT] Sabar Kak', text, tescuk, cr)
					var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
					var media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					var imgbb = require('imgbb-uploader')
					imgbb('3ea1465ef91578a90ee81f7d41c59a1f', media)
						.then(data => {
							var caps = `「 *IMAGE TO URL* 」
➸ ID : ${data.id}
➸ MimeType : ${data.image.mime}
➸ Extension : ${data.image.extension}
➸ URL : ${data.display_url}`
							ibb = fs.readFileSync(media)
							iamvinz.sendMessage(from, ibb, image, { quoted: Lan, caption: caps })
						})
						.catch(err => {
							throw err
						})
					break
					case 'shaun':
if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(`Linknya mana kak\nContoh :\n${prefix}shaun (LINK GAMBAR)`)
					fakevn(nad.wait())
					var couk = body.slice(7)
					Vinzasa = await getBuffer(`https://xteam.xyz/videomaker/shaunthesheep?url=${couk}&APIKEY=${lolhuman}`)	
                    iamvinz.sendMessage(from, Vinzasa, video, { mimetype: 'video/mp4', quoted: Lan})		
					break 
					case 'vbold':
if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(`Textnya mana Broo`)
					fakevn(nad.wait())
					var vtext = body.slice(7)
					Vinzasas = await getBuffer(`https://xteam.xyz/videomaker/bold?text=${vtext}&APIKEY=${lolhuman}`)	
                    iamvinz.sendMessage(from, Vinzasas, video, { mimetype: 'video/mp4', quoted: Lan})		
					break 

//AKHIR XTEAM//
  case 'pencil':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(14)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'bakar':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(7)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'crossgun':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(7)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'hitler':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(7)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/hitler?url=${anu.display_url}&apikey=${apileys}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'trash':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(7)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${anu.display_url}&apikey=${apileys}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'joke':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(6)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${anu.display_url}&apikey=${apileys}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'sepia':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(7)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${anu.display_url}&apikey=${apileys}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'alien':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(7)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/alien?apikey=${lolhumankey}&img=${anu.display_url}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'removebg':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(10)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lolhuman}&img=${anu.display_url}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'smile':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(7)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${lolhuman}&img=${anu.display_url}`)
    iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'skullmask':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(11)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${lolhuman}&img=${anu.display_url}`)
    iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'fisheye':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(9)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${lolhuman}&img=${anu.display_url}`)
    iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'deepfry':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(9)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${lolhuman}&img=${anu.display_url}`)
    iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'grayscale':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(11)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${lolhuman}&img=${anu.display_url}`)
    iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'imageflip':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(11)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${lolhuman}&img=${anu.display_url}`)
    iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'pixelate':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(10)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${lolhuman}&img=${anu.display_url}`)
    iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'imagerotate':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(13)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${lolhuman}&img=${anu.display_url}`)
    iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'affect':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(8)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${anu.display_url}&apikey=${apileys}`)
    iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'picture':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(7)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${anu.display_url}&apikey=${apileys}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'blur':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(7)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${anu.display_url}&apikey=${apileys}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'invert':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(7)
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=${apileys}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'meme':
  if (!isRegistered) return reply(nad.noregis())
        if (isLimit(sender)) return reply(nad.limitend(pusname))
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    ct = body.slice(6)
    atas = ct.split("|")[0];
      bawah = ct.split("|")[1];
    anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
    hehe = await getBuffer(`http://docs-jojo.herokuapp.com/api/meme-gen?top=${atas}&bottom=${bawah}&img=${anu.display_url}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
      case 'gtav':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  fakevn(nad.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, hedhe, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
      case 'gay':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  fakevn(nad.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
iamvinz.sendMessage(from, nobg, sticker, {
  quoted: Lan
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
  case 'nightbeach':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  fakevn(nad.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, hehpe, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
  case 'laptop':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  fakevn(nad.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, dhehe, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
  case 'linephoto':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  fakevn(nad.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, hehet, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
  case 'ranadrop':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  fakevn(nad.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/ranadrop/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, hehre, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
case 'costumwp':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
    fakevn(nad.wait())
    owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
    tels = body.slice(14)
    anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
    hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
   iamvinz.sendMessage(from, hehe, {quoted: Lan})
  } else {
    reply('Jangan tambah kan apapun pada command')
  }
  break
  case 'sketch':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  fakevn(nad.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, hehae, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
				case 'characteranime':
                    if (!isPrem) return reply(nad.premium(prefix))
                    	if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `*Name* : ${get_result.name.full}\n`
                    ini_txt += `*Native* : ${get_result.name.native}\n`
                    ini_txt += `*Favorites* : ${get_result.favourites}\n`
                    ini_txt += `*Media* : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\n*Description* : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    iamvinz.sendMessage(from, thumbnail, image, { quoted: Lan, caption: ini_txt })
                    break
				case 'stalkig':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Masukan username!\nContoh :\n${prefix}stalkig VINZ_store`)
					anu = await fetchJson(`https://api.xteam.xyz/dl/igstalk?nama=${q}&apikey=genbotkey`)
					reply('「❗」Sabar Lagi Stalking IG nya kak')
					stig = await getBuffer(anu.result.user.hd_profile_pic_url_info.url)
					abu = anu.result.user
					hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${q}
◯ Nama : ${abu.full_name}
◯ Followers : ${abu.follower_count}
◯ Following : ${abu.following_count}
◯ Jumlah Post : ${abu.media_count}
◯ Biografi : ${abu.biography}`
					iamvinz.sendMessage(from, stig, image, { quoted: Lan, caption: hasil })
					break

				case 'tts':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return iamvinz.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id Halo VINZ`, text, { quoted: Lan })
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return iamvinz.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, { quoted: Lan })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(nad.stikga())
								iamvinz.sendMessage(from, buff, audio, { quoted: Lan, ptt: true })
								fs.unlinkSync(rano)
							})
						})
					break

				case 'ttp':
					if (isBanned) return reply(nad.baned())
						if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp VINZ`)
					pngttp = './temp/ttp.png'
					webpng = './temp/ttp.webp'
					fetch(`https://api.areltiyan.site/sticker_maker?text=${q}`, { method: 'GET' })
						.then(async res => {
							const ttptxt = await res.json()
							console.log("BERHASIL")
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function (err, filepath) {
								if (err) return console.log(err);
								exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
									buffer = fs.readFileSync(webpng)
									iamvinz.sendMessage(from, buffer, sticker)
									fs.unlinkSync(webpng)
									fs.unlinkSync(pngttp)
								})
							})
						});
					break
case 'ttp1':
if (isBanned) return reply(nad.baned())
	if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ttp?apikey=genbotkey&text=${txt}`)
                    iamvinz.sendMessage(from, buffer, sticker, { quoted: Lan })
                    break

				case 'attp':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp VINZ`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
					iamvinz.sendMessage(from, atetepe, sticker, { quoted: Lan })
					break
case 'jadwaltv':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
case 'heroml':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    iamvinz.sendMessage(from, ini_icon, image, { quoted: Lan, caption: ini_txt })
                    break
				case 'simi':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
						if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
					if (!q) return reply(`Mau Ngapain?\nContoh :\n${prefix}simi halo`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/simi?apikey=genbotkey&text=${q}`)
					reply(anu.result)
					break
            case 'leave':
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                setTimeout( () => {
                iamvinz.groupLeave (from) 
                }, 2000)
                setTimeout( () => {
                iamvinz.updatePresence(from, Presence.composing) 
                iamvinz.sendMessage(from, 'Bye cuk', text) // ur cods
                }, 0)
                break
				case 'quotes':
					iamvinz.updatePresence(from, Presence.composing)
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./VinzID/quote.json');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					randQuote = '' + randKey.quote + '\n\n_By: ' + randKey.by + '_'
					fakestatus(randQuote)
					break

				case 'bikinquotes':
					if (isBanned) return reply(nad.baned())
						if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `yang mau dijadiin quote apaan, titit?\ncontoh :\n${prefix}bikinquote aku bukan boneka & Kata GEN`
					if (args.length < 1) return reply(pref)
					fakevn(nad.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, { method: 'get' })
					biquote = await getBuffer(anu.result)
					iamvinz.sendMessage(from, biquote, image, { caption: 'Nih kak', quoted: Lan })
					break
				case 'groupmenu':
				case 'grupmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const menugrup = `「 *GROUP MENU* 」
❏ ${prefix}welcome
❏ ${prefix}leveling
❏ ${prefix}antilink
❏ ${prefix}antibadword
❏ ${prefix}group
❏ ${prefix}admin
❏ ${prefix}add
❏ ${prefix}kick
❏ ${prefix}hidetag
❏ ${prefix}hidetag20
❏ ${prefix}level
❏ ${prefix}linkgroup
❏ ${prefix}tagall
❏ ${prefix}setname
❏ ${prefix}setdesc
❏ ${prefix}demote
❏ ${prefix}promote
❏ ${prefix}hedsot
❏ ${prefix}fitnah
❏ ${prefix}jadian
❏ ${prefix}leave
❏ ${prefix}delete
❏ ${prefix}mining

「 *${botName}* 」`
					fakestatus(menugrup)
					break
                    
				case 'antibadword':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isBadWord) return reply('Sudah Aktif Kak')
						badword.push(from)
						fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
						reply('「 SUKSES 」Fitur Anti Badword Diaktifkan')
						iamvinz.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti Badword\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isBadWord) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						badword.splice(ini, 1)
						fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
						reply('「 SUKSES 」Fitur Anti Badword Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break

				case 'welcome':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}welcome 1`)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('「 SUKSES 」Fitur Welcome Diaktifkan')
					} else if (Number(args[0]) === 0) {
						if (!isWelkom) return reply('Sudah Mati Kak')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('「 SUKSES 」Fitur Welcome Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
				
				case 'afk':
				    if (!isRegistered) return reply(nad.noregis())
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    reply(ini_txt)
                    break

				case 'leveling':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}leveling 1`)
					if (Number(args[0]) === 1) {
						if (isLevelingOn) return reply('Sudah Aktif Kak')
						_leveling.push(from)
						fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
						reply('「 SUKSES 」Fitur Level Diaktifkan')
					} else if (Number(args[0]) === 0) {
						_leveling.splice(from, 1)
						fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
						reply('「 SUKSES 」Fitur Level Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break

				case 'antilink':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('「 SUKSES 」Fitur Anti Link Diaktifkan')
						iamvinz.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('「 SUKSES 」Fitur Anti Link Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					
					case 'antivirtex':
					if (!isGroup) return reply(nad.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiVirtex) return reply('UDAH NYALA KAK')
						antivirtex.push(from)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX DI GROUP')
						iamvinz.sendMessage(from,`WOI ANJG!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiVirtex) return reply('EMANGNYA AKTIF?')
						var ini = antivirtex.indexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('SUKSES MEMATIKAN ANTI VIRTEX DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					iamvinz.sendMessage(from, { quoted: Lan})
					break

				case 'grup':
				case 'group':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args.length < 1) return reply(`untuk membuka : ${prefix}group buka\nuntuk menutup : ${prefix}group tutup`)
					if (args[0] === 'buka') {
						reply(`Berhasil Membuka group`)
						iamvinz.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`Berhasil Menutup Group`)
						iamvinz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break

				case 'admin':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (!isGroup) return reply(nad.groupo())
					adm = `*ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(adm, groupAdmins, true)
					break

				case 'add':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						iamvinz.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
					break

				case 'kick':
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱?? 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						iamvinz.groupRemove(from, mentioned)
					} else {
						mentions(`*Woah Terkick Beban Group* @${mentioned[0].split('@')[0]} 👋`, mentioned, true)
						iamvinz.groupRemove(from, mentioned)
					}
					break
case 'asupanjane':
			    if (!isRegistered) return reply(nad.noregis())
			    	if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
		            if (isLimit(sender)) return reply(nad.limitend(pusname))
			    if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
					tels = body.slice(11)
					fakevn(nad.wait())
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanjane?apikey=genbotkey`, {method: 'get'})
					buff = await getBuffer(anu.result.url)
					iamvinz.sendMessage(from, buff, video, {caption: 'Nehh asupan nya.', quoted: Lan })
					await limitAdd(sender)
					break

case 'asupansalwa':
			    if (!isRegistered) return reply(nad.noregis())
		            if (isLimit(sender)) return reply(nad.limitend(pusname))
			    if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
					tels = body.slice(12)
					fakevn(nad.wait())
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupansalwa?apikey=genbotkey`, {method: 'get'})
					buff = await getBuffer(anu.result.url)
					iamvinz.sendMessage(from, buff, video, {caption: 'Nehh asupan nya.', quoted: Lan })
					await limitAdd(sender)
					break
case 'asupanuna':
			    if (!isRegistered) return reply(nad.noregis())
			    	

		            if (isLimit(sender)) return reply(nad.limitend(pusname))
			    if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
					tels = body.slice(10)
					fakevn(nad.wait())
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanuna?apikey=genbotkey`, {method: 'get'})
					buff = await getBuffer(anu.result.url)
					iamvinz.sendMessage(from, buff, video, {caption: 'Nehh asupan nya.', quoted: Lan })
					await limitAdd(sender)
					break
					
					case 'hidetag':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					var value = body.slice(9)
					var group = await iamvinz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: Lan
					}
					iamvinz.sendMessage(from, options, text)
					break
				case 'hidetag20':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					var value = body.slice(11)
					var group = await iamvinz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: Lan
					}
					iamvinz.sendMessage(from, options, text)
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                 .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
	                .then(() => {iamvinz.sendMessage(from, options, text)})
					break

				case 'level':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isLevelingOn) return reply(nad.lvlnoon())
					if (!isGroup) return reply(nad.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(nad.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ LEVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
					iamvinz.sendMessage(from, resul, text, { quoted: Lan })
						.catch(async (err) => {
							console.error(err)
							await reply(`Error!\n${err}`)
						})
					break

				case 'linkgrup':
				case 'linkgroup':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (!isGroup) return reply(nad.groupo())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					linkgc = await iamvinz.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
					iamvinz.sendMessage(from, yeh, text, { quoted: Lan })
					break
				
				case 'setpp':
				    iamvinz.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					enmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(enmedia)
					await iamvinz.updateProfilePicture(groupId, media)
					reply('Makasih profil grub barunya😗')
					break

				case 'tagall':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					members_id = []
					taga = (args.length > 1) ? body.slice(8).trim() : ''
					taga += '\n\n'
					for (let mem of groupMembers) {
						taga += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(taga, members_id, true)
					break

				case 'setname':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					iamvinz.groupUpdateSubject(from, `${body.slice(9)}`)
					iamvinz.sendMessage(from, '「 SUKSES 」Mengubah Nama Grup', text, { quoted: Lan })
					break

				case 'setdesc':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					iamvinz.groupUpdateDescription(from, `${body.slice(9)}`)
					iamvinz.sendMessage(from, '*「 SUKSES 」Mengubah Desk Grup', text, { quoted: Lan })
					break

				case 'demote':
				case 'demot':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('??𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						dem = ''
						for (let _ of mentioned) {
							dem += `*jabatan kamu di copot*🏃 :\n`
							dem += `@_.split('@')[0]`
						}
						mentions(dem, mentioned, true)
						iamvinz.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						iamvinz.groupDemoteAdmin(from, mentioned)
					}
					break

				case 'promote':
				case 'promot':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('Tag Orang Nya Kak')
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						prom = ''
						for (let _ of mentioned) {
							prom += `Yeee🥳 Kamu naik jabatan >_< :\n`
							prom += `@_.split('@')[0]`
						}
						mentions(prom, mentioned, true)
						iamvinz.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						iamvinz.groupMakeAdmin(from, mentioned)
					}
					break

				case 'hedsot':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('Tag Orang Nya Kak')
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						heds = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							heds += `@${_.split('@')[0]}\n`
						}
						mentions(heds, mentioned, true)
						iamvinz.groupRemove(from, mentioned)
						mentions(heds, mentioned, true)
						iamvinz.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot kepalanya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						iamvinz.groupRemove(from, mentioned)
					}
					break

				case 'fitnah':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
					var gh = body.slice(8)
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					iamvinz.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } })
					break

				case 'jadian':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ♥️ *@${cintax.jid.split('@')[0]}*\nSemoga Langgeng Hii`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break
				case 'apikeycek':
				case 'cekapikey':
		if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
		apiKey = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=genbotkey`)
                    get_result = get_result.result
                        txt = `User : ${get_result.username}\n`
                        txt += `Req : ${get_result.requests}\n`
                        txt += `Limit : ${get_result.today}\n`
                        txt += `Type : ${get_result.account_type}\n\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                    reply(txt)
                    break	
					
			    case 'ganteng':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `Yang Paling Ganteng disini Adalah \n*@${aku.jid.split('@')[0]}*`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break
				case 'cantik':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `Yang Paling Cantik disini Adalah \n*@${aku.jid.split('@')[0]}*`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break

				case 'babi':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `Anak Babi Nih si \n*@${aku.jid.split('@')[0]}*`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break
			    case 'bodoh':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `Nih Orang Terbodoh digrub ini\n*@${aku.jid.split('@')[0]}*`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break
				case 'pintar':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `Nih Orang Terpinter Digrub ini\n*@${aku.jid.split('@')[0]}*`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break

				case 'leave':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					setTimeout(() => {
						iamvinz.groupLeave(from)
					}, 2000)
					setTimeout(() => {
						iamvinz.updatePresence(from, Presence.composing)
						if (!isRegistered) return reply(nad.noregis())
						if (isBanned) return reply(nad.baned())
						fakestatus('Aku pamit kak:)')
					}, 0)
					break					

				case 'del':
				case 'delete':
				    if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					iamvinz.deleteMessage(from, { id: Lan.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'              
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n *XP*     : ${_level[i].xp}\n *Level* : ${_level[i].level}\n`                     
                    }
                    await reply(leaderboardlvl)                   
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
					break

				case 'mining':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner ${ownerName}`)
					if (isOwner) {
						const one = 99999999999999999999999999
						addLevelingXp(sender, one)
						addLevelingLevel(sender, 99)
						reply(`karena ${ownerName} baik Bot memberikan ${one}Xp >_<`)
					} else {
						const mining = Math.ceil(Math.random() * 10000)
						addLevelingXp(sender, mining)
						await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					break

				case 'downloadmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const donlot = `「 *DOWNLOAD MENU* 」
❏ ${prefix}play
❏ ${prefix}ytmp3
❏ ${prefix}ytmp4
❏ ${prefix}tiktod
❏ ${prefix}igphoto
❏ ${prefix}igvideo
❏ ${prefix}joox

「 *${botName}* 」`
					fakestatus(donlot)
					break
    case 'tagsticker':
                  if (!isOwner) return reply(ind.ownerb())
                    if (!isRegistered) return reply(nad.noregis())
                    if (sender.split("@")[0])
                    if ((isMedia && !Lan.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
                        filePath = await iamvinz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await iamvinz.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: Lan
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        iamvinz.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
                case 'superhero':
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/superhero?apikey=KatoNiBoss&query=${body.slice(11)}`)
                    get_result = get_result.result
            txt = `Id : ${get_result.id}\n`
                    txt += `Nama : ${get_result.name}\n`
                    txt = `Status : ${get_result.powerstats.intelligence} - ${get_result.powerstats.strength} - ${get_result.powerstats.speed} - ${get_result.powerstats.durability} - ${get_result.powerstats.power} - ${get_result.powerstats.combat}\n`
                    txt += `BioGrap : ${get_result.biography.full-name} - ${get_result.biography.alter-egos}\n`
                    txt += `Series : ${get_result.aliases}\n`
                    txt += `Ultah : ${get_result.place-of-birth}\n`
                    txt += `Place : ${get_result.first-appearance}\n`
                    txt += `Publish : ${get_result.publisher}\n`
                    txt += `Rating : ${get_result.alignment}\n`
                    txt += `Gender : ${get_result.appearance.gender}\n`
                    txt += `Race : ${get_result.appearance.race}\n`
                    txt += `Height : ${get_result.appearance.height}\n`
                    txt += `Warna mata : ${get_result.appearance.eye-color}\n`
                    txt += `Warna rambut : ${get_result.appearance.hair-color}\n`
                    txt += `Work : ${get_result.work.occupation} - ${get_result.work.base} - ${get_result.work.connections}\n`
                    buffer = await getBuffer(get_result.image.url)
                    iamvinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: txt})
                    break
                             case 'tictactoe':
            case 'ttt':
            if (!isGroup)return reply('*Khusus group*')
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                if (mentionUser.length == 0) return await reply("Lu mau maen ama siapa oy")
                if (args.length == 1) return await reply(`Example: ${prefix}tictactoe X/O @tag lawan`)
               if (!["x", "o"].includes(args[0].toLowerCase())) return await reply(`Example: ${prefix}tictactoe X/O @tag lawan`)
                nantang = X
                pelawan = O
                if (args[0].toLowerCase() == "o") {
                    nantang = O
                    pelawan = X
                }
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = sender
                var lawan = mentionUser[0]
                tesk = `Player 1: @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n         "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `\n\nPlayer 2: @${lawan.split("@")[0]} (${pelawan})`
                return mans.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./lol/database/tictactoe.json", JSON.stringify(tictactoe))
                })
                break
                case 'apikeycek':
                case 'cekapikey':
        if (!isRegistered) return reply(nad.noregis())
        apiKey = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolhuman}`)
                    get_result = get_result.result
                        txt = `User : iamvinz Developer\n`
                        txt += `Req : ${get_result.requests}\n`
                        txt += `Limit : ${get_result.today}\n`
                        txt += `Type : ${get_result.account_type}\n\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                    reply(txt)
                    break
                    case 'ytkomen':
        if (!isRegistered) return reply(nad.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} iamvinz api.lolhuman.xyz`)
        username = args[0]
        comment = args[2]
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ytcomment?apikey=${lolhuman}&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
                    iamvinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
                    break
                    case 'phkomen':
        if (!isRegistered) return reply(nad.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} iamvinz api.lolhuman.xyz`)
        username = args[0]
        comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${lolhuman}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    iamvinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
                    break
                    case 'amongus':
        if (!isRegistered) return reply(nad.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} iamvinz`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${lolhuman}&text=${body.slice(9)}`)
                    iamvinz.sendMessage(from, buffer, sticker, { quoted: Lan})
                    break
                    case 'artinama':
        if (!isRegistered) return reply(nad.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} iamvinz`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${lolhuman}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
                case 'jodoh':
        if (!isRegistered) return reply(nad.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'weton':
        if (!isRegistered) return reply(nad.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian2':
        if (!isRegistered) return reply(nad.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                    case 'jadian':
                    limitAdd(sender) 
                    isLimit(sender)
                    if (!isRegistered) return reply(nad.noregis())
                    jds = []
                    const jdii = groupMembers
                    const koss = groupMembers
                    const akuu = jdii[Math.floor(Math.random() * jdii.length)]
                    const diaa = koss[Math.floor(Math.random() * koss.length)]
                    teks = `@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
                    jds.push(akuu.jid)
                    jds.push(diaa.jid)
                    mentions(teks, jds, true)
                    break   
                case 'tebakumur':
        if (!isRegistered) return reply(nad.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} iamvinz`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} iamvinz`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=${lolhuman}&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break
               case 'alay': 
                if (!isRegistered) return reply(nad.noregis())
                if (args.length < 1) return reply(`Contoh: iamvinz`)
                    gatauda = body.slice(6)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/alay?apikey=${lolhuman}&text=${gatauda}`)
                    reply(anu.result)
                    break
                    case 'purba':
                    case 'bpurba': 
                if (!isRegistered) return reply(nad.noregis())
                if (args.length < 1) return reply(`Contoh: iamvinz`)
                    gatauda = body.slice(7)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/bahasapurba?apikey=${lolhuman}&text=${gatauda}`)
                    reply(anu.result)
                    break
                    case 'BK':
                    case 'bk':
                    case 'besarkecil': 
                if (!isRegistered) return reply(nad.noregis())
                if (args.length < 1) return reply(`Contoh: iamvinz`)
                    gatauda = body.slice(12)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/upperlower?apikey=${lolhuman}&text=${gatauda}`)
                    reply(anu.result)
                    break
                    case 'hilih': 
                if (!isRegistered) return reply(nad.noregis())
                if (args.length < 1) return reply(`Contoh: iamvinz`)
                    gatauda = body.slice(7)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/hilih?apikey=${lolhuman}&text=${gatauda}`)
                    reply(anu.result)
                    break
               case 'namaninja': 
                if (!isRegistered) return reply(nad.noregis())
                if (args.length < 1) return reply(`Contoh: iamvinz`)
                    gatauda = body.slice(11)
                    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=${lolhuman}&nama=${gatauda}`)
                    reply(anu.result)
                    break
                   case 'tebakbendera':
                    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${lolhuman}`, {method: 'get'})
                    tebakbender = `*bendera apa ini?*n${anu.result.flag}`
                    setTimeout( () => {
                    iamvinz.sendMessage(from, '*➸ Jawaban :* '+anu.result.name, text, {quoted: Lan}) // ur cods
                    }, 30000) // 1000 = 1s,
                    setTimeout( () => {
                    iamvinz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
                    }, 20000) // 1000 = 1s,
                    setTimeout( () => {
                    iamvinz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
                    }, 10000) // 1000 = 1s,
                    setTimeout( () => {
                    iamvinz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
                    }, 2500) // 1000 = 1s,
                    setTimeout( () => {
                    iamvinz.sendMessage(from, tebakbender, text, {quoted: Lan}) // ur cods
                    }, 0) // 1000 = 1s,
                    break
// 
            case 'baka2':
            if (!isPrem) return reply(nad.premium(prefix))
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/baka?apikey=${lolhuman}`)
                    iamvinz.sendMessage(from, buffer, image, { quoted: Lan })
                    break
            case 'bj':
            if (!isPrem) return reply(nad.premium(prefix))
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/bj?apikey=${lolhuman}`)
                    iamvinz.sendMessage(from, buffer, image, { quoted: Lan })
                    break
            case 'wallpaperanime':
            if (!isPrem) return reply(nad.premium(prefix))
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/wallpaper?apikey=${lolhuman}`)
                    iamvinz.sendMessage(from, buffer, image, { quoted: Lan })
                    break
            case 'pictlolicon':
                    if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (!isGroup) return reply(ind.group)
                    reply(ind.wait())
                    anu = await fetchJson(`https://api.vhtear.com/pinterest?query=lolikawai&apikey=${vinzvhtear}`, {method: 'get'})
                    var mi = JSON.parse(JSON.stringify(anu.result));
                    var ku =  mi[Math.floor(Math.random() * mi.length)];
                    nye = await getBuffer(ku)
                    iamvinz.sendMessage(from, nye, image, { caption: 'HALLO ONII CHAN!!', quoted: Lan })
                    break
                 case 'semoji':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolhuman}`)
                    iamvinz.sendMessage(from, ini_anu, sticker, {quoted: Lan})
                    break
                case 'fakedonald':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} iamvinz`)
                    ini_txt = args.join(" ")
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolhuman}&text=${ini_txt}`)
                    iamvinz.sendMessage(from, ini_anu, image, {quoted: Lan})
                    break
                              case `${prefix}fitnah`:
        	if (args.length < 1) return reply('Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga')
        	var gh = args[0]
        	mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
          	var replace = gh.split("|")[0];
          	var target = gh.split("|")[1];
          	var bot = gh.split("|")[2];
          	iamvinz.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
          	break
                case 'faketoko':
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "iamvinz", code = "IDR", price = 1000000)
                    break
                  case 'togif':
                       if (!isPrem) return reply(nad.premium(prefix))
					                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply('wait...')
                                        if (Lan.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                       iamvinz.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Oke...', quoted: Lan})
                                }
                                await limitAdd(sender)
                                break
                case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|iamvinz|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolhuman}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    iamvinz.sendMessage(from, ini_anu, image, {quoted: Lan})
                    break
                 case 'idtoen':
                    vin = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/translate?text=${args.join}(" ")&src=id&dest=en}`)
                    reply(vin.result)
                    break
                  case 'entoid':
                    vina = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/translate?text=${args.join}(" ")&src=en&dest=id}`)
                    reply(vina.result)
                    break
                case 'xnxxsearch':
  if (!isPrem) return reply(nad.premium(prefix))
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
  if (!isPrem) return reply(nad.premium(prefix))
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www.xn**.com/Video`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${lolhuman}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    iamvinz.sendMessage(from, thumbnail, image, { quoted: Lan, caption: ini_txt })
                    break
                   case 'pixiv':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${lolhuman}&query=${query}`)
                    iamvinz.sendMessage(from, ini_anu, image, {quoted: Lan})
                    break
                case 'pixivdl':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolhuman}`)
                    iamvinz.sendMessage(from, ini_anu, image, {quoted: Lan})
                    break
                case 'xhamstersearch':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lolhuman}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    iamvinz.sendMessage(from, thumbnail, image, { quoted: Lan, caption: ini_txt })
                    break 
                    case 'pictwaifu':
                    if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (!isGroup) return reply(ind.group)
                    reply(ind.wait())
                    anu = await fetchJson(`https://api.vhtear.com/pinterest?query=waifukawai&apikey=${vinzvhtear}`, {method: 'get'})
                    var mi = JSON.parse(JSON.stringify(anu.result));
                    var ku =  mi[Math.floor(Math.random() * mi.length)];
                    nye = await getBuffer(ku)
                    iamvinz.sendMessage(from, nye, image, { caption: 'OHAYO DARLING!!', quoted: Lan })
                    break
                    case 'nsfw_avatar':
                            buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhuman}`)
                            iamvinz.sendMessage(from, buffer, image, { quoted: Lan })
                            break
                    case 'pictneko':
                    if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (!isGroup) return reply(ind.group)
                    reply(ind.wait())
                    anu = await fetchJson(`https://api.vhtear.com/pinterest?query=nekoaniLanawai&apikey=${vinzvhtear}`, {method: 'get'})
                    var mi = JSON.parse(JSON.stringify(anu.result));
                    var ku =  mi[Math.floor(Math.random() * mi.length)];
                    nye = await getBuffer(ku)
                    iamvinz.sendMessage(from, nye, image, { caption: 'OHAYO ONII CHAN!!', quoted: Lan })
                    break
            case 'senku':
                    if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                                if (isLimit(sender)) return reply(limits.limitend(pushname))
                    anu = await fetchJson(`https://api.vhtear.com/pinterest?query=senku&apikey=${vinzvhtear}`, {method: 'get'})
                    var sen = JSON.parse(JSON.stringify(anu.result));
                    var ku =  sen[Math.floor(Math.random() * sen.length)];
                    nye = await getBuffer(ku)
                    iamvinz.sendMessage(from, nye, image, { caption: 'senku!!', quoted: Lan })
                    await limitAdd(sender)
                    break
            case 'kurumi2':
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=${vinzvhtear}`, {method: 'get'})
                    var kur = JSON.parse(JSON.stringify(anu.result));
                    var imi =  kur[Math.floor(Math.random() * kur.length)];
                    nye = await getBuffer(imi)
                    iamvinz.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: Lan })
                    break
                case 'nakanomiku':
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=${vinzvhtear}`, {method: 'get'})
                    var mi = JSON.parse(JSON.stringify(anu.result));
                    var ku =  mi[Math.floor(Math.random() * mi.length)];
                    nye = await getBuffer(ku)
                    iamvinz.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: Lan })
                    break
            case 'wibu':
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    reply(ind.wait())
                    anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${vinzvhtear}`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    buffer = await getBuffer(anu.result.foto)
                    wibu = ` ➸ *nama* ${anu.result.nama} ➸ *deskripsi* ${anu.result.deskripsi}`
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan, caption: wibu})
                    break
            case 'quotes2':
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                quotes = body.slice(1)
                const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
                const tes = quo[Math.floor(Math.random() * quo.length)]
                iamvinz.sendMessage(from, ''+tes+'\n\n_By : iamvinzganz._', text, { quoted: Lan })
                await limitAdd(sender)
                break
            //Photo Editor By iamvinz
            case 'facebookpage':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(14)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'costumwp':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(14)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'pantaimalam':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(14)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'pencil':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(14)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'deteksiwajah':
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply('Proses Cok..')
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=VeanganzApi&img=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: Lan})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'deteksigender':
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply('Proses Cok..')
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/genderdetect?apikey=VeanganzApi&img=${anu.display_url}`)
      gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
     iamvinz.sendMessage(from, gender, text, {quoted: Lan})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'deteksiumur':
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply('Proses Cok..')
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=VeanganzApi&img=${anu.display_url}`)
      gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
     iamvinz.sendMessage(from, gender, text, {quoted: Lan})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'bakar':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'crossgun':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'hitler':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/hitler?url=${anu.display_url}&apikey=${apileys}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'trash':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${anu.display_url}&apikey=${apileys}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'joke':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(6)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${anu.display_url}&apikey=${apileys}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'sepia':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${anu.display_url}&apikey=${apileys}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'alien':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/alien?apikey=${lolhuman}&img=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'removebg':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(10)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lolhuman}&img=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'smile':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${lolhuman}&img=${anu.display_url}`)
      iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'skullmask':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(11)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${lolhuman}&img=${anu.display_url}`)
      iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'fisheye':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(9)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${lolhuman}&img=${anu.display_url}`)
      iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'deepfry':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(9)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${lolhuman}&img=${anu.display_url}`)
      iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'grayscale':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(11)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${lolhuman}&img=${anu.display_url}`)
      iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'imageflip':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(11)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${lolhuman}&img=${anu.display_url}`)
      iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'pixelate':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(10)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${lolhuman}&img=${anu.display_url}`)
      iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'imagerotate':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(13)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${lolhuman}&img=${anu.display_url}`)
      iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'affect':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(8)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${anu.display_url}&apikey=${apileys}`)
      iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'picture':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${anu.display_url}&apikey=${apileys}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'blur':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${anu.display_url}&apikey=${apileys}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'invert':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=${apileys}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'meme':
    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      ct = body.slice(6)
      atas = ct.split("|")[0];
      bawah = ct.split("|")[1];
      anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
      hehe = await getBuffer(`http://docs-jojo.herokuapp.com/api/meme-gen?top=${atas}&bottom=${bawah}&img=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
            case 'gtav':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  reply(ind.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, hedhe, image, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
            case 'gay':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  reply(ind.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
iamvinz.sendMessage(from, nobg, sticker, {
  quoted: Lan
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
    case 'nightbeach':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  reply(ind.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, hehpe, image, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
    case 'laptop':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  reply(ind.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, dhehe, image, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
    case 'linephoto':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  reply(ind.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, hehet, image, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
    case 'raindrop':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  reply(ind.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, hehre, image, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
    case 'sketch':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
  reply(ind.wait())
  owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 iamvinz.sendMessage(from, hehae, image, {quoted:Lan})
} else {
  reply('reply imagenya kak!')
}
break
    case 'facebookpage':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(14)
      anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'costumwp':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(14)
      anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'pantaimalam':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(14)
      anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'pencil':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(14)
      anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'bakar':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
     iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
    case 'crossgun':
if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium(prefix))
if (isLimit(sender)) return reply(nad.limitend(pusname))
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Lan
      reply(ind.wait())
      owgi = await iamvinz.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
      iamvinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
            case 'nhentai':
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                husw = body.slice(7)
                    reply(ind.wait())
                    anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=${husw}&apikey=${vinzvhtear}`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    bufferjj = await getBuffer(anu.result.pdf_file)
                    iamvinz.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: Lan})
                    break
            case 'ramaljadian':
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    var gh = body.slice(10)
                    var gbl1 = gh.split("|")[0];
                    var gbl2 = gh.split("|")[1];
                    var gbl3 = gh.split("|")[2];
                    anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=${vinzvhtear}`, {method: 'get'})
                    reply(anu.result.hasil)
                    break
            case 'memeindo':  
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(limitend(pushname))
                reply(ind.wait())
                    memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
                    buffer = await getBuffer(memein.result)
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan, caption: '*MEME🗿*'})
                    await limitAdd(sender)
                    break 
            case 'galaxstyle':
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                ct = body.slice(11)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/galaxystyle?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
            case 'attp':
            if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
                attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
                iamvinz.sendMessage(from, attp2, sticker, {quoted: Lan})
                break
            case 'thunder':
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply('Teks nya mana kak?')
                ct = body.slice(10)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/thunder?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
                case 'ttp':
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ttp?apikey=${lolhuman}&text=${txt}`)
                    iamvinz.sendMessage(from, buffer, sticker, { quoted: Lan })
                    break
                    
                 case 'ttp2':
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp2?apikey=iamvinzYT&text=${txt}`)
                    iamvinz.sendMessage(from, anu, sticker, { quoted: Lan })
                    break
                    
                  case 'ttp3':
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=iamvinzYT&text=${txt}`)
                    iamvinz.sendMessage(from, anu, sticker, { quoted: Lan })
                    break
                    
                case 'ttp4':
                if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp4?apikey=${lolhuman}&text=${txt}`)
                    iamvinz.sendMessage(from, anu, sticker, { quoted: Lan })
                    break   
                    
                case 'bokeh':
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply('Teks nya mana kak?')
                ct = body.slice(10)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/bokeh?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
                case 'strawberry':
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply('Teks nya mana kak?')
                ct = body.slice(10)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/strawberry?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
                case 'metaldark':
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply('Teks nya mana kak?')
                ct = body.slice(10)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/metaldark?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
                case 'cerpen':
            if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
            anu = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolhuman}`)
            iamvinz.sendMessage(from, `${anu.result}`, text, {quoted: Lan})
            reply(anu.result.cerpen)
            await limitAdd(sender) 
            break  
            case 'quotesimage':
            case 'faktaunik':
            case 'katabijak':
            case 'pantun':
            case 'bucin':
            if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
             get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhuman}`)
             reply(get_result.result)
             break
                case 'randomnama':
                  if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolhuman}`)
                    reply(anu.result)
                    break
            case 'jokerlogo':       
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply('Teks nya mana kak?')
                ct = body.slice(10)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
            case 'toxic':
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply('Teks nya mana kak?')
                ct = body.slice(10)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/toxic?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
                case 'bloodfrosted':
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply('Teks nya mana kak?')
                ct = body.slice(10)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
                case 'imagetext':
                case 'itext':
                case 'itxt':
                    if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}iamvinz`)
                imageToBase64(`https://api.vhtear.com/textxgif?text=${args[0]}&apikey=${vinzvhtear}`).then((response) => {var buf = Buffer.from(response, 'base64');
                iamvinz.sendMessage(from, buf, image, {quoted: Lan, caption: "DONE BOS✓"})})
                break
                case 'halloween':
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply('Teks nya mana kak?')
                ct = body.slice(10)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
                case 'firework':
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply('Teks nya mana kak?')
                ct = body.slice(10)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/fireworksparkle?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
                case 'hororblood':
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (args.length < 1) return reply('Teks nya mana kak?')
                ct = body.slice(10)
                reply(ind.wait())
                ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/horrorblood?apikey=${lolhuman}&text=${ct}`)
                iamvinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: 'Nih sdh Jadi...'})
                await limitAdd(sender)
                break
            case 'animefanart':             
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/animefanart?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    await limitAdd(sender) 
                    break
                    case 'megumin':             
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/megumin?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    await limitAdd(sender) 
                    break
                    case 'shinobu':             
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/shinobu?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    await limitAdd(sender) 
                    break
                    case 'baka':                
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/baka?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    break
                    case 'eroyuri':             
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/eroyuri?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    await limitAdd(sender) 
                    break
                    case 'wallpaper':               
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/wallpaper?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    break
                    case 'smile':               
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/smile?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    await limitAdd(sender) 
                    break
                    case 'happy':               
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/happy?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    await limitAdd(sender) 
                    break
                    case 'dance':               
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/dance?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    await limitAdd(sender) 
                    break
                    case 'slapnime':                
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/slap?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    await limitAdd(sender) 
                    break
                    case 'bj':              
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/bj?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    break
                    case 'neko3':               
                 if (!isRegistered) return reply(nad.noregis())
        if (!isPrem) return reply(nad.premium(prefix))
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/neko?apikey=${lolhuman}`, {method: 'get'})
                    iamvinz.sendMessage(from, buffer, image, {quoted: Lan })
                    await limitAdd(sender) 
                    break
                case 'wame':
                     // Fix Bug By iamvinz             
                 if (!isRegistered) return reply(nad.noregis())
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    iamvinz.updatePresence(from, Presence.composing) 
                    options = {
                    text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*n*Or ( / )*n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
                    contextInfo: { mentionedJid: [sender] }
                    }
                    iamvinz.sendMessage(from, options, text, { quoted: Lan } )
                    break
                    if (data.error) return reply(data.error)
                    reply(data.result)
                    await limitAdd(sender)
                  break
                case 'tiktokstalk': // Like My Video
                if (args.length < 1) return reply(`username tiktok mana om?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/tiktod/stalk/?username=${body.slice(13)}&apikey=${onlydev}`)
                anu = await getBuffer(anu.result.user.avatarThumb)
                teks = `➸ *Username* : ${anu.result.user.uniqueId}\n*➸ Nickname :* ${anu.result.user.nickname}\n*➸ Bio :* ${anu.result.user.signature}\n*➸ Verified? :* ${anu.result.user.verified}\n*➸ Jumlah Follower :* ${anu.result.stats.followerCount}\n*➸ Jumlah Following :* ${anu.result.stats.followingCount}\n*➸ Jumlah Like :* ${anu.result.stats.heart}\n*➸ Total Video :* ${anu.result.stats.videoCount}`
                iamvinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('././media/image/elaina.jpeg')} } }, caption: teks})
                break 
                				//case 'play':
                        if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                har = body.slice(5)
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${har}&apikey=${vinzvhtear}`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*「❗」Lagu Ditemukan*\n➸ Judul : ${anu.result.title}\n➸ Durasi : ${anu.result.duration}\n➸ Size : ${anu.result.size}\n\n*[WAIT] Sabar Ya kak Sekitar 1 Menit*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                iamvinz.sendMessage(from, buffer, image, {quoted: Lan, caption: infomp3})
                iamvinz.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: Lan})
                break
                    case 'joox':
                    query = args.join(" ")
        if (!isRegistered) return reply(nad.noregis())
               if (!isPrem) return reply(nad.premium(prefix))
                      if (isLimit(sender)) return reply(nad.limitend(pusname))
              if (args.length < 1) return reply(`Contoh: ${prefix}joox Kokoronashi`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
            get_info = get_result.info
            txt = '*_[ SUKSES ]_*n\n'
                    txt += `Judul : *${get_info.song}*n`
                    txt += `Album : *${get_info.album}*n`
                    txt += `Durasi : *${get_info.duration}*n`
                    txt += `Penyanyi : *${get_info.singer}*n`
                    txt += `Tanggal : *${get_info.date}*n`
                    txt += `Lirik :\n *${get_result.lirik}*n`
                    thumbnail = await getBuffer(get_result.image)
                    iamvinz.sendMessage(from, thumbnail, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: txt})
                    get_audio = await getBuffer(get_result.audio[0].link)
                    iamvinz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.song}.mp3`, quoted: Lan })
                    break
 case 'play':
 fakevn(nad.wait())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                  get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolhuman}&query=${query}`)
                  get_result = get_result.result
                  get_info = get_result.info
                  ini_txt = `Judul : ${get_info.title}\n`
                  ini_txt += `Upload : ${get_info.uploader}\n`
                  ini_txt += `Durasi : ${get_info.duration}\n`
                 ini_txt += `Viewers : ${get_info.view}\n`
                  ini_txt += `Like : ${get_info.like}\n`
                  ini_txt += `Dislike : ${get_info.dislike}\n`
                  ini_txt += `Description :\n ${get_info.description}\n`
                  buffer = await getBuffer(get_info.thumbnail)
                  iamvinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*PLAY BY VINZ*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/elaina.jpeg')} } }, caption: ini_txt})
                    get_audio = await getBuffer(get_result.audio[3].link)
                    iamvinz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: Lan })
                    break
                    
                case 'play2':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result.
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    iamvinz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: Lan })
                    get_video = await getBuffer(get_result.video)
                    iamvinz.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: Lan })
                    break
                case 'ytsearch':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.title}\n`
                        ini_txt += `Viewers : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break			

				case 'ytmp3':
				if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=genbotkey&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    iamvinz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: Lan})
                    break

				case 'ytmp4':
				if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
     if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=genbotkey&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    iamvinz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: Lan})
                    break

				case 'tiktoknowm':
				if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				fakevn(nad.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = (`https://api.vhtear.com/tiktok_no_wm?link=${ini_url}&apikey=${vinzvhtear}`)
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.video)
                    iamvinz.sendMessage(from, ini_buffer, video, { quoted: Lan })
                    break
				case 'igphoto':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply('Link Nya Mana Kak')
					anu = await fetchJson(`https://api.vhtear.com/dl/ig?url=${q}&apikey=${vinzvhtear}`)
					fakevn(nad.wait())
					buff = await getBuffer(anu.result.data[0].data)
					iamvinz.sendMessage(from, buff, image, { quoted: Lan })
					break

				case 'igvideo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (args.length < 1) return reply('Link Nya Mana Kak')
					anu = await fetchJson(`https://api.vhtear.com/dl/ig?url=${q}&apikey=${vinzvhtear}`)
					fakevn(nad.wait())
					buffe = await getBuffer(anu.result.data[0].data)
					iamvinz.sendMessage(from, buffe, video, { mimetype: 'video/mp4', quoted: Lan })
					break
				case 'joox':
		if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    iamvinz.sendMessage(from, thumbnail, image, { quoted: Lan, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    iamvinz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: Lan})
                    break
				case 'makermenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const Laner = `「 *MAKER MENU* 」
❏ ${prefix}comic
❏ ${prefix}heker
❏ ${prefix}graffiti
❏ ${prefix}glow
❏ ${prefix}cover
❏ ${prefix}naruto
❏ ${prefix}eroded
❏ ${prefix}wall
❏ ${prefix}viettel
❏ ${prefix}wings
❏ ${prefix}halloween
❏ ${prefix}graffiti2
❏ ${prefix}graffiti3
❏ ${prefix}foil
❏ ${prefix}blood
❏ ${prefix}heker
❏ ${prefix}bokeh
❏ ${prefix}carbon
❏ ${prefix}avengers
❏ ${prefix}water
❏ ${prefix}fire
❏ ${prefix}metal
❏ ${prefix}ballon
❏ ${prefix}gembok
❏ ${prefix}bannerff
❏ ${prefix}aloklogo
❏ ${prefix}miyalogo
❏ ${prefix}gamelogo
❏ ${prefix}blackpink
❏ ${prefix}thundername
❏ ${prefix}silk
❏ ${prefix}party
❏ ${prefix}romance
❏ ${prefix}google
❏ ${prefix}glow2
❏ ${prefix}lovemessage
❏ ${prefix}glitch
❏ ${prefix}galaxy
❏ ${prefix}pornhub
❏ ${prefix}tahta
❏ ${prefix}wetglass
❏ ${prefix}style
❏ ${prefix}water

「 *${botName}* 」`
					fakestatus(Laner)
					break
case 'comic':
    
					if (isBanned) return reply(nad.baned())
					 if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(nad.wrongf())
					aruga = body.slice(9)
					fakevn(nad.wait())
					aruga = await getBuffer(`https://api.vhtear.com/comic_text?text=${q}&apikey=${vinzvhtear}`)
				 
					iamvinz.sendMessage(from, aruga, image, {caption: 'Nih kak ©byVINZ', quoted: Lan})
					await limitAdd(sender)
					break 
				case 'heker':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					aruga = body.slice(9)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}heker Vinz`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break

				case 'graffiti':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}graffiti VINZ & Gamteng`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/cool_wall_graffiti?text1=${ve}&text2=${za}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'tahta':
if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(nad.wrongf())
					aruga = body.slice(9)
					fakevn(nad.wait())
					aruga = await getBuffer(`https://api.vhtear.com/hartatahta?text=${q}&apikey=${vinzvhtear}`)				 
					iamvinz.sendMessage(from, aruga, image, {caption: 'Nih kak ©byVINZ', quoted: Lan})
					await limitAdd(sender)
					break 
					case 'ssweb':
if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(nad.wrongf())
					aruga = body.slice(9)
					fakevn(nad.wait())
					aruga = await getBuffer(`https://api.vhtear.com/hartatahta?text=${q}&apikey=${vinzvhtear}`)				 
					iamvinz.sendMessage(from, aruga, image, {caption: 'Nih kak ©byVINZ', quoted: Lan})
					await limitAdd(sender)
					break 
					case 'blackpink':
if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(nad.wrongf())
					aruga = body.slice(13)
					fakevn(nad.wait())
					aruga = await getBuffer(`https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${vinzvhtear}&text=${q}`)
				 
					iamvinz.sendMessage(from, aruga, image, {caption: 'Nih kak ©byVINZ', quoted: Lan})
					await limitAdd(sender)
					break 

case 'metallic':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(11)
                vhbuff = await getBuffer(`https://api.vhtear.com/glow_metallic?text=${q}&apikey=${vinzvhtear}`)
				iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break

case 'cover':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(9)
                vhbuff = await getBuffer(`https://api.vhtear.com/cover_banner?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'naruto':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(10)
              vhbuff = await getBuffer(`https://api.vhtear.com/naruto_text?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'eroded':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(10)
              vhbuff = await getBuffer(`https://api.vhtear.com/eroded_metal?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'wall':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(8)
              vhbuff = await getBuffer(`https://api.vhtear.com/the_wall?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'viettel':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(11)
              vhbuff = await getBuffer(`https://api.vhtear.com/viettel_text?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'wings':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(9)
              vhbuff = await getBuffer(`https://api.vhtear.com/wings_galaxy?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'hallowen':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(12)
              vhbuff = await getBuffer(`https://api.vhtear.com/halloween_text?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'ttp':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(7)
              vhbuff = await getBuffer(`https://api.vhtear.com/textmaker?text=${q}&warna=green&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'graffiti2':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}graffiti2 Vinz & Gamteng`)
var gh = body.slice(13)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					vhbuff = await getBuffer(`https://api.vhtear.com/girl_graffiti?text1=${ve}&text2=${za}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'cartoon':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(11)
              vhbuff = await getBuffer(`https://api.vhtear.com/cartoon_graffiti?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'write':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(9)
              vhbuff = await getBuffer(`https://api.vhtear.com/write_heart?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'foil':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(8)
              vhbuff = await getBuffer(`https://api.vhtear.com/foil_text?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'blood':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(9)
              vhbuff = await getBuffer(`https://api.vhtear.com/blood_text?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					await limitAdd(sender)
					break
case 'matrix':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(10)
              vhbuff = await getBuffer(`https://api.vhtear.com/matrix_text?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'bokeh':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(9)
              vhbuff = await getBuffer(`https://api.vhtear.com/bokeh_text?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'carbon':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(10)
              vhbuff = await getBuffer(`https://api.vhtear.com/carbon_text?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'fflogo':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(10)
              vhbuff = await getBuffer(`https://api.vhtear.com/logoff?hero=alok&text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'mllogo':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(10)
              vhbuff = await getBuffer(`https://api.vhtear.com/logoml?hero=miya&text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'avengers':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}avengers VINZ & Gamteng`)
var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					vhbuff = await getBuffer(`https://api.vhtear.com/avengers_text?text1=${ve}&text2=${za}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'ffbanner':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ffbanner VINZ & Gamteng`)
var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					vhbuff = await getBuffer(`https://api.vhtear.com/bannerff?title=${ve}&text=${za}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'nulis':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(9)
              vhbuff = await getBuffer(`https://api.vhtear.com/write?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'water':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(9)
              vhbuff = await getBuffer(`https://api.vhtear.com/water_maker?text=${q}&apikey=genbotkey`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'fire':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(8)
              vhbuff = await getBuffer(`https://api.vhtear.com/fire_maker?text=${q}&apikey=genbotkey`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'metal':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(9)
              vhbuff = await getBuffer(`https://api.vhtear.com/metal_maker?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'emojitoimg':
if (!isPrem) return reply(nad.premium(prefix))
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                fakevn(nad.wait())
                aruga = body.slice(14)
              vhbuff = await getBuffer(`https://api.vhtear.com/emojitopng?code=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
case 'semoji':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, sticker, { quoted: Lan})
                    break


					case 'kalkulator':
					if (!isRegistered) return reply(nad.noregis())
                                if (isLimit(sender)) return reply(nad.limitend(pusname))
				     if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    mtk = `${body.slice(11)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${q}&apikey=${vinzvhtear}`, {method: 'get'})
				    iamvinz.sendMessage(from, `*${anu.result.data}*`, text, {quoted: Lan})
				    await limitAdd(sender) 	
				    break 
				
					
					case 'cartoon':
    
					
					 if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(nad.wrongf())
					aruga = body.slice(8)
					fakevn(nad.wait())
					aruga = await getBuffer(`https://api.vhtear.com/cartoon_graffiti?text=${q}&apikey=${vinzvhtear}`)
					
					iamvinz.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: Lan})
					await limitAdd(sender)
					break 
				case 'fire':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}fire VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/fire_maker?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'metal':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}metal VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/metal_maker?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'ballon':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ballon VINZ & Gamteng`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/balloonmaker?text1=${ve}&text2=${za}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'gembok':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}gembok 11 01 2021 & VINZ dan Nadia`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/padlock?text1=01%2001%202021&text2=${ve}%20dan%20${za}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'bannerff':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}bannerff VINZ & Gamteng`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/bannerff?title=VHTEARS&text=${q}%20GANS&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'aloklogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}aloklogo VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/logoff?hero=alok&text=${q}%20GANS&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'miyalogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}miyalogo VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/logoml?hero=miya&text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'gamelogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}gamelogo VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'blackpink':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}blackpink VINZ`)
					reply(`[😱] Hah Blekping :v`)
					vhbuff = await getBuffer(`https://api.vhtear.com/blackpinkicon?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'thundername':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}thundername VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/thundertext?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'silktext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}silktext VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/silktext?text=${q}%20GANS&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'partytext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}partytext VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/partytext?text=${q}%20GANS&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'romancetext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}romancetext VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/romancetext?text=${ve}%20dan%20${za}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'ktpmaker':
                    if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=genbotkey&nik=${ve}&prov=${za}&kabu=${ga}&name=${ve}&ttl=${za}&jk=${ga}&jl=${ve}&rtrw=${za}&lurah=${ga}&camat=${ve}&agama=${za}&nikah=${ga}&kerja=${ve}&warga=${za}&until=${ga}&img=${ve}`)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan })
                    break
				case 'googletext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					var ga = gh.split("&")[2];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}googletext VINZ & VINZ Gans & VINZ Baik`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/googletext?text1=${ve}&text2=${za}%20adalah%20cowok%20ganteng&text3=${ga}%20dari%20lahir%20baik%20banget&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'glowtext2':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}glowtext2 VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glowtext?text=${q}%20Ku&apikey=genbotkey`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'lovemessage':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}lovemessage VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${q}%20Ku&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'glitchtext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}glitchtext VINZ & Gamteng`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${ve}&text2=${za}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'galaxytext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}galaxytext VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/galaxytext?text=${q}%20Ku&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'pornhub':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(9)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`:Usage ${prefix + command} text\nExample: ${prefix + command} VINZ & GANTENG`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${ve}&text2=${za}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                   if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text|text2\nExample: ${prefix + command} VINZ|GANTENG`)
                 ini_ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=genbotkey&text=${ini_ini_txt}`)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan })
                    break
				case 'tahta':
				if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
				fakevn(nad.wait())
                    ini_url = args.join(" ") 
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=genbotkey&text=${ini_url}`)
                    iamvinz.sendMessage(from, buffer, image, { quoted: Lan })
                    break
				case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                case 'glitchtext':
                if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} VINZ|GANTENG`)
                    get_args = args.join(" ").split("|")
                                        ini_txt1 = get_args[0]
                                        ini_txt2 = get_args[1]
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=genbotkey&text1=${ini_txt1}&text2=${ini_txt2}`)
                    iamvinz.sendMessage(from, buffer, image, { quoted: Lan })
                    break
				case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} VINZ|GANTENG`)
                    ini_txt1 = args[0]
                    ini_txt2 = args[1]
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=genbotkey&text1=${ini_txt1}&text2=${ini_txt2}`)
                    iamvinz.sendMessage(from, buffer, image, { quoted: Lan })
                    break
				case 'hartatahta':
				if (isBanned) return reply(nad.baned())
				 if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (args.length < 1) return reply('Contoh : #tahta VINZ BOT')
				har = body.slice(6)
					fakevn(nad.wait())
					buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${q}&apikey=${vinzvhtear}`)
					iamvinz.sendMessage(from, buffer, image, {quoted: Lan})
					await limitAdd(sender)
					break
case 'naruto':
    
					
					  if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(nad.wrongf())
					aruga = body.slice(7)
					fakevn(nad.wait())
					aruga = await getBuffer(`https://api.vhtear.com/naruto_text?text=${aruga}&apikey=fa1677f1cbb04e5c8be1a6cc8824e9ee`)
					
					iamvinz.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: Lan})
					await limitAdd(sender)
					break 
				case 'wetglass':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}wetglass VINZ`)
					fakevn(nad.wait())
                
					break
				case 'stylelogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}stylelogo VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${q}&apikey=genbotkey`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'watercolor':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}watercolor VINZ`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/watercolor?text=${q}&apikey=genbotkey`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'wolflogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}wolflogo VINZ & Gamteng`)
					fakevn(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/avatarwolf?text1=${ve}&text2=${za}&apikey=genbotkey`)
					iamvinz.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
/*]====> BY VINZ BOT <====[*/
				case 'sertifikatmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const serti = `「 *SERTIFIKAT MENU* 」
❏ ${prefix}sertiharam
❏ ${prefix}sertibabu
❏ ${prefix}sertibucin
❏ ${prefix}sertibocilff
❏ ${prefix}sertigay
❏ ${prefix}sertipacar
❏ ${prefix}sertisadboy
❏ ${prefix}sertisurga
❏ ${prefix}sertipinter
❏ ${prefix}sertibadboy
❏ ${prefix}sertibadgirl
❏ ${prefix}sertigoodgirl
❏ ${prefix}sertigoodboy
❏ ${prefix}sertieditor
❏ ${prefix}sertigudluking
❏ ${prefix}sertipakboy
❏ ${prefix}sertijamet
❏ ${prefix}sertiyutub
❏ ${prefix}sertiheker
❏ ${prefix}sertiff1
❏ ${prefix}sertiff2
❏ ${prefix}sertiff3
❏ ${prefix}sertiff4
❏ ${prefix}sertiff5
❏ ${prefix}sertipubg1
❏ ${prefix}sertipubg2
❏ ${prefix}sertiml

「 *${botName}* 」`
					fakestatus(serti)
					break
          
case 'suit':
if (!isRegistered) return reply(nad.noregis())  
                  if (isBanned) return reply(nad.baned())
                  await limitAdd(sender)
                  const userspilih = args.join(' ')
                
                var computer = Math.random()
                if (computer < 0.34 ) {
                    computer = 'batu';
                } else if( computer >= 0.34 && computer < 0.67) {
                    computer = 'gunting';
                } else {
                    computer = 'kertas';
                }
            const lel =['4','9','5','3','7','8','10','9','4','9','2','20','6']
					const skot = lel[Math.floor(Math.random() * lel.length)]
                if ( userspilih == computer ) {
                    
                    reply(`Pertandingan kamu dengan bot Seri!`)
                    
                } else if ( userspilih == 'batu' ) {
                    if( computer == 'gunting' ) {
                        
                        reply(`🎉 KAMU MENANG 🎉\n\nKamu: ✊\nBot: ✌\n\nKamu mendapat ${skot} limit`)
                        bayarLimit(sender, skot)
                    } else {
                        reply(`😵 KAMU KALAH 😵\n\nKamu: ✊\nBot: 🖐`)
                    }
                } else if ( userspilih == 'gunting' ) {
                    if( computer == 'batu' ) {
                        
                        reply(`😵 KAMU KALAH 😵\n\nKamu: ✌\nBot: ✊`)
                    } else {
                    	reply(`🎉 KAMU MENANG 🎉\n\nKamu: ✌\nBot: 🖐\n\nKamu mendapat ${skot} limit`)
                    bayarLimit(sender, skot)
                    }
                } else if ( userspilih == 'kertas' ) {
                    if( computer == 'batu' ) {
                        
                        reply(`🎉 KAMU MENANG 🎉\n\nKamu: 🖐\nBot: ✊\n\nKamu mendapat ${skot} limit`)
                        bayarLimit(sender, skot)
                    } else {
                        reply(`😵 KAMU KALAH 😵\n\nKamu: 🖐\nBot: ✌`)
                    }
                
            } else {
                reply(`Format salah, masukkan pilihanmu\n\nContoh: ${prefix}suit kertas`)
            }
                break
				
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':  
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} VINZ`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=genbotkey&text=${ini_txt}`)
                    iamvinz.sendMessage(from, ini_buffer, sticker, { quoted: Lan })
                    break
case 'judi':
if (!isPrem) return reply(nad.premium(prefix))
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname)) 
                cas = args.join(" ")
                if (checkATMuser(sender) < cas) return reply(`uang mu tidak mencukupi untuk melakukan judi`)
                if ( args.length < 1 ) return reply('Dih, NooB!!')
					if ( isNaN(cas)) return reply('Lu mau taruhan brp?')
					const resg = ["Kamu MENANG!!","Kamu KALAH!!"];
					bayar = confirmATM(sender, cas)
					setTimeout( () => {
					const rand = Math.ceil(Math.random() * 2)
					const judi = cas + 0
					const hasil = resg[Math.floor(Math.random() * resg.length)]
					if ( hasil == "Kamu MENANG!!" ) {
						addKoinUser(sender, judi)
						reply(`*SELAMAT*\n\nKamu memenangkan casino sebesar *_${judi}_*\n\nKumpulkan uang untuk membeli limit`)
					} else if(hasil == "Kamu KALAH!!") {
						confirmATM(sender, cas)
						reply(`MAAV KAMU GAGAL LAIN KALI KAMU MATI AJA YA MAMPUS ILANG DUIT LU SEBESAR ${cas}`)
					} else {
					reply(" X error X ")
					}
					}, 3000); //1 Minute
					setTimeout( () => {
						reply(`Menunggu hasil!.`)
					}, 0) //1 sec
						await limitAdd(sender)
						break
                    case 'sertipacar':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipacar botwea`)
                    fakevn(nad.wait())
                    sertipaca = await getBuffer(`http://onlydevcity.xyz/PacarSerti/img.php?nama=${q}`)
                    iamvinz.sendMessage(from, sertipaca, image, { quoted: Lan })
                    break
                    case 'sertisadboy':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertisadboy botwea`)
                    fakevn(nad.wait())
                    sertisadbo = await getBuffer(`http://onlydevcity.xyz/SadBoySerti/img.php?nama=${q}`)
                    iamvinz.sendMessage(from, sertisadbo, image, { quoted: Lan })
                    break
                    
				case 'gabutmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const gabut = `「 *GABUT MENU* 」
❏ ${prefix}tebakin
❏ ${prefix}caklontong
❏ ${prefix}bisakah
❏ ${prefix}kapankah
❏ ${prefix}apakah
❏ ${prefix}rate
❏ ${prefix}hobby
❏ ${prefix}truth
❏ ${prefix}dare
❏ ${prefix}cekbapak
❏ ${prefix}seberapagay

「 *${botName}* 」`
					fakestatus(gabut)
					break
				case 'seberapagay':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
				anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
				hasil = `Nih Liat Data Gay Si ${q}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
				reply(hasil)
				break
				case 'tebakin':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=genbotkey`)
					tebak = await getBuffer(anu.result.soalImg)
					setTimeout(() => {
						iamvinz.sendMessage(from, '*➸ Jawaban :* ' + anu.result.jawaban, text, { quoted: Lan })
					}, 30000) // 1000 = 1s,
					setTimeout(() => {
						iamvinz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout(() => {
						iamvinz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout(() => {
						iamvinz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout(() => {
						iamvinz.sendMessage(from, tebak, image, { caption: '_Jawab Ye, Gak Bisa Jawab\nHarus Donasi_', quoted: Lan })
					}, 0) // 1000 = 1s,
					break
				case 'caklontong':
                    if (!isRegistered) return reply(nad.noregis())
	            	if (isLimit(sender)) return reply(nad.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vinzvhtear}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					iamvinz.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.desk+'*', text, {quoted: Lan}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, caklontong, text, {quoted: Lan}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
					case 'family100':
                    if (!isRegistered) return reply(nad.noregis())
		            if (isLimit(sender)) return reply(nad.limitend(pusname))
	      	        
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=genbotkey`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					iamvinz.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: Lan}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					iamvinz.sendMessage(from, family, text, {quoted: Lan }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
					
				case 'watak':
				if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
				
				watak = body.slice(1)
				wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
				const tak = wa[Math.floor(Math.random() * wa.length)]
				iamvinz.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: Lan })
		     	break 

				case 'bisakah':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					bisakah = body.slice(1)
					const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					iamvinz.sendMessage(from, 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh, text, { quoted: Lan })
					break

					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					kapankah = body.slice(1)
					const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					iamvinz.sendMessage(from, 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh, text, { quoted: Lan })
					break

				case 'apakah':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					apakah = body.slice(1)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					iamvinz.sendMessage(from, 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah, text, { quoted: Lan })
					break

				case 'rate':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					rate = body.slice(1)
					const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					iamvinz.sendMessage(from, 'Pertanyaan : *' + rate + '*\n\nJawaban : ' + te + '%', text, { quoted: Lan })
					break

				case 'hobby':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					hobby = body.slice(1)
					const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					iamvinz.sendMessage(from, 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by, text, { quoted: Lan })
					break

				case 'truth':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					iamvinz.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: Lan })
					break

				case 'dare':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					iamvinz.sendMessage(from, tod, image, { quoted: Lan, caption: '*Dare*\n\n' + der })
					break

				case 'cekbapak': // By VINZ BOT
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : VINZ BOT']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					iamvinz.sendMessage(from, cek, text, { quoted: Lan })
					break

				case 'randommenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const random = `「 *RANDOM MENU* 」
❏ ${prefix}gachacewek
❏ ${prefix}gachacowok
❏ ${prefix}sagiri
❏ ${prefix}megumin
❏ ${prefix}waifu
❏ ${prefix}neko
❏ ${prefix}shinobu
❏ ${prefix}loli
❏ ${prefix}nekonime
❏ ${prefix}darkjokes
❏ ${prefix}meme
❏ ${prefix}memeindo
❏ ${prefix}estetik

「 *${botName}* 」`
					fakestatus(random)
					break

				case 'gachacewek':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./VinzID/cewek.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, Lan, 'Jadi Gimana Bwang?:v')
					break

				case 'gachacowok':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./VinzID/cowok.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, Lan, 'Jadi Gimana Mba?:v')
					break
				case 'meme':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					fakevn(nad.wait())
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=genbotkey`, {method: 'get'})
				iamvinz.sendMessage(from, buffer, image, {quoted: Lan})
				break
case 'memeindo': 
				if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/meme/memeindo?apikey=genbotkey`, {method: 'get'})
				iamvinz.sendMessage(from, buffer, image, {quoted: Lan})
				break

				case 'darkjokes':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./VinzID/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, Lan, '*GELAP BOS :V*')
					break
			case 'waifu':
			        if (!isPrem) return reply(nad.premium(prefix))
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					fakevn(nad.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/waifu`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					iamvinz.sendMessage(from, ifu, image, {quoted: Lan, caption: "Wibu AbiZzz"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'neko':
			        if (!isPrem) return reply(nad.premium(prefix))
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					fakevn(nad.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/neko`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					iamvinz.sendMessage(from, ifu, image, {quoted: Lan})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			
			case 'megumin':
			        if (!isPrem) return reply(nad.premium(prefix))
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					fakevn(nad.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/megumin`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					iamvinz.sendMessage(from, ifu, image, {quoted: Lan})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'shinobu':
			        if (!isPrem) return reply(nad.premium(prefix))
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					fakevn(nad.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/shinobu`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					iamvinz.sendMessage(from, ifu, image, {quoted: Lan})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
				case 'loli':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (!isPrem) return reply(nad.premium(prefix))
					await limitAdd(sender)
					fakevn(nad.wait())
					lomli = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
					iamvinz.sendMessage(from, lomli, image, { quoted: Lan, caption: 'Cintai Loli Mu>_<' })
					break
					
				case 'wait':
                    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
                        const filePath = await iamvinz.downloadAndSaveMediaMessage(encmedia);
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=genbotkey`, {...options })
                        get_result = get_result.result
                        console.log(get_result)
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Eimilarity : ${get_result.similarity}`
                        iamvinz.sendMessage(from, ini_video, video, { quoted: Lan, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

				case 'nekonime':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (!isPrem) return reply(nad.premium(prefix))
					neko = await getBuffer(`http://lolhuman.herokuapp.com/api/random2/neko?apikey=genbotkey`)
					fakevn(nad.wait())
					iamvinz.sendMessage(from, neko, image, { quoted: Lan, caption: 'Nekonime >_<' })
					break
					
				case 'bts':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (!isPrem) return reply(nad.premium(prefix))
					bts = await getBuffer(`https://api.lolhuman.xyz/api/random/bts?apikey=genbotkey`)
					fakevn(nad.wait())
					iamvinz.sendMessage(from, bts, image, { quoted: Lan, caption: 'Nih Plastik Yg Lu Minta' })
					break
				
				case 'exo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (!isPrem) return reply(nad.premium(prefix))
					exo = await getBuffer(`https://api.lolhuman.xyz/api/random/exo?apikey=genbotkey`)
					fakevn(nad.wait())
					iamvinz.sendMessage(from, exo, image, { quoted: Lan, caption: 'Nih Plastik Yg Lu Minta' })
					break
					
				case 'elf':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (!isPrem) return reply(nad.premium(prefix))
					elf = await getBuffer(`https://api.lolhuman.xyz/api/random/elf?apikey=genbotkey`)
					fakevn(nad.wait())
					iamvinz.sendMessage(from, elf, image, { quoted: Lan, caption: 'Nih om' })
					break
					
				case 'quotesanime':
				    fakelokasi(`*WAIT BROH*`)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=genbotkey`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    faketrolli(`_${quote}_\n\n*kharakter • ${char}*\n*Anime • ${anime}*\n*Eps • ${episode}*`)
                    break
					
				case 'quotesdilan':
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=genbotkey`)
                    reply(quotedilan.result)
                    break
					
                case 'quotesislami':
                    quoteislami = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=genbotkey`)
                    reply(quoteislami.result)
                    break
					
				case 'quotesimage':
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=genbotkey`)
                    iamvinz.sendMessage(from, get_result, image, { quotes: Lan })
                    break
					
                    case 'wallpaper':
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=genbotkey&query=${q}`)
                    ini_buffer = await getBuffer(get_result.result)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan })
                    break
					
                    case 'jodoh':
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} GEN & Nadya`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
				case 'pelangi':
				
				case 'rainbow':
					
				var imgbb = require('imgbb-uploader')
	                 
				if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 
				ger = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Lan
	                 
				reply(nad.wait)
	                 
				owgi = await iamvinz.downloadAndSaveMediaMessage(ger)
	                 
				anu = await imgbb('959fbb374d85a37e6a72f48f3650d1b5', owgi) 
	                
				teks = `${anu.display_url}`
                    
				titid = await getBuffer(`https://some-random-api.ml/canvas/gay?avatar=${teks}`, {method: 'get'})
                    
				iamvinz.sendMessage(from, titid, image, {quoted : Lan}) 
		
				}		
				break
					
				case 'nhentaipdf':
					if (!isOwner) return reply(nad.ownerB())
                    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    iamvinz.sendMessage(from, ini_buffer, document, { quoted: Lan, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
					
				case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=genbotkey&query=${q}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    iamvinz.sendMessage(from, thumbnail, image, { quoted: Lan, caption: ini_txt })
                    break
				case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=genbotkey&query=${q}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    iamvinz.sendMessage(from, thumbnail, image, { quoted: Lan, caption: ini_txt })
                    break
				case 'shota':
                case 'art':
                case 'wallnime':
                if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan })
                    break
				case 'hentai':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'nsfwneko':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'nsfwwaifu':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'nsfwloli':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'nsfwloli2':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'nsfwtrap':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'nsfwblowjob':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'yaoi':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'ecchi':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'ahegao':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'hololewd':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'oppai':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				case 'animefeets':
                if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group\nMohon Dichat Pribadi Bot\nDemi Kenyamanan Bersama🙏\nBtw Lagi Sange Yah?xixixi')
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply('*WAIT BROH*')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=genbotkey`)
                    iamvinz.sendMessage(from, ini_buffer, image, {caption: 'Nih Bro,Jangan Jadiin Bacol', quoted: Lan})
                    break
				
				case 'sagiri':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					sagi = await getBuffer(`http://lolhuman.herokuapp.com/api/random/sagiri?apikey=genbotkey`)
					fakevn(nad.wait())
					iamvinz.sendMessage(from, sagi, image, { quoted: Lan })
					break
				
				case 'estetik':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
					fakevn(nad.wait())
					este = await getBuffer(anu.result.result)
					iamvinz.sendMessage(from, este, image, { quoted: Lan })
				break
					
				case 'dompetmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const dompet = `「 *DOMPET MENU* 」
❏ ${prefix}limit
❏ ${prefix}transfer
❏ ${prefix}atm
❏ ${prefix}buylimit
❏ ${prefix}premiumlist

「 *${botName}* 」`
					fakestatus(dompet)
					break

				case 'limit':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					checkLimit(sender)
					break

				case 'transfer':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q.includes('|')) return reply(nad.wrongf())
					const tujuan = q.substring(0, q.indexOf('|') - 1)
					const jumblah = q.substring(q.lastIndexOf('|') + 1)
					if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
					const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
					bonus = 1.000 + jumblah
					hasiltf = jumblah + bonus
					addKoinUser(tujuantf, hasiltf)
					confirmATM(sender, jumblah)
					addKoinUser(`${ownerNumber}`, bonus)
					reply(`*「 SUKSES 」*\n\npengiriman uang berhasil\n➸ dari : +${sender.split("@")[0]}\n➸ ke : +${tujuan}\n➸ jumlah transfer : ${jumblah}\n➸ BONUS : ${bonus}`)
					break

				case 'atm':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					const kantong = checkATMuser(sender)
					reply(nad.uangkau(pushname, sender, kantong))
					break

				case 'buylimit':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					payout = body.slice(10)
					const koinPerlimit = 1000
					const total = koinPerlimit * payout
					if (checkATMuser(sender) <= total) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dumlu >_< jangan open bo kak:v`)
					if (checkATMuser(sender) >= total) {
						confirmATM(sender, total)
						bayarLimit(sender, payout)
						await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n➸ pengirim : Vinz ID\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${payout} \n➸ harga limit : ${koinPerlimit}/limit\n➸ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
					}
					break
				case 'toolsmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const tools = `「 *TOOLS MENU* 」
❏ ${prefix}tomp3
❏ ${prefix}tomp4
❏ ${prefix}toptt
❏ ${prefix}toimg
❏ ${prefix}imgtourl
❏ ${prefix}trigered
❏ ${prefix}komenyt
❏ ${prefix}nightcore
❏ ${prefix}slow
❏ ${prefix}tupai
❏ ${prefix}blub
❏ ${prefix}gemuk
❏ ${prefix}ghost
❏ ${prefix}bass

「 *${botName}* 」`
					fakestatus(tools)
					break
				case 'tomp3':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					iamvinz.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					fakevn(nad.wait())
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal Kak Coba Ulangi:)')
						mhee = fs.readFileSync(ran)
						iamvinz.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', quoted: Lan })
						fs.unlinkSync(ran)
					})
					break

				case 'toimg':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isQuotedSticker) return reply('Reply Sticker Nya Kak')
					fakevn(nad.wait())
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(ran)
						iamvinz.sendMessage(from, buffer, image, { quoted: Lan, caption: 'nih kak [(^.^)]' })
						fs.unlinkSync(ran)
					})
					break
				                    case 'togif':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(nad.wait)
                                        if (Lan.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        iamvinz.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: Lan})
                                }
                                break

                case 'tomp4':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					fakevn(nad.wait())
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !Lan.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        ger = isQuotedSticker ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
                        owgi = await iamvinz.downloadAndSaveMediaMessage(ger)
                        data = await imgbb("7f2cf4cd570b9a442d6fdec16b74dcfc", owgi)
                        axios.get(`https://ezgif.com/webp-to-mp4?url=${data.display_url}`)
                            .then(({ data }) => {
                                $ = cheerio.load(data)
                                bodyFormThen = new FormData()
                                file = $('input[name="file"]').attr('value')
                                token = $('input[name="token"]').attr('value')
                                convert = $('input[name="file"]').attr('value')
                                gotdata = {
                                    file: file,
                                    token: token,
                                    convert: convert
                                }
                                bodyFormThen.append('file', gotdata.file)
                                bodyFormThen.append('token', gotdata.token)
                                bodyFormThen.append('convert', gotdata.convert)
                                axios({
                                    method: 'post',
                                    url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                                    data: bodyFormThen,
                                    headers: {
                                        'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                                    }
                                }).then(({ data }) => {
                                    $ = cheerio.load(data)
                                    result = 'https:' + $('div#output > p.outfile > video > source').attr('VinzID')
                                    getBuffer(result).then(tog => {
                                        iamvinz.sendMessage(from, tog, video, { mimetype: 'video/mp4', quoted: Lan })
                                    })
                                })
                            })
                    } else {
                        reply('Reply StickerGif nya!')
                    }
                    break
                    
				case 'imgtourl':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					costum('[WAIT] Sabar Kak', text, tescuk, cr)
					var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
					var media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					var imgbb = require('imgbb-uploader')
					imgbb('3ea1465ef91578a90ee81f7d41c59a1f', media)
						.then(data => {
							var caps = `「 *IMAGE TO URL* 」
➸ ID : ${data.id}
➸ MimeType : ${data.image.mime}
➸ Extension : ${data.image.extension}
➸ URL : ${data.display_url}`
							ibb = fs.readFileSync(media)
							iamvinz.sendMessage(from, ibb, image, { quoted: Lan, caption: caps })
						})
						.catch(err => {
							throw err
						})
					break
case 'igdl':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
                   if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=genbotkey&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    iamvinz.sendMessage(from, ini_buffer, ini_type, { quoted: Lan})
                    break
case 'fbdl':
if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
     if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=genbotkey&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    iamvinz.sendMessage(from, ini_buffer, video, { quoted: Lan})
                    break

				case 'komenyt':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					gh = body.slice(9)
					usnm = gh.split("&")[0];
					cmn = gh.split("&")[1];
					var imgbb = require('imgbb-uploader')
					try {
						pp = await iamvinz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
						pp = 'https://i.ibb.co/Tv6JR98/baby.jpg'
					}
					media = await getBuffer(pp)
					datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
					fs.writeFileSync('getpp.jpeg', datae, 'base64')
					res = await imgbb("7f2cf4cd570b9a442d6fdec16b74dcfc", 'getpp.jpeg')
					buffer = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
					iamvinz.sendMessage(from, buffer, image, { caption: 'Nih Cok', contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_YOUTUBE COMMENT_*' } } })
					break

				case 'trigered':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						fakevn(nad.wait())
						owgi = await iamvinz.downloadAndSaveMediaMessage(ger)
						anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
						trig = `${anu.display_url}`
						ranp = getRandom('.gif')
						rano = getRandom('.webp')
						anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${trig}`
						exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							fs.unlinkSync(ranp)
							if (err) return reply('GAGAL UM')
							nobg = fs.readFileSync(rano)
							iamvinz.sendMessage(from, nobg, sticker, { quoted: Lan })
							fs.unlinkSync(rano)
						})
					} else {
						reply('Gunakan Foto Kakm')
					}
					break
			    case 'nightcore':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)			    
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					iamvinz.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: Lan, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
				case 'slow':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					iamvinz.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: Lan, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
				case 'tupai':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					iamvinz.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: Lan, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
				case 'blub':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					iamvinz.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: Lan, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
				case 'gemuk':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					iamvinz.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: Lan, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
				case 'ghost':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						ghs = fs.readFileSync(ran)
					iamvinz.sendMessage(from, ghs, audio, { mimetype: 'audio/mp4', quoted: Lan, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
		       case 'bass':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)		   
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					iamvinz.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: Lan, ptt: true })
						fs.unlinkSync(ran)
					   })
				       break
			
	             case 'toptt':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
					iamvinz.sendMessage(from, topt, audio, { mimetype: 'audio/mp4', quoted: Lan, ptt: true })
						})
						await limitAdd(sender)
					    break
				case 'mutualmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const mtal = `「 *MUTUAL MENU* 」
❏ ${prefix}mutual
❏ ${prefix}next

「 *${botName}* 」`
					fakestatus(mtal)
					break
				case 'mutual':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group')
					anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
					await reply('Mencari Pasangan >_<')
					await reply(`wa.me/${anug}`)
					await reply(`Pasangan Ditemukan :\n*${prefix}next* — Temukan Pasangan Baru`)
					break

				case 'next':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group')
					anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
					await reply('Mencari Pasangan >_<')
					await reply(`wa.me/${anug}`)
					await reply(`Pasangan Ditemukan :\n*${prefix}next* — Temukan Pasangan Baru`)
					break
					
				case 'othermenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const other = `「 *OTHER MENU* 」
❏ ${prefix}lacakip
❏ ${prefix}brainly
❏ ${prefix}wiki
❏ ${prefix}kbbi
❏ ${prefix}covid
❏ ${prefix}pinterest
❏ ${prefix}ytsearch
❏ ${prefix}jadwalsholat
❏ ${prefix}spamsms

「 *${botName}* 」`
					fakestatus(other)
					break
					case 'spamsms':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					await fetchJson(`https://api.xteam.xyz/spammer/pizzahut?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/olx?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/jagreward?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/danacita?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/akademi?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/icq?no=${q}&APIKEY=${xteam}`)
					reply('Done')
                    break
              case 'ytsearch':
              if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                   fakevn(nad.wait())
              if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
				case 'lacakip':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length === 0) return reply(`Contoh :\n${prefix}lacakip 10.43.180.140`)
					iplu = `${body.slice(9)}`
					data = await fetchJson(`https://api.vhtear.com/ipwhois?ipaddr=${q}&apikey=genbotkey`, { method: 'get' })
					lacaks = data.result
					lacak = `➸ Ip : ${lacaks.ip}
➸ Country : ${lacaks.country}
➸ Country code : ${lacaks.country_code}
➸ Region : ${lacaks.region}
➸ Region name : ${lacaks.region_name}
➸ City : ${lacaks.city}
➸ Latitude : ${lacaks.latitude}
➸ Longtitude : ${lacaks.longtitude}
➸ Timezone : ${lacaks.timezone}
➸ Isp : ${lacaks.isp}
➸ Org : ${lacaks.org}
➸ As : ${lacaks.as}`
					iamvinz.sendMessage(from, lacak, text, { quoted: Lan })
					break

				case 'brainly':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (args.length < 1) return reply(`Yang Mau Dicari Apa Kak?\nContoh :\n${prefix}brainly apa itu penis`)
					await limitAdd(sender)
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
						teks = '♡───────────♡\n'
						for (let Y of res.data) {
							teks += `\n*「 BRAINLY 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n♡───────────♡\n`
						}
						iamvinz.sendMessage(from, teks, text, { quoted: Lan, detectLinks: false })
						console.log(res)
					})
					break

				case 'wiki':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Yang Mau Dicari Apa Kak?\nContoh :\n${prefix}wiki online`)
					var bby = body.slice(6)
					anu = await fetchJson(`https://api.vhtear.com/wikipedia?query=${q}%2019&apikey=genbotkey`)
					reply('[WAIT] Sedang Searching...')
					wikiped = `「 WIKI PEDIA 」\n Jawaban : ${anu.result.result}`
					iamvinz.sendMessage(from, wikiped, text, { quoted: Lan })
					break

				case 'kbbi':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Yang Mau Dicari Apa Kak?\nContoh :\n${prefix}kbbi manusia`)
					var bby = body.slice(6)
					anu = await fetchJson(`https://api.vhtear.com/kbbi?query=${q}&apikey=genbotkey`)
					reply('[WAIT] Sedang Searching...')
					kabebei = `「 *KBBI* 」\nJawaban : ${anu.result.hasil}`
					iamvinz.sendMessage(from, kabebei, text, { quoted: Lan })
					break
					
				case 'covid':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://api.vhtear.com/corona&apikey=genbotkey`)
					cvd = `「 *INGFO COVID* 」

Negara : ${anu.result.country}
Positif : ${anu.result.positif}
Sembuh : ${anu.result.sembuh}
Meninggal : ${anu.result.meninggal}`
					iamvinz.sendMessage(from, cvd, text, { quoted: Lan })
					break
					
				case 'pinterest':
					if (isBanned) return reply(nad.baned())
					if (!isPrem) return reply(nad.premium(prefix))
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					        if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=genbotkey&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    iamvinz.sendMessage(from, ini_buffer, image, { quoted: Lan})
                    break
					case 'jadwalsholat':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Daerah Nya Mana?\nContoh :\n${prefix}jadwalsholat Tasikmalaya`)
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=${q}`)
					jsholat = `${anu.data.string}`
					iamvinz.sendMessage(from, jsholat, text, {quoted: Lan})
					break

				case 'storagemenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const storage = `「 *STORAGE* 」
❏ ${prefix}addstiker
❏ ${prefix}getstiker
❏ ${prefix}liststiker
❏ ${prefix}addvideo
❏ ${prefix}getvideo
❏ ${prefix}listvideo
❏ ${prefix}addvn
❏ ${prefix}getvn
❏ ${prefix}listvn
❏ ${prefix}addimage
❏ ${prefix}getimage
❏ ${prefix}listimage
❏ ${prefix}iri
❏ ${prefix}pale
❏ ${prefix}pota
❏ ${prefix}welot
❏ ${prefix}alay
❏ ${prefix}bernyanyi
❏ ${prefix}bwa
❏ ${prefix}ganteng
❏ ${prefix}gatal
❏ ${prefix}ladida
❏ ${prefix}rusher
❏ ${prefix}boong
❏ ${prefix}tengteng
❏ ${prefix}sound1
❏ ${prefix}sound2
❏ ${prefix}sound3
❏ ${prefix}sound4
❏ ${prefix}sound5
❏ ${prefix}sound6
❏ ${prefix}sound7

「 *${botName}* 」`
					fakestatus(storage)
					break
				case 'addstiker':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (!isQuotedSticker) return reply('Reply stickernya kak -_-')
					stiklan = body.slice(11)
					if (!stiklan) return reply('Namain Stickernya kak!')
					adds = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					lan = await iamvinz.downloadMediaMessage(adds)
					setimker.push(`${stiklan}`)
					fs.writeFileSync(`./media/sticker/${stiklan}.webp`, lan)
					fs.writeFileSync(`./media/stik.json`, JSON.stringify(setimker))
					await reply('Sticker Berhasil Ditambahkan Ke Database Bot')
					break

				case 'getstiker':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Stiker Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}liststiker`)
					stikeram = body.slice(11)
					hasilya = fs.readFileSync(`./media/sticker/${stikeram}.webp`)
					iamvinz.sendMessage(from, hasilya, sticker, { quoted: Lan })
					break

				case 'liststiker':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					lis = '╭──「 *LIST STICKER* 」\n'
					for (let cieee of setimker) {
						lis += `◯ ${cieee}\n`
					}
					lis += `\n╰─────「 *${setimker.length}* 」`
					iamvinz.sendMessage(from, lis.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": setimker } })
					break

				case 'addvideo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (!isQuotedVideo) return reply('Reply Videonya Kak')
					adv = body.slice(10)
					if (!adv) return reply('Namain video nya kak')
					deo = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					dvi = await iamvinz.downloadMediaMessage(deo)
					vidioya.push(`${adv}`)
					fs.writeFileSync(`./media/video/${adv}.mp4`, dvi)
					fs.writeFileSync(`./media/video.json`, JSON.stringify(vidioya))
					iamvinz.sendMessage(from, `Video Berhasil Ditambahkan Ke Database Bot`, MessageType.text, { quoted: Lan })
					break

				case 'getvideo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Video Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}listvideo`)
					getvi = body.slice(10)
					buffer = fs.readFileSync(`./media/video/${getvi}.mp4`)
					iamvinz.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: Lan })
					break

				case 'listvideo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					list = '╭──「 *LIST VIDEO* 」\n'
					for (let nihh of vidioya) {
						list += `◯ ${nihh}\n`
					}
					list += `\n╰─────「 *${vidioya.length}* 」`
					iamvinz.sendMessage(from, list.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": vidioya } })
					break

				case 'addvn':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (!isQuotedAudio) return reply('Reply Vn Nya Kak')
					advn = body.slice(7)
					if (!advn) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await iamvinz.downloadMediaMessage(boij)
					audioya.push(`${advn}`)
					fs.writeFileSync(`./media/audio/${advn}.mp3`, delb)
					fs.writeFileSync('./media/audio.json', JSON.stringify(audioya))
					iamvinz.sendMessage(from, `Vn Berhasil Ditambahkan Ke Database Bot`, MessageType.text, { quoted: Lan })
					break

				case 'getvn':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Vn Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}listvn`)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./media/audio/${namastc}.mp3`)
					iamvinz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: Lan, ptt: true })
					break

				case 'listvn':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					lisv = '╭──「 *LIST VN* 」\n'
					for (let awokwkwk of audioya) {
						lisv += `◯ ${awokwkwk}\n`
					}
					lisv += `\n╰─────「 *${audioya.length}* 」`
					iamvinz.sendMessage(from, lisv.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": audioya } })
					break

				case 'addimage':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isPrem) return reply(nad.premium(prefix))
					if (!isQuotedImage) return reply('Reply Gambar Nya Kak')
					sepimg = body.slice(10)
					if (!sepimg) return reply('Nama Gambar Nya Apa?')
					svimeg = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					imej = await iamvinz.downloadMediaMessage(svimeg)
					imegya.push(`${sepimg}`)
					fs.writeFileSync(`./media/image/${sepimg}.jpeg`, imej)
					fs.writeFileSync('./media/image.json', JSON.stringify(imegya))
					iamvinz.sendMessage(from, `Gambar Berhasil Ditambahkan Ke Database Bot`, MessageType.text, { quoted: Lan })
					break

				case 'getimage':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Gambar Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}listimage`)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./media/image/${namastc}.jpeg`)
					iamvinz.sendMessage(from, buffer, image, { quoted: Lan })
					break
				case 'weton':
                    if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
				case 'ytsearch':
                    if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Muse Indonesia`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x in get_result) {
                        ini_txt += `Title : ${get_result[x].title}\n`
                        ini_txt += `Views : ${get_result[x].views}\n`
                        ini_txt += `Published : ${get_result[x].published}\n`
                        ini_txt += `Thumbnail : ${get_result[x].thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${get_result[x].videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'igstory':
	                if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
					if (args.length < 1) return reply('link nya mana anjing')
	                tp = body.slice(8)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/igstory/${tp}?apikey=genbotkey`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result[0].url)
					hebom.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: Lan})
					break
                case 'tanggaljadian':
                   if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break

				case 'listimage':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					lisi = '╭──「 *LIST IMAGE* 」\n'
					for (let menghilih of imegya) {
						lisi += `◯ ${menghilih}\n`
					}
					lisi += `\n╰─────「 *${imegya.length}* 」`
					iamvinz.sendMessage(from, lisi.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": imegya } })
					break
				
                case 'fakeimg':
					if (!isPrem) return reply(nad.premium(prefix))
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                fakevn(nad.wait())
            var kontol = body.slice(9)
            var fake1 = kontol.split("|")[0];
            var fake2 = kontol.split("|")[1];
            var bto = fs.readFileSync(`./media/image/${fake1}.jpeg`)
            var ato = fs.readFileSync(`./media/image/${fake2}.jpeg`)
            var option = {
              "thumbnail": ato}
            iamvinz.sendMessage(from, bto, "imageMessage", option)
            break

				case 'sound1':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					satu = fs.readFileSync('./media/music/sound1.mp3');
					iamvinz.sendMessage(from, satu, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
					break


				case 'sound2':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					dua = fs.readFileSync('./media/music/sound2.mp3');
					iamvinz.sendMessage(from, dua, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound3':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					tiga = fs.readFileSync('./media/music/sound3.mp3');
					iamvinz.sendMessage(from, tiga, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound4':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					empat = fs.readFileSync('./media/music/sound4.mp3');
					iamvinz.sendMessage(from, empat, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound5':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					lima = fs.readFileSync('./media/music/sound5.mp3');
					iamvinz.sendMessage(from, lima, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound6':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					enam = fs.readFileSync('./media/music/sound6.mp3');
					iamvinz.sendMessage(from, enam, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound7':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					tujuh = fs.readFileSync('./media/music/sound7.mp3');
					iamvinz.sendMessage(from, tujuh, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
					break
				case 'ownermenu':
					const bosnya = `「 *MENU BOSS* 」
❏ ${prefix}addprem
❏ ${prefix}dellprem
❏ ${prefix}ban
❏ ${prefix}unban
❏ ${prefix}addbadword
❏ ${prefix}delbadword
❏ ${prefix}badwordlist
❏ ${prefix}bc
❏ ${prefix}setreply
❏ ${prefix}setprefix
❏ ${prefix}setbio
❏ ${prefix}setppbot
❏ ${prefix}setthumb
❏ ${prefix}clearall
❏ ${prefix}resetlimit
❏ ${prefix}event
❏ ${prefix}term
❏ ${prefix}return
❏ ${prefix}readall

*ABOUT* 
❏ ${prefix}runtime
❏ ${prefix}creator
❏ ${prefix}donasi
❏ ${prefix}iklan
❏ ${prefix}ping
❏ ${prefix}info
❏ cekprefix

「 *${botName}* 」`
					fakestatus(bosnya)
					break				
                case 'setthumb':
                if (!isOwner) return reply(nad.ownerb())
                    if (!isQuotedImage) return reply('Reply imagenya blokk!')
                    const messimagethumb = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    const downiamgethumb = await iamvinz.downloadMediaMessage(messimagethumb)
                    fs.unlinkSync(`./src/image/thumbnail.jpeg`)
                    await sleep(2000)
                    fs.writeFileSync(`./src/image/thumbnail.jpeg`, downiamgethumb)
                    reply('Succes')
                    break
				case 'setppbot':
				iamvinz.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isOwner) return reply(nad.ownerb())
					enmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iamvinz.downloadAndSaveMediaMessage(enmedia)
					await iamvinz.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break
                 case 'readall':
					if (!isOwner) return reply(nad.ownerb())
					var chats = await iamvinz.chats.all()
                    chats.map( async ({ jid }) => {
                          await iamvinz.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					await iamvinz.sendMessage(from, rdl, MessageType.text, {quoted: Lan})
					console.log(chats.length)
					break
								case 'addvip':
					if (!isCowner) return reply(nad.ownerb())
					adprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					vip.push(adprem)
					fs.writeFileSync('./database/vip.json', JSON.stringify(vip))
					fakestatus(`BERHASIL MENAMBAHKAN USER VIP`)
					break
				case 'dellvip':
					if (!isCowner) return reply(nad.ownerb())
					delprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					delp = ban.indexOf(delprem)
					vip.splice(delp, 1)
					fs.writeFileSync('./database/vip.json', JSON.stringify(vip))
					fakestatus(`BERHASIL MENGHAPUS USER VIP`)
					break
				case 'addprem':
					if (!isCowner) return reply(nad.ownerb())
					adprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					premium.push(adprem)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					fakevn(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break
				case 'dellprem':
					if (!isCowner) return reply(nad.ownerb())
					delprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					delp = ban.indexOf(delprem)
					premium.splice(delp, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					fakestatus(`BERHASIL MENGHAPUS USER PREMIUM`)
					break
				case 'addcoowner':
					if (!isOwner) return reply(nad.ownerb())
					cownera = `${args[0].replace('@', '')}@s.whatsapp.net`
					cowner.push(cownera)
					fs.writeFileSync('./database/cowner.json', JSON.stringify(cowner))
					fakestatus(`BERHASIL MENAMBAHKAN PARTNER OWNER`)
					break
                case 'premiumlist':
				iamvinz.updatePresence(from, Presence.composing) 
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
				pemlist = '╭──「 *USER PREMIUM* 」\n'
				for (let premm of premium) {
					pemlist += `> @${premm.split('@')[0]}\n`
					}
					pemlist += `Total : ${premium.length}`
				iamvinz.sendMessage(from, pemlist.trim(), extendedText, {quoted: Lan, contextInfo: {"mentionedJid": premium}})
				break
				
				case 'ban':
					if (!isOwner) return reply(nad.ownerb())
					bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					ban.push(bnnd)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
					break

				case 'unban':
					if (!isOwner) return reply(nad.ownerb())
					ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					fakestatus(`Nomor ${ya} telah di unban!`)
					break
                   case 'addbadword':
					if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
					if (!isVip) return reply(`Oppss.. Khusus VIP USER`)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                case 'badwordlist':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
                    let lbw = `Nih Pak list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➢ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break
				case 'bc':
					iamvinz.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(nad.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await iamvinz.chats.all()
					if (isMedia && !Lan.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						buff = await iamvinz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							iamvinz.sendMessage(_.jid, buff, image, { caption: `*「 ${botName} BROADCAST 」*\n\n${body.slice(4)}` })
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 ${botName} BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('*「 Udah Selesai Pak 」*')
					}
					break

				case 'setreply':
					if (!isOwner) return reply(nad.ownerb())
					iamvinz.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					cr = body.slice(10)
					fakestatus(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break					
					
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(nad.ownerb())
					prefix = args[0]
					fakestatus(`*「 SUKSES 」* Prefix jadi ➸ : ${prefix}`)
					break

				case 'setbio':
					if (!isOwner) return reply(nad.ownerb())
					iyek = body.slice(8)
					iamvinz.setStatus(`${iyek}`)
					fakestatus(`Status BOT berhasil diperbarui menjadi :\n*[ ${iyek} ]*`)
					break
					
					case 'upgrade':
					reply(`
❏「 *Upgrade Price* 」
│
├──────
├➸ Status: ${prema}
├──────
├➸FREE : IDR 0
├➸PREM : IDR 5.000
├➸VIP : IDR 15.000
├➸ ${prefix}owner To Upgrade
╰─────「 *${botName}* 」`)
					break

				case 'clearall':
					if (!isCowner) return reply(nad.ownerb())
					anu = await iamvinz.chats.all()
					iamvinz.setMaxListeners(25)
					for (let _ of anu) {
						iamvinz.deleteChat(_.jid)
					}
					fakestatus(nad.clears())
					break

				case 'resetlimit':
					if (!isCowner) return reply(nad.ownerb())
					var ngonsol = []
					rest = _limit.indexOf([])
					_limit.splice(rest)
					fs.writeFileSync('./database/limit.json', JSON.stringify(ngonsol))
					fakestatus(`LIMIT BERHASIL DI RESET BOS`)
					break

				case 'event':
					if (isBanned) return reply(nad.baned())
					if (!isGroup) return reply(nad.groupo())
					if (!isOwner) return reply(nad.ownerb())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF BOS*')
						event.push(from)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('*「 SUKSES 」MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('*「 SUKSES 」MEMATIKAN EVENT DI GROUP*')
					} else {
						reply('pilih 1/0')
					}
					break

				case 'term':
					if (!isOwner) return reply(nad.ownerB())
					const cmd = body.slice(6)
					var itsme = `0@s.whatsapp.net`
					var split = `EXECUTOR`
					const term = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
					exec(cmd, (err, stdout) => {
						if (err) return iamvinz.sendMessage(from, `root@Vinz:~ ${err}`, text, { quoted: Lan })
						if (stdout) {
							iamvinz.sendMessage(from, stdout, text, term)
						}
					})
					break

				case 'return':
				    if (!isOwner) return reply(nad.ownerB())
					return iamvinz.sendMessage(from, JSON.stringify(eval(args.join(''))), text, { quoted: Lan })
					break
				default:
					if (budy == 'V71626Vyab18sih22237g137d9gb7g1bs72gs1g12hge187ge1') {
						if (isBanned) return reply(nad.baned())
						if (isRegistered) return reply(nad.rediregis())
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await iamvinz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `
❏「 *WEB VERIVIED* 」
Gate : LINE +62
Nama : ${pushname}
Nomor :${sender.split("@")[0]}
Time : ${time}
SN : ${serialUser}
----------
Terima Kasih Sudah Memverifikasi User, Tetap Patuhi Term Of Service Agar kamu Tidak Terbanned Secara otomatis
#owner To Contact owner
#help To View Menu
`
							let peripi = await getBuffer(ppadd)
							iamvinz.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await iamvinz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `
❏「 *VERIVIED* 」
│
├➸ Nama : ${pushname}
├➸ Nomor : wa.me/${sender.split("@")[0]}
├➸ Waktu Verify : ${time}
├➸ SN : ${serialUser}
├➸ User Verified : ${_registered.length}
╰─────「 *${botName}* 」`
							let peripi = await getBuffer(ppadd)
							iamvinz.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTERED]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
			}
			if (budy.includes('------------')) {
		    const buff = fs.readFileSync('./media/sticker/haha.webp');
            iamvinz.sendMessage(from, buff, sticker, {quoted: fakelokasi})
			}
			if (budy == 'cekprefix') {
				fakestatus(`*${botName} MENGGUNAKAN PREFIX :「 ${prefix} 」*`)
			}
			if (budy == 'p') {
				reply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik #genbot Ya Kak`)
			}
			if (budy == 'P') {
				reply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik #genbot Ya Kak`)
			}
			if (budy == 'bot') {
				reply(`Ada Yang bisa saya bantu?`)
			}
			if (budy == 'Sewa') {
				reply(`15 Hari = Rp.10.000.-\n30 Hari = Rp.15.000.-\n60 Hari = Rp.25.000.-\nPERMANEN = Rp. 40.000.-\n Gopay/Ovo/Dana : Chat Owner atau *#owner* \n\n _*VINZ BOT*_`)
			}
			if (budy == '@6282140744548') {
				fakelokasi(`*Ya?Ada Keperluan Apa Dengan Pengembang Saya?*`)
			}
			if (budy == '@6285882180847') {
				fakestatus(`*Apa Lu?Ngetag-ngetag Gw?*`)
			}
			if (budy == 'assalamualaikum') {
				reply(`Waalaikumsalam, Ada Yang Bisa Saya Bantu? kalo Bingung Ketik #genbot Ya Kak`)
			}
			if (budy == 'Assalamualaikum') {
				reply(`Waalaikumsalam, Ada Yang Bisa Saya Bantu? kalo Bingung Ketik #genbot Ya Kak`)
			}
			if (budy == 'Terimakasih') {
				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'makasih') {
				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'iri') {
			        irim = fs.readFileSync('./media/dj/iri.mp3');
					iamvinz.sendMessage(from, irim, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
			}
			if (budy == 'bernyanyi') {
				    ber = fs.readFileSync('./media/dj/bernyanyi.mp3');
			        iamvinz.sendMessage(from, ber, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
			}
			if (budy == 'pale') {
					pal = fs.readFileSync('./media/dj/pale.mp3');
					iamvinz.sendMessage(from, pal, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
			}
				if (budy == 'pota') {					
					pot = fs.readFileSync('./media/dj/pota.mp3');
					iamvinz.sendMessage(from, pot, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'welot') {					
					wel = fs.readFileSync('./media/dj/welot.mp3');
					iamvinz.sendMessage(from, wel, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'alay') {
					ala = fs.readFileSync('./media/dj/alay.mp3');
					iamvinz.sendMessage(from, ala, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}              			
				if (budy == 'bwa') {				
					bwa = fs.readFileSync('./media/dj/bwa.mp3');
					iamvinz.sendMessage(from, bwa, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
			    }
				if (budy == 'ganteng') {
					gan = fs.readFileSync('./media/dj/ganteng.mp3');
					iamvinz.sendMessage(from, gan, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'gatal') {					
					ga = fs.readFileSync('./media/dj/gatal.mp3');
					iamvinz.sendMessage(from, ga, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'ladida') {				
					lada = fs.readFileSync('./media/dj/ladadida.mp3');
					iamvinz.sendMessage(from, lada, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
                if (budy == 'sholawat') {
					shol = fs.readFileSync('./media/dj/sholawat.mp3');
					iamvinz.sendMessage(from, shol, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
                if (budy == 'manis') {
					manis = fs.readFileSync('./media/dj/manis.mp3');
					iamvinz.sendMessage(from, manis, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'rusher') {
					rus = fs.readFileSync('./media/dj/rusher.mp3');
					iamvinz.sendMessage(from, rus, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'boong') {
					boo = fs.readFileSync('./media/dj/tb.mp3');
					iamvinz.sendMessage(from, boo, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'tengteng') {
					teng = fs.readFileSync('./media/dj/tengteng.mp3');
					iamvinz.sendMessage(from, teng, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'gratata') {
					grata = fs.readFileSync('./media/dj/djgratata.mp3');
					iamvinz.sendMessage(from, grata, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'bermain') {
					main = fs.readFileSync('./media/dj/djbermain.mp3');
					iamvinz.sendMessage(from, main, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'kaweni') {
					wenik = fs.readFileSync('./media/dj/djkaweni.mp3');
					iamvinz.sendMessage(from, wenik, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'old') {
					oledd = fs.readFileSync('./media/dj/djold.mp3');
					iamvinz.sendMessage(from, oledd, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'sakit') {
					sakit = fs.readFileSync('./media/dj/djsakit.mp3');
					iamvinz.sendMessage(from, sakit, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'zombie') {
					zmbie = fs.readFileSync('./media/dj/djzombie.mp3');
					iamvinz.sendMessage(from, zmbie, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Iri') {
			        irim = fs.readFileSync('./media/dj/iri.mp3');
					iamvinz.sendMessage(from, irim, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
			}
			if (budy == 'Bernyanyi') {
				    ber = fs.readFileSync('./media/dj/bernyanyi.mp3');
			        iamvinz.sendMessage(from, ber, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
			}
			if (budy == 'Pale') {
					pal = fs.readFileSync('./media/dj/pale.mp3');
					iamvinz.sendMessage(from, pal, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
			}
				if (budy == 'Pota') {					
					pot = fs.readFileSync('./media/dj/pota.mp3');
					iamvinz.sendMessage(from, pot, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Welot') {					
					wel = fs.readFileSync('./media/dj/welot.mp3');
					iamvinz.sendMessage(from, wel, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}

				if (budy == 'Alay') {
					ala = fs.readFileSync('./media/dj/alay.mp3');
					iamvinz.sendMessage(from, ala, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}              			
				if (budy == 'Bwa') {				
					bwa = fs.readFileSync('./media/dj/bwa.mp3');
					iamvinz.sendMessage(from, bwa, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
			    }
				if (budy == 'Ganteng') {
					gan = fs.readFileSync('./media/dj/ganteng.mp3');
					iamvinz.sendMessage(from, gan, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Gatal') {					
					ga = fs.readFileSync('./media/dj/gatal.mp3');
					iamvinz.sendMessage(from, ga, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Ladida') {				
					lada = fs.readFileSync('./media/dj/ladadida.mp3');
					iamvinz.sendMessage(from, lada, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
                if (budy == 'Sholawat') {
					shol = fs.readFileSync('./media/dj/sholawat.mp3');
					iamvinz.sendMessage(from, shol, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
                if (budy == 'Manis') {
					manis = fs.readFileSync('./media/dj/manis.mp3');
					iamvinz.sendMessage(from, manis, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Rusher') {
					rus = fs.readFileSync('./media/dj/rusher.mp3');
					iamvinz.sendMessage(from, rus, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Boong') {
					boo = fs.readFileSync('./media/dj/tb.mp3');
					iamvinz.sendMessage(from, boo, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Tengteng') {
					teng = fs.readFileSync('./media/dj/tengteng.mp3');
					iamvinz.sendMessage(from, teng, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Gratata') {
					grata = fs.readFileSync('./media/dj/djgratata.mp3');
					iamvinz.sendMessage(from, grata, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Bermain') {
					main = fs.readFileSync('./media/dj/djbermain.mp3');
					iamvinz.sendMessage(from, main, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Kaweni') {
					wenik = fs.readFileSync('./media/dj/djkaweni.mp3');
					iamvinz.sendMessage(from, wenik, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Old') {
					oledd = fs.readFileSync('./media/dj/djold.mp3');
					iamvinz.sendMessage(from, oledd, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Sakit') {
					sakit = fs.readFileSync('./media/dj/djsakit.mp3');
					iamvinz.sendMessage(from, sakit, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == 'Zombie') {
					zmbie = fs.readFileSync('./media/dj/djzombie.mp3');
					iamvinz.sendMessage(from, zmbie, MessageType.audio, { quoted: Lan, mimetype: 'audio/mp4', ptt: true })
				}
				if (budy == '*RANDOM GIFTAWAY!*') {
					if (!isOwner) return faketrolli(`Khusus Owner Bodo`)
					if (!isGroup) return reply(nad.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `Selamat Bero Lu Menang Giftaway User *Premium*\n*@${aku.jid.split('@')[0]}* Dan *@${cintax.jid.split('@')[0]}*\n`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
				}
			if (budy == 'Iklan') {
				reply(`     [ 「 *IKLAN VINZ BOT* 」 ]
──────────────────────────────
◯ *DAFTAR SEWA & BUAT BOT :*
◯ *SEWA : 15K/GRUP (30 DAYS)*
◯      *: 40K/GRUP (PERMANEN)*
◯ *BUAT : 60k (BISA JADI OWNER+RDP BARENGAN)*
*100k (BISA JADI OWNER+RDP PRIBADI)*
◯ *PEMBAYARAN BISA MELALUI :*
◯ *GOPAY, PULSA+10K*
──────────────────────────────
◯ *KEUNTUNGAN SEWA BOT :*
◯ *1. BISA MEMASUKAN BOT KE GROUP*
◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*
◯ *KEUNTUNGAN BUAT BOT :*
◯ *1. BISA MENJADI OWNER BOT SENDIRI*
◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*
◯ *3. BISA MEMBAWA BOT KE GROUP*
◯ *4. BISA MENGGUNAKAN COMMAND OWNER*
◯ *5. BISA MENYEWAKAN BOT KEMBALI*
──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*
◯ *HARAP HUBUNGI NOMOR OWNER
──────────────────────────────
       [「 *POWERED BY VINZ BOT* 」]`)
			}
			if (budy == 'thanks') {
				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'SALLDM1') {
			iamvinz.sendMessage(from, `LIST TOPUP FREEFIRE
(Upd : 09 Mei 21)
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
List Freefire
Via ID
(STOK UNLIMITED)

(R280)
5 💎 Rp900
20 💎 Rp2.800	
50 💎 Rp6.900
70 💎 Rp9.600
100 💎 Rp14.000
140 💎 Rp19.000
100 💎 Rp27.900
355 💎 Rp48.000
425 💎 Rp56.440
500 💎 Rp66.520
720 💎 Rp93.500
860 💎 Rp112.880
1000 💎 Rp131.360
1075 💎 Rp140.
1440 💎 Rp185.800	
2000 💎 Rp253.000	
4000 💎 Rp505.000	
7290 💎 Rp925.000
M.Mingguan : Rp28.400
M.Bulanan : Rp112.300

✅ CEK TERLEBIH DAHULU PEMBAYARAN YANG AKTIF

✅ TRANSFER SESUAI HARGA - PROSES CEPAT`, MessageType.extendedText, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "1598105837@g.us" }, message: { orderMessage: { thumbnail: fs.readFileSync('./src/image/pp.jpg'),
message: 'Ngga Order Diamond Broh?',
orderTitle: 'Ichi',
sellerJid: '0@s.whatsapp.net'  }}}})
	     	}
			if (budy == '/PAYY') {
			iamvinz.sendMessage(from, `PAYMENT VIA? GOPAY, DANA, OVO DAN PULSA
NOPE? NIH...

QRIS : SCAN PP GRUP

GOPAY : 081213441767
A/N : K** G*

DANA : 083820881961
A/N :E** L***

OVO : 083820881961
A/N : E** H***

PULSA: 083820881961

NOTE: WAJIB SERTAKAN BUKTI TF`, MessageType.extendedText, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "1598105837@g.us" }, message: { orderMessage: { thumbnail: fs.readFileSync('./src/image/pp.jpg'),
message: 'Ngga Order Diamond Broh?',
orderTitle: 'Ichi',
sellerJid: '0@s.whatsapp.net'  }}}})
	     	}
			if (budy == 'SALLDM2') {
			iamvinz.sendMessage(from, `LIST DM VIPUL VIA ID

5💎 Rp3.000
12💎 Rp5.000
50💎 Rp10.000
70💎 Rp13.000
140💎 Rp24.000
355💎 Rp60.000
720💎 Rp120.000
1450💎 Rp2450.000
2180💎 Rp360.000`, MessageType.extendedText, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "1598105837@g.us" }, message: { orderMessage: { thumbnail: fs.readFileSync('./src/image/pp.jpg'),
message: 'Ngga Order Diamond Broh?',
orderTitle: 'Ichi',
sellerJid: '0@s.whatsapp.net'  }}}})
	     	}
			if (budy == 'SALLDM3') {
			iamvinz.sendMessage(from, `DROP DM FF VILOG
100    💎 : 13.000
200    💎 : 25.000
310    💎 : 37.000
520    💎 : 62.000
1060  💎 : 125.000
2180  💎 : 245.000
5600  💎 : 590.000
M.M : 25.000
M.B : 97.000
➖➖➖➖➖➖➖
NOTE :
- Log in fb/vk/gmail
- Memerlupan email dan sandi
- FB wajib authen, kalau ngga authen terus terkena sesi, maka tanggung sendiri
- Proses 10 - 30 menit
- Akun tidak boleh dimainkan
- Nominal lain tinggal dijumlahkan`, MessageType.extendedText, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "1598105837@g.us" }, message: { orderMessage: { thumbnail: fs.readFileSync('./src/image/pp.jpg'),
message: 'Ngga Order Diamond Broh?',
orderTitle: 'Ichi',
sellerJid: '0@s.whatsapp.net'  }}}})
	     	}
			if (budy == 'PROSES') {
			iamvinz.sendMessage(from, `Diamond sedang saya proses, harap menunggu dengan sabar yaa kak`, MessageType.extendedText, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "1598105837@g.us" }, message: { orderMessage: { thumbnail: fs.readFileSync('./src/image/pp.jpg'),
message: 'Ngga Order Diamond Broh?',
orderTitle: 'Ichi',
sellerJid: '0@s.whatsapp.net'  }}}})
	     	}
			if (budy == 'DONE') {
			iamvinz.sendMessage(from, `Diamond Sudah Diisi, Silahkan Di Cek Kak,`, MessageType.extendedText, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "1598105837@g.us" }, message: { orderMessage: { thumbnail: fs.readFileSync('./src/image/pp.jpg'),
message: 'Ngga Order Diamond Broh?',
orderTitle: 'Ichi',
sellerJid: '0@s.whatsapp.net'  }}}})
	     	}
			if (budy == 'Tq') {
				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'tq') {
				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
                        if (budy == 'bot') {
				reply(`Apa?Kalo Ga Sewa Bot Jan Banyak Nanya`)
			}
			if (isGroup && !isCmd && budy != undefined) {
				console.log(budy)
				//		reply(iamvinz.cmdnf(prefix, command))
			} else {
				console.log(color('[404]', 'red'), 'Unregistered Command from', color(sender.split('@')[0]))
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
