import { View, Text, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is it! Show must go on!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
});
