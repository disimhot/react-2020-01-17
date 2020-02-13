import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CounterPage from '../routes/counter'
import RestaurantsPage from '../routes/restaurants'
import CartPage from '../routes/cart'
import ThankYouPage from '../routes/thankyou'

class App extends Component {
  static propTypes = {
    restaurants: PropTypes.array.isRequired,
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Layout>
              <Header />
              <Layout.Content>
                <Switch>
                  <Route
                    path={'/counter/:initialValue'}
                    component={CounterPage}
                  />
                  <Route
                    path={'/restaurant/:currentId'}
                    exact
                    render={props => <RestaurantsPage />}
                  />
                  <Route path={'/cart'} exact component={CartPage} />
                  <Route path={'/thankyou'} exact component={ThankYouPage} />
                  <Route path={'/'} render={() => <h1>Page Not Found</h1>} />
                </Switch>
              </Layout.Content>
            </Layout>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

App.defaultProps = {
  restaurants: [],
}

export default App
