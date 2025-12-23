
export interface SlideData {
  id: number;
  section?: string;
  title?: string;
  subtitle?: string;
  content?: string | string[];
  visual?: string;
  visualDescription?: string;
  video?: string;
  icon?: 'attention' | 'star' | 'zap' | 'check';
  script?: string;
  type: 'title' | 'content' | 'story' | 'myth' | 'pillar' | 'offer' | 'cta' | 'results' | 'comparison';
  accent?: boolean;
}

export interface PresentationProps {
  slides: SlideData[];
}