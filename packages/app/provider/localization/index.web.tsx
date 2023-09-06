import { I18nextProvider } from 'react-i18next';
import i18n from './localeSetup';

export const LocaleProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <I18nextProvider i18n={i18n}>
      <>{children}</>
    </I18nextProvider>
  );
};
