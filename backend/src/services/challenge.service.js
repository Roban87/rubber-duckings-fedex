import dayjs from 'dayjs';
import { challengeRepo } from '../repositories';

export const challengeService = {
  async getChallenge() {
    const challenge = await challengeRepo.getChallenge();
    if (!challenge) {
      throw {
        status: 404,
        message: 'No challenge available',
      };
    }
    const { title, description } = challenge;
    return {
      title,
      description,
      startDate: dayjs(challenge.start_date).format('YYYY-MM-DD'),
      endDate: dayjs(challenge.end_date).format('YYYY-MM-DD'),
      minCommit: challenge.min_commitments,
    };
  },

  async postChallenge(challengeDetails) {
    await challengeRepo.postChallenge(challengeDetails);
    return await this.getChallenge();
  },

  async putChallenge(challengeDetails) {
    await challengeRepo.putChallenge(challengeDetails);
    return await this.getChallenge();
  },
};
