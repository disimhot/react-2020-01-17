import React, {Component} from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'
import {decrement, increment} from '../../store/action-creators'
import {withRouter} from 'react-router-dom'

class Counter extends Component {
  state = {
    value: 0,
  }
  componentDidMount() {
    this.setState({
      value: this.props.match.params.initialValue,
    })
  }

  render() {
    console.log('😱Counter', this.props)
    return (
      <div>
        <span style={{padding: '16px'}}>
          {+this.state.value || this.props.count}
        </span>
        <Button.Group>
          <Button onClick={this.decrease} type="primary" icon="minus" />
          <Button onClick={this.increase} type="primary" icon="plus" />
        </Button.Group>
      </div>
    )
  }
  decrease = () => {
    this.props.decrementFromDispatch()
  }
  increase = () => {
    this.props.incrementFromDispatch()
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = {
  incrementFromDispatch: increment,
  decrementFromDispatch: decrement,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Counter))
