import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
          MyTitleFactory({ title: 'props are the best', color: 'peru'}),
          MyTitleFactory({ title: 'semicolons are the worst', color: 'mediumaquamarine'}),
          MyTitleFactory({ title: 'its ok with semis', color: 'rebeccapurple'}),
          MyTitleFactory({ title: 'blabala', color: 'darkvioletred'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
