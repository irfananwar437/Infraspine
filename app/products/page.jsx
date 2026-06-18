'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import {
  ArrowRight, Check, ChevronRight, ChevronDown,
  BarChart2, Users, MessageSquare, Zap, Package, ShieldCheck, Globe,
  ShoppingCart, Star, MonitorDot, Building2, HardDrive, Wifi,
} from 'lucide-react'

// ─── Product mockup screenshots (reused from homepage) ──────────────────────
function ERPMockup({ color }) {
  return (
    <div className="rounded-xl overflow-hidden border text-[10px] font-mono" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-5 rounded bg-slate-100 flex items-center px-2 text-slate-400 text-[9px]">app.infraspine.com/erp</div>
      </div>
      <div className="flex" style={{ minHeight: '220px' }}>
        <div className="w-8 border-r flex flex-col items-center gap-3 py-3" style={{ background: '#0A1628', borderColor: '#1E3A5F' }}>
          {['H','F','I','P','R'].map((l,i) => (
            <div key={i} className="w-5 h-5 rounded flex items-center justify-center text-[8px] font-bold"
              style={{ background: i===0 ? color+'33' : 'transparent', color: i===0 ? color : '#64748B' }}>{l}</div>
          ))}
        </div>
        <div className="flex-1 p-3 space-y-2.5">
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Dashboard Overview</div>
          <div className="grid grid-cols-3 gap-2">
            {[['248','Employees'],['$184k','Payroll'],['12','Open Req']].map(([v,l],i)=>(
              <div key={i} className="rounded-lg p-2 border" style={{ background:'#FFFFFF', borderColor:'#E2E8F0' }}>
                <div className="font-black text-[13px]" style={{ color }}>{v}</div>
                <div className="text-slate-400 text-[8px]">{l}</div>
              </div>
            ))}
          </div>
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
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-5 rounded bg-slate-100 flex items-center px-2 text-slate-400 text-[9px]">www.yourstore.com</div>
        <ShoppingCart size={10} style={{ color }} />
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-b" style={{ background: '#FFFFFF', borderColor: '#F1F5F9' }}>
        <span className="font-black text-[10px]" style={{ color }}>STORE</span>
        <div className="flex gap-3 text-[8px] text-slate-400">
          {['Home','Shop','About','Contact'].map(l => <span key={l}>{l}</span>)}
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-5 rounded px-2 flex items-center text-[8px] font-bold text-white" style={{ background: color }}>Cart (3)</div>
        </div>
      </div>
      <div className="mx-3 mt-2 rounded-lg px-3 py-2.5 flex items-center justify-between" style={{ background: `linear-gradient(135deg, ${color}22, ${color}08)`, border: `1px solid ${color}30` }}>
        <div>
          <div className="text-[9px] font-black" style={{ color }}>Summer Sale — Up to 40% Off</div>
          <div className="text-[7.5px] text-slate-400 mt-0.5">Free shipping on orders over $50</div>
        </div>
        <div className="h-5 rounded px-2 flex items-center text-[8px] font-bold text-white" style={{ background: color }}>Shop Now</div>
      </div>
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

// ─── Products data ──────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'erp',
    icon: BarChart2,
    label: 'ERP System',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'InfraSpine ERP',
    tagline: 'Complete Business Operations Platform',
    badge: 'Most Popular',
    hero: 'One system to run your entire business — HR, finance, inventory, procurement, and operations — from a single dashboard.',
    desc: 'A fully integrated ERP system covering HR, Payroll, Finance, Inventory, and Operations. Built for growing enterprises that need one system to manage everything — from a single dashboard.',
    features: ['HR & Payroll Management', 'Financial Ledger & Reporting', 'Inventory & Supply Chain', 'Multi-branch & Multi-currency', 'Role-based Access Control', 'Automated Compliance Reports'],
    modules: ['HR', 'Finance', 'Inventory', 'Procurement', 'Payroll', 'Reports'],
    usedBy: 'Manufacturing, Retail, Healthcare, Logistics',
    highlights: [
      { metric: '85%', label: 'Less manual entry' },
      { metric: '3x', label: 'Faster reporting' },
      { metric: '60%', label: 'Fewer data errors' },
      { metric: '100%', label: 'Real-time visibility' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'React', 'REST APIs', 'Docker'],
    deployment: '2–4 Weeks',
  },
  {
    id: 'crm',
    icon: Users,
    label: 'CRM',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'InfraSpine CRM',
    tagline: 'Sales & Customer Management System',
    badge: null,
    hero: 'Manage leads, clients, pipelines, and follow-ups in one place with WhatsApp integration built in.',
    desc: 'Manage leads, clients, pipelines, and follow-ups in one place. Built for sales teams that want full visibility, automated reminders, and faster deal closure — with WhatsApp built in.',
    features: ['Lead & Pipeline Tracking', 'Client Communication Logs', 'Sales Analytics Dashboard', 'WhatsApp Integration', 'Automated Follow-up Reminders', 'Team Performance Reports'],
    modules: ['Leads', 'Contacts', 'Deals', 'Tasks', 'Reports', 'WhatsApp'],
    usedBy: 'Sales Teams, Real Estate, Financial Services',
    highlights: [
      { metric: '2x', label: 'Faster deal closure' },
      { metric: '40%', label: 'More lead conversion' },
      { metric: '100%', label: 'Pipeline visibility' },
      { metric: '0', label: 'Missed follow-ups' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WhatsApp API', 'REST APIs'],
    deployment: '2–3 Weeks',
  },
  {
    id: 'automate',
    icon: Zap,
    label: 'Automation',
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'InfraSpine Automate',
    tagline: 'n8n-Powered Business Workflow Engine',
    badge: 'New',
    hero: 'Automate repetitive tasks across your entire business with a visual drag-and-drop workflow builder.',
    desc: 'Automate repetitive tasks across your entire business. From approval workflows and report generation to WhatsApp bots and cross-system integrations — with a visual drag-and-drop builder.',
    features: ['Visual No-Code Workflow Builder', 'WhatsApp Bot Builder', 'Cross-system API Integrations', '500+ Pre-built Connectors', 'Scheduled & Triggered Automations', 'Error Logs & Retry Management'],
    modules: ['Workflows', 'Triggers', 'Bots', 'APIs', 'Scheduler', 'Logs'],
    usedBy: 'Operations Teams, HR, Customer Support',
    highlights: [
      { metric: '200+', label: 'Hours saved/month' },
      { metric: '500+', label: 'Connectors available' },
      { metric: '50%', label: 'Less manual work' },
      { metric: '24/7', label: 'Automation uptime' },
    ],
    techStack: ['n8n', 'Node.js', 'REST APIs', 'WhatsApp API', 'OpenAI', 'Docker'],
    deployment: '1–2 Weeks',
  },
  {
    id: 'comms',
    icon: MessageSquare,
    label: 'Communications',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'InfraSpine Comms',
    tagline: 'WhatsApp Business & PBX Unified',
    badge: null,
    hero: 'Unify WhatsApp Business API, PBX phone system, and team messaging — all from one dashboard.',
    desc: 'Unify your entire business communications — WhatsApp Business API, PBX phone system, and team messaging — all from one dashboard. Never miss a customer message again.',
    features: ['WhatsApp Business API', 'PBX & VoIP Management', 'Auto-reply & AI Chatbots', 'Team Inbox & Smart Routing', 'Broadcast Messaging', 'Call Recording & Analytics'],
    modules: ['WhatsApp', 'PBX', 'Chatbot', 'Inbox', 'Broadcast', 'Analytics'],
    usedBy: 'Customer Support, Sales, Operations',
    highlights: [
      { metric: '3x', label: 'Faster response time' },
      { metric: '0', label: 'Missed messages' },
      { metric: '70%', label: 'Auto-resolved queries' },
      { metric: '100%', label: 'Message tracking' },
    ],
    techStack: ['WhatsApp Business API', 'Asterisk PBX', 'Node.js', 'React', 'WebSocket'],
    deployment: '1–2 Weeks',
  },
  {
    id: 'monitor',
    icon: ShieldCheck,
    label: 'Monitoring',
    color: '#0891B2',
    bg: '#ECFEFF',
    border: '#A5F3FC',
    name: 'InfraSpine Monitor',
    tagline: 'Real-Time IT Infrastructure Monitoring',
    badge: null,
    hero: 'Keep your entire IT stack healthy with live dashboards, smart alerts, and automated incident response.',
    desc: 'Keep your entire IT stack healthy with live dashboards, smart threshold alerts, uptime tracking, and automated incident response. Know about problems before your users do.',
    features: ['Live Server & Network Dashboard', 'Smart Threshold Alerts', 'Uptime & SLA Reporting', 'Auto Incident Escalation', 'Historical Performance Logs', 'Multi-site Monitoring'],
    modules: ['Servers', 'Network', 'Alerts', 'SLA', 'Incidents', 'Logs'],
    usedBy: 'IT Teams, MSPs, Enterprise Operations',
    highlights: [
      { metric: '99.9%', label: 'Uptime achieved' },
      { metric: '<2min', label: 'Alert response' },
      { metric: '70%', label: 'Fewer incidents' },
      { metric: '24/7', label: 'Live monitoring' },
    ],
    techStack: ['Zabbix', 'PRTG', 'Grafana', 'Node.js', 'React', 'REST APIs'],
    deployment: '1–2 Weeks',
  },
  {
    id: 'stock',
    icon: Package,
    label: 'Inventory',
    color: '#EA580C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'InfraSpine Stock',
    tagline: 'Inventory & Warehouse Management',
    badge: null,
    hero: 'Full inventory control with barcode scanning, real-time alerts, and multi-warehouse support.',
    desc: 'Full inventory control with barcode scanning, real-time stock alerts, purchase order workflows, and supplier management — designed for multi-location and multi-warehouse businesses.',
    features: ['Barcode & QR Scanning', 'Real-time Stock Level Alerts', 'Purchase Order Workflow', 'Supplier Management', 'Multi-warehouse Support', 'Expiry & Batch Tracking'],
    modules: ['Stock', 'Warehouses', 'Orders', 'Suppliers', 'Barcodes', 'Reports'],
    usedBy: 'Retail, Manufacturing, Wholesale, Healthcare',
    highlights: [
      { metric: '85%', label: 'Fewer discrepancies' },
      { metric: '40%', label: 'Faster stock checks' },
      { metric: '100%', label: 'Batch traceability' },
      { metric: '3x', label: 'Faster reordering' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Barcode SDK', 'REST APIs'],
    deployment: '2–3 Weeks',
  },
  {
    id: 'website',
    icon: Globe,
    label: 'Web Development',
    color: '#0F766E',
    bg: '#F0FDFA',
    border: '#99F6E4',
    name: 'InfraSpine Web',
    tagline: 'Custom Websites & eCommerce Stores',
    badge: 'New',
    hero: 'Professional websites, eCommerce stores, and web portals — fully custom, mobile-first, and SEO-ready.',
    desc: 'We design and develop professional websites, eCommerce stores, and web portals — fully custom, mobile-first, and SEO-ready. From landing pages to full multi-vendor marketplaces, we build it all.',
    features: ['eCommerce Store (Shopify / Custom)', 'Corporate & Portfolio Websites', 'Multi-vendor Marketplace', 'SEO & Performance Optimized', 'Payment Gateway Integration', 'Admin Dashboard & CMS'],
    modules: ['eCommerce', 'Corporate', 'Landing Page', 'Web Portal', 'Marketplace', 'CMS'],
    usedBy: 'Retail, Startups, Enterprises, Service Businesses',
    highlights: [
      { metric: '100%', label: 'Mobile responsive' },
      { metric: '95+', label: 'PageSpeed score' },
      { metric: '3x', label: 'More conversions' },
      { metric: 'SEO', label: 'Built-in optimisation' },
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Shopify', 'Stripe', 'Vercel'],
    deployment: '2–6 Weeks',
  },
]

// ─── FAQ ────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Are these off-the-shelf products or custom-built?', a: 'Every product is built from scratch to match your exact business workflows. We don\'t resell generic software — each system is tailored to how your team actually works.' },
  { q: 'Can I start with one product and add more later?', a: 'Absolutely. Most clients start with ERP or CRM and expand to Automation, Comms, or Monitoring as they grow. All products integrate seamlessly with each other.' },
  { q: 'How long does deployment take?', a: 'Typically 1–6 weeks depending on the product and customisation level. We provide a detailed timeline in every proposal with milestone-based delivery.' },
  { q: 'Do you provide training and support?', a: 'Yes — every product includes admin training, user manuals, video walkthroughs, and a post-launch support period. Ongoing managed support is available via retainer.' },
  { q: 'Can these products integrate with our existing systems?', a: 'Yes. All our products are built with REST APIs and can integrate with your existing ERP, CRM, accounting software, WhatsApp, payment gateways, and more.' },
  { q: 'What about data migration from our current system?', a: 'We handle complete data migration as part of every deployment. Your existing data is mapped, cleaned, validated, and imported with zero data loss.' },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>FAQs</span>
            <div className="h-px w-6" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border bg-white transition-all"
              style={{ borderColor: open === i ? '#00C853' : '#E2E8F0', boxShadow: open === i ? '0 4px 20px rgba(0,200,83,0.08)' : 'none' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="text-[14px] font-bold" style={{ color: '#0A1628' }}>{faq.q}</span>
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{ background: open === i ? '#00C853' : '#F1F5F9', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  <ChevronRight size={14} style={{ color: open === i ? '#fff' : '#64748B' }} />
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px mb-4" style={{ background: '#F1F5F9' }} />
                  <p className="text-[13.5px] leading-relaxed" style={{ color: '#475569' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main page ──────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [active, setActive] = useState('erp')
  const product = PRODUCTS.find(p => p.id === active)
  const Mockup = MOCKUPS[active]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle,#00C853,transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Products</span>
            </div>
            <h1 className="text-[30px] sm:text-[46px] lg:text-[56px] font-black leading-[1.06] tracking-tight text-white mb-5">
              Software Built for<br />
              <span style={{ color: '#00C853' }}>Enterprise Growth</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-2xl" style={{ color: '#94A3B8' }}>
              Seven specialised software products — from ERP and CRM to workflow automation and IT monitoring — each custom-built for your business and fully integrated with the rest.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#product-detail"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#00C853', color: '#0A1628' }}>
                Explore Products <ArrowRight size={15} />
              </a>
              <a href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request a Demo
              </a>
            </div>
          </div>

          {/* Product pills */}
          <div className="flex flex-wrap gap-2 mt-10">
            {PRODUCTS.map(p => (
              <span key={p.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8' }}>
                <p.icon size={11} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Overview Cards ── */}
      <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Product Suite</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              7 Products, <span style={{ color: '#00C853' }}>One Integrated Platform</span>
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Each product works standalone or as part of a unified business system. Click any card to explore.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PRODUCTS.map(p => (
              <a key={p.id} href="#product-detail" onClick={() => setActive(p.id)}
                className="group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ borderColor: p.border, boxShadow: '0 2px 12px rgba(10,22,40,0.06)' }}>
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}40)` }} />
                {p.badge && (
                  <div className="absolute top-4 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: p.bg, color: p.color, border: `1px solid ${p.border}` }}>
                    {p.badge}
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: p.bg, border: `1.5px solid ${p.border}` }}>
                    <p.icon size={18} style={{ color: p.color }} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-[15px] font-black mb-1" style={{ color: '#0A1628' }}>{p.name}</h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wide mb-2" style={{ color: p.color }}>{p.tagline}</p>
                  <p className="text-[13px] leading-relaxed flex-1" style={{ color: '#64748B' }}>{p.hero}</p>
                  <div className="flex items-center gap-1.5 mt-3 text-[11px] font-semibold" style={{ color: p.color }}>
                    Learn more <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Detail Navigator ── */}
      <section id="product-detail" className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Deep-Dive Into Each Product
            </h2>
            <p className="text-[14px]" style={{ color: '#64748B' }}>
              Select a product to see live preview, features, modules, and tech stack.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex overflow-x-auto gap-2 mb-8 pb-1 -mx-5 px-5 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center scrollbar-hide">
            {PRODUCTS.map(p => (
              <button key={p.id} onClick={() => setActive(p.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold border flex-shrink-0 transition-all duration-200"
                style={active === p.id
                  ? { background: p.bg, color: p.color, borderColor: p.border, boxShadow: `0 4px 16px ${p.color}20` }
                  : { background: '#fff', color: '#64748B', borderColor: '#E2E8F0' }}>
                <p.icon size={14} />
                {p.label}
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

                <p className="text-[11px] mb-4" style={{ color: '#94A3B8' }}>
                  USED BY: <span style={{ color: '#64748B' }}>{product.usedBy}</span>
                </p>

                {/* Module pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.modules.map((m, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold" style={{ background: product.bg, color: product.color, border: `1px solid ${product.border}` }}>{m}</span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-2" style={{ color: '#94A3B8' }}>Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                        style={{ background: '#F1F5F9', color: '#475569', border: '1px solid #E2E8F0' }}>
                        {t}
                      </span>
                    ))}
                  </div>
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

              {/* Right — screenshot + metrics */}
              <div className="p-6 flex flex-col justify-between" style={{ background: product.bg }}>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: product.color }}>
                    Live Product Preview
                  </p>
                  <Mockup color={product.color} />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex flex-col items-center py-3 rounded-xl border"
                      style={{ background: '#fff', borderColor: product.border }}>
                      <span className="text-[20px] font-black leading-none mb-0.5" style={{ color: product.color }}>{h.metric}</span>
                      <span className="text-[10px] font-medium text-center" style={{ color: '#64748B' }}>{h.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center py-2.5 border-t" style={{ borderColor: product.border }}>
                  <span className="text-[11px]" style={{ color: '#64748B' }}>Deployment</span>
                  <span className="text-[11px] font-bold" style={{ color: product.color }}>{product.deployment}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Integration Ecosystem ── */}
      <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Integration</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              All Products <span style={{ color: '#00C853' }}>Work Together</span>
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Every InfraSpine product is designed to integrate seamlessly — creating one unified business platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { from: 'ERP', to: 'CRM', desc: 'Customer data syncs between sales pipeline and business operations automatically.', color: '#2563EB' },
              { from: 'CRM', to: 'Comms', desc: 'WhatsApp conversations, call logs, and emails linked directly to client records.', color: '#7C3AED' },
              { from: 'ERP', to: 'Stock', desc: 'Inventory levels, purchase orders, and supplier data flow in real-time.', color: '#EA580C' },
              { from: 'Automate', to: 'All Products', desc: 'Trigger workflows across any product — approvals, notifications, reports, and syncs.', color: '#D97706' },
              { from: 'Monitor', to: 'Automate', desc: 'Infrastructure alerts trigger automated incident response and team notifications.', color: '#0891B2' },
              { from: 'Web', to: 'ERP + CRM', desc: 'Website orders, leads, and payments feed directly into your ERP and CRM.', color: '#0F766E' },
            ].map((int, i) => (
              <div key={i} className="p-5 rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: '#E2E8F0', background: '#fff' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold" style={{ background: `${int.color}15`, color: int.color }}>{int.from}</span>
                  <ArrowRight size={12} style={{ color: '#CBD5E1' }} />
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold" style={{ background: `${int.color}15`, color: int.color }}>{int.to}</span>
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{int.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why InfraSpine Products ── */}
      <section className="py-16" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Why Us</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Why Choose <span style={{ color: '#00C853' }}>InfraSpine Products</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Custom-Built, Not Off-the-Shelf', desc: 'Every product is developed around your exact business workflow — no template limitations or unnecessary features.', color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
              { title: 'Fully Integrated Suite',           desc: 'All 7 products share the same data layer and integrate natively — no third-party middleware or manual syncing.', color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0' },
              { title: 'White-Label Ready',                desc: 'Every product can be white-labelled with your branding — perfect for MSPs and agencies reselling to their clients.', color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
              { title: '24/7 Support & SLA',               desc: 'Written SLAs with guaranteed response times, 24/7 monitoring, and a dedicated account manager for every client.', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A' },
              { title: 'Rapid Deployment',                 desc: 'Most products go live within 1–4 weeks. We follow an agile delivery model with milestone-based progress updates.', color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA' },
              { title: 'Own Your Data',                    desc: 'Your data lives on your infrastructure or your chosen cloud — you always retain full ownership and export capability.', color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: item.color }} />
                <h3 className="text-[15px] font-bold mb-2" style={{ color: '#0A1628' }}>{item.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { value: '7',    label: 'Product Suite',        color: '#00C853' },
              { value: '50+',  label: 'Deployments',          color: '#2563EB' },
              { value: '24/7', label: 'Support & Monitoring', color: '#7C3AED' },
              { value: '99.9%',label: 'Uptime SLA',           color: '#EA580C' },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex flex-col items-center py-8 px-4"
                style={{ borderRight: i < arr.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
                <span className="text-[34px] font-black leading-none mb-1" style={{ color: s.color }}>{s.value}</span>
                <span className="text-[12px] font-medium text-center" style={{ color: '#64748B' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20" style={{ background: '#0A1628' }}>
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-6" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Get Started</span>
            <div className="h-px w-6" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-[24px] sm:text-[40px] font-black text-white mb-4 leading-tight">
            Ready to See a<br /><span style={{ color: '#00C853' }}>Live Demo?</span>
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
            Book a free product demo and see how InfraSpine products can transform your business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#00C853', color: '#0A1628' }}>
              Request a Free Demo <ArrowRight size={15} />
            </a>
            <a href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
              style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
              Get Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
