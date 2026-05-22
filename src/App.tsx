import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Wallet, 
  Users, 
  PieChart, 
  Briefcase, 
  Globe,
  ArrowRight,
  LayoutGrid,
  Search,
  Bell,
  HelpCircle,
  LogOut,
  Landmark,
  ShieldCheck,
  Zap,
  BarChart3,
  Bot,
  Layers,
  Target,
  LineChart,
  Repeat
} from 'lucide-react';
import { cn } from './lib/utils';

interface BoardLink {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof TrendingUp;
  chapter: 'aum' | 'herramientas' | 'analisis';
  meta: string;
  url?: string;
}

const chapters = [
  { id: 'aum', label: 'Seguimiento AUMs', icon: Layers },
  { id: 'herramientas', label: 'Herramientas', icon: ShieldCheck },
  { id: 'analisis', label: 'Análisis Puntuales', icon: Target },
] as const;

const boards: BoardLink[] = [
  // Seguimiento AUMs
  {
    id: 'aum-evolution',
    title: 'Evolución AUMS',
    subtitle: 'Activos, Pasivos por Destino Contable y Familia',
    icon: BarChart3,
    chapter: 'aum',
    meta: 'Diario'
  },
  {
    id: 'aum-variation',
    title: 'Variación AUMs',
    subtitle: 'Variación diaria, semanal y mensual de Activos y Pasivos',
    icon: TrendingUp,
    chapter: 'aum',
    meta: 'Diario',
    url: 'https://app.powerbi.com/links/4hyQSRCDnV?ctid=f5b0d682-1497-4db0-9019-660035554e72&pbi_source=linkShare'
  },
  {
    id: 'aum-trend',
    title: 'Tendencia AUMs',
    subtitle: 'Evolución de la variación diaria por producto y familia',
    icon: LineChart,
    chapter: 'aum',
    meta: 'Diario',
    url: 'https://app.powerbi.com/links/MiHGzQlgXD?ctid=f5b0d682-1497-4db0-9019-660035554e72&pbi_source=linkShare&bookmarkGuid=43943d79-7ad1-41fc-b6fb-7bd125f02011'
  },
  {
    id: 'aum-flow',
    title: 'Flujo de Transaccional',
    subtitle: 'Movimientos transaccionales de los distintos productos del pasivo.',
    icon: Repeat,
    chapter: 'aum',
    meta: 'Diario',
    url: 'https://app.powerbi.com/links/tEHEaFceae?ctid=f5b0d682-1497-4db0-9019-660035554e72&pbi_source=linkShare&bookmarkGuid=0c32888f-86c8-48f1-b289-96c7688d3803'
  },
  {
    id: 'aum-gen-ai',
    title: 'Gen IA (New)',
    subtitle: 'Modulo de Inteligencia Artificial para preguntas sobre datos y seguimiento de AUMs.',
    icon: Bot,
    chapter: 'aum',
    meta: 'Diario'
  },
  // Herramientas
  {
    id: 'business-sectors',
    title: 'Sectores Empresas',
    subtitle: 'Riesgo por sector económico de empresas.',
    icon: ShieldCheck,
    chapter: 'herramientas',
    meta: 'Diario',
    url: 'https://app.powerbi.com/links/ciKfe8Y1_1?ctid=f5b0d682-1497-4db0-9019-660035554e72&pbi_source=linkShare'
  },
  // Análisis Puntuales
  {
    id: 'pymes-potential',
    title: 'Potencial Cartera PYMES',
    subtitle: 'Análisis de clientes PYMES vs su oportunidad en el mercado',
    icon: Landmark,
    chapter: 'analisis',
    meta: 'Dic-25',
    url: 'https://app.powerbi.com/links/K4LQ2_lbrq?ctid=f5b0d682-1497-4db0-9019-660035554e72&pbi_source=linkShare'
  },
  {
    id: 'business-potential',
    title: 'Potencial Cartera Empresas',
    subtitle: 'Análisis de clientes Empresariales y Corporativos vs su oportunidad en el mercado',
    icon: Briefcase,
    chapter: 'analisis',
    meta: 'Dic-25',
    url: 'https://app.powerbi.com/links/So-5ztbHx2?ctid=f5b0d682-1497-4db0-9019-660035554e72&pbi_source=linkShare'
  },
  {
    id: 'micro-potential',
    title: 'Potencial Cartera Micro',
    subtitle: 'Análisis de los clientes microfinanzas vs el buró de crédito.',
    icon: Target,
    chapter: 'analisis',
    meta: 'Dic-25',
    url: 'https://app.powerbi.com/links/LZMvD6mUit?ctid=f5b0d682-1497-4db0-9019-660035554e72&pbi_source=linkShare'
  },
  {
    id: 'portfolio-evolution',
    title: 'McKinsey Análisis Optimización Depósitos',
    subtitle: 'Composición de los portafolios y capacity de los oficiales',
    icon: Users,
    chapter: 'analisis',
    meta: 'MAY-26',
    url: 'https://app.powerbi.com/links/KhM3OniBeH?ctid=f5b0d682-1497-4db0-9019-660035554e72&pbi_source=linkShare'
  }
];

