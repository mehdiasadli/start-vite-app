import { Card, Center, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useAvailableCategories } from '../../api/hooks/category.hooks';
import { Error, Grid, Loading } from '..';

export default function CategoriesList() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useAvailableCategories();

  const onSelect = (id: string) => {
    navigate('/categories/' + id);

    window.scrollTo({ top: 0 });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return data ? (
    data.length === 0 ? (
      <Card bg='white'>
        <Title order={3} ta='center' color='red'>
          Kateqoriyalar Bitdi. Nəticəni Gözləyin.
        </Title>
      </Card>
    ) : (
      <Grid points={[1, 2, 3, 4, 5, 5]}>
        {data.map((category) => (
          <Card
            radius={'md'}
            onClick={() => onSelect(category._id)}
            h={100}
            sx={(theme) => ({
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              ':hover': {
                color: theme.colors.violet[6],
                borderTop: '10px solid ' + theme.colors.violet[6],
                borderBottom: '10px solid ' + theme.colors.violet[6],
              },
            })}
            ta='center'
            key={category._id}
          >
            <Center h='100%'>
              <Text fw='bold' fz={15}>
                {category.title}
              </Text>
            </Center>
          </Card>
        ))}
      </Grid>
    )
  ) : null;
}
