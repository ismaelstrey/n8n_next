const cron = require('node-cron');
const axios = require('axios');

// Executa o webhook a cada minuto
export const cronJob = async () => {
    cron.schedule('* * * * *', async () => {
        try {
            console.log('Executando o webhook...');
            const response = await axios.post('https://n8n.strey.com.br/webhook/d78059a9-5d1a-468a-9d6f-d8a98d8c8147', {
                message: 'Este é um teste do cron job'
            });
            console.log('Resposta do Webhook:', response.data);
        } catch (error: any) {
            console.error('Erro ao executar o webhook:', error.message);
        }
    });

    console.log('Cron job configurado. O webhook será executado automaticamente.');
}
