//SC BY DINZID VyL
// © BY DinzID Vyl 2022 - 2025
//JANGAN HAPUS CREDITS!! HAPUS? = GW ENC SEMUA!! 
require('./settings')
const { modul } = require('./module');
const moment = require('moment-timezone');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber, axios, yargs, _ } = modul;
const { Boom } = boom
const {
	default: XeonBotIncConnect,
	BufferJSON,
	processedMessages,
	PHONENUMBER_MCC,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	delay,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    jidDecode,
    makeCacheableSignalKeyStore,
    getAggregateVotesInPollMessage,
    proto
} = require("@whiskeysockets/baileys")
const cfonts = require('cfonts');
const { color, bgcolor } = require('./lib/color')
const { TelegraPh } = require('./lib/uploader')
const NodeCache = require("node-cache")
const canvafy = require("canvafy")
const { parsePhoneNumber } = require("libphonenumber-js")
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'))
const makeWASocket = require("@whiskeysockets/baileys").default
const Pino = require("pino")
const readline = require("readline")
const colors = require('colors')
const { start } = require('./lib/spinner')
const { uncache, nocache } = require('./lib/loader')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const prefix = '.'
let phoneNumber = "916909137213"
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
groups: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")

const useMobile = process.argv.includes("--mobile")
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const question = (text) => new Promise((resolve) => rl.question(text, resolve))
require('./DinzID.js')
nocache('../DinzID.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

async function DinzBotzInd() {
	const {  saveCreds, state } = await useMultiFileAuthState(`./${sessionName}`)
	const msgRetryCounterCache = new NodeCache()
    	const DinzBotz = XeonBotIncConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      mobile: useMobile, // mobile api (prone to bans)
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      browser: [ 'Mac OS', 'Safari', '10.15.7' ], // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
      patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
      auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
      getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "Cheems Bot Here!"
            }
        },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
if (!DinzBotz.authState.creds.registered) {
const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62 Recode :\n');
let code = await DinzBotz.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`𝙽𝙸 𝙺𝙾𝙳𝙴 𝙿𝙰𝙸𝚁𝙸𝙽𝙶 𝙻𝚄 :`, code);
}
    store.bind(DinzBotz.ev)
