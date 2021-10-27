import { Icon } from '@iconify/react';
import Cube from '@iconify/icons-eva/cube-fill';
import BarChart from '@iconify/icons-eva/bar-chart-2-fill';
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
    icon: getIcon(BarChart)
  },
  {
    title: 'Variables vs puntajes',
    path: '/dashboard/box',
    icon: getIcon(Cube)
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
