import * as z from "zod/v4"
import {CurrencySchema} from "../schema/crypto-schema"

export type Currency = z.infer<typeof CurrencySchema>