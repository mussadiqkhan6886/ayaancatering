import {Prata, Inter_Tight} from "next/font/google"

export const prata = Prata({
    weight: "400",
    style: "normal",
    subsets: ["latin"]
})

export const crimson = Inter_Tight({
    weight: ["100","200","300","400", "600"],
    subsets: ["latin"],
    style: ["italic", "normal"]
})