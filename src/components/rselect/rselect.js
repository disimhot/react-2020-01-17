import React, {Component} from 'react'
import {languageOptions} from '../../languages'
import {LanguageContext} from '../../contexts/language'

class RSelect extends Component {
  state = {
    languageValue: '',
  }

  setLanguage = ({target: {value}}) => {
    this.setState({
      languageValue: value,
    })
  }

  render() {
    const options = languageOptions.map(data => (
      <option key={data.id} value={data.id}>
        {data.name}
      </option>
    ))
    return (
      <LanguageContext.Consumer>
        {({language, handleLangChange}) => (
          <select
            name="customSearch"
            className="custom-search-select"
            value={language.id}
            onChange={event => {
              this.setLanguage(event)
              const selectedLanguage = languageOptions.find(
                item => item.id === event.target.value
              )
              handleLangChange(selectedLanguage)
            }}
          >
            {options}
          </select>
        )}
      </LanguageContext.Consumer>
    )
  }
}

export default RSelect
