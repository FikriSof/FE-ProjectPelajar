import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Logo} from '../../assets';

const Login = () => {
  return (
    <View style={styles.background}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.loginText}>LOGIN</Text>

      <View style={styles.loginForm}>
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
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.textBottom}>Belum Punya Akun? Daftar Disini</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F0E4',
  },
  logo: {
    width: '100%',
    height: 250,
    margin: 20,
  },
  loginText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F7468',
    letterSpacing: 5,
    textShadowOffset: {width: 1, height: 3},
    textShadowRadius: 10,
  },
  loginForm: {
    marginTop: 30,
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
  loginButton: {
    marginTop: 50,
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
  textBottom: {
    marginTop: 50,
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
});
