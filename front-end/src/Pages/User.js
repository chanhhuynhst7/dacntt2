import { Table } from 'antd';
import React, { useState } from 'react';
import {Button} from 'antd';
import {PlusOutlined,MinusOutlined,EditOutlined} from '@ant-design/icons';
import "./User.less";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Chánh',
        value: 'Chánh',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
        children: [
          {
            text: 'Yellow',
            value: 'Yellow',
          },
          {
            text: 'Pink',
            value: 'Pink',
          },
        ],
      },
      {
        text: 'Category 2',
        value: 'Category 2',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    filters: [
      {
        text: 'Quản lí kho 1',
        value: 'Quản lí kho 1',
      },
      {
        text: 'Quản lí kho 2',
        value: 'Quản lí kho 2',
      },
    ],
    onFilter: (value, record) => record.role.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
  {
    title:'Email',
    dataIndex:'email'
  },
  {
    title:'Password',
    dataIndex:'password'
  }
  
];
const data = [
  {
    key: '1',
    name: 'Huỳnh Chánh',
    age: 22,
    role: 'Quản lí kho 1',
    email:'chanh@gmail.com',
    password:'123'
  },
  {
    key: '2',
    name: 'Anh Thiện',
    age: 20,
    role: 'Quản lí kho 2',
    email:'thien@gmail.com',
    password:'456'
  },
  {
    key: '3',
    name: 'Minh Bảo',
    age: 30,
    role: 'Quản lí kho 1 ',
    email:'bao@gmail.com',
    password:'789'
  },
  {
    key: '4',
    name: 'Đăng Duy',
    age: 18,
    role: 'Quản lí kho 2',
    email:'Duy@gmail.com',
    password:'1010'
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const User = () => {
  const [size, setSize] = useState('large');
  return(
      <>
          <div className='buttonUser'>

              <Button type="primary" shape="round" icon={<PlusOutlined />} size={size}>
                  Thêm
              </Button>
              <Button type="primary" shape="round" icon={<MinusOutlined />} size={size}>
                  Xóa
              </Button>
              <Button type="primary" shape="round" icon={<EditOutlined />} size={size}>
                  Sửa
              </Button>
          </div>
          <Table columns={columns} dataSource={data} onChange={onChange} />
      </>
  )
}
export default User;