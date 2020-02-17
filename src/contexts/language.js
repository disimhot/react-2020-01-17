import {createContext} from 'react'
import {languageOptions, dictionaryList} from '../languages'

export const {Provider, Consumer} = createContext({
  language: languageOptions[0],
  dictionary: dictionaryList[languageOptions[0]],
})
