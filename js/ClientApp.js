/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color, fontWeight: 'bold' } }, this.props.title)
      )
    )
  }
})

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
