import 'normalize.css'

Promise.all([
  System.import('react'),
  System.import('react-dom'),
  System.import('ui/one.js'),
])
  .then(([React, ReactDOM, { default: UiComponent }]) => {
    window.React = React
    ReactDOM.render(
      <>
        <UiComponent />
        <button>Button not from UI lib</button>
        <hr />
      </>,
      document.getElementById('react-root')
    )
  })
  .catch(console.error)
