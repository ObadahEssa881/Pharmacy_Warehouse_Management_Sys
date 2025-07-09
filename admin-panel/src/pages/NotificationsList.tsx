import { TwTable } from '../components/tw/Table';

export const NotificationsList = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
    <TwTable
      resource="notifications"
      columns={[
        { source: 'id',         label: 'ID' },
        { source: 'user_id',    label: 'User' },
        { source: 'message',    label: 'Message' },
        { source: 'type',       label: 'Type' },
        { source: 'created_at', label: 'Created' },
        { source: 'is_read',    label: 'Read' },
      ]}
    />
  </>
);
