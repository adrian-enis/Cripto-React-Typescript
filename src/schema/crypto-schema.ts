import * as z from "zod/v4"

export const CurrencySchema = z.object({
    code:z.string(),
    name:z.string()
})