import { Badge, Button, Card, Flex, Group, Stack, Text, Title } from '@mantine/core';
import { Avatar } from '..';
import { PointAmount, PointInfo } from '../../types/vote-info';
import { modals } from '@mantine/modals';
import { IUser } from '../../types/api';

function PointButton({
  id,
  amount,
  onPointGive,
}: {
  id: string;
  amount: PointAmount;
  onPointGive: (id: string, point: PointAmount) => void;
}) {
  const onClick = () => {
    onPointGive(id, amount);
    modals.closeAll();
  };
  return (
    <Button
      onClick={onClick}
      color={`violet.${amount + 4}`}
      variant='outline'
      h={50}
      radius='xl'
      sx={{ flex: 1 }}
    >
      {amount}
    </Button>
  );
}

export default function NomineeCard({
  nominee,
  points,
  onPointGive,
  getAvailable,
}: {
  nominee: IUser;
  points: PointInfo[];
  onPointGive: (id: string, point: PointAmount) => void;
  onPointRemove: (id: string) => void;
  getAvailable: () => PointAmount[];
}) {
  const openPointModal = () =>
    modals.open({
      radius: 'md',
      withCloseButton: false,
      centered: true,
      children: (
        <Stack align='center' p={10}>
          <Title ta='center' order={2} color='violet.8'>
            {points.some((p) => p._id === nominee._id)
              ? `${nominee.name} üçün Verdiyiniz Balı Silin`
              : `${nominee.name} üçün Verəcəyiniz Balı Seçin`}
          </Title>
          <Flex p={5} w='100%' align='center' justify='center' gap={10}>
            {getAvailable().map((amount) => (
              <PointButton
                key={amount}
                id={nominee._id}
                amount={amount}
                onPointGive={onPointGive}
              />
            ))}
          </Flex>
        </Stack>
      ),
    });

  return (
    <Card
      onClick={
        getAvailable().length === 0 || points.some((p) => p._id === nominee._id)
          ? () => {}
          : openPointModal
      }
      radius='md'
      w={250}
      p={10}
      sx={(theme) => ({
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '1px solid ' + theme.colors.gray[2],
        ':hover': { border: '1px solid ' + theme.colors.violet[4] },
      })}
    >
      <Flex align='center' justify='space-between'>
        <Group align='center'>
          <Avatar src={nominee?.img} name={nominee.name} />
          <Text fz={14}>{nominee.name}</Text>
        </Group>
        {points.some((p) => p._id === nominee._id) ? (
          <Badge
            variant='filled'
            color={`violet.${(points.find((item) => item._id === nominee._id)?.point || 0) + 3}`}
          >
            {points.find((item) => item._id === nominee._id)?.point}
          </Badge>
        ) : null}
      </Flex>
    </Card>
  );
}
