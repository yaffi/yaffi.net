const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        trueGray: colors.trueGray,
        gray: colors.gray,
      },
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
      },
      animation: {
          'gradient-x':'gradient-x 5s ease infinite',
          'gradient-y':'gradient-y 5s ease infinite',
          'gradient-xy':'gradient-xy 5s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'center top'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: colors.trueGray[200],
            maxWidth: '100%',
            '[class~="lead"]': {
              color: colors.trueGray[300]
            },
            a: {
              color: colors.trueGray[100],
              textDecoration: 'underline',
              fontWeight: '500',
            },
            strong: {
              color: colors.fuchsia[600],
              fontWeight: '600',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A s"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a s"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I s"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i s"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
            },
            'ol > li::before': {
              content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: 'absolute',
              fontWeight: '400',
              color: colors.amber[400],
            },
            'ul > li': {
              position: 'relative',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: colors.amber[400],
              borderRadius: '50%',
            },
            hr: {
              borderColor: colors.amber[400],
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: colors.trueGray[500],
              borderLeftWidth: '0.25rem',
              borderLeftColor: colors.trueGray[500],
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote',
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote',
            },
            h1: {
              color: colors.trueGray[200],
              fontWeight: '800',
              paddingLeft: '1rem',
              borderLeft: `solid 10px ${colors.amber[400]}`,
            },
            h2: {
              color: colors.trueGray[200],
              fontWeight: '700',
            },
            h3: {
              color: colors.trueGray[200],
              fontWeight: '600',
            },
            h4: {
              color: colors.trueGray[200],
              fontWeight: '600',
            },
            'figure figcaption': {
              color: colors.trueGray[600],
            },
            code: {
              color: colors.trueGray[200],
              fontWeight: '600',
            },
            'code::before': {
              content: '"`"',
            },
            'code::after': {
              content: '"`"',
            },
            'a code': {
              color: colors.fuchsia[800],
            },
            pre: {
              color: colors.trueGray[200],
              backgroundColor: colors.trueGray[800],
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: '400',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'pre code::before': {
              content: 'none',
            },
            'pre code::after': {
              content: 'none',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
            },
            thead: {
              color: colors.fuchsia[800],
              fontWeight: '600',
              borderBottomWidth: '1px',
              borderBottomColor: colors.trueGray[200],
            },
            'thead th': {
              verticalAlign: 'bottom',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: colors.trueGray[200],
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'top',
            },
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}