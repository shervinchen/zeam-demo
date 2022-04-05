export const getPlatformTypes = (platform: string) => {
  const types = ['Windows', 'Browser'];
  return types.filter((item) => platform.indexOf(item) > -1);
};
