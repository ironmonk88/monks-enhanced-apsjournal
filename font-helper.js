export class MEJFontHelper {
    static loadFonts() {
        FontConfig.loadFont('Anglo Text', {
            editor: true,
            fonts: [
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/anglotext-webfont.woff2',
                    ],
                },
            ],
        });

        FontConfig.loadFont('Bookinsanity', {
            editor: true,
            fonts: [
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/Bookinsanity/Bookinsanity.otf',
                    ],
                },
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/Bookinsanity/BookinsanityBold.otf',
                    ],
                    weight: 700,
                },
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/Bookinsanity/BookinsanityBoldItalic.otf',
                    ],
                    weight: 700,
                    style: 'italic',
                },
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/Bookinsanity/BookinsanityItalic.otf',
                    ],
                    style: 'italic',
                },
            ],
        });

        FontConfig.loadFont('DungeonDropCase', {
            editor: true,
            fonts: [
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/DungeonDropCase/DungeonDropCase.otf',
                    ],
                },
            ],
        });

        FontConfig.loadFont('Lovers Quarrel', {
            editor: true,
            fonts: [
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/loversquarrel-regular-webfont.woff2',
                    ],
                },
            ],
        });

        FontConfig.loadFont('Montserrat', {
            editor: true,
            fonts: [
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/Montserrat-Regular.woff2',
                    ],
                },
            ],
        });

        FontConfig.loadFont('MrEaves', {
            editor: true,
            fonts: [
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/MrEaves/MrEaves.otf',
                    ],
                },
            ],
        });

        FontConfig.loadFont('Play', {
            editor: true,
            fonts: [
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/Play-Regular.woff2',
                    ],
                },
            ],
        });

        FontConfig.loadFont('ScalySans', {
            editor: true,
            fonts: [
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/ScalySans/ScalySans.otf',
                    ],
                },
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/ScalySans/ScalySansBold.otf',
                    ],
                    weight: 700,
                },
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/ScalySans/ScalySansBoldItalic.otf',
                    ],
                    weight: 700,
                    style: 'italic',
                },
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/ScalySans/ScalySansItalic.otf',
                    ],
                    style: 'italic',
                },
            ],
        });

        FontConfig.loadFont('ScalySansCaps', {
            editor: true,
            fonts: [
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/ScalySans/ScalySansCaps.otf',
                    ],
                },
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/ScalySans/ScalySansCapsBold.otf',
                    ],
                    weight: 700,
                },
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/ScalySans/ScalySansCapsBoldItalic.otf',
                    ],
                    style: 'italic',
                    weight: 700,
                },
                {
                    urls: [
                        'modules/monks-enhanced-journal/fonts/ScalySans/ScalySansCapsItalic.otf',
                    ],
                    style: 'italic',
                },
            ],
        });
    }
}