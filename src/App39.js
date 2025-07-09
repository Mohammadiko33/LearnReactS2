import * as React from 'react';
// import Container from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
   // <Container>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
// </Container>
  );
}


// در استیت کالن ها فیلد بع چه معناست ما اینجا بهش گفتیم بیا برای ما دیتا های این سوتون گفتیم که بره از توی رو ها یا اونجا از توی پراپی رو یا همین استیت روز که براش ارسال کردیم گفتیم که دیتا هاش بره از توی رو های ما از پراپرتی ایدی 
// برای ما گرفته بشه پس اینجا میاد برای ما زیر ستون ایدی میاد از رو ها ایدی هارو بهمون نشون میده 
// و ما توی این قسمت استیت رو اسم پراپرتی هر ستون میایم توی فیلد بعش میدیم که بیاد برای ما از اون قسمت قثظ بیاد قثظ ایدی رو تشون بدع زیر اون ستون لین میشه هدر نیم 
// ویئ هم اندازه عر ستون مشقض میکنیم 
// ادبتیبل یعنی قابل تغییر کاربر 
// randerCe;; زمانی هستش که من بخام به اعضای هر کدوم از دیتا های توی هر رو هم دارم مثل همین ایدی و لست نیم و الا اخر بخام که یک ستون داشته بتشم 
// من میخام که به اعضای هر کدوم از رو ها برای من میخام یچیزی رو رندر بکنی پس میام از یک پراپتی به عنوان رندر سل استفاده میکنم سل به معنای سلول هستش یا یکی از قسمت های تیبلمون و اینجا میاد ازمون 
// یکدونه ارو فتانکشن میگیرع و میاد برای ما یک دونه جی اس سیکس ریرتم میکنه 