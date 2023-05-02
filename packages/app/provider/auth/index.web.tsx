import { ClerkProvider } from '@clerk/nextjs';
export function AuthProvider({ children }: { children: React.ReactNode }) {
  // prettier-ignore
  {/* 
// @ts-ignore */}
  return <ClerkProvider>{children}</ClerkProvider>;
}
