import React, {Component} from 'react'
import {languageOptions} from '../../languages'
import {Consumer as LangConsumer} from '../../contexts/language'

class RSelect extends Component {
  handleChange = event => {
    this.props.onSelectChange(event.target.value)
  }

  render() {
    const options = languageOptions.map(data => (
      <option key={data.id} value={data.id}>
        {data.name}
      </option>
    ))

    return (
      <select
        name="customSearch"
        className="custom-search-select"
        onChange={this.handleChange}
      >
        <option>Choose the language</option>
        {options}
      </select>
    )
  }
}

export default RSelect
