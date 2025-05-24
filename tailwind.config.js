/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.7rem', { lineHeight: '1rem' }], // 11.2px
                sm: ['0.8125rem', { lineHeight: '1.25rem' }], // 13px
                base: ['0.9375rem', { lineHeight: '1.5rem' }], // 15px
                lg: ['1.0625rem', { lineHeight: '1.75rem' }], // 17px
                xl: ['1.1875rem', { lineHeight: '1.75rem' }], // 19px
                '2xl': ['1.4375rem', { lineHeight: '2rem' }], // 23px
                '3xl': ['1.75rem', { lineHeight: '2.25rem' }], // 28px
                '4xl': ['2.125rem', { lineHeight: '2.5rem' }], // 34px
                '5xl': ['2.875rem', { lineHeight: '1' }], // 46px
                '6xl': ['3.5rem', { lineHeight: '1' }], // 56px
                '7xl': ['4.25rem', { lineHeight: '1' }], // 68px
                '8xl': ['5.75rem', { lineHeight: '1' }], // 92px
                '9xl': ['7.625rem', { lineHeight: '1' }], // 122px
                // Desktop sizes (md and up) - revert to original Tailwind defaults
                'md:xs': ['0.75rem', { lineHeight: '1rem' }],
                'md:sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'md:base': ['1rem', { lineHeight: '1.5rem' }],
                'md:lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'md:xl': ['1.25rem', { lineHeight: '1.75rem' }],
                'md:2xl': ['1.5rem', { lineHeight: '2rem' }],
                'md:3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                'md:4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                'md:5xl': ['3rem', { lineHeight: '1' }],
                'md:6xl': ['3.75rem', { lineHeight: '1' }],
                'md:7xl': ['4.5rem', { lineHeight: '1' }],
                'md:8xl': ['6rem', { lineHeight: '1' }],
                'md:9xl': ['8rem', { lineHeight: '1' }],
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};