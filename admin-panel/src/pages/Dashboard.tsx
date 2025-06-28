export const Dashboard = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div className="p-6 rounded-2xl shadow bg-white">
      <h2 className="text-sm text-gray-500">Total Sales</h2>
      <p className="text-3xl font-bold text-primary">$12,340</p>
    </div>
    <div className="p-6 rounded-2xl shadow bg-white">
      <h2 className="text-sm text-gray-500">Medicines</h2>
      <p className="text-3xl font-bold">523</p>
    </div>
    <div className="p-6 rounded-2xl shadow bg-white">
      <h2 className="text-sm text-gray-500">Pharmacies</h2>
      <p className="text-3xl font-bold">8</p>
    </div>
  </div>
);
