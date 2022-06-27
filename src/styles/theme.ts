import { PALETTE } from "./palette"

const defaultTheme = {
    media: {
        // 0 <= sm < 600px
        sm: 600, // 600px <= md < 1024px
        md: 1024, //   1024px <= lg < 1440px
        lg: 1440, //  1440px <= xl
    }
}

export const themes = {
    light: {
        ...defaultTheme,
        name: "light",
        colors: {
            ...PALETTE,
            text: PALETTE.BLACK_010,
            // textHint: PALETTE["gray-400"],
            // textDisabled: PALETTE["gray-600"],
            // textAlternative: PALETTE["black"],
            icon: PALETTE.BLACK_010,
        },
    },
}

export type Theme = typeof themes.light