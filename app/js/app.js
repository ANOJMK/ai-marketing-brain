(function () {
  "use strict";

  const C = window.BAL_CONFIG || {};

  const store = {
    get(key, defaultValue = null) {
      try {
        const value = localStorage.getItem("bal_" + key);
        return value === null ? defaultValue : JSON.parse(value);
      } catch {
        return localStorage.getItem("bal_" + key) || defaultValue;
      }
    },

    set(key, value) {
      localStorage.setItem("bal_" + key, JSON.stringify(value));
    },

    remove(key) {
      localStorage.removeItem("bal_" + key);
    },

    clear() {
      Object.keys(localStorage)
        .filter(key => key.startsWith("bal_"))
        .forEach(key => localStorage.removeItem(key));
    }
  };

  window.BAL = {

    config: C,

    store: store,

    endpoint(name) {
      const base = (C.apiBaseUrl || "").replace(/\/$/, "");
      const endpoint = (C.endpoints || {})[name] || "";

      return base + endpoint;
    },

    toast(message, type = "info") {
      let toast = document.getElementById("toast");

      if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
      }

      toast.textContent = message;

      toast.dataset.type = type;

      toast.style.display = "block";

      clearTimeout(toast._timer);

      toast._timer = setTimeout(() => {
        toast.style.display = "none";
      }, 3000);
    },

    go(url) {
      window.location.href = url;
    },

    escape(value) {
      return String(value ?? "").replace(
        /[&<>"']/g,
        char => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        })[char]
      );
    },

    async post(endpoint, body = {}) {

      const response = await fetch(endpoint, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },

        body: JSON.stringify(body)
      });

      const text = await response.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = {
          raw: text
        };
      }

      if (!response.ok) {

        throw new Error(
          data.error_description ||
          data.message ||
          data.error ||
          ("HTTP " + response.status)
        );
      }

      return data;
    }
  };


  /*
   * Application initialization
   */
  document.addEventListener("DOMContentLoaded", () => {

    /*
     * Automatic navigation highlighting
     *
     * Example:
     * <a href="dashboard.html" data-nav>Dashboard</a>
     */
    document.querySelectorAll("[data-nav]").forEach(link => {

      const href = link.getAttribute("href");

      if (!href) return;

      const currentPage =
        window.location.pathname.split("/").pop();

      const targetPage =
        href.split("/").pop();

      if (targetPage === currentPage) {
        link.classList.add("active");
      }

    });


    /*
     * Back buttons
     *
     * Example:
     * <button data-back>Back</button>
     */
    document.querySelectorAll("[data-back]").forEach(button => {

      button.addEventListener("click", event => {

        event.preventDefault();

        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = "dashboard.html";
        }

      });

    });


    /*
     * Toast buttons
     */
    document.querySelectorAll("[data-toast]").forEach(element => {

      element.addEventListener("click", () => {

        const message =
          element.getAttribute("data-toast");

        if (message) {
          window.BAL.toast(message);
        }

      });

    });

  });

})();
