import {createContext} from 'react'
import {languageOptions, dictionaryList} from '../languages'

export const LanguageContext = createContext({
  language: languageOptions[0],
  dictionary: dictionaryList[languageOptions[0].id],
})
