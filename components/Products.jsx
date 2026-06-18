'use client'
import { useState } from 'react'
import { ArrowRight, BarChart2, Users, MessageSquare, Zap, Package, ShieldCheck, Check, ChevronRight, Globe, ShoppingCart, Star } from 'lucide-react'

// ─── Product mockup screenshots ───────────────────────────────────────────────
function ERPMockup({ color }) {
  return (
    <div className="rounded-xl overflow-hidden border text-[10px] font-mono" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-5 rounded bg-slate-100 flex items-center px-2 text-slate-400 text-[9px]">app.infraspine.com/erp</div>
      </div>
      <div className="flex" style={{ minHeight: '220px' }}>
        {/* Sidebar */}
        <div className="w-8 border-r flex flex-col items-center gap-3 py-3" style={{ background: '#0A1628', borderColor: '#1E3A5F' }}>
          {['H','F','I','P','R'].map((l,i) => (
            <div key={i} className="w-5 h-5 rounded flex items-center justify-center text-[8px] font-bold"
              style={{ background: i===0 ? color+'33' : 'transparent', color: i===0 ? color : '#64748B' }}>{l}</div>
          ))}
        </div>
        {/* Content */}
        <div className="flex-1 p-3 space-y-2.5">
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Dashboard Overview</div>
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2">
            {[['248','Employees'],['$184k','Payroll'],['12','Open Req']].map(([v,l],i)=>(
              <div key={i} className="rounded-lg p-2 border" style={{ background:'#FFFFFF', borderColor:'#E2E8F0' }}>
                <div className="font-black text-[13px]" style={{ color }}>{v}</div>
                <div className="text-slate-400 text-[8px]">{l}</div>
              </div>
            ))}
          </div>
          {/* Table */}
          <div className="rounded-lg border overflow-hidden" style={{ borderColor:'#E2E8F0' }}>
            <div className="grid grid-cols-3 px-2 py-1.5 text-[8px] font-bold text-slate-400 border-b" style={{ background:'#F8FAFC', borderColor:'#E2E8F0' }}>
              <span>Employee</span><span>Dept</span><span>Status</span>
            </div>
            {[['Ali Hassan','IT','Active'],['Sara K.','Finance','Active'],['Omar M.','HR','Leave']].map(([n,d,s],i)=>(
              <div key={i} className="grid grid-cols-3 px-2 py-1.5 text-[8px] border-b last:border-0" style={{ borderColor:'#F1F5F9' }}>
                <span className="text-slate-700 font-medium">{n}</span>
                <span className="text-slate-400">{d}</span>
                <span className="font-bold" style={{ color: s==='Active'?'#16A34A':'#D97706' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CRMMockup({ color }) {
  const stages = [['Lead','bg-blue-100 text-blue-600'],['Qualified','bg-purple-100 text-purple-600'],['Proposal','bg-amber-100 text-amber-600'],['Won','bg-green-100 text-green-600']]
  return (
    <div className="rounded-xl overflow-hidden border text-[10px] font-mono" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-5 rounded bg-slate-100 flex items-center px-2 text-slate-400 text-[9px]">app.infraspine.com/crm/pipeline</div>
      </div>
      <div className="p-3" style={{ minHeight: '220px' }}>
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Sales Pipeline — Q1 2025</div>
        <div className="grid grid-cols-4 gap-2">
          {stages.map(([label, cls], si) => (
            <div key={si} className="space-y-1.5">
              <div className={`text-[8px] font-bold px-2 py-1 rounded-full text-center ${cls}`}>{label}</div>
              {[...Array(si===0?3:si===1?2:si===2?2:1)].map((_,i)=>(
                <div key={i} className="rounded-lg p-2 border" style={{ background:'#FFFFFF', borderColor:'#E2E8F0' }}>
                  <div className="text-[8px] font-bold text-slate-700">Client {String.fromCharCode(65+si*2+i)}</div>
                  <div className="text-[8px] text-slate-400">${(si+1)*12+i*8}k</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-3 text-[8px]">
          <span style={{ color }}>● 8 Active Deals</span>
          <span className="text-slate-400">● $142k Pipeline</span>
          <span className="text-green-600">● $38k Won</span>
        </div>
      </div>
    </div>
  )
}

function AutomateMockup({ color }) {
  const nodes = [
    { label: 'WhatsApp\nTrigger', x: 8, y: 35, c: '#25D366' },
    { label: 'Check\nKeyword', x: 32, y: 35, c: color },
    { label: 'Send\nReply', x: 56, y: 18, c: '#2563EB' },
    { label: 'Log to\nCRM', x: 56, y: 55, c: '#7C3AED' },
    { label: 'Notify\nTeam', x: 80, y: 35, c: '#D97706' },
  ]
  return (
    <div className="rounded-xl overflow-hidden border text-[10px] font-mono" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-5 rounded bg-slate-100 flex items-center px-2 text-slate-400 text-[9px]">app.infraspine.com/automate/builder</div>
      </div>
      <div className="p-3 relative" style={{ minHeight: '220px' }}>
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Workflow Builder — WhatsApp Bot</div>
        <div className="relative" style={{ height: '140px' }}>
          <svg className="absolute inset-0 w-full h-full">
            <line x1="18%" y1="50%" x2="32%" y2="50%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 2"/>
            <line x1="46%" y1="50%" x2="56%" y2="28%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 2"/>
            <line x1="46%" y1="50%" x2="56%" y2="72%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 2"/>
            <line x1="72%" y1="28%" x2="80%" y2="50%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 2"/>
            <line x1="72%" y1="72%" x2="80%" y2="50%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 2"/>
          </svg>
          {nodes.map((n, i) => (
            <div key={i} className="absolute flex flex-col items-center" style={{ left:`${n.x}%`, top:`${n.y}%`, transform:'translate(-50%,-50%)' }}>
              <div className="rounded-lg px-2 py-1.5 text-[7.5px] font-bold text-center border whitespace-pre-line leading-tight" style={{ background:'#FFFFFF', borderColor:n.c+'44', color:n.c, minWidth:'44px', boxShadow:`0 2px 8px ${n.c}20` }}>
                {n.label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 text-[8px] mt-1">
          <span className="text-green-600">● Running</span>
          <span className="text-slate-400">● 1,248 executions today</span>
        </div>
      </div>
    </div>
  )
}

function CommsMockup({ color }) {
  const msgs = [
    { from:'Customer', text:'Hi, I need support with my order', time:'10:02', out:false },
    { from:'Bot', text:'Hello! How can I help you today?', time:'10:02', out:true },
    { from:'Customer', text:'Order #4521 not delivered yet', time:'10:03', out:false },
    { from:'Agent', text:'Checking your order now...', time:'10:04', out:true },
  ]
  return (
    <div className="rounded-xl overflow-hidden border text-[10px] font-mono" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-5 rounded bg-slate-100 flex items-center px-2 text-slate-400 text-[9px]">app.infraspine.com/comms/inbox</div>
      </div>
      <div className="flex" style={{ minHeight:'220px' }}>
        <div className="w-24 border-r p-2 space-y-1.5" style={{ background:'#FFFFFF', borderColor:'#E2E8F0' }}>
          <div className="text-[8px] font-bold text-slate-400 uppercase mb-2">Inbox (6)</div>
          {['Order Query','Support Req','Sales Lead','Follow-up'].map((c,i)=>(
            <div key={i} className="rounded-lg p-1.5 text-[8px] cursor-pointer" style={{ background:i===0?color+'15':'transparent', color:i===0?color:'#64748B', fontWeight:i===0?700:400 }}>{c}</div>
          ))}
        </div>
        <div className="flex-1 flex flex-col p-2">
          <div className="text-[8px] font-bold text-slate-600 mb-2 pb-1.5 border-b" style={{ borderColor:'#F1F5F9' }}>Order Query · WhatsApp</div>
          <div className="flex-1 space-y-2 overflow-hidden">
            {msgs.map((m,i)=>(
              <div key={i} className={`flex ${m.out?'justify-end':''}`}>
                <div className="rounded-xl px-2.5 py-1.5 text-[8px] max-w-[75%]"
                  style={{ background:m.out?color:'#F1F5F9', color:m.out?'#fff':'#374151' }}>
                  {m.text}
                  <span className="ml-2 opacity-60">{m.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MonitorMockup({ color }) {
  const bars = [['CPU','38%',38,'#3B82F6'],['RAM','62%',62,'#8B5CF6'],['Disk','21%',21,'#10B981'],['Net','74%',74,color]]
  return (
    <div className="rounded-xl overflow-hidden border text-[10px] font-mono" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-5 rounded bg-slate-100 flex items-center px-2 text-slate-400 text-[9px]">app.infraspine.com/monitor</div>
        <div className="flex items-center gap-1 text-[8px] text-green-600 font-bold"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/>LIVE</div>
      </div>
      <div className="p-3" style={{ minHeight:'220px' }}>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[['Servers Online','12/12','#16A34A'],['Alerts','2 Minor','#D97706'],['Uptime','99.97%',color]].map(([l,v,c],i)=>(
            <div key={i} className="rounded-lg p-2 border text-center" style={{ background:'#FFFFFF', borderColor:'#E2E8F0' }}>
              <div className="font-black text-[12px]" style={{ color:c }}>{v}</div>
              <div className="text-slate-400 text-[8px]">{l}</div>
            </div>
          ))}
        </div>
        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-2">Infrastructure Health</div>
        <div className="space-y-2">
          {bars.map(([l,v,p,c],i)=>(
            <div key={i} className="flex items-center gap-2">
              <span className="text-slate-400 w-8">{l}</span>
              <div className="flex-1 h-2 rounded-full" style={{ background:'#E2E8F0' }}>
                <div className="h-full rounded-full transition-all" style={{ width:`${p}%`, background:c }}/>
              </div>
              <span className="font-bold w-7 text-right" style={{ color:c }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StockMockup({ color }) {
  return (
    <div className="rounded-xl overflow-hidden border text-[10px] font-mono" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-5 rounded bg-slate-100 flex items-center px-2 text-slate-400 text-[9px]">app.infraspine.com/stock</div>
      </div>
      <div className="p-3" style={{ minHeight:'220px' }}>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[['Total SKUs','1,248'],['Low Stock','18'],['Value','$284k']].map(([l,v],i)=>(
            <div key={i} className="rounded-lg p-2 border text-center" style={{ background:'#FFFFFF', borderColor:'#E2E8F0' }}>
              <div className="font-black text-[13px]" style={{ color }}>{v}</div>
              <div className="text-slate-400 text-[8px]">{l}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border overflow-hidden" style={{ borderColor:'#E2E8F0' }}>
          <div className="grid grid-cols-4 px-2 py-1.5 text-[8px] font-bold text-slate-400 border-b" style={{ background:'#F8FAFC', borderColor:'#E2E8F0' }}>
            <span>Item</span><span>SKU</span><span>Stock</span><span>Status</span>
          </div>
          {[['Router X2','RX-001','48 units','OK'],['Switch 24P','SW-024','6 units','Low'],['Server Rack','SR-042','2 units','Low'],['UPS 3KVA','UP-300','15 units','OK']].map(([n,s,q,st],i)=>(
            <div key={i} className="grid grid-cols-4 px-2 py-1.5 text-[8px] border-b last:border-0" style={{ borderColor:'#F1F5F9' }}>
              <span className="text-slate-700 font-medium truncate">{n}</span>
              <span className="text-slate-400">{s}</span>
              <span className="text-slate-600">{q}</span>
              <span className="font-bold" style={{ color:st==='OK'?'#16A34A':'#EF4444' }}>{st}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WebsiteMockup({ color }) {
  const products = [
    { name: 'Wireless Headphones', price: '$129', rating: 4.8, tag: 'Best Seller' },
    { name: 'Smart Watch Pro',     price: '$249', rating: 4.6, tag: 'New'         },
    { name: 'Laptop Stand X3',     price: '$79',  rating: 4.9, tag: 'Sale'        },
  ]
  return (
    <div className="rounded-xl overflow-hidden border text-[10px] font-mono" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-5 rounded bg-slate-100 flex items-center px-2 text-slate-400 text-[9px]">www.yourstore.com</div>
        <ShoppingCart size={10} style={{ color }} />
      </div>
      {/* Navbar */}
      <div className="flex items-center justify-between px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#F1F5F9' }}>
        <span className="font-black text-[10px]" style={{ color }}>STORE</span>
        <div className="flex gap-3 text-[8px] text-slate-400">
          {['Home','Shop','About','Contact'].map(l => <span key={l}>{l}</span>)}
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-5 rounded px-2 flex items-center text-[8px] font-bold text-white" style={{ background: color }}>Cart (3)</div>
        </div>
      </div>
      {/* Hero banner */}
      <div className="mx-3 mt-2 rounded-lg px-3 py-2.5 flex items-center justify-between" style={{ background: `linear-gradient(135deg, ${color}22, ${color}08)`, border: `1px solid ${color}30` }}>
        <div>
          <div className="text-[9px] font-black" style={{ color }}>Summer Sale — Up to 40% Off</div>
          <div className="text-[7.5px] text-slate-400 mt-0.5">Free shipping on orders over $50</div>
        </div>
        <div className="h-5 rounded px-2 flex items-center text-[8px] font-bold text-white" style={{ background: color }}>Shop Now</div>
      </div>
      {/* Product grid */}
      <div className="p-3 grid grid-cols-3 gap-2">
        {products.map((p, i) => (
          <div key={i} className="rounded-lg border overflow-hidden" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="h-12 flex items-center justify-center relative" style={{ background: `${color}10` }}>
              <ShoppingCart size={16} color={color} />
              <span className="absolute top-1 right-1 text-[7px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ background: color }}>{p.tag}</span>
            </div>
            <div className="p-1.5">
              <div className="text-[7.5px] font-bold text-slate-700 leading-tight mb-0.5">{p.name}</div>
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-black" style={{ color }}>{p.price}</span>
                <div className="flex items-center gap-0.5">
                  <Star size={7} fill="#FBBF24" color="#FBBF24" />
                  <span className="text-[7px] text-slate-400">{p.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const MOCKUPS = { erp: ERPMockup, crm: CRMMockup, automate: AutomateMockup, comms: CommsMockup, monitor: MonitorMockup, stock: StockMockup, website: WebsiteMockup }

// ─── Categories data ───────────────────────────────────────────────────────────
const CATEGORIES = [
  { id:'erp',      icon:BarChart2,    label:'ERP System',      color:'#2563EB', bg:'#EFF6FF', border:'#BFDBFE', name:'InfraSpine ERP',      tagline:'Complete Business Operations Platform',    badge:'Most Popular', desc:'A fully integrated ERP system covering HR, Payroll, Finance, Inventory, and Operations. Built for growing enterprises that need one system to manage everything — from a single dashboard.', features:['HR & Payroll Management','Financial Ledger & Reporting','Inventory & Supply Chain','Multi-branch & Multi-currency','Role-based Access Control','Automated Compliance Reports'], modules:['HR','Finance','Inventory','Procurement','Payroll','Reports'], usedBy:'Manufacturing, Retail, Healthcare, Logistics' },
  { id:'crm',      icon:Users,        label:'CRM',             color:'#7C3AED', bg:'#F5F3FF', border:'#DDD6FE', name:'InfraSpine CRM',      tagline:'Sales & Customer Management System',       badge:null,           desc:'Manage leads, clients, pipelines, and follow-ups in one place. Built for sales teams that want full visibility, automated reminders, and faster deal closure — with WhatsApp built in.',   features:['Lead & Pipeline Tracking','Client Communication Logs','Sales Analytics Dashboard','WhatsApp Integration','Automated Follow-up Reminders','Team Performance Reports'],               modules:['Leads','Contacts','Deals','Tasks','Reports','WhatsApp'],                 usedBy:'Sales Teams, Real Estate, Financial Services' },
  { id:'automate', icon:Zap,          label:'Automation',      color:'#D97706', bg:'#FFFBEB', border:'#FDE68A', name:'InfraSpine Automate', tagline:'n8n-Powered Business Workflow Engine',     badge:'New',          desc:'Automate repetitive tasks across your entire business. From approval workflows and report generation to WhatsApp bots and cross-system integrations — with a visual drag-and-drop builder.',features:['Visual No-Code Workflow Builder','WhatsApp Bot Builder','Cross-system API Integrations','500+ Pre-built Connectors','Scheduled & Triggered Automations','Error Logs & Retry Management'],modules:['Workflows','Triggers','Bots','APIs','Scheduler','Logs'],                 usedBy:'Operations Teams, HR, Customer Support' },
  { id:'comms',    icon:MessageSquare,label:'Communications',  color:'#16A34A', bg:'#F0FDF4', border:'#BBF7D0', name:'InfraSpine Comms',    tagline:'WhatsApp Business & PBX Unified',         badge:null,           desc:'Unify your entire business communications — WhatsApp Business API, PBX phone system, and team messaging — all from one dashboard. Never miss a customer message again.',                features:['WhatsApp Business API','PBX & VoIP Management','Auto-reply & AI Chatbots','Team Inbox & Smart Routing','Broadcast Messaging','Call Recording & Analytics'],                       modules:['WhatsApp','PBX','Chatbot','Inbox','Broadcast','Analytics'],              usedBy:'Customer Support, Sales, Operations' },
  { id:'monitor',  icon:ShieldCheck,  label:'Monitoring',      color:'#0891B2', bg:'#ECFEFF', border:'#A5F3FC', name:'InfraSpine Monitor',  tagline:'Real-Time IT Infrastructure Monitoring',  badge:null,           desc:'Keep your entire IT stack healthy with live dashboards, smart threshold alerts, uptime tracking, and automated incident response. Know about problems before your users do.',           features:['Live Server & Network Dashboard','Smart Threshold Alerts','Uptime & SLA Reporting','Auto Incident Escalation','Historical Performance Logs','Multi-site Monitoring'],              modules:['Servers','Network','Alerts','SLA','Incidents','Logs'],                   usedBy:'IT Teams, MSPs, Enterprise Operations' },
  { id:'stock',    icon:Package,      label:'Inventory',       color:'#EA580C', bg:'#FFF7ED', border:'#FED7AA', name:'InfraSpine Stock',    tagline:'Inventory & Warehouse Management',        badge:null,           desc:'Full inventory control with barcode scanning, real-time stock alerts, purchase order workflows, and supplier management — designed for multi-location and multi-warehouse businesses.',  features:['Barcode & QR Scanning','Real-time Stock Level Alerts','Purchase Order Workflow','Supplier Management','Multi-warehouse Support','Expiry & Batch Tracking'],                       modules:['Stock','Warehouses','Orders','Suppliers','Barcodes','Reports'],          usedBy:'Retail, Manufacturing, Wholesale, Healthcare' },
  { id:'website',  icon:Globe,        label:'Web Development', color:'#0F766E', bg:'#F0FDFA', border:'#99F6E4', name:'InfraSpine Web',      tagline:'Custom Websites & eCommerce Stores',      badge:'New',          desc:'We design and develop professional websites, eCommerce stores, and web portals — fully custom, mobile-first, and SEO-ready. From landing pages to full multi-vendor marketplaces, we build it all.',  features:['eCommerce Store (Shopify / Custom)','Corporate & Portfolio Websites','Multi-vendor Marketplace','SEO & Performance Optimized','Payment Gateway Integration','Admin Dashboard & CMS'], modules:['eCommerce','Corporate','Landing Page','Web Portal','Marketplace','CMS'], usedBy:'Retail, Startups, Enterprises, Service Businesses' },
]

export default function Products() {
  const [active, setActive] = useState('erp')
  const product = CATEGORIES.find(c => c.id === active)
  const Mockup = MOCKUPS[active]

  return (
    <section className="py-16" style={{ background: '#FFFFFF' }} id="products">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Products</span>
            <div className="h-px w-8" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight" style={{ color: '#0A1628' }}>
            Software Built for <span style={{ color: '#00C853' }}>Enterprise Growth</span>
          </h2>
          <p className="mt-3 text-[15px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Click any product to see a live preview, features, and pricing.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-1 scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12.5px] font-bold transition-all duration-200 border flex-shrink-0"
              style={active === c.id ? { background: c.bg, color: c.color, borderColor: c.border, boxShadow: `0 4px 16px ${c.color}20` }
                : { background: '#F8FAFC', color: '#64748B', borderColor: '#E2E8F0' }}
            >
              <c.icon size={14} />
              {c.label}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div key={active} className="rounded-2xl border overflow-hidden" style={{ borderColor: product.border, boxShadow: `0 8px 40px ${product.color}12` }}>
          <div className="grid md:grid-cols-2">

            {/* Left — info */}
            <div className="p-7 border-b lg:border-b-0 lg:border-r" style={{ borderColor: product.border, background: '#FFFFFF' }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: product.bg, border: `2px solid ${product.border}` }}>
                  <product.icon size={22} color={product.color} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-xl font-extrabold" style={{ color: '#0A1628' }}>{product.name}</h3>
                    {product.badge && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: product.bg, color: product.color, border: `1px solid ${product.border}` }}>{product.badge}</span>
                    )}
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: product.color }}>{product.tagline}</p>
                </div>
              </div>

              <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#475569' }}>{product.desc}</p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-5">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: product.bg }}>
                      <Check size={9} color={product.color} strokeWidth={3} />
                    </div>
                    <span className="text-[12px]" style={{ color: '#374151' }}>{f}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] mb-5" style={{ color: '#94A3B8' }}>
                USED BY: <span style={{ color: '#64748B' }}>{product.usedBy}</span>
              </p>

              {/* Modules pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.modules.map((m, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold" style={{ background: product.bg, color: product.color, border: `1px solid ${product.border}` }}>{m}</span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a href="/contact-us" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90" style={{ background: product.color, color: '#fff' }}>
                  Get Pricing <ArrowRight size={13} />
                </a>
                <a href="/contact-us" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-all hover:bg-slate-50" style={{ borderColor: product.border, color: product.color }}>
                  Request Demo <ChevronRight size={13} />
                </a>
              </div>
            </div>

            {/* Right — screenshot */}
            <div className="p-6 flex flex-col justify-between" style={{ background: product.bg }}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: product.color }}>
                  Live Product Preview
                </p>
                <Mockup color={product.color} />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[['Deployment','2–4 Weeks'],['Support','24/7 SLA'],['Customizable','Fully'],['White-label','Available']].map(([l,v],i)=>(
                  <div key={i} className="flex justify-between items-center py-2 border-b" style={{ borderColor: `${product.border}` }}>
                    <span className="text-[11px]" style={{ color:'#64748B' }}>{l}</span>
                    <span className="text-[11px] font-bold" style={{ color: product.color }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
