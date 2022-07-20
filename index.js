/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Initial from './src/pages/Initial';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Representative from './src/pages/Representative';
import ChangePassword from './src/pages/ChangePassword';
import MainContent from './src/components/MainContent';

AppRegistry.registerComponent(appName, () => App);
