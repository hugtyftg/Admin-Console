import UserInfo from '@/components/UserInfo';
import { Icon } from 'tdesign-icons-react';
import { Dropdown, Button } from 'tdesign-react';

type DropListPropsType = {
  user: User;
};
export default function DropList({ user }: DropListPropsType) {
  const options = [
    {
      content: '操作一',
      value: 1,
    },
    {
      content: '操作二',
      value: 2,
    },
    {
      content: '操作三',
      value: 3,
    },
  ];
  const clickHandler = (data: any) => {
    alert(`选中【${data.value}】`);
  };
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
