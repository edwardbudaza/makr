import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/site',
  '/api/uploadthing',
  '/agency/sign-in(.*)',
  '/agency/sign-up(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;
  const searchParams = url.searchParams.toString();
  const hostname = req.headers.get('host');

  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`;

  // Extract the subdomain if any
  const customSubDomain = hostname
    ?.split(process.env.NEXT_PUBLIC_DOMAIN!)
    .filter(Boolean)[0];

  // Rewrite for subdomains
  if (customSubDomain) {
    return NextResponse.rewrite(
      new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url),
    );
  }

  // Redirect logic for specific routes
  if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
    return NextResponse.redirect(new URL('/agency/sign-in', req.url));
  }

  // Rewrite to `/site` for root or domain-specific paths
  if (
    url.pathname === '/' ||
    (url.pathname === '/site' && hostname === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL('/site', req.url));
  }

  // Allow `/agency` and `/subaccount` paths as is
  if (
    url.pathname.startsWith('/agency') ||
    url.pathname.startsWith('/subaccount')
  ) {
    return NextResponse.rewrite(new URL(pathWithSearchParams, req.url));
  }

  // Protect private routes
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files unless specified in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API and TRPC routes
    '/(api|trpc)(.*)',
  ],
};
