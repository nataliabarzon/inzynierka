"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MentalHealthChartProps {
  data: { year: number; cases: number }[];
  title?: string; 
  linecolor: string; // Kolor linii
}

export default function MentalHealthChart({ data, title, linecolor}: MentalHealthChartProps) {
  return (
    <Card className="bg-none text-white shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="year" stroke="#CBD5E1" />
            <YAxis stroke="#CBD5E1" />
            <Tooltip contentStyle={{ backgroundColor: "#1E293B", color: "white" }} />
            <Line type="monotone" dataKey="cases" stroke={linecolor} strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