function _0x25af() {
    const _0x2a9ab3 = [
        'dgTJH',
        'lease\x20Clos',
        '6yPoCjq',
        'eDebN',
        '1203633953',
        '1203633957',
        'Closed',
        'Yoimiya',
        '\x20Server,\x20r',
        'blue',
        'ExUbQ',
        'starting..',
        '5727344LCZqku',
        'lease\x20Scan',
        'ications',
        'moTBC',
        '36604731@n',
        'error',
        'connection',
        'aKPiu',
        'TQjFz',
        'Replaced',
        'e\x20Session\x20',
        'ndingNotif',
        '1203634152',
        '\x20Again\x20And',
        '27036269@n',
        'yXSRq',
        'gfmmg',
        'XBJdA',
        'yqmAy',
        'DOWHB',
        '14508774DxXYfY',
        '1203634120',
        'and\x20Scan\x20A',
        'e\x20Current\x20',
        'OIdbz',
        'Session\x20Fi',
        '\x20Replaced,',
        'ason:\x20',
        'left',
        '1203634125',
        'open',
        'mYRDj',
        'true',
        'timedOut',
        '\x20Reconnect',
        'statusCode',
        'dDdvr',
        'Device\x20Log',
        'OFAqJ',
        'svJxZ',
        '14993884@n',
        '8502304naxojb',
        'oNHTL',
        '\x20Opened,\x20P',
        '15833748@n',
        '\x20TimedOut,',
        'restartReq',
        'OnNXG',
        'g....',
        'SiggE',
        'OshBc',
        'LRhVW',
        'VNZOr',
        'rst',
        'Lost',
        '1203633791',
        'blueBright',
        'say',
        '1203633892',
        'update\x20',
        'yellow',
        '1YHsenz',
        '40203585@n',
        'MNmxj',
        'newsletter',
        'NvMRP',
        'Bad\x20Sessio',
        '1982166qtvpYs',
        '1203633966',
        'Restart\x20Re',
        '\x20Another\x20N',
        'econnectin',
        'log',
        '2328774wRKNji',
        'transparen',
        '70194330@n',
        '48274213@n',
        'uired',
        '63623784@n',
        'NdNOz',
        '\x0a\x0aMenghubu',
        'eXqcn',
        'FdIBU',
        'eCeRc',
        'close',
        'hwQkn',
        'CWtSN',
        'sconnectRe',
        'eKMDH',
        '71422411@n',
        'yoKOT',
        'ing...',
        'UUfxr',
        '\x20closed,\x20r',
        'ease\x20Delet',
        '\x20Run.',
        'ew\x20Session',
        'YQmdO',
        'ngkan...',
        'n\x20File,\x20Pl',
        '09714677@n',
        'g...',
        'oTdSP',
        'PsfeH',
        '33747373@n',
        '.update',
        'quired,\x20Re',
        '578418BbJRyh',
        '1203633890',
        'block',
        'Error\x20in\x20C',
        'gain',
        'output',
        'false',
        'onnection.',
        'badSession',
        'Unknown\x20Di',
        '1203632835',
        'PXLUl',
        '1624015lETSnC',
        'receivedPe',
        '\x20Lost\x20from',
        'ged\x20Out,\x20P',
        'BbiTB',
        'Follow',
        'WHXnQ',
        'ewsletter',
        'KDkcw',
        'WqlDb',
        'hkNls',
        'connecting',
        'vhvBS',
        'loggedOut',
        'Connection'
    ];
    _0x25af = function () {
        return _0x2a9ab3;
    };
    return _0x25af();
}
const _0x3e8e1e = _0x3299;
function _0x3299(_0x3adec5, _0x3e32ad) {
    const _0x515e95 = _0x25af();
    return _0x3299 = function (_0x1679a2, _0x5bf98a) {
        _0x1679a2 = _0x1679a2 - (-0xa01 + 0x1 * 0x63b + 0x543);
        let _0x34fe24 = _0x515e95[_0x1679a2];
        return _0x34fe24;
    }, _0x3299(_0x3adec5, _0x3e32ad);
}
(function (_0x5510fe, _0x3c1d9f) {
    const _0x286851 = _0x3299, _0xfb44bb = _0x5510fe();
    while (!![]) {
        try {
            const _0xe00ef6 = -parseInt(_0x286851(0x207)) / (-0x11 * -0x1b7 + -0x1b87 + -0x1 * 0x19f) * (-parseInt(_0x286851(0x1a3)) / (-0x8db + 0x15a0 + -0xcc3)) + -parseInt(_0x286851(0x20d)) / (-0x6b5 + 0x148e + -0x2 * 0x6eb) + parseInt(_0x286851(0x1ca)) / (-0x1357 + -0xfc2 * 0x2 + -0x1 * -0x32df) + -parseInt(_0x286851(0x1af)) / (-0x1ba2 + 0x102d + 0xb7a) * (parseInt(_0x286851(0x1c0)) / (-0x1a2f * 0x1 + -0x1f * 0x1d + -0x13d * -0x18)) + -parseInt(_0x286851(0x181)) / (-0x7d1 + 0x1 * -0x75b + 0xf33) + -parseInt(_0x286851(0x1f3)) / (0x205 + 0x1 * -0x1d2e + 0x1b31) + parseInt(_0x286851(0x1de)) / (-0x367 * -0x7 + 0x97c + -0x2144);
            if (_0xe00ef6 === _0x3c1d9f)
                break;
            else
                _0xfb44bb['push'](_0xfb44bb['shift']());
        } catch (_0x116751) {
            _0xfb44bb['push'](_0xfb44bb['shift']());
        }
    }
}(_0x25af, 0x35 * 0x7c14 + 0x8cf46 + -0x9fc11 * 0x2), DinzBotz['ev']['on'](_0x3e8e1e(0x1d0) + _0x3e8e1e(0x1a1), async _0x153e4f => {
    const _0x3d0054 = _0x3e8e1e, _0x3dfc78 = {
            'WHXnQ': function (_0x1d7d7c, _0x1e65dd) {
                return _0x1d7d7c === _0x1e65dd;
            },
            'oTdSP': _0x3d0054(0x18c),
            'hkNls': function (_0x422243, _0x1c838b) {
                return _0x422243 === _0x1c838b;
            },
            'yqmAy': function (_0xc4c8f9) {
                return _0xc4c8f9();
            },
            'NdNOz': _0x3d0054(0x1bd) + _0x3d0054(0x195) + _0x3d0054(0x17f) + _0x3d0054(0x1fa),
            'CWtSN': function (_0xadaa8f) {
                return _0xadaa8f();
            },
            'NvMRP': function (_0xe8e72a, _0x222ac4) {
                return _0xe8e72a === _0x222ac4;
            },
            'TQjFz': _0x3d0054(0x1bd) + _0x3d0054(0x1b1) + _0x3d0054(0x1c6) + _0x3d0054(0x17f) + _0x3d0054(0x19d),
            'mYRDj': function (_0x29ace4, _0x4487c0) {
                return _0x29ace4 === _0x4487c0;
            },
            'SiggE': _0x3d0054(0x1bd) + _0x3d0054(0x1e4) + _0x3d0054(0x17e) + _0x3d0054(0x198) + _0x3d0054(0x1f5) + _0x3d0054(0x1bf) + _0x3d0054(0x1e1) + _0x3d0054(0x1e3) + _0x3d0054(0x1ff),
            'MNmxj': function (_0x21edc0, _0x458de2) {
                return _0x21edc0 === _0x458de2;
            },
            'BbiTB': _0x3d0054(0x17d) + _0x3d0054(0x1a2) + _0x3d0054(0x1c9) + '.',
            'svJxZ': function (_0xf11481) {
                return _0xf11481();
            },
            'YQmdO': _0x3d0054(0x1bd) + _0x3d0054(0x1f7) + _0x3d0054(0x1ec) + _0x3d0054(0x193),
            'vhvBS': function (_0x1611ea) {
                return _0x1611ea();
            },
            'eXqcn': function (_0x3101c8, _0x6ad8f8) {
                return _0x3101c8 == _0x6ad8f8;
            },
            'yXSRq': _0x3d0054(0x1ba),
            'oNHTL': function (_0x174c00, _0x495885) {
                return _0x174c00 == _0x495885;
            },
            'OFAqJ': _0x3d0054(0x1a9),
            'KDkcw': function (_0x463b83, _0xb83198, _0x5a52a1) {
                return _0x463b83(_0xb83198, _0x5a52a1);
            },
            'moTBC': _0x3d0054(0x206),
            'dgTJH': _0x3d0054(0x1e8),
            'WqlDb': _0x3d0054(0x1ea),
            'aKPiu': _0x3d0054(0x1d6) + _0x3d0054(0x1f2) + _0x3d0054(0x1b6),
            'VNZOr': _0x3d0054(0x1a4) + _0x3d0054(0x191) + _0x3d0054(0x1b6),
            'eCeRc': _0x3d0054(0x20e) + _0x3d0054(0x19c) + _0x3d0054(0x1b6),
            'LRhVW': _0x3d0054(0x20e) + _0x3d0054(0x1d8) + _0x3d0054(0x1b6),
            'FdIBU': _0x3d0054(0x1e7) + _0x3d0054(0x186) + _0x3d0054(0x1b6),
            'DOWHB': _0x3d0054(0x1c2) + _0x3d0054(0x1f6) + _0x3d0054(0x1b6),
            'OnNXG': _0x3d0054(0x1df) + _0x3d0054(0x184) + _0x3d0054(0x1b6),
            'XBJdA': _0x3d0054(0x1c3) + _0x3d0054(0x183) + _0x3d0054(0x1b6),
            'gfmmg': _0x3d0054(0x204) + _0x3d0054(0x1ce) + _0x3d0054(0x1b6),
            'OIdbz': _0x3d0054(0x201) + _0x3d0054(0x1a0) + _0x3d0054(0x1b6),
            'dDdvr': _0x3d0054(0x1ad) + _0x3d0054(0x208) + _0x3d0054(0x1b6),
            'PsfeH': function (_0x1feda0, _0x45f2ac) {
                return _0x1feda0(_0x45f2ac);
            },
            'eDebN': _0x3d0054(0x1c5),
            'PXLUl': _0x3d0054(0x1a5),
            'OshBc': _0x3d0054(0x1e6),
            'hwQkn': _0x3d0054(0x1c7),
            'ExUbQ': _0x3d0054(0x202),
            'yoKOT': _0x3d0054(0x182) + 't',
            'UUfxr': function (_0x1eedf4, _0x286310) {
                return _0x1eedf4 + _0x286310;
            },
            'eKMDH': _0x3d0054(0x1a6) + _0x3d0054(0x1aa) + _0x3d0054(0x205)
        }, {
            connection: _0x34e08e,
            lastDisconnect: _0x30659c
        } = _0x153e4f;
    try {
        if (_0x3dfc78[_0x3d0054(0x1b5)](_0x34e08e, _0x3dfc78[_0x3d0054(0x19e)])) {
            let _0x118863 = new Boom(_0x30659c?.[_0x3d0054(0x1cf)])?.[_0x3d0054(0x1a8)][_0x3d0054(0x1ed)];
            if (_0x3dfc78[_0x3d0054(0x1b9)](_0x118863, DisconnectReason[_0x3d0054(0x1ab)]))
                console[_0x3d0054(0x180)](_0x3d0054(0x20c) + _0x3d0054(0x19b) + _0x3d0054(0x196) + _0x3d0054(0x1d4) + _0x3d0054(0x1e0) + _0x3d0054(0x1a7)), _0x3dfc78[_0x3d0054(0x1dc)](DinzBotzInd);
            else {
                if (_0x3dfc78[_0x3d0054(0x1b9)](_0x118863, DisconnectReason[_0x3d0054(0x1d0) + _0x3d0054(0x1c4)]))
                    console[_0x3d0054(0x180)](_0x3dfc78[_0x3d0054(0x187)]), _0x3dfc78[_0x3d0054(0x18e)](DinzBotzInd);
                else {
                    if (_0x3dfc78[_0x3d0054(0x20b)](_0x118863, DisconnectReason[_0x3d0054(0x1d0) + _0x3d0054(0x200)]))
                        console[_0x3d0054(0x180)](_0x3dfc78[_0x3d0054(0x1d2)]), _0x3dfc78[_0x3d0054(0x1dc)](DinzBotzInd);
                    else {
                        if (_0x3dfc78[_0x3d0054(0x1e9)](_0x118863, DisconnectReason[_0x3d0054(0x1d0) + _0x3d0054(0x1d3)]))
                            console[_0x3d0054(0x180)](_0x3dfc78[_0x3d0054(0x1fb)]), _0x3dfc78[_0x3d0054(0x18e)](DinzBotzInd);
                        else {
                            if (_0x3dfc78[_0x3d0054(0x209)](_0x118863, DisconnectReason[_0x3d0054(0x1bc)]))
                                console[_0x3d0054(0x180)](_0x3d0054(0x1ef) + _0x3d0054(0x1b2) + _0x3d0054(0x1cb) + _0x3d0054(0x1d7) + _0x3d0054(0x197)), _0x3dfc78[_0x3d0054(0x18e)](DinzBotzInd);
                            else {
                                if (_0x3dfc78[_0x3d0054(0x1b9)](_0x118863, DisconnectReason[_0x3d0054(0x1f8) + _0x3d0054(0x185)]))
                                    console[_0x3d0054(0x180)](_0x3dfc78[_0x3d0054(0x1b3)]), _0x3dfc78[_0x3d0054(0x1f1)](DinzBotzInd);
                                else
                                    _0x3dfc78[_0x3d0054(0x1b9)](_0x118863, DisconnectReason[_0x3d0054(0x1eb)]) ? (console[_0x3d0054(0x180)](_0x3dfc78[_0x3d0054(0x199)]), _0x3dfc78[_0x3d0054(0x1bb)](DinzBotzInd)) : (console[_0x3d0054(0x180)](_0x3d0054(0x1ac) + _0x3d0054(0x18f) + _0x3d0054(0x1e5) + _0x118863 + '|' + _0x34e08e), _0x3dfc78[_0x3d0054(0x18e)](DinzBotzInd));
                            }
                        }
                    }
                }
            }
        }
        (_0x3dfc78[_0x3d0054(0x189)](_0x153e4f[_0x3d0054(0x1d0)], _0x3dfc78[_0x3d0054(0x1d9)]) || _0x3dfc78[_0x3d0054(0x1f4)](_0x153e4f[_0x3d0054(0x1b0) + _0x3d0054(0x1d5) + _0x3d0054(0x1cc)], _0x3dfc78[_0x3d0054(0x1f0)])) && console[_0x3d0054(0x180)](_0x3dfc78[_0x3d0054(0x1b7)](color, _0x3d0054(0x188) + _0x3d0054(0x19a), _0x3dfc78[_0x3d0054(0x1cd)]));
        if (_0x3dfc78[_0x3d0054(0x189)](_0x153e4f[_0x3d0054(0x1d0)], _0x3dfc78[_0x3d0054(0x1be)]) || _0x3dfc78[_0x3d0054(0x189)](_0x153e4f[_0x3d0054(0x1b0) + _0x3d0054(0x1d5) + _0x3d0054(0x1cc)], _0x3dfc78[_0x3d0054(0x1b8)])) {
            let _0xc7778a = [
                _0x3dfc78[_0x3d0054(0x1d1)],
                _0x3dfc78[_0x3d0054(0x1fe)],
                _0x3dfc78[_0x3d0054(0x18b)],
                _0x3dfc78[_0x3d0054(0x1fd)],
                _0x3dfc78[_0x3d0054(0x18a)],
                _0x3dfc78[_0x3d0054(0x1dd)],
                _0x3dfc78[_0x3d0054(0x1f9)],
                _0x3dfc78[_0x3d0054(0x1db)],
                _0x3dfc78[_0x3d0054(0x1da)],
                _0x3dfc78[_0x3d0054(0x1e2)],
                _0x3dfc78[_0x3d0054(0x1ee)]
            ];
            for (let _0x2f9006 of _0xc7778a) {
                await DinzBotz[_0x3d0054(0x20a) + _0x3d0054(0x1b4)](_0x2f9006);
            }
            await _0x3dfc78[_0x3d0054(0x19f)](delay, -0x2419 * -0x1 + -0x1907 + 0x5 * -0xa7), cfonts[_0x3d0054(0x203)](_0x3dfc78[_0x3d0054(0x1c1)], {
                'font': _0x3dfc78[_0x3d0054(0x1ae)],
                'align': _0x3dfc78[_0x3d0054(0x1fc)],
                'colors': [
                    _0x3dfc78[_0x3d0054(0x18d)],
                    _0x3dfc78[_0x3d0054(0x1c8)]
                ],
                'background': _0x3dfc78[_0x3d0054(0x192)],
                'maxLength': 0x14,
                'rawMode': ![]
            });
        }
    } catch (_0x140f19) {
        console[_0x3d0054(0x180)](_0x3dfc78[_0x3d0054(0x194)](_0x3dfc78[_0x3d0054(0x190)], _0x140f19)), _0x3dfc78[_0x3d0054(0x1f1)](DinzBotzInd);
    }
}));
await delay(5555) 
start('2',colors.bold.white('\n\nMenunggu Pesan Baru..'))
DinzBotz.ev.on('creds.update', await saveCreds)
    DinzBotz.ev.on('call', async (XeonPapa) => {
    let botNumber = await DinzBotz.decodeJid(DinzBotz.user.id)
    let XeonBotNum = db.settings[botNumber].anticall
    if (!XeonBotNum) return
    console.log(XeonPapa)
    for (let XeonFucks of XeonPapa) {
    if (XeonFucks.isGroup == false) {
    if (XeonFucks.status == "offer") {
    let XeonBlokMsg = await DinzBotz.sendTextWithMentions(XeonFucks.from, `*${DinzBotz.user.name}* can't receive ${XeonFucks.isVideo ? `video` : `voice` } call. Sorry @${XeonFucks.from.split('@')[0]} you will be blocked. If accidentally please contact the owner to be unblocked !`)
    DinzBotz.sendContact(XeonFucks.from, global.owner, XeonBlokMsg)
    await sleep(8000)
    await DinzBotz.updateBlockStatus(XeonFucks.from, "block")
    }
    }
    }
    })
DinzBotz.ev.on("messages.upsert", async (chatUpdate) => {
  try {
    mek = chatUpdate.messages[0];
    if (!mek.message) return;
    mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
    if (mek.key && mek.key.remoteJid === "status@broadcast") {
      await DinzBotz.readMessages([mek.key]);
      const maxTime = 5 * 60 * 1000; 
      const currentTime = Date.now();
      const messageTime = mek.messageTimestamp * 1000;
      const timeDiff = currentTime - messageTime;
      if (timeDiff <= maxTime) {
        const emojis = ["😱", "😹", "😂"];
        // COSTUM EMOJI CONTOH [" 😹", "😔"]
        const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
        const randomEmoji = getRandomEmoji();
        try {
          await DinzBotz.sendMessage("status@broadcast", {
            react: { text: randomEmoji, key: mek.key },
          }, { statusJidList: [mek.key.participant] });
          console.log(`Berhasil memberi reaksi pada status dari ${mek.pushName || mek.key.participant}`);
        } catch (error) {
          console.error('Gagal memberi reaksi ke status', error);
        }
      }
    }
    if (!DinzBotz.public && !mek.key.fromMe && chatUpdate.type === "notify") return;
    if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) return;
    m = smsg(DinzBotz, mek, store);
    require("./DinzID")(DinzBotz, m, chatUpdate, store);
  } catch (err) {
    console.log(err);
  }
});

    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Dinz Bot Ada Di Sini"
        }
    }
    DinzBotz.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && !key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                DinzBotz.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

