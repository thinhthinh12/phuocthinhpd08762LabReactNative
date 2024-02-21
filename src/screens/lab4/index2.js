import React, { useState } from 'react';
import { RefreshControl, ScrollView,  StyleSheet, Text, View, } from 'react-native';

const bai2 = () => {
const [refresh,setRefesh] = useState(false);


const pullMe = () =>{
    setRefesh(true);

    setTimeout(()  =>{
       setRefesh(false)
    },2000);
}

  return (
    <View style={styles.container}>
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} 
        onRefresh={() => pullMe()}/>
      }>
    
      <Text style={styles.text}>Kéo xuống </Text>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
  },
  text: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default React.memo(bai2);