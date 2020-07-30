import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export default function fontIcons() {
  library.add(faFontAwesome)

  library.add(faUserSecret)

  library.add(faFacebookSquare)
}

