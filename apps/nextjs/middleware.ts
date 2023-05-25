import { authMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default authMiddleware({
  debug: true,
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
/*
export default withClerkMiddleware((_req: NextRequest) => {
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: [
   
    '/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)',
  ],
};
*/
