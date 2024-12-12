import { useGetAdminsQuery } from '@/store/api';
import { copyToClipboard } from '@/utils';
import { useEffect, useState } from 'react';
import { FileCopyIcon } from 'tdesign-icons-react';
import { BaseTableCol, Loading, Table } from 'tdesign-react';
import { S } from './style';
import { useTheme } from '@mui/material';

export default function Admin() {
  const { data, isLoading } = useGetAdminsQuery('');
  const [total, setTotal] = useState(0);
  const theme = useTheme();

  const columns: Array<BaseTableCol> = [
    {
      title: 'ID',
      colKey: '_id',
      width: 260,
      fixed: 'left',
    },
    {
      title: 'Name',
      colKey: 'name',
      width: 100,
    },
    {
      title: 'Email',
      colKey: 'email',
      width: 220,
      ellipsis: {
        props: {
          theme: 'light',
          placement: 'top',
        },
        content: ({ row }) => (
          <div
            style={{
              padding: 5,
              textAlign: 'center',
            }}
          >
            {row.email}
            <FileCopyIcon
              style={{
                cursor: 'pointer',
                marginLeft: 5,
              }}
              onClick={() => copyToClipboard(row.email)}
            />
          </div>
        ),
      },
    },
    {
      title: 'Phone Number',
      colKey: 'phoneNumber',
      width: 160,
      cell: ({ row }) =>
        row.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3'),
    },
    {
      title: 'Country',
      colKey: 'country',
      width: 80,
    },
    {
      title: 'Occupation',
      colKey: 'occupation',
      width: 250,
      ellipsis: true,
    },
    {
      title: 'Role',
      colKey: 'role',
      width: 80,
      fixed: 'right',
    },
  ];
  useEffect(() => {
    !isLoading && data && setTotal(data?.length);
  }, [isLoading, data]);

  return (
    <S.Container theme={theme}>
      <S.Title>ADMINS</S.Title>
      <S.SubTitle>Managing admins and list of admins</S.SubTitle>
      {!isLoading && data ? (
        <Table
          columns={columns}
          data={data}
          rowKey="_id"
          size="medium"
          bordered={true}
          hover={true}
          resizable={true}
          cellEmptyContent={'-'}
          tableLayout="fixed"
          pagination={{
            defaultCurrent: 1,
            defaultPageSize: 10,
            total,
            showJumper: true,
            showPageSize: true,
          }}
        />
      ) : (
        <Loading
          text="Loading..."
          indicator
          loading
          preventScrollThrough
          showOverlay
        />
      )}
    </S.Container>
  );
}
