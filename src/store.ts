import {create} from "zustand"
import { devtools } from "zustand/middleware"
import type { CryptoCurrency, CryptoPrice, Pair } from "./types"
import { getCryptos, fetchCurrencyCryptoPrice } from "./services/CryptoServices"


// Tipo del store

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    result: CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchData: (pair:Pair) => Promise<void>
}


// Creacion del Store con Zustand

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({

    cryptoCurrencies: [],       // Estado Inicial de Las cryptos
    result: {} as CryptoPrice,  // Estado donde se almacenan los resultados de las cryptos
    //  función para actualizar el store
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        // Para actualizar el estado
        set(() => ({
            cryptoCurrencies 
        }))
    },

    //LLamado a la api
    fetchData: async (pair) => {
      const result = await fetchCurrencyCryptoPrice(pair)
      set(() => ({
        result
      }))
    }
}))) 