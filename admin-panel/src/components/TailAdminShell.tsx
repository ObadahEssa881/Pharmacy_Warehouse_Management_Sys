import { ReactNode, useState } from 'react';
import { Sidebar, Navbar, Flowbite } from 'flowbite-react';
import {
  HiOutlineHome,  HiMenu,     HiLogout,
  HiOutlineUserGroup,          // users
  // HiBuildingStorefront,        // pharmacies
  HiTruck,                     // warehouses
  HiBell,                      // notifications
  HiCollection,                // categories
  HiOfficeBuilding,            // companies
  HiBeaker,                    // medicines
  HiArchive,                   // inventory
  HiClipboardList,             // purchase orders
  HiClipboardCheck,            // purchase‑order items
  HiDocumentText,              // invoices
  HiShoppingCart,              // sales
  HiReceiptRefund,             // sale items
} from 'react-icons/hi';
import { useLogout } from 'ra-core';
import { Link, useLocation } from 'react-router-dom';

interface Props { children: ReactNode }

export const TailAdminShell = ({ children }: Props) => {
  const [open, setOpen] = useState(true);
  const logout = useLogout();
  const { pathname } = useLocation();

  const link = (to: string) => pathname.startsWith(to);

  return (
    <Flowbite>
      <div className="flex h-screen overflow-hidden">
        {/* -- Sidebar -- */}
        <Sidebar collapsed={!open} className="bg-white shadow-md">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                icon={HiMenu}
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
              >
                {open && 'Collapse'}
              </Sidebar.Item>

              <Sidebar.Item as={Link} to="/" icon={HiOutlineHome} active={pathname==='/'}>Dashboard</Sidebar.Item>
              <Sidebar.Item as={Link} to="/users"         icon={HiOutlineUserGroup}  active={link('/users')}>Users</Sidebar.Item>
              <Sidebar.Item as={Link} to="/pharmacies"    icon={HiOutlineUserGroup} active={link('/pharmacies')}>Pharmacies</Sidebar.Item>
              <Sidebar.Item as={Link} to="/warehouses"    icon={HiTruck}             active={link('/warehouses')}>Warehouses</Sidebar.Item>
              <Sidebar.Item as={Link} to="/suppliers"     icon={HiOutlineUserGroup}  active={link('/suppliers')}>Suppliers</Sidebar.Item>
              <Sidebar.Item as={Link} to="/categories"    icon={HiCollection}        active={link('/categories')}>Categories</Sidebar.Item>
              <Sidebar.Item as={Link} to="/companies"     icon={HiOfficeBuilding}    active={link('/companies')}>Companies</Sidebar.Item>
              <Sidebar.Item as={Link} to="/medicines"     icon={HiBeaker}            active={link('/medicines')}>Medicines</Sidebar.Item>
              <Sidebar.Item as={Link} to="/inventory"     icon={HiArchive}           active={link('/inventory')}>Inventory</Sidebar.Item>
              <Sidebar.Item as={Link} to="/purchase-orders"      icon={HiClipboardList}  active={link('/purchase-orders')}>Purchase Orders</Sidebar.Item>
              <Sidebar.Item as={Link} to="/purchase-order-items" icon={HiClipboardCheck} active={link('/purchase-order-items')}>PO Items</Sidebar.Item>
              <Sidebar.Item as={Link} to="/invoices"      icon={HiDocumentText}      active={link('/invoices')}>Invoices</Sidebar.Item>
              <Sidebar.Item as={Link} to="/sales"         icon={HiShoppingCart}      active={link('/sales')}>Sales</Sidebar.Item>
              <Sidebar.Item as={Link} to="/sale-items"    icon={HiReceiptRefund}     active={link('/sale-items')}>Sale Items</Sidebar.Item>
              <Sidebar.Item as={Link} to="/notifications" icon={HiBell}              active={link('/notifications')}>Notifications</Sidebar.Item>
            </Sidebar.ItemGroup>

            <Sidebar.ItemGroup>
              <Sidebar.Item icon={HiLogout} onClick={() => logout()}>Logout</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>

        {/* -- Main -- */}
        <div className="flex flex-col flex-1">
          <Navbar fluid rounded className="shadow backdrop-blur bg-white/70 sticky top-0 z-20">
            <Navbar.Brand>
              <span className="self-center whitespace-nowrap text-xl font-semibold text-primary">
                PharmaSys
              </span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar>
          <main className="p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
    </Flowbite>
  );
};
