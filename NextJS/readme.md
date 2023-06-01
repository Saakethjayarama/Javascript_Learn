# NextJS

- The React Framework for production
- React + Other features like routing, styling, authentication and bundle optimization
- Incremental static regeneration

- File based routing
- Pre-rendering
- API Routes
- Support for CSS module
- Authentication
- Dev and Prod build system


# Routing

- File based routing
- Routing patterns 
    - Route with pages
    - Nested routes (On duplicate nested route detection the one in the upper hierarchy are returned(ref. Duplicate page detected. pages\blog.js and pages\blog\index.js both resolve to /blog.))
    - Dynamic routes (/product/[id]) (Matches page that is more specific then goes for dynamic route)
    - Nested dynamic route (/blog/[id]/review/[rvId])
    - Catch-all route (/product/**)
    - Navigate from UI
    - Programmatically navigate between pages
 