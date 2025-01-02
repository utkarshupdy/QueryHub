import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import getOrCreatedb from './models/server/dbSetup'
import getOrCreateStorage from './models/server/storageSetup'

 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    await Promise.all([
        getOrCreatedb(),
        getOrCreateStorage()
    ])




  return NextResponse.next() // so that it redirect to next middleware or other page
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
    /*match all request path expect for the one that start with : 
    -api
    -_next/static
    -_next/image
    -_favicon.com
    
    */
    matcher: [
        // "/login" , if u want middleware not run on /login route , just add it here ...
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
      ],
}