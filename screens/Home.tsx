import { 
  View,
  Text,
  StyleSheet, 
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  useWindowDimensions,
  Platform,
  Pressable,
  FlatList, 
} from 'react-native';

import { RootTabScreenProps } from '../types';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{ flexDirection: 'row', paddingTop: 8, paddingHorizontal: 18 }}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.titleText}>Welcome, Angel!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
