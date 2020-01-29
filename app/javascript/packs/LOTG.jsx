// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Root from "../../../frontend/components/main/root";
import Store from "../../../frontend/store/store"

document.addEventListener("DOMContentLoaded", () => {

  const content = document.getElementById("content");
  const store = Store()

  window.getState = store.getState()

  ReactDOM.render(<Root store={store}/>, content)

})