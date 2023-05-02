import { ReactNode, Suspense } from 'react';

export const SuspenseBoundary = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<>{null}</>}>{children}</Suspense>;
};
