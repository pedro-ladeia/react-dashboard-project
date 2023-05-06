import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/states/api'
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import React from 'react'

const Row3 = () => {
  const { palette } = useTheme()
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  // console.log('data is: ', transactionData);
  // Taking the all data the row 3 needs

  const productColumns = [ 
    //Creting the columns of table 
    {
      field: "_id", //The data of the column
      headerName:"id", //Name of column
      flex: 1, //Gap between columns
    },
    {
      field: "expense", //The data of the column
      headerName:"Expense", //Name of column
      flex: 0.5, //Gap between columns
      renderCell: (params: GridCellParams) => `$${params.value}`
    },
    {
      field: "price",
      headerName:"Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`
    }
  ]

  const transactionColumns = [ 
    //Creting the columns of table 
    {
      field: "_id", //The data of the column
      headerName:"id", //Name of column
      flex: 1, //Gap between columns
    },
    {
      field: "buyer", //The data of the column
      headerName:"Buyer", //Name of column
      flex: 0.67, //Gap between columns
    },
    {
      field: "amount",
      headerName:"Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`
    },
    {
      field: "productIds",
      headerName:"Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) => (params.value as Array<string>).length,
    }
  ]


  return (
    <>
      <DashboardBox gridArea="g">
      <BoxHeader
          title="List of Products"
          sideText={`${productData?.length} products`}
        />

        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="79%"
          sx={{ 
            // Styling the default style of MUI in cells
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none"
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden !important",
            },
          }}
          >
        <DataGrid 
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
          rows={productData || []} //Adding the data on rows
          columns={productColumns} //Seting the created Columns in columns of the grid
        />
        </Box>
      
      </DashboardBox>

      <DashboardBox gridArea="h">

      <BoxHeader
          title="Recent orders"
          sideText={`${transactionData?.length} latest transactions`}
        />

        <Box
          mt="1rem"
          p="0 0.5rem"
          height="83%"
          sx={{ 
            // Styling the default style of MUI in cells
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none"
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden !important",
            },
          }}
          >
        <DataGrid 
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
          rows={transactionData || []} //Adding the data on rows
          columns={transactionColumns} //Seting the created Columns in columns of the grid
        />
        </Box>

      </DashboardBox>

      <DashboardBox gridArea="i">

      </DashboardBox>

      <DashboardBox gridArea="j">

      </DashboardBox>

    </>
  )
}

export default Row3