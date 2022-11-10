import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import {Button} from 'antd';
import {PlusOutlined,MinusOutlined,EditOutlined} from '@ant-design/icons';
import "./Items.less"
import axios from 'axios'
import TableSP from '../Components/TableSP'
// import { isBuffer } from 'util';

const columns = [
  {
    title: 'Tên Hàng Hóa',
    dataIndex: 'tensanpham',
    filters: [
      {
        text: 'Adidas Ultra Boost',
        value: 'Adidas Ultra Boost',
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
    onFilter: (value, record) => record.tenhang.includes(value),
    width: '30%',
  },
  {
    title: 'Số Lượng',
    dataIndex: 'soluong',
    sorter: (a, b) => a.soluong - b.soluong,
  },
  {
    title: 'Nhà Sản Xuất',
    dataIndex: 'nhasanxuat',
    filters: [
      {
        text: 'Nike',
        value: 'Nike',
      },
      {
        text: 'Adidas',
        value: 'Adidas',
      },
    ],
    onFilter: (value, record) => record.nhasanxuat.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
  
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const Items = () => {
    const [size, setSize] = useState('large');

    const [sp, setSP] = useState(null);
    const url = '/api/products'
    useEffect(() => {
        axios
        .get(url)
        .then((response) => {
            setSP(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
    
    if(!sp) return null
    console.log(sp)

    return(
        <>
            <div className='buttonItems'>

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
            <Table columns={columns} dataSource={sp} onChange={onChange} />
            
            
        </>
    )
}
export default Items;