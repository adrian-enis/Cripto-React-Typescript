import {create} from "zustand"
import axios from "axios"
import {  CryptoCurrenciesResponseSchema } from "./schema/crypto-schema"
import type { CryptoCurrency } from "./types"


// Tipo del store

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>

}

// petición HTTP
async function getCryptos(){
    const url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD"
    const {data: {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
//- Si el resultado es válido (success), retorna los datos ya tipados y limpios.

    if(result.success){
        return result.data
    }
}

// Creacion del Store con Zustand

export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptoCurrencies: [],
    //  función para actualizar el store
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        // Para actualizar el estado
        set(() => ({
            cryptoCurrencies 
        }))
    }
})) 