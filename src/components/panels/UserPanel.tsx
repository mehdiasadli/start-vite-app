/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useUsers } from '../../api/hooks/user.hooks';
import { IUser } from '../../types/api';
import { Error, Grid, Loading, UserCard } from '..';

export type PopulatedUser = IUser<true, true, true, true>;

export default function UserPanel() {
  const { data, isLoading, isError } = useUsers();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Grid points={[1, 1, 2, 3, 4, 5]}>
      {data!.map((user) => (
        // @ts-ignore
        <UserCard key={user._id} user={user} />
      ))}
    </Grid>
  );
}