export default function App() {
  const [activeChapter, setActiveChapter] = useState<(typeof chapters)[number]['id']>('aum');

  const filteredBoards = boards.filter(board => board.chapter === activeChapter);

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="h-20 bg-brand-navy flex items-center justify-between px-8 lg:px-12 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-brand-navy" />
          </div>
          <div className="border-l border-white/20 pl-4 py-1 text-nowrap">
            <h1 className="text-white font-display font-bold text-xl leading-none">ANALYTICS HUB</h1>
            <span className="text-brand-yellow text-[10px] font-bold uppercase tracking-widest leading-none">IDN - GENERACIÓN DE VALOR</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-96 max-w-md mx-8 transition-all hover:bg-white/10 focus-within:bg-white/10 focus-within:ring-2 focus-within:ring-brand-yellow/30">
          <Search className="w-4 h-4 text-white/40" />
          <input 
            type="text" 
            placeholder="Buscar en el ecosistema analítico..." 
            className="bg-transparent border-none outline-none text-xs text-white placeholder:text-white/30 w-full"
          />
        </div>

        <div className="flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-white text-xs font-bold leading-tight">Carlos Eduardo Gómez Maldonado</p>
              <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest">ADMINISTRADOR INTELIGENCIA DE NEGOCIOS</p>
            </div>
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-brand-light-blue to-white/10 flex items-center justify-center text-brand-navy font-bold text-sm ring-4 ring-white/5 shadow-inner">
              CG
            </div>
          </div>
          <button className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-8 lg:p-12 max-w-7xl mx-auto w-full">
        <header className="mb-10 text-center lg:text-left">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
              <span className="text-[11px] font-black text-brand-gray uppercase tracking-[0.3em]">REPOSITORIO DE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-navy mb-4 tracking-tighter">
              Análisis de Negocio
            </h2>
            <p className="text-brand-gray/80 max-w-2xl text-sm leading-relaxed mx-auto lg:mx-0">
              Menú centralizado para la toma de decisiones estratégicas. Despliegue el capítulo correspondiente para visualizar los KPI de activos, pasivos y modelos predictivos.
            </p>
          </motion.div>
        </header>

        {/* Tab Navigation (Chapters) */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10 border-b border-slate-200 pb-1">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => setActiveChapter(chapter.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-t-xl transition-all relative group overflow-hidden border-x border-t border-transparent",
                activeChapter === chapter.id 
                  ? "bg-white text-brand-navy border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]" 
                  : "text-slate-400 hover:text-brand-navy hover:bg-slate-50"
              )}
            >
              <chapter.icon className={cn("w-4 h-4 transition-transform", activeChapter === chapter.id ? "scale-110" : "group-hover:scale-110")} />
              <span className="text-xs font-bold uppercase tracking-widest">{chapter.label}</span>
              {activeChapter === chapter.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow"
                />
              )}
            </button>
          ))}
        </div>

        {/* Links Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredBoards.map((board, index) => (
              <motion.div
                key={board.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-2xl transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden"
              >
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light-blue/10 rounded-bl-[100px] -mr-12 -mt-12 transition-all group-hover:bg-brand-yellow/10" />
                
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-brand-navy/20 group-hover:bg-brand-yellow group-hover:text-brand-navy group-hover:rotate-3 transition-all duration-500">
                    <board.icon size={28} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] leading-none mb-1">{board.meta}</span>
                    {board.id.includes('gen-ai') && (
                      <span className="bg-brand-yellow/20 text-brand-navy text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter mt-1">Powered by AI</span>
                    )}
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl font-black text-brand-navy leading-tight mb-2 group-hover:text-brand-navy transition-colors">{board.title}</h3>
                  <p className="text-[11px] text-brand-gray font-medium leading-relaxed mb-8 opacity-70 group-hover:opacity-100 transition-opacity">{board.subtitle}</p>
                  
                  <div className="flex items-center justify-between pt-5 border-t border-slate-50">
                    <span className="text-[10px] font-black text-brand-navy/30 uppercase tracking-[0.15em] group-hover:text-brand-navy transition-colors">Visualizar Reporte</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (board.url) {
                          window.open(board.url, '_blank', 'noopener,noreferrer');
                        }
                      }}
                      className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:shadow-lg shadow-brand-navy/30"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Info */}
      <footer className="px-8 lg:px-16 py-8 border-t border-slate-200 bg-white flex flex-col md:flex-row items-center justify-between gap-6 mt-auto">
        <div className="flex items-center gap-10">
          <div className="flex flex-col border-l-2 border-slate-100 pl-4">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Sync Status</span>
            <span className="text-xs font-black text-brand-navy uppercase tracking-tighter">Mayo 2026 • 09:00:00</span>
          </div>
          <div className="flex flex-col border-l-2 border-slate-100 pl-4">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Sistemas Globales</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
              <span className="text-[11px] font-black text-brand-navy uppercase tracking-widest">Operación Normal</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] font-bold text-slate-400 italic">¿Dificultad técnica con la data?</span>
            <span className="text-[9px] font-black text-brand-navy uppercase tracking-widest">Soporte Técnico Especializado</span>
          </div>
          <button className="flex items-center gap-3 bg-brand-navy text-white px-6 py-3 rounded-xl text-xs font-black hover:bg-brand-navy/90 transition-all shadow-xl shadow-brand-navy/20 active:scale-95 uppercase tracking-widest">
            <HelpCircle size={16} className="text-brand-yellow" />
            Soporte BI
          </button>
        </div>
      </footer>
    </div>
  );
}

