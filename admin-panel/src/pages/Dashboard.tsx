import { useGetList } from 'react-admin';
import DashboardCard from '../components/DashboardCard';
import Chart from '../components/Chart';

export default function Dashboard() {
  const { data: lowStock } = useGetList('medicines', { filter: { low_stock: true } });
  const { data: sales } = useGetList('reports/sales', { pagination: { page: 1, perPage: 5 } });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <DashboardCard title="Low Stock Medicines" value={lowStock?.length || 0} />
      <DashboardCard title="Sales Trend">
        <Chart data={sales || []} xKey="date" yKey="total_price" />
      </DashboardCard>
    </div>
  );
}
