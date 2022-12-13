import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
// import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
// // import {MaterialCommunityIcons} from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

// export function DrawerContent(props) {
//   return (
//     <DrawerContentScrollView
//       {...props}
//       contentContainerStyle={{paddingTop: 0, marginTop: 0}}>
//       <View style={styles.drawerContent}>
//         <ImageBackground
//           source={require('./../assets/blue1.jpg')}
//           style={styles.image}>
//           <View style={styles.userInfoSection}>
//             <Avatar.Image
//               source={{
//                 uri: 'https://res.cloudinary.com/ruksa/image/upload/v1587470607/profile/pic012_kdiyqt.jpg',
//               }}
//               size={75}
//             />
//             <Title style={styles.title}>Rukmoni Nagarajan</Title>
//             <Caption style={styles.caption}>@rukstech</Caption>
//           </View>
//         </ImageBackground>
//         <Drawer.Section style={styles.drawerSection}>
//           <DrawerItem
//             icon={({color, size}) => (
//               <Icon name={'home'} color={color} size={size} />
//             )}
//             label="Home"
//             onPress={() => {}}
//           />
//           <DrawerItem
//             icon={({color, size}) => (
//               <Icon name={'bookmark'} color={color} size={size} />
//             )}
//             label="WishList"
//             onPress={() => {}}
//           />
//           <DrawerItem
//             icon={({color, size}) => (
//               <Icon name={'cart'} color={color} size={size} />
//             )}
//             label="Cart"
//             onPress={() => {}}
//           />
//           <DrawerItem
//             icon={({color, size}) => (
//               <Icon name={'tune'} color={color} size={size} />
//             )}
//             label="Preferences"
//             onPress={() => {}}
//           />
//         </Drawer.Section>
//         <Drawer.Section title="Account">
//           <DrawerItem
//             icon={({color, size}) => (
//               <Icon name={'account'} color={color} size={size} />
//             )}
//             label="Profile"
//             onPress={() => {}}
//           />
//           <DrawerItem
//             icon={({color, size}) => (
//               <Icon name={'logout'} color={color} size={size} />
//             )}
//             label="LogOut"
//             onPress={() => {}}
//           />
//         </Drawer.Section>
//       </View>
//     </DrawerContentScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   userInfoSection: {
//     margin: 0,
//     paddingTop: 80,
//     paddingLeft: 20,
//     alignItems: 'center',
//   },
//   title: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   caption: {
//     color: '#fff',
//     fontSize: 14,
//     lineHeight: 14,
//     paddingBottom: 20,
//   },
//   row: {
//     marginBottom: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: 'bold',
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });

export function DrawerContent(props) {
  const paperTheme = useTheme();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/51.jpg',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Terrence Hawkins</Title>
                {/* <Caption style={styles.caption}>@j_doe</Caption> */}
              </View>
            </View>
            <View style={styles.row}>
              {/* <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View> */}
            </View>
            {/* <Text>Custom Drawer Educative io</Text> */}
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <TouchableRipple
            onPress={() => {
              props.toggleTheme();
            }}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch
                  value={props.isDarkTheme}
                  onValueChange={() => props.toggleTheme()}
                />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
