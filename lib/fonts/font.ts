import {Prata, Crimson_Text} from "next/font/google"

export const prata = Prata({
    weight: "400",
    style: "normal",
    subsets: ["latin"]
})

export const crimson = Crimson_Text({
    weight: ["400", "600"],
    subsets: ["latin"],
    style: ["italic", "normal"]
})