import { UserInfo } from '@/components';
import { User } from '@/model/User';
import { Icon } from 'tdesign-icons-react';

type DropListPropsType = {
  user: User;
};
export default function DropList({ user }: DropListPropsType) {
  return (
    <div>
      <UserInfo
        user={user}
        showIcon={true}
        icon={<Icon name="chevron-down" size="16" />}
      />
    </div>
  );
}
