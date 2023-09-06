import { ClerkProvider } from '@clerk/nextjs';
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <ClerkProvider frontendApi="">{children}</ClerkProvider>;
}
