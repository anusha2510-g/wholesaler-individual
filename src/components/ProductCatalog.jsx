import React from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  MessageSquare,
  Shield,
  Search,
  Filter,
  Plus,
  MoreVertical,
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    status: 'Active',
    price: '$89.99',
    moq: '50 units',
    stock: '500 units',
  },
  {
    id: 2,
    name: 'Cotton T-Shirt (Pack of 10)',
    category: 'Clothing',
    status: 'Active',
    price: '$45.00',
    moq: '100 units',
    stock: '2000 units',
  },
  {
    id: 3,
    name: 'Organic Coffee Beans (5kg)',
    category: 'Food',
    status: 'Active',
    price: '$120.00',
    moq: '20 units',
    stock: '150 units',
  },
];

export default function ProductCatalog({ formData, activeView = 'products', setActiveView }) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo Header */}
          <div className="h-16 px-6 flex items-center gap-3 border-b border-slate-100">
            <div className="w-8 h-8 bg-[#0F172A] rounded-xl flex items-center justify-center text-white">
              <Package className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm tracking-wide text-[#0F172A]">B2B Platform</span>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveView && setActiveView('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeView === 'dashboard'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView && setActiveView('products')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeView === 'products'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Products</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView && setActiveView('orders')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                activeView === 'orders'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-4 h-4" />
                <span>Orders</span>
              </div>
              <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                3
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView && setActiveView('shipping')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeView === 'shipping'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Shipping</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView && setActiveView('messages')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                activeView === 'messages'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
              </div>
              <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                5
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView && setActiveView('admin')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeView === 'admin'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Admin</span>
            </button>
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-slate-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">
            {formData?.companyName ? formData.companyName.charAt(0).toUpperCase() : 'A'}
          </div>
          <div className="overflow-hidden">
            <h4 className="text-xs font-semibold text-[#0F172A] truncate">
              {formData?.companyName || 'Company Name'}
            </h4>
            <p className="text-[11px] text-slate-400 truncate">
              {formData?.companyEmail || 'abc@abc.in'}
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-[#0F172A]">
                Product Catalog
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage your product inventory and listings
              </p>
            </div>
            <button className="flex items-center gap-2 bg-[#0F172A] text-white px-4 py-2.5 rounded-xl text-xs font-medium hover:bg-slate-800 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </button>
          </div>

          {/* Filter & Search Bar */}
          <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-slate-200 text-slate-700 placeholder-slate-400"
              />
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl text-xs text-slate-600 cursor-pointer border border-slate-100">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <span>All Categories</span>
                <span className="ml-2 text-[10px] text-slate-400">▼</span>
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm"
              >
                <div className="h-48 bg-slate-50 relative p-4 flex items-center justify-center">
                  <Package className="w-12 h-12 text-slate-300" />
                  <span className="absolute top-4 right-4 bg-[#0F172A] text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                    {product.status}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-[#0F172A] text-sm leading-tight">
                        {product.name}
                      </h3>
                      {product.id !== 1 && (
                        <button className="text-slate-400 hover:text-slate-600 ml-2">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {product.category}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs pt-4 border-t border-slate-50">
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Price</span>
                      <span className="font-bold text-[#0F172A]">
                        {product.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500">
                      <span>MOQ</span>
                      <span className="font-bold text-[#0F172A]">
                        {product.moq}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Stock</span>
                      <span className="font-bold text-[#0F172A]">
                        {product.stock}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}