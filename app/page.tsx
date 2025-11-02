import { SignedIn, SignOutButton, SignUpButton } from "@clerk/nextjs";


export default function App() {
  return (
    <div>
      <h1>
        home page
      </h1>
      <SignOutButton >
        <SignUpButton mode="modal" />
      </SignOutButton>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>

  )
}