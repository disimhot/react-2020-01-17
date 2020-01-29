import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import {store} from '../../store'

class App extends Component {
  static propTypes = {
    restaurants: PropTypes.array.isRequired,
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Layout>
            <Header />
            <Layout.Content>
              <Restaurants />
            </Layout.Content>
          </Layout>
        </div>
      </Provider>
    )
  }
}

App.defaultProps = {
  restaurants: [],
}

export default App
