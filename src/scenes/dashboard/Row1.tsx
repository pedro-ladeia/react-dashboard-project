import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/states/api";
import { useTheme } from "@mui/material";
import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  BarChart,
  Bar

} from "recharts";

type Props = {};

const Row1 = (props: Props) => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery(); //Saving the response on { data }
  console.log('data is: ', data)


  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        };
      })
    );
  }, [data]);



  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);


  {/*Revenue and Profit */ }


  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);




  /*Taking the data in variable data, mapping the response and put the values on graph */

  return (
    //Using the recharts
    <>
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Revenue and Expenses"
          subtitle="The green line represents the revenue, red line representes the expenses"
          sideText="4%"
        />
        {/* height 100% is bugging, why?????????? */}
        <ResponsiveContainer width="100%" height="84%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[500]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[500]}
                  stopOpacity={0}
                />
              </linearGradient>

              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff776f" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#ff776f" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              domain={[10000, 24000]}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary[500]}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              dot={true}
            />

            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#ff776f"
              fillOpacity={1}
              fill="url(#colorExpenses)"
              dot={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="b">
        <BoxHeader
          title="Profit and Revenue"
          subtitle="The green line represents the revenue, purple line representes the profit"
          sideText="4%"
        />
        {/* height 100% is bugging, why?????????? */}
        <ResponsiveContainer width="100%" height="84%">
          <LineChart

            data={revenueProfit}
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
            <Legend height={20} wrapperStyle={{
              margin: "0 0 5px 0"
            }} />
            <Line
              yAxisId="left" // We need this id because we got 2 y axis
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />

            <Line
              yAxisId="right" // We need this id because we got 2 y axis
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="c">

        <BoxHeader
          title="Revenue month by month"
          subtitle="Each bar graphic represents the month revenue "
          sideText="4%"
        />


        <ResponsiveContainer width="100%" height="84%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >

            <defs>
              <linearGradient id="colorGraphRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.tertiary[500]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.tertiary[500]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid stroke={palette.grey[800]} horizontal={true} vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              style={{fontSize: "10px"}}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{fontSize: "10px"}}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorGraphRevenue)" />
          </BarChart>
        </ResponsiveContainer>


      </DashboardBox>
    </>
  );
};

export default Row1;
