import React, {Component} from 'react'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Counter from '../counter'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Layout>
              <Header />
              <Layout.Content>
                <Route path={'/counter/:initialValue'} component={Counter} />
                <Route
                  path={'/restaurant/:currentId/:foo'}
                  render={props => {
                    console.log('😄 render props', props)
                    return <Restaurants />
                  }}
                />
              </Layout.Content>
            </Layout>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
