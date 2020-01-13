import React, { Component } from 'react'

class LikeButton extends Component {

  state = {
    likes: 0
  }

  getRandomColor() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    return colors[Math.floor(Math.random() * (colors.length - 1)) + 1]
  }

  addLike() {
    const likes = this.state.likes + 1
    this.setState({ likes: likes })
  }

  render() {
    return (
      <div>
        <button style={{ background: this.getRandomColor() }} onClick={() => { this.addLike() }}>{this.state.likes} Likes</button>
      </div>
    )
  }
}

export default LikeButton