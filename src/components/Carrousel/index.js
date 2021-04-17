import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({item, index}) => {
  const {ImageIcon} = item;
  return (
    <View style={styles.container} key={index}>
      <ImageIcon width="100%" height="60%" />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: ITEM_WIDTH,
    height: '100%',
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: 341,
    fontSize: 24,
    color: '#3C3A36',
  },
  body: {
    color: '#78746D',
    fontSize: 14,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    textAlign: 'center',
  },
});

export default CarouselCardItem;
