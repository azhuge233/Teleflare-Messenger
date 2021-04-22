const OPT = {
  BotToken: '', // Telegram Bot Token
  ChatID:'', // User ChatID
  ParseMode: 'markdownv2' //keep blank, html, markdown or markdownv2
}
 
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
 
async function handleRequest(request) {
  let url = new URL(request.url);

  let title = url.searchParams.get('title')||'Telegram Bot Notification';
  let msg = url.searchParams.get('msg')||'Add msg parameter to send customized message';
 
  if(msg.errcode){
    return new Response(JSON.stringify(msg), {
      status: 200, 
      headers:{
        'content-type':'application/json; charset=UTF-8'
      }
    })
  }
 
  return await sendMessage(title, msg);
}

async function sendMessage(title, msg){
  let url = "https://api.telegram.org/";
  url += "bot" + OPT.BotToken + "/sendMessage?";
  url += "chat_id=" + OPT.ChatID + "&";
  url += "parse_mode=" + OPT.ParseMode + "&";
  url += "text=*" + title + "*%0A%0A";
  url += msg;
  
  return fetch(url ,{
    method:'get',
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;',
      'Accept-Encoding': 'gzip, deflate, br',
      'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
    }
  });
}