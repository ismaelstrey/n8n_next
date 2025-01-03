import { NextResponse } from "next/server";

export async function GET() {
    console.log('Executando GET');
    return NextResponse.json({ success: true, message: 'Executando GET', statusCode: 200 }, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    });

}
