import DashboardBox from '@/components/DashboardBox'
import { useGetProductsQuery, useGetKpisQuery } from '@/states/api'
import BoxHeader from "@/components/BoxHeader";
import { useTheme } from "@mui/material";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  CartesianGrid,
} from "recharts"; //Graph library
import { useMemo } from 'react';

type Props = {}

const Row2 = (props: Props) => {
  const { palette } = useTheme();
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const operationalExpenses = useMemo(() => { //Revenue and expenses data
    return (
      operationalData &&
      operationalData[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
        return {
          name: month.substring(0, 3),
          "Operational Expenses": operationalExpenses,
          "Non Operational Expenses": nonOperationalExpenses
        };
      })
    );
  }, [operationalData]);
    return (
    <>
      <DashboardBox gridArea="d">

      <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sideText="4%"
        />
        {/* height 100% is bugging, why?????????? */}
        <ResponsiveContainer width="100%" height="88%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} horizontal={true} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />

            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />

            <Tooltip />
            <Line
              yAxisId="left" // We need this id because we got 2 y axis
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />

            <Line
              yAxisId="right" // We need this id because we got 2 y axis
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>

      </DashboardBox>


      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2