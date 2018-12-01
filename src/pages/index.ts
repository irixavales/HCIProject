// The home page the user will see when they start using the app
export const HomePage = 'HomePage';

// The main page the user will see as they use the app over a long period of time.
export const MainPage = 'TabsPage';

// The initial root pages for our tabs (remove if not using tabs)
export const TabsRoot = [
  {root: 'BuildingListPage', title: 'Places', icon: 'pin'},
  {root: 'EventListPage', title: 'Events', icon: 'people'},
  {root: 'TrolleyListPage', title: 'Trolleys', icon: 'bus'},
  {root: 'MapPage', title: 'Map', icon: 'map'},
];
