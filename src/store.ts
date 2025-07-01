import {create} from "zustand"
import { devtools } from "zustand/middleware"
import type { CryptoCurrency } from "./types"
import { getCryptos } from "./services/CryptoServices"


// Tipo del store

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>

}


// Creacion del Store con Zustand

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    //  función para actualizar el store
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        // Para actualizar el estado
        set(() => ({
            cryptoCurrencies 
        }))
    }
}))) 