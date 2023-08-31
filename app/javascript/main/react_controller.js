import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import configureStore from "../../../frontend/store/store";
import Root from "../../../frontend/components/main/root";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    document.addEventListener("DOMContentLoaded", () => {
      let store;

      //bootstrap state to start with a loaded user if available
      if (window.currentUser) {
        const preloadedState = {
          entities: { users: { [window.currentUser.id]: window.currentUser } },
          session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
      } else {
        store = configureStore();
      }

      const content = document.getElementById("content");
      createRoot(content).render(<Root store={store} />);
    });
  }
}