DinzBotz.sendTextWithMentions = async (jid, text, quoted, options = {}) => DinzBotz.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

DinzBotz.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

DinzBotz.ev.on('contacts.update', update => {
for (let contact of update) {
let id = DinzBotz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

DinzBotz.getName = (jid, withoutContact  = false) => {
id = DinzBotz.decodeJid(jid)
withoutContact = DinzBotz.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = DinzBotz.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === DinzBotz.decodeJid(DinzBotz.user.id) ?
DinzBotz.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

DinzBotz.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

DinzBotz.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await DinzBotz.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await DinzBotz.getName(i)}\nFN:${await DinzBotz.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	DinzBotz.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

DinzBotz.setStatus = (status) => {
DinzBotz.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

DinzBotz.public = true

DinzBotz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await DinzBotz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

DinzBotz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await DinzBotz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

DinzBotz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await DinzBotz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

DinzBotz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await DinzBotz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

DinzBotz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

DinzBotz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

DinzBotz.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

DinzBotz.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await DinzBotz.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await DinzBotz.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

DinzBotz.sendText = (jid, text, quoted = '', options) => DinzBotz.sendMessage(jid, { text: text, ...options }, { quoted })

DinzBotz.serializeM = (m) => smsg(DinzBotz, m, store)

DinzBotz.before = (teks) => smsg(DinzBotz, m, store)

DinzBotz.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
DinzBotz.sendMessage(jid, buttonMessage, { quoted, ...options })
}

DinzBotz.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: DinzBotz.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return DinzBotz.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

DinzBotz.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
DinzBotz.relayMessage(jid, template.message, { messageId: template.key.id })
}
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name]: name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query, ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name]: name]
    }: {})
})): '')

