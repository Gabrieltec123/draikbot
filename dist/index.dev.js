"use strict";

require('dotenv').config();

var fs = require("fs");

var qrcode = require("qrcode-terminal");

var _require = require("whatsapp-web.js"),
    Client = _require.Client; // Path where the session data will be stored


var SESSION_FILE_PATH = "./session.json"; // Environment variables

var country_code = process.env.COUNTRY_CODE;
var number = process.env.NUMBER;
var msg = process.env.MSG; // Load the session data if it has been previously saved

var sessionData;

if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionData = require(SESSION_FILE_PATH);
}

var client = new Client({
  session: sessionData
});
client.initialize();
client.on("qr", function (qr) {
  qrcode.generate(qr, {
    small: true
  });
}); // Save session values to the file upon successful auth

client.on("authenticated", function (session) {
  sessionData = session;
  fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
    if (err) {
      console.error(err);
    }
  });
});
client.on("auth_failure", function (msg) {
  // Fired if session restore was unsuccessfull
  console.error('AUTHENTICATION FAILURE', msg);
});
client.on("ready", function () {
  console.log("Client is ready!");
  setTimeout(function () {
    var chatId = "".concat(country_code).concat(number, "@c.us");
    client.sendMessage(chatId, msg).then(function (response) {
      if (response.id.fromMe) {
        console.log("It works!");
      }
    });
  }, 5000);
});
client.on('message', function (message) {
  if (message.body === 'Hola soy nuevo') {
    message.reply('Hola bienvenido a este pequeño grupo  Bienvenido A 🄺🄽🄾🅆🄻🄴🄳🄶🄴 🅂🅀🅄🄰🄳 𝕓𝕪 𝕘𝕒𝕓𝕣𝕚𝕖𝕝𝕥𝕖𝕔 ⛔️Reglas⛔️ 🔰Cosas permitidas🔰 ✅Archivos a importar de vpns  ✅Cuentas vps ✅Preguntas ✅Soluciones ✅Enlaces para ayudar sobre el tema ✅Apss y videojuegos que no sean dañinos ✅Fotos ✅Videos ✅Información confirmada ❌Prohibido❌ 🔞Porno 🔞Gore 📵Links maliciosos o spam ⛔️Bots que no son hechos por el administrador ⛔️virus ⛔️Faltar el respeto a cualquier integrante  ⛔️Difundir información no confirmada ⛔️No ser muy básico con los temas de valores de un ciudadano , si quieres ma informacion envia ¨.info¨');
  }
});
client.on('message', function (message) {
  if (message.body === '.info') {
    message.reply('Canales de YouTube:https://www.youtube.com/channel/UCu7WGiTqMzWiYhLaYiag2Ow?sub_confirmation=1 https://www.youtube.com/channel/UC3rOTLLUTwtzTD2twkrObbQ?sub_confirmation=1 Grupo de WhatsApp:https://chat.whatsapp.com/KSnkPHPetNl312H8vXLXHG Canal de Telegram: https://t.me/tecnologia321 Grupo de Telegram: https://t.me/technologyga Blogs:https://gabrieltec735.blogspot.com/ https://cursonetfreegratis.blogspot.com/ como tener internet gratis: https://www.youtube.com/watch?v=mUYsBnMFFBU&t=4s apk para obtener cuentas vps gratuitas:https://www.mediafire.com/file/kekzkm7xjsf9oyx/Live_Your_Life_.apk/file http inyector : https://play.google.com/store/apps/details?id=com.evozi.injector&hl=es_PE&gl=US v2ray plugin for http inyector: https://play.google.com/store/apps/details?id=com.evozi.injector.plugin.v2ray&hl=es_PE&gl=US KPNTunnel Revolution: https://play.google.com/store/apps/details?id=kpn.soft.dev.kpnrevolution&hl=es_PE&gl=US http custom: https://play.google.com/store/apps/details?id=xyz.easypro.httpcustom&hl=es&gl=USHa Tunnel plus : https://play.google.com/store/apps/details?id=com.hatunnel.plus&hl=es_PE&gl=US Usa .cuentasdisney para obtener cuentas de disney plus disponibles .    Usa  ');
  }
});
client.on('message', function (message) {
  if (message.body === '.cuentasdisney') {
    message.reply('correo:ihagenesk_m711z@kucix.com        contraseña:Ghdnew56GH                 correo:dejuan41i_f644g@fuluj.com          contraseña:NiHht3lld9     correo:ucronins_v972c@fuluj.com            contraseña:asggsba5awf    ');
  }
});