import { ActionIcon } from '@mantine/core';
import { PointInfo } from '../../types/vote-info';

export default function PointButton({
  inc = false,
  counter,
  points,
  onDec,
  onInc,
  nomineeId,
}: {
  inc?: boolean;
  counter: number;
  points: PointInfo[];
  onDec?: (id: string) => void;
  onInc?: (id: string) => void;
  nomineeId: string;
}) {
  return (
    <ActionIcon
      radius='xl'
      disabled={inc ? incDisabled : decDisabled}
      onClick={() => (inc ? onInc!(nomineeId) : onDec!(nomineeId))}
      size='lg'
      variant='light'
      color={inc ? 'violet.8' : 'pink.8'}
    >
      {inc ? '+' : '-'}
    </ActionIcon>
  );
}
