import { AppConfig } from 'blockstack';
import { didConnect } from 'react-blockstack';

export const appConfig = new AppConfig(['store_write', 'publish_data']);
export const connectOptions = session => {
  return {
    finished: ({ userSession }) => {
      didConnect({ userSession });
    },
    appDetails: {
      name: 'REBL One',
      icon: 'https://one.rebl.run/rebl.png',
    },
    userSession: session,
  };
};
