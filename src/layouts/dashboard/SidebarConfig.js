import { Icon } from '@iconify/react';
/*
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
*/
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
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
  }/*,
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }*/
];

export default sidebarConfig;
