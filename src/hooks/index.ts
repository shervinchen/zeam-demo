import { useLocalStorageState } from 'ahooks';

export const useCollectGame = () => {
  const [collectGameIds, setCollectGameIds] = useLocalStorageState<
    (number | undefined)[]
  >('zeam-collect-game-ids', {
    defaultValue: [],
  });

  const toggleCollect = (status: boolean, id: number | undefined) => {
    if (status) {
      setCollectGameIds([...collectGameIds, id]);
    } else {
      setCollectGameIds([...collectGameIds].filter((item) => item !== id));
    }
  };

  return {
    collectGameIds,
    toggleCollect,
  };
};
