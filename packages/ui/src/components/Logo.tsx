import {
  YStack,
  Paragraph,
  XStack,
  Button,
  Input,
  Image,
  Stack,
  useThemeName,
  useMedia,
} from 'tamagui';
import { useLink } from 'solito/link';
import { tokens } from '@tamagui/theme-base';
const logoMediaQuery = (size: keyof typeof tokens.size) => ({
  width: tokens.size[size].val,
  height: tokens.size[size].val,
});
export const Logo: React.FC<{}> = function () {
  const theme = useThemeName();
  const media = useMedia();
  const linkProps = useLink({
    href: '/',
  });

  return (
    <Image
      source={require('./img/logo.png')}
      resizeMode="contain"
      {...logoMediaQuery(4)}
      {...((media.gtSm || media.gtMd) && {
        ...logoMediaQuery(4),
      })}
      {...((media.gtLg || media.gtXl) && {
        ...logoMediaQuery(5),
      })}
    />
  );
};
