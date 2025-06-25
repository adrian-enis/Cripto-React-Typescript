import {create} from "zustand"


export const useCryptoStore = create(() => ({
    fetchCrypto: () => {
        console.log("Desde UseCrypto")
    }
})) 