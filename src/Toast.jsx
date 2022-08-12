import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class Toast extends Component {
  state = { visible: true }

  render() {
    if (this.state.visible) {
      return (
        <Message
          header='Login Failed'
          content='No Credentials Found, Please Try Again'
        />
      )
    }
  }
}

export default Toast