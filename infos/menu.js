const menu = (prefixo, usu, id) => {
return `
═══════════════════════════
🎉 Olá @${usu}, Seu ID: ${id}, bem-vindo(a) ao meu menu! 🎉
═══════════════════════════

🎵 Comando para baixar do YouTube 🎵
🎥 ${prefixo}play <nome_da_música ou Link> 
Escolha entre Vídeo ou Áudio.

📱 Comandos para Redes Sociais 📱
📸 ${prefixo}instagram <url_do_vídeo>
🐦 ${prefixo}twitter <url_do_vídeo>
📘 ${prefixo}facebook <url_do_vídeo>
🕺 ${prefixo}tiktok <url_do_vídeo>

Divirta-se com músicas, vídeos e redes sociais! 🎶🎥💬

******************************

🛠️ Comandos para Administradores 👨🏻‍💻
🚫 ${prefixo}ban (marque a mensagem do usuário)
🔑 ${prefixo}antilink (para ativar/desativar)

******************************

🎡 Diversão com comandos/ações 🎢

« Faço apenas figurinhas em vídeos.
Comando: ${prefixo}sticker 
Marque um vídeo com o comando, desde que seja curto.

« Faça figurinha com texto colorido,
use por exemplo: ${prefixo}attp Aleatory

« Ative a conversar informal com o bot, use: ${prefixo}simi

Ações sem prefixo: 

adeus > Personagem se despedindo.
mate geral > Personagem com uma metralhadora.
palmas > Personagem batendo palmas.
aleatory > Faça uma pergunta sobre qualquer coisa.

******************************

🔍 Informações 📊

Comando ${prefixo}ping 

Usado para verificar o tempo de atividade e a velocidade de resposta.

📲 Comando para obter as especificações de um celular:
Exemplo: ${prefixo}celular Galaxy A9
Pode usar qualquer marca de celular.

******************************
`;
}

module.exports = {
menu
};
