import { SimpleGrid } from '@mantine/core';

export default function Grid({
  children,
  points = [1, 2, 3, 4, 5, 5],
}: {
  children: React.ReactNode;
  points: [number, number, number, number, number, number];
}) {
  return (
    <SimpleGrid
      breakpoints={[
        { maxWidth: 'xs', cols: points[0] },
        { maxWidth: 'sm', cols: points[1] },
        { maxWidth: 'md', cols: points[2] },
        { maxWidth: 'lg', cols: points[3] },
        { maxWidth: 'xl', cols: points[4] },
        { minWidth: 'xl', cols: points[5] },
      ]}
    >
      {children}
    </SimpleGrid>
  );
}
