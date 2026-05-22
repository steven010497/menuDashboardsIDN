import { LucideIcon } from 'lucide-react';

export interface AnalysisModule {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  category: 'Sales' | 'Finance' | 'Operations' | 'Marketing' | 'People';
}

export interface KPI {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  data: { value: number }[];
}
