import i18n from 'i18next'

import  enJson from "./translations/en.json"
import frJson from "./translations/fr.json"
import ptBRJson from "./translations/ptBR.json"
import chJson from "./translations/ch.json"
import rsJson from "./translations/rs.json"
import spaJson from "./translations/spa.json"
import arabeJson from "./translations/arabe.json"

import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: enJson,
        fr: frJson,
        ptBR: ptBRJson,
        ch: chJson,
        rs: rsJson,
        spa: spaJson,
        arabe: arabeJson,

        }
})

export default i18n