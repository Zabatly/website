import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export async function getServerSideProps({
  locale,
  req,
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<Record<string, unknown>>
> {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
