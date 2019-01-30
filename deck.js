import Intro from './sections/01-intro.mdx'
import SSR from './sections/02-ssr.mdx'
import CodeSplitting from './sections/03-route-code-splitting.mdx'
import ModernAPIs from './sections/04-modern-apis.mdx'
import PerfTechniques from './sections/05-performance-techniques.mdx'
import WrapUp from './sections/99-wrap-up.mdx'

import './fonts/Webfonts/futurapt_book_macroman/stylesheet.css'
import './fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css'
import './fonts/Webfonts/futurapt_demi_macroman/stylesheet.css'
import './fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css'
import 'typeface-space-mono'
import 'typeface-spectral'

export { default as theme } from 'gatsby-mdx-theme'

export default [
  ...Intro,
  ...SSR,
  ...CodeSplitting,
  ...ModernAPIs,
  ...PerfTechniques,
  ...WrapUp
]
