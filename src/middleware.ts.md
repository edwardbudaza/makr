# Authentication Flow Documentation

This document explains the authentication flow used in our application, supported by a visual representation of the process. Below is the architecture diagram that provides an overview of the navigation and authentication:

![Authentication Flow Diagram](/public/architecture/app-navigation.svg)

## Overview of the Flow 🌐

1. **Public Routes** 🛤️:

   - Routes defined as public (e.g., `/site`, `/api/uploadthing`, `/agency/sign-in`, and `/agency/sign-up`) allow unauthenticated access.
   - These routes are matched using the `createRouteMatcher` function and bypass authentication checks.

2. **Protected Routes** 🔒:

   - Any route not included in the public routes list is considered protected.
   - For these routes, the middleware enforces authentication by calling `auth.protect()`. Unauthorized access attempts will redirect users to the appropriate sign-in page.

3. **Subdomain Handling** 🏷️:

   - The middleware extracts the subdomain from the request's `host` header.
   - If a subdomain is detected, the request is rewritten to include the subdomain in the path (e.g., `/subdomain-name/original-path`).

4. **Custom Redirects** 🔄:

   - Specific redirects are implemented to guide users to appropriate pages based on their requested paths:
     - Requests to `/sign-in` or `/sign-up` are redirected to `/agency/sign-in`.
     - The root path `/` and `/site` on the primary domain are rewritten to `/site` for consistency.

5. **API and TRPC Routes** ⚙️:
   - API routes (`/api/...`) and TRPC routes (`/trpc/...`) are always processed by the middleware to ensure appropriate access control and authentication.

## Middleware Logic 🧠

Here is a step-by-step explanation of the middleware:

1. **Route Matching** 🗺️:

   - The middleware first determines if the requested route is public using the `isPublicRoute` function.

2. **Subdomain Extraction** 🔍:

   - If the `host` header includes a subdomain, the middleware rewrites the request to include the subdomain in the path.

3. **Redirect Logic** 🚦:

   - Specific paths are redirected to ensure users land on the correct pages for authentication or content access.

4. **Authentication Enforcement** 🛡️:
   - For protected routes, the middleware calls `auth.protect()` to enforce authentication. Unauthenticated users are prompted to log in.

## Configuration Details 🛠️

The `config` section of the middleware ensures:

- Static assets, Next.js internals, and common file types are skipped during middleware processing.
- API and TRPC routes are always included for authentication checks.

```javascript
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

## Visual Representation 🎨

Refer to the diagram above for a high-level view of the navigation and authentication process.

---

For further clarification or issues with the flow, please contact the development team. 💬
