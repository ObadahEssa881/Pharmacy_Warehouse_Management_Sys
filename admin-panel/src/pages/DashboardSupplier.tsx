export const DashboardSupplier = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div className="p-6 rounded-2xl shadow bg-white">
      <h2 className="text-sm text-gray-500">Pending POs</h2>
      <p className="text-3xl font-bold text-primary">24</p>
    </div>
    <div className="p-6 rounded-2xl shadow bg-white">
      <h2 className="text-sm text-gray-500">Warehouse Stock</h2>
      <p className="text-3xl font-bold">9,130</p>
    </div>
    <div className="p-6 rounded-2xl shadow bg-white">
      <h2 className="text-sm text-gray-500">Invoices Due</h2>
      <p className="text-3xl font-bold">12</p>
    </div>
  </div>
);
