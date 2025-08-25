import { useListController } from 'ra-core';

interface Props {
  resource: string;
  columns: { source: string; label: string }[];
}

export const TwTable = ({ resource, columns }: Props) => {
  const controller = useListController({ resource });

  if (controller.isLoading) return <p>Loading...</p>;
  if (!controller.data?.length) return <p>No records.</p>;

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full bg-white">
        <thead className="bg-primary text-white">
          <tr>
            {columns.map((col) => (
              <th key={col.source} className="px-4 py-2 text-left">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {controller.data.map((record) => (
            <tr
              key={record.id}
              className="odd:bg-gray-50 hover:bg-indigo-50 transition"
            >
              {columns.map((col) => (
                <td key={col.source} className="px-4 py-2">
                  {record[col.source]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
