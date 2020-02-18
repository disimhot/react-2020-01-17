import React, {useContext} from 'react'

import {LanguageContext} from '../../contexts/language'

export default function Text(props) {
  const languageContext = useContext(LanguageContext)
  return languageContext.dictionary[props.name]
}
