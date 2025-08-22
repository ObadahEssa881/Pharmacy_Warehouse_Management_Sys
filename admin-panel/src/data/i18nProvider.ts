// src/i18nProvider.ts
import { I18nProvider } from 'react-admin';

const translations: Record<string, any> = {
  ra: {
    navigation: {
      page_rows_per_page: 'Rows per page',
      page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
    },
  },
  resources: {
    users: {
      name: 'User',
      fields: {
        id: 'ID',
        username: 'Username',
        email: 'Email',
        role: 'Role',
        pharmacy_id: 'Pharmacy',
        created_at: 'Created At',
      },
    },
    pharmacies: {
      name: 'Pharmacy',
      fields: {
        id: 'ID',
        name: 'Name',
        address: 'Address',
        contact_number: 'Contact Number',
        owner_id: 'Owner',
      },
    },
    warehouses: {
      name: 'Warehouse',
      fields: {
        id: 'ID',
        name: 'Name',
        address: 'Address',
        contact_number: 'Contact Number',
        owner_id: 'Owner',
      },
    },
    suppliers: {
      name: 'Supplier',
      fields: {
        id: 'ID',
        name: 'Name',
        email: 'Email',
        role: 'Role',
        contact_person: 'Contact Person',
        phone: 'Phone',
        address: 'Address',
        warehouseId: 'Warehouse',
      },
    },
    categories: {
      name: 'Category',
      fields: {
        id: 'ID',
        name: 'Name',
        description: 'Description',
      },
    },
    companies: {
      name: 'Company',
      fields: {
        id: 'ID',
        name: 'Name',
        contact_person: 'Contact Person',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
      },
    },
    medicines: {
      name: 'Medicine',
      fields: {
        id: 'ID',
        name: 'Name',
        titer: 'Titer',
        unit_price: 'Unit Price',
        Type: 'Type',
        category_id: 'Category',
        company_id: 'Company',
        supplier_id: 'Supplier',
      },
    },
    inventory: {
      name: 'Inventory',
      fields: {
        id: 'ID',
        medicine_id: 'Medicine',
        location_type: 'Location Type',
        quantity: 'Quantity',
        cost_price: 'Cost Price',
        selling_price: 'Selling Price',
        expiry_date: 'Expiry Date',
        last_updated: 'Last Updated',
        pharmacy_id: 'Pharmacy',
        warehouse_id: 'Warehouse',
      },
    },
    purchase_orders: {
      name: 'Purchase Order',
      fields: {
        id: 'ID',
        supplier_id: 'Supplier',
        pharmacy_id: 'Pharmacy',
        order_date: 'Order Date',
        delivery_date: 'Delivery Date',
        status: 'Status',
      },
    },
    purchase_order_items: {
      name: 'PO Item',
      fields: {
        id: 'ID',
        order_id: 'Order',
        medicine_id: 'Medicine',
        quantity: 'Quantity',
        unit_price: 'Unit Price',
      },
    },
    invoices: {
      name: 'Invoice',
      fields: {
        id: 'ID',
        order_id: 'Order',
        supplier_id: 'Supplier',
        invoice_date: 'Invoice Date',
        total_amount: 'Total Amount',
        payment_status: 'Payment Status',
      },
    },
    sales: {
      name: 'Sale',
      fields: {
        id: 'ID',
        pharmacy_id: 'Pharmacy',
        customer_name: 'Customer Name',
        sale_date: 'Sale Date',
        total_amount: 'Total Amount',
        payment_mode: 'Payment Mode',
      },
    },
    sale_items: {
      name: 'Sale Item',
      fields: {
        id: 'ID',
        sale_id: 'Sale',
        medicine_id: 'Medicine',
        quantity: 'Quantity',
        unit_price: 'Unit Price',
      },
    },
    notifications: {
      name: 'Notification',
      fields: {
        id: 'ID',
        user_id: 'User',
        message: 'Message',
        type: 'Type',
        created_at: 'Created At',
        is_read: 'Is Read',
      },
    },
  },
};

export const i18nProvider: I18nProvider = {
  translate: (key, options) => {
    const keys = key.split('.');
    let result: any = translations;
    for (const k of keys) {
      result = result?.[k];
      if (result == null) return key;
    }
    if (typeof result === 'string') return result;
    if (typeof result === 'function') return result(options);
    return key;
  },
  changeLocale: () => Promise.resolve(),
  getLocale: () => 'en',
};
