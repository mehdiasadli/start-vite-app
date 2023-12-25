import { Avatar as MantineAvatar } from '@mantine/core';
import { getSizedImage } from '../../utils/imageSize';

const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(' ') as [string, string?];

  return firstName[0] + (!lastName ? '' : lastName[0]);
};

export default function Avatar({
  src,
  name,
  quality,
  size = 'sm',
  radius = 'xl',
}: {
  name: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  quality?: number;
}) {
  return src ? (
    <MantineAvatar radius={radius} size={size} src={getSizedImage(src, quality)} />
  ) : (
    <MantineAvatar radius={radius} size={size}>
      {getInitials(name)}
    </MantineAvatar>
  );
}
