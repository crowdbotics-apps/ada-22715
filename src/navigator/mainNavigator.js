import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile175134Navigator from '../features/UserProfile175134/navigator';
import Tutorial175133Navigator from '../features/Tutorial175133/navigator';
import NotificationList175105Navigator from '../features/NotificationList175105/navigator';
import Settings175104Navigator from '../features/Settings175104/navigator';
import Settings175096Navigator from '../features/Settings175096/navigator';
import UserProfile175094Navigator from '../features/UserProfile175094/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile175134: { screen: UserProfile175134Navigator },
Tutorial175133: { screen: Tutorial175133Navigator },
NotificationList175105: { screen: NotificationList175105Navigator },
Settings175104: { screen: Settings175104Navigator },
Settings175096: { screen: Settings175096Navigator },
UserProfile175094: { screen: UserProfile175094Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
