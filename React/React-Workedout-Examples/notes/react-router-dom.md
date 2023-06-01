# Routing

- Routing is the ability to move between different parts of application when users clicks on any elements on the page
- To add routing capabilities react-router library can be used.
  - This library comes in three variants
    1. react-router => core
    2. react-router-dom => variant used for routing in web application
    3. react-router-native => variant used for routing in react-native for developing android and ios applications

# npm

```
npm install --save react-router-dom
```

# Routers

- The react-router package includes three types or routers

  - BrowserRouter, HashRouter and MemoryRouter

- For Browser based application the BrowserRouter and HashRouter are a good fit.

# Routes

- Routes without params
  - ex:
    ```
        /home
        /about
        /testimonials
    ```
- Routes with params
  - ex:
    ```
        /user/:id
        /product/:id
    ```
  - Here id can be anything

# Link

- Whenever the user clicks on anything wrapped with <Link></Link> the user would be navigated to the route specified by path prop for Link Component

# Switch

- Renders the first child <Route> that matches the url.

# Route

- Route component is responsible to render some UI when its path prop matches URL
