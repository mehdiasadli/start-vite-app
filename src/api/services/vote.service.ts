import { PrivateApi } from '..';
import { IVote, NomineeData } from '../../types/api';

class VoteApi extends PrivateApi {
  constructor() {
    super('/votes');
  }

  getVotes = async () => await this.get<IVote[]>('/');
  vote = async ({ categoryId, nominees }: { categoryId: string; nominees: NomineeData[] }) =>
    await this.post<IVote>('/' + categoryId, {
      nominees,
    });
  deleteVote = async (id: string) => await this.delete<{ message: string }>('/' + id);
  getData = async () => await this.get('/data');
}

export default new VoteApi();
