import { useGetCustomersQuery } from '@/store/api';
import { useEffect, useState } from 'react';
import { BaseTableCol, Table } from 'tdesign-react';

export default function Customers() {
  const { data, isLoading } = useGetCustomersQuery('');
  const [total, setTotal] = useState(0);
  console.log(data, isLoading);

  const columns: Array<BaseTableCol> = [
    {
      title: 'ID',
      colKey: '_id',
      width: 200,
    },
    {
      title: 'Name',
      colKey: 'name',
    },
    {
      title: 'Email',
      colKey: 'email',
      width: 200,
    },
    {
      title: 'Phone Number',
      colKey: 'phoneNumber',
      cell: ({ row }) =>
        row.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3'),
    },
    {
      title: 'Country',
      colKey: 'country',
    },
    {
      title: 'Occupation',
      colKey: 'occupation',
      ellipsis: true,
    },
    {
      title: 'Role',
      colKey: 'role',
    },
  ];
  useEffect(() => {
    !isLoading && data && setTotal(data?.length);
  }, [isLoading, data]);

  return (
    <div>
      <h1>Customers</h1>
      {!isLoading && (
        <Table
          columns={columns}
          data={data}
          rowKey="_id"
          size="medium"
          bordered={true}
          hover={true}
          resizable={true}
          cellEmptyContent={'-'}
          pagination={{
            defaultCurrent: 1,
            defaultPageSize: 5,
            total,
            showJumper: true,
            showPageSize: true,
          }}
        />
      )}
    </div>
  );
}