DinzBotz.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
DinzBotz.sendMessage(jid, fjejfjjjer, { quoted: m })
}

            /**
             * Send Media/File with Automatic Type Specifier
             * @param {String} jid
             * @param {String|Buffer} path
             * @param {String} filename
             * @param {String} caption
             * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
             * @param {Boolean} ptt
             * @param {Object} options
             */
DinzBotz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await DinzBotz.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await DinzBotz.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await DinzBotz.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

DinzBotz.ev.on('group-participants.update', async (anu) => {
if (global.wlcm){
console.log(anu)
try {
let metadata = await DinzBotz.groupMetadata(anu.id)
let participants = anu.participants
let jumpahMem = metadata.participants.length
for (let num of participants) {
try {
ppuser = await DinzBotz.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await DinzBotz.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
memb = metadata.participants.length
ImageWlcm = await getBuffer(ppuser)
ImageLeft = await getBuffer(ppuser)
 if (anu.action == 'add') {
  const canWel = await new canvafy.WelcomeLeave()
    .setAvatar(ImageWlcm)
    .setBackground("image", "https://img2.teletype.in/files/1b/5f/1b5f0a94-4daf-4354-8239-53006bab1b80.jpeg")
    .setTitle("Welcome")
    .setDescription(`selamat datang kak`)
    .setBorder("#2a2e35")
    .setAvatarBorder("#2a2e35")
    .setOverlayOpacity(0.5)
    .build();
let xnxx = canWel
const xmembers = metadata.participants.length
lilybody = `Hii @${num.split("@")[0]}👋\nWelcome to ${metadata.subject}

┌─┉─ • ─┉─  ── .✦
│𝘄𝗲𝗹𝗹𝗰𝝾𝗺𝗲 𝗻𝗲𝘄 𝗺𝗲𝗺, 𝗶𝗻𝘁𝗿𝝾 𝗱𝘂𝗹𝘂 𝘆𝘂𝗸! 
│𝗻𝝰𝗺𝝰 :
│𝝰𝘀𝗸𝝾𝘁 :
│𝘂𝗺𝘂𝗿 :
│𝗺𝝰𝗸𝝰𝘀𝗶𝗵 𝘂𝗱𝝰𝗵 𝗶𝗻𝘁𝗿𝝾 ૮₍꜆꜄ ˃ ³ ˂ ₎ა 
└─┉─¡! • !¡─┉─ ── .✦`

DinzBotz.sendMessage(anu.id,
 { text: lilybody,
 contextInfo:{
 mentionedJid:[num],
      externalAdReply: {
                title: 'W E L C O M E',
                body: 'DinzID Chx',
                thumbnail: xnxx,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
           }
       }
   }
)                
 } else if (anu.action == 'remove') {
   const canWel = await new canvafy.WelcomeLeave()
    .setAvatar(ImageLeft)
    .setBackground("image", "https://img1.teletype.in/files/80/37/8037ce95-98c9-41fc-90d6-23d0cc166dec.jpeg")
    .setTitle("Goodbye")
    .setDescription(`Bye Member Ke-${jumpahMem}`)
    .setBorder("#2a2e35")
    .setAvatarBorder("#2a2e35")
    .setOverlayOpacity(0.5)
    .build();
let pornhub = canWel
 ngawibody = `Sayonara @${num.split("@")[0]} 👋`
DinzBotz.sendMessage(anu.id,
 { text: ngawibody,
 contextInfo:{
 mentionedJid:[num],
      externalAdReply: {
                title: 'G O O D B Y E',
                body: 'DinzID Chx',
                thumbnail: pornhub,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
           }
       }
   }
)                
}
}
} catch (err) {
console.log(err)
}
}
})

DinzBotz.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return DinzBotz.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return DinzBotz.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return DinzBotz.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return DinzBotz.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return DinzBotz.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      
      /**
     * 
     * @param {*} jid 
     * @param {*} name 
     * @param [*] values 
     * @returns 
     */
    DinzBotz.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return DinzBotz.sendMessage(jid, { poll: { name, values, selectableCount }}) }

return DinzBotz

}

DinzBotzInd()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
