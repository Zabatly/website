import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { clerkClient, getAuth, buildClerkProps } from '@clerk/nextjs/server';
export async function getServerSideProps({
  locale,
  req,
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<Record<string, unknown>>
> {
  const { userId } = getAuth(req);

  const user = userId ? await clerkClient.users.getUser(userId) : undefined;
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
      ...buildClerkProps(req, { user }),
    },
  };
}
