import axios from "axios"
import {  CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema"
import type { Pair } from "../types"
import { ur } from "zod/v4/locales"

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


export async function fetchCurrencyCryptoPrice(pair:Pair){
    // const url = `https://min-api.cryptocompare.com/data/price?fsym=${pair.criptoCurrency}&tsyms=${pair.currency},JPY,EUR`
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptoCurrency}&tsyms=${pair.currency},JPY,EUR`
    
    const {data: {DISPLAY}} = await axios(url);
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptoCurrency][pair.currency]);
    if(result.success){
        return result.data
    }
}
