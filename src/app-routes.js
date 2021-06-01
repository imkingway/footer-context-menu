import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage, PdfButton } from './pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/Employee',
    component: PdfButton
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
