import { Icon } from '@iconify/react';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Predice tu resultado Saber 11',
    path: '/dashboard/prediction',
    icon: getIcon("icomoon-free:profile")
  },
  {
    title: 'Ranking de colegios',
    path: '/dashboard/ranking',
    icon: getIcon("vaadin:chart-3d")
  },
  {
    title: 'Niveles de Desempeño',
    path: '/dashboard/niveles',
    icon: getIcon("carbon:chart-bar-stacked")
  },
  {
    title: 'Variables vs puntajes',
    path: '/dashboard/box',
    icon: getIcon("ic:baseline-candlestick-chart")
  },
  {
    title: 'Desviación de puntajes',
    path: '/dashboard/deviation',
    icon: getIcon("vaadin:spline-area-chart")
  },
  {
    title: 'Promedios de puntajes',
    path: '/dashboard/average',
    icon: getIcon("ic:outline-ssid-chart")
  },
  {
    title: 'Registros por colegio',
    path: '/dashboard/registers',
    icon: getIcon("si-glyph:file-box")
  },
  {
    title: 'Distribución de puntajes',
    path: '/dashboard/distribucion',
    icon: getIcon("ic:outline-ssid-chart")
  }
];

export default sidebarConfig;
