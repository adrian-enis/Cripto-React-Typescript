
import type { CryptoPrice } from "../types";

type resultProp = {
    result:CryptoPrice
}

export default function CryptoPriceDisplay({result}:resultProp) {
  

  return (
    <div className="result-wrapper">
      <h2>Cotizacion</h2>
      <div className="result">
        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen de criptomoneda" />
        <div>
          <p>
            El precio es de: <span>{result.PRICE}</span>
          </p>
          <p>
            El precio mas alto del dia: <span>{result.HIGHDAY}</span>
          </p>
          <p>
            El precio mas bajo del dia: <span>{result.LOWDAY}</span>
          </p>
          <p> 
            El precio en las ultimas 24horas <span>{result.CHANGE24HOUR}</span>
          </p>
          <p>
            El precio de ultima actualizacion <span>{result.LASTUPDATE}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
