import React from 'react';
import { User } from '../../Types/User';

type Props = {
  user: User;
};
export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <a className="UserInfo" href={`${user.email}`}>
      {user.name}
    </a>
  );
};
