import { Button, useNotify, useRefresh } from 'react-admin';
import { fetchUtils } from 'react-admin';

export const FulfillOrderButton = ({ record }) => {
  const notify = useNotify();
  const refresh = useRefresh();

  const handleFulfill = async () => {
    try {
      await fetchUtils.fetchJson(`/purchase-orders/${record.id}/fulfill`, { method: 'POST' });
      notify('Order fulfilled successfully', { type: 'success' });
      refresh();
    } catch (error) {
      notify(`Error: ${error.message}`, { type: 'warning' });
    }
  };

  return (
    <Button label="Fulfill" onClick={handleFulfill} disabled={record.status === 'FULFILLED'} />
  );
};
