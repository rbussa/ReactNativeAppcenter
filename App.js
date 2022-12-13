/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import Crashes from 'appcenter-crashes';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import {Appbar, FAB} from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Homescreen from './src/screens/Homescreen';
import {DrawerContent} from './src/components/DrawerContent';

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#333333',
  },
};

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff',
  },
};

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  state = {isDarkTheme: false};

  toggleTheme() {
    console.log('in toggle Theme');
    this.setState({isDarkTheme: !this.state.isDarkTheme});
  }

  render() {
    const theme = this.state.isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
    return (
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <Drawer.Navigator
              initialRouteName="Home"
              drawerContent={props => (
                <DrawerContent
                  {...props}
                  isDarkTheme={this.state.isDarkTheme}
                  toggleTheme={this.toggleTheme.bind(this)}
                />
              )}>
              <Drawer.Screen name="Home" component={Homescreen} />
              <Drawer.Screen name="Notifications" component={Homescreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: '#eee',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
