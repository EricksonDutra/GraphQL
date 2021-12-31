const users = () => {
  return [
    {
      id: '1',
      userName: 'Erickson 1',
    },
    {
      id: '2',
      userName: 'Ericks 2',
    },
    {
      id: '3',
      userName: 'ErickDutra 3',
    },
  ];
};

const user = () => {
  return {
    id: '1',
    userName: 'ErickDev',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
