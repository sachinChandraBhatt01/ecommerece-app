import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const App = () => {
  return (
    <>
    <div>Admin App</div>
     <header>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    
    </header>
    </>
  )
}

export default App