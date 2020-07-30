import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function fontIcons() {
  library.add(faLinkedin,faTwitterSquare)

  library.add(faInstagramSquare)

  library.add(faGithubSquare)
}

