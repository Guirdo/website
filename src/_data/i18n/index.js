const themes = require('./themes.json')
const hero = require('./hero.json')
const social = require('./social.json')

module.exports = {
  themes,
  hero,
  social,
  es: {
    'es':'Español',
    'en':'Spanish'
  },
  en: {
    'es':'Inglés',
    'en':'English'
  },
  madeWith: {
    'es':'Hecho con ❤️ por {{ name }}',
    'en':'Made with ❤️ by {{ name }}',
  },
  currentLang: {
    'es':'Idioma actual',
    'en':'Current language'
  },
  about: {
    'es':'Sobre mi',
    'en':'About me'
  },
  projects: {
    'es':'Proyectos',
    'en':'Projects'
  },
  contact: {
    'es':'Contacto',
    'en':'Contact'
  },
  translateToLang: {
    'es':'Traducir al',
    'en':'Translate to'
  }
}