// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Root from "../../../frontend/components/main/root";
import configureStore from "../../../frontend/store/store"

document.addEventListener("DOMContentLoaded", () => {

  let store

  //bootstrap state to start with a loaded user if available
  if(window.currentUser){
    const preloadedState = {
      entities: { users: { [window.currentUser.id]: window.currentUser }},
      session: { id: window.currentUser.id}
    }
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore()
  }

  const content = document.getElementById("content");
  window.getState = store.getState()

  ReactDOM.render(<Root store={store}/>, content)

})