import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Truck, 
  MessageSquare, 
  Shield, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingBag, 
  Users,
  Plus,
  BarChart2,
  Users2
} from 'lucide-react';

export default function Dashboard({ formData }) {
  const recentOrders = [
    { id: '#12345', status: 'Delivered', customer: 'ABC Retail Store', amount: '$2,450', date: '2025-10-10' },
    { id: '#12346', status: 'In Transit', customer: 'XYZ Market', amount: '$1,850', date: '2025-10-09' },
    { id: '#12347', status: 'Processing', customer: 'Quick Shop', amount: '$3,200', date: '2025-10-09' },
    { id: '#12348', status: 'Delivered', customer: 'Global Traders', amount: '$4,100', date: '2025-10-08' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-[#DCFCE7] text-[#15803D]';
      case 'In Transit':
        return 'bg-[#DBEAFE] text-[#1D4ED8]';
      case 'Processing':
        return 'bg-[#FEF3C7] text-[#B45309]';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans antialiased text-[#0F172A]">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo Brand */}
          <div className="h-16 px-6 flex items-center gap-3 border-b border-slate-100">
            <div className="w-8 h-8 bg-[#0F172A] rounded-xl flex items-center justify-center text-white">
              <Package className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm tracking-wide text-[#0F172A]">B2B Platform</span>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 text-xs font-medium">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#0F172A] text-white rounded-xl shadow-sm">
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
              <Package className="w-4 h-4" />
              Products
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors justify-between">
              <span className="flex items-center gap-3">
                <ShoppingCart className="w-4 h-4" />
                Orders
              </span>
              <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">3</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
              <Truck className="w-4 h-4" />
              Shipping
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors justify-between">
              <span className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4" />
                Messages
              </span>
              <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">5</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
              <Shield className="w-4 h-4" />
              Admin
            </a>
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
      <main className="flex-1 p-8 overflow-y-auto space-y-6">
        
        {/* Top Header */}
        <div>
          <h1 className="text-xl font-bold text-[#0F172A]">Dashboard</h1>
          <p className="text-xs text-slate-400 mt-0.5">Welcome back, here's your business summary</p>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-slate-500">Total Revenue</span>
              <DollarSign className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-1">$28,950</h3>
            <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+12.5% <span className="text-slate-400 font-normal">from last month</span></span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-slate-500">Total Orders</span>
              <ShoppingBag className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-1">1,745</h3>
            <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+8.2% <span className="text-slate-400 font-normal">from last month</span></span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-slate-500">Active Products</span>
              <Package className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-1">245</h3>
            <div className="flex items-center gap-1 text-[11px] text-red-500 font-medium">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>-2.1% <span className="text-slate-400 font-normal">from last month</span></span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-slate-500">Active Retailers</span>
              <Users className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-1">89</h3>
            <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+15.3% <span className="text-slate-400 font-normal">from last month</span></span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Sales Overview Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-[#0F172A]">Sales Overview</h3>
              <p className="text-xs text-slate-400">Monthly sales and order trends</p>
            </div>

            {/* Area Chart Container */}
            <div className="relative w-full h-[220px] pt-4">
              <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-6 text-right">6000</span>
                  <div className="flex-1 border-b border-dashed border-slate-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 text-right">4500</span>
                  <div className="flex-1 border-b border-dashed border-slate-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 text-right">3000</span>
                  <div className="flex-1 border-b border-dashed border-slate-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 text-right">1500</span>
                  <div className="flex-1 border-b border-dashed border-slate-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 text-right">0</span>
                  <div className="flex-1 border-b border-slate-300"></div>
                </div>
              </div>

              {/* Area SVG Overlay */}
              <div className="absolute left-8 right-0 top-2 bottom-5">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#64748B" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  
                  <path
                    d="M 0,70 Q 30,120 60,110 T 120,40 T 180,60 T 240,10 T 300,30 L 300,160 L 0,160 Z"
                    fill="url(#areaGradient)"
                  />
                  <path
                    d="M 0,70 Q 30,120 60,110 T 120,40 T 180,60 T 240,10 T 300,30"
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* X-Axis Labels */}
              <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[10px] text-slate-400">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          {/* Product Categories Pie Chart */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-[#0F172A]">Product Categories</h3>
              <p className="text-xs text-slate-400">Distribution by category</p>
            </div>

            <div className="relative my-6 flex items-center justify-center h-48">
              <div 
                className="w-40 h-40 rounded-full shadow-inner"
                style={{
                  background: 'conic-gradient(#0088FF 0deg 144deg, #FF9900 144deg 216deg, #00C897 216deg 324deg, #FF4D4D 324deg 360deg)'
                }}
              ></div>

              <span className="absolute top-2 right-12 text-[11px] font-medium text-[#0088FF]">Electronics 40%</span>
              <span className="absolute bottom-4 right-14 text-[11px] font-medium text-[#FF9900]">Food 20%</span>
              <span className="absolute bottom-12 left-6 text-[11px] font-medium text-[#00C897]">Clothing 30%</span>
              <span className="absolute top-16 right-4 text-[11px] font-medium text-[#FF4D4D]">Other 10%</span>
            </div>
          </div>

        </div>

        {/* Recent Orders Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-[#0F172A]">Recent Orders</h3>
            <p className="text-xs text-slate-400">Your latest transactions and order status</p>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:shadow-sm transition-shadow bg-white"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-[#0F172A]">{order.id}</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{order.customer}</p>
                </div>

                <div className="text-right space-y-1">
                  <span className="text-xs font-bold text-[#0F172A] block">{order.amount}</span>
                  <span className="text-[10px] text-slate-400">{order.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Action 1 */}
          <button className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left hover:border-slate-300 transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-3 text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
              <Package className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#0F172A] mb-1">Add Product</h4>
            <p className="text-[11px] text-slate-400 leading-snug">List a new product in your catalog</p>
          </button>

          {/* Action 2 */}
          <button className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left hover:border-slate-300 transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-3 text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#0F172A] mb-1">View Analytics</h4>
            <p className="text-[11px] text-slate-400 leading-snug">Detailed insights and reports</p>
          </button>

          {/* Action 3 */}
          <button className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left hover:border-slate-300 transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-3 text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
              <Users2 className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#0F172A] mb-1">Manage Retailers</h4>
            <p className="text-[11px] text-slate-400 leading-snug">Connect with your partners</p>
          </button>

        </div>

      </main>
    </div>
  );
}