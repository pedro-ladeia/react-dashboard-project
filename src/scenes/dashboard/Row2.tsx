import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery, useGetKpisQuery } from "@/states/api";
import BoxHeader from "@/components/BoxHeader";
import { Box, Typography, useTheme } from "@mui/material";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts"; //Graph library
import { useMemo } from "react";
import FlexBetween from "@/components/FlexBetween";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Row2 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  
  const operationalExpenses = useMemo(() => {
    //Revenue and expenses data
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  const productExpenseData = useMemo(() => {
    //Products expenses data
    return (
      productData &&
      productData.map(
        ({ _id, price, expense }) => {
          return {
            _id: _id,
            price: price,
            expense: expense,
          };
        }
      )
    );
  }, [productData]);

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
            <CartesianGrid
              vertical={false}
              stroke={palette.grey[800]}
              horizontal={true}
            />
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

      <DashboardBox gridArea="e">
        <BoxHeader title="Campaigns and Targets" sideText="4%" />
        <FlexBetween mt="1.5rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>

          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem" variant="h3" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>

          <Box flexBasis="40%">
            <Typography variant="h5">Losses in revenue</Typography>
            <Typography variant="h6">Losses are down 25%</Typography>
            <Typography mt="0.4rem" variant="h5">
              Profit margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last month
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>

      <DashboardBox gridArea="f">
        <BoxHeader title="Product prices vs expenses" sideText="4%" />
        <ResponsiveContainer width="100%" height="88%">
          <ScatterChart
            margin={{
              top: 20,
              right: 28,
              bottom: 20,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis 
              type="number" 
              dataKey="price" 
              name="price" 
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis 
              type="number" 
              dataKey="expense" 
              name="expense" 
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter 
              name="Product expense ratio" 
              data={productExpenseData} 
              fill={palette.tertiary[500]} />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row2;
