export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface ActionCardItem {
  id: string;
  title: string;
  iconBgColor: string;
  iconName: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  icon: string;
}
