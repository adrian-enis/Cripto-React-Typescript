import { useEffect, useMemo } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"


function App() {
  //Funcion para ACCEDER A la store y actulizar los datos del state
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  useEffect(() => {
    fetchCryptos()
  }, [])

  const result = useCryptoStore((state) => state.result);
    const hasResult = useMemo(() => !Object.values(result).includes(""),[result]);
//     const hasResult = useMemo(() => {
//   const values = Object.values(result);
//   return values.length > 0 && values.every((val) => val !== "");
// }, [result]);
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm/>
          {hasResult &&(<CryptoPriceDisplay result={result}/>)}
         
        </div>
      </div>
    </>                            
  )
}

export default App
