import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/states/api'
import React from 'react'

const Row3 = () => {
  const {data: kpiData} = useGetKpisQuery();
  const {data: productData} = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery(); 
  //console.log('data is: ', transactionData);
  // Taking the all data the row 3 needs

  return (
    <>
      <DashboardBox gridArea="g">
        
      </DashboardBox>

      <DashboardBox gridArea="h">

      </DashboardBox>

      <DashboardBox gridArea="i">

      </DashboardBox>

      <DashboardBox gridArea="j">

      </DashboardBox>

    </>
  )
}

export default Row3