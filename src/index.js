import Pager from 'component/Pager'
import Select from 'component/Select'

const VueStrap = function (Vue, options = {}) {
  Vue.component(genName(options, 'pager'), Pager)
  Vue.component(genName(options, 'select'), Select)
}

function genName ({prefix, caseType}, names) {
  let name = ''
  if (!Array.isArray(names)) {
    names = [names]
  }
  switch (caseType) {
    case 'kebab-case':
      name = names.join('-')
      if (prefix) {
        name = prefix + '-' + name
      }
      break
    case 'camelCase':
      if (prefix) {
        name = prefix + capitalizeArray(names)
      } else {
        name = names[0] + capitalizeArray(names.slice(1))
      }
      break
    case 'TitleCase':
    default:
      name = capitalizeArray(names)
      if (prefix) {
        name = prefix + name
      }
      break
  }
  return name
}

function capitalizeArray (arr) {
  return arr.map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }).join('')
}

export default VueStrap
