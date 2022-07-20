import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {Logo} from '../../assets';

const MainContent = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardWrapperImage}>
        <Image source={Logo} style={styles.cardImage} />
      </View>
      <View style={styles.cardWrapperText}>
        <Text style={styles.cardTitle}>TITLE</Text>
        <Text style={styles.cardOrigin}>Asal Sekolah</Text>
        <Text style={styles.cardDesc}>Deskripsi blablalbalbalbablablala</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    width: 380,
    borderRadius: 5,
    justifyContent: 'flex-start',
    height: 120,
    marginBottom: 10,
  },
  cardWrapperImage: {
    padding: 10,
  },
  cardWrapperText: {
    padding: 15,
  },
  cardImage: {
    width: 130,
    height: 100,
    borderRadius: 5,
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
  cardOrigin: {
    fontSize: 10,
    fontWeight: '600',
    color: 'black',
  },
  cardDesc: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
  },
});
