import localFont from "next/font/local";

export const mixfonts = localFont({
    src: [
        {
            path: './NotoSansSC-VariableFont_wght.ttf',
            weight: '100 900',
            style: 'normal',
        },
        {
            path: './Raleway-VariableFont_wght.ttf',
            weight: '100 900',
            style: 'normal',
        },


    ],
    variable: '--font-family'
})