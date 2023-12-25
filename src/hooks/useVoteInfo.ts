import { useState } from 'react';
import { PointAmount, PointInfo } from '../types/vote-info';

export const useVoteInfo = () => {
  const [points, setPoints] = useState<PointInfo[]>([]);

  const onPointGive = (id: string, point: PointAmount) => {
    if (points.some((p) => p.point === point || p._id === id)) {
      return;
    }

    setPoints((prev) => [...prev, { _id: id, point }]);
  };

  const onPointRemove = (id: string) => {
    if (!points.some((p) => p._id === id)) {
      return;
    }

    setPoints((prev) => prev.filter((p) => p._id !== id));
  };

  const getAvailable = (): PointAmount[] => {
    return ([1, 2, 3] as [PointAmount, PointAmount, PointAmount]).filter((amount) =>
      points.every((p) => p.point !== amount)
    );
  };

  const isVoted = (id: string) => {
    return points.some((p) => p._id === id);
  };

  return { onPointGive, points, setPoints, getAvailable, onPointRemove, isVoted };
};
