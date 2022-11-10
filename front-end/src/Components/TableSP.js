/*
const TableSP = (sp) => {
    console.log(sp)
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
    return (
        <div>
            <h1>hello</h1>
            {
            
                sp.sp &&
                sp.sp.map((s) => (
                    
                    <div className="table" key={s._id}>
                    <p>{s.tensanpham}</p>
                    <p>{s.soluong}</p>
                    <p>{s.nhasanxuat}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TableSP
*/