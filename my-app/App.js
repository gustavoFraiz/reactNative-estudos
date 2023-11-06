import { StatusBar } from 'expo-status-bar';
import { FlatList, RefreshControl, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import React from 'react';



export default function App() {
  
  
  const [Data, setData] = React.useState([
    {title: 'Title 1', data:['Item 1-1', 'Item 1-2', 'Item 1-3']}
  ]);

  const [Refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    const adding_index = Data.length + 1;
    setData([...Data, {title: 'Title '+ adding_index,data:[
      'Item ' + adding_index + '-1', 'Item ' + adding_index + '-2'
    ]}]);
    setRefreshing(false)
  }
  
  return (
    <SafeAreaView>
      <SectionList sections={Data} 
      refreshControl={
        <RefreshControl refreshing={Refreshing} onRefresh={onRefresh}/>
      }
      renderItem={({item})=>(
        <View style={styles.item}>
          <Text style={styles.text_item}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) =>(
        <View style={styles.header}>
          <Text style={styles.text_header}>{section.title}</Text>
        </View>
      )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth:2
  },
  item: {
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text_header:{
    color:'#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10
  },
  text_item: {
    color: '#000000',
    fontSize:35,
    margin:5
  }
});
