import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ChangePassword = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.changePassText}>UBAH{'\n'}PASSWORD</Text>

      <View style={styles.changePassForm}>
        <View>
          <Text style={styles.text}>Password Baru</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Password Baru"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.changePassButton}>
        <Text style={styles.changePassButtonText}>Ubah</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F0E4',
  },
  changePassText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F7468',
    letterSpacing: 5,
    textShadowOffset: {width: 1, height: 3},
    textShadowRadius: 10,
    marginTop: 70,
    textAlign: 'center',
  },
  changePassForm: {
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
  changePassButton: {
    marginTop: 50,
    backgroundColor: '#107468',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  changePassButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: 'white',
  },
});
