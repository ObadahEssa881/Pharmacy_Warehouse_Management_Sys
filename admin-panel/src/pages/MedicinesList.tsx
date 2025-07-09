import { TwTable } from '../components/tw/Table';

export const MedicinesList = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Medicines</h1>
    <TwTable
      resource="medicines"
      columns={[
        { source: 'id',          label: 'ID' },
        { source: 'name',        label: 'Name' },
        { source: 'titer',       label: 'Titer' },
        { source: 'category_id', label: 'Category' },
        { source: 'company_id',  label: 'Company' },
        { source: 'unit_price',  label: 'Price' },
        { source: 'Type',        label: 'Type' },
      ]}
    />
  </>
);
