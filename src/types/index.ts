import * as z from "zod/v4"
import {CurrencySchema, CryptoCurrencyResponseSchema} from "../schema/crypto-schema"

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>