import { optional } from "zod/v4"
import { currencies } from "../data/index"
import { useCryptoStore } from "../store"
import { useState } from "react"
import type { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"


export default function CriptoSearchForm() {

  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)
  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptoCurrency:""
  })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit  = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(pair).includes("")){
      setError("!Todos los campos son obligatorios¡")
      return
    }

    setError("")
  }
  return (
    <form 
    className='form'
    onSubmit={handleSubmit}>
      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
        <div className='field'>
            <label htmlFor="currency">Moneda:</label>
            <select 
            name="currency" 
            id="currency"
            onChange={handleChange}
            value={pair.currency}
            >
                <option value="">-- Seleccione --</option>
                  {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>

        <div className='field'>
            <label htmlFor="criptoCurrency">Criptomoneda:</label>
            <select 
            name="criptoCurrency" 
            id="criptoCurrency"
            onChange={handleChange}
            value={pair.criptoCurrency}
            >
                <option value="">-- Seleccione --</option>
              {cryptoCurrencies.map((crypto) => (
                <option
                key={crypto.CoinInfo.FullName}
                value={crypto.CoinInfo.Name}
                >{crypto.CoinInfo.FullName}</option>
              ))}
            </select>
        </div>
        <input type="submit" value="cotizar" />

    </form>
  )
}
