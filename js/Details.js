import React from 'react'

const Details = React.createClass({
  render () {
    return (
      <pre><code>
        <div className='details'>
          {JSON.stringify(this.props, null, 4)}
        </div>
      </code></pre>
    )
  }
})

export default Details
