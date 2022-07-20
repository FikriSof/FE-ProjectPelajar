import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {HeaderInformation, MainContent} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperHeader}>
        <HeaderInformation />
      </View>
      <View>
        <Text style={styles.text}>Upcoming Events</Text>
      </View>
      <View>
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F0E4',
  },
  wrapperHeader: {
    alignItems: 'center',
  },
  text: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: '900',
    color: '#0F7468',
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: '#107468',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  loginButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: 'white',
  },
});
