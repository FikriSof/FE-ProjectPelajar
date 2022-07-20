import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Register = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.registerText}>DAFTAR</Text>

      <View style={styles.registerForm}>
        <View>
          <Text style={styles.text}>Username</Text>
          <TextInput style={styles.textInput} placeholder="Masukkan Username" />
        </View>
        <View>
          <Text style={styles.text}>Nama</Text>
          <TextInput style={styles.textInput} placeholder="Masukkan Nama" />
        </View>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Masukkan Email" />
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Password"
            secureTextEntry={true}
          />
        </View>
        <View>
          <Text style={styles.text}>Tanggal Lahir</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Tanggal Lahir"
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
          <Text style={styles.text}>Nomor Kartu Pelajar</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Nomor Kartu Pelajar"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F0E4',
  },
  registerText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F7468',
    letterSpacing: 5,
    textShadowOffset: {width: 1, height: 3},
    textShadowRadius: 10,
    marginTop: 70,
  },
  registerForm: {
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
  registerButton: {
    marginTop: 50,
    backgroundColor: '#107468',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  registerButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: 'white',
  },
});
