import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Profile} from '../../assets';

const HeaderInformation = () => {
  return (
    <View style={styles.container}>
      <Image source={Profile} style={styles.iconProfile} />
      <View style={styles.infoWrapper}>
        <Text style={styles.textHeader}>Minggu, 17 Agustus 2022</Text>
        <Text style={styles.textHeader}>SMA Muhammadiyah 11 Jakarta</Text>
      </View>
    </View>
  );
};

export default HeaderInformation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#E1D770',
  },
  iconProfile: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    resizeMode: 'contain',
  },
  textHeader: {
    fontSize: 10,
    color: '#0F7468',
    fontWeight: 'bold',
  },
  infoWrapper: {
    marginLeft: 150,
  },
});
