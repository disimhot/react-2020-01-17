import React, {useState, useContext} from 'react'
import {LanguageContext} from '../contexts/language'
import {dictionaryList} from '../languages'

export function LanguageProvider(props) {
  const languageContext = useContext(LanguageContext)
  const [language, setLanguage] = useState(languageContext.language)
  const [dictionary, setDictionary] = useState(languageContext.dictionary)

  const provider = {
    language,
    dictionary,
    handleLangChange: language => {
      setLanguage(language)
      setDictionary(dictionaryList[language.id])
    },
  }

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  )
}
