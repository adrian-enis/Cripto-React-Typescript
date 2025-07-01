import axios from "axios"
import {  CryptoCurrenciesResponseSchema } from "../schema/crypto-schema"

// petición HTTP
export async function getCryptos(){
    const url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD"
    const {data: {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
//- Si el resultado es válido (success), retorna los datos ya tipados y limpios.

    if(result.success){
        return result.data
    }

    
}
