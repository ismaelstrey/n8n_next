import { NextResponse } from "next/server";
import cron from "node-cron";
import axios from "axios";


// Executa o webhook a cada minuto
async function cronJob(): Promise<void> {
    cron.schedule('* * * * *', async () => {
        try {
            console.log('Executando o webhook...');
            const response = await axios.post('https://n8n.strey.com.br/webhook/d78059a9-5d1a-468a-9d6f-d8a98d8c8147', {
                message: 'Este é um teste do cron job'
            });
            console.log('Resposta do Webhook:', response.data);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('Erro ao executar o webhook:', error.message);
            } else {
                console.error('Erro desconhecido:', error);
            }
        }
    });

    console.log('Cron job configurado. O webhook será executado automaticamente.');
}


export async function GET() {
    console.log('Executando GET');
    await cronJob()
    NextResponse.json({ message: 'Hello, World!', statusCode: 200 });

}
