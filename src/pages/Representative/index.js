import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Representative = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.represenText}>
        DAFTAR{'\n'}SEBAGAI{'\n'}PERWAKILAN
      </Text>

      <View style={styles.represenForm}>
        <View>
          <Text style={styles.text}>No Kartu Pelajar</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan No Kartu Pelajar"
          />
        </View>
        <View>
          <Text style={styles.text}>Asal Sekolah</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Asal Sekolah"
          />
        </View>
        <View>
          <Text style={styles.text}>Nomor Telepon</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Nomor Telepon"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.represenButton}>
        <Text style={styles.represenButtonText}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Representative;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F0E4',
  },
  represenText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F7468',
    letterSpacing: 5,
    textShadowOffset: {width: 1, height: 3},
    textShadowRadius: 10,
    marginTop: 70,
    textAlign: 'center',
  },
  represenForm: {
    marginTop: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  textInput: {
    borderWidth: 1,
    width: 350,
    backgroundColor: 'white',
    padding: 10,
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
  },
  represenButton: {
    marginTop: 50,
    backgroundColor: '#107468',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  represenButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: 'white',
  },
});
