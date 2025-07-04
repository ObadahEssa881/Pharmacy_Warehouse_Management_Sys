import { TwTable } from '../components/tw/Table';

export const CompaniesPage = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Companies</h1>
    <TwTable
      resource="companies"
      columns={[
        { source: 'id',             label: 'ID' },
        { source: 'name',           label: 'Name' },
        { source: 'contact_person', label: 'Contact' },
        { source: 'phone',          label: 'Phone' },
        { source: 'email',          label: 'Email' },
        { source: 'address',        label: 'Address' },
      ]}
    />
  </>
);
