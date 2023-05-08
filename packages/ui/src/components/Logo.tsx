import {
  YStack,
  Paragraph,
  XStack,
  Button,
  Input,
  Image,
  Stack,
  useMedia,
} from 'tamagui';
import { useLink } from 'solito/link';
import { tokens } from '@tamagui/theme-base';
const logoMediaQuery = (size: keyof typeof tokens.size) => ({
  width: tokens.size[size].val,
  height: tokens.size[size].val,
});
export const Logo: React.FC<{}> = function () {
  const media = useMedia();
  const homeLink = useLink({
    href: '/',
  });

  return (
    <Image
      {...homeLink}
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
