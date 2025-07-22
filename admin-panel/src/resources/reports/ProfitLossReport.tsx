import { useState } from 'react';
import { DateInput, Button, useDataProvider } from 'react-admin';

export default function ProfitLossReport() {
  const [report, setReport] = useState(null);
  const dataProvider = useDataProvider();

  const handleGenerate = async () => {
    const res = await dataProvider.customMethod('reports/profit-loss', { method: 'GET' });
    setReport(res.json);
  };

  return (
    <div className="p-4">
      <DateInput source="from" />
      <DateInput source="to" />
      <Button label="Generate Report" onClick={handleGenerate} />
      {report && (
        <div className="mt-4">
          <h3>Total Revenue: {report.totalRevenue}</h3>
          <h3>Total P
