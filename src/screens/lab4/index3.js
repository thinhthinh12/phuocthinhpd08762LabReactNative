import React, { useState } from 'react';
import {   Image, Text, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/checkbox';
import { styles } from './styles3';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';




const SignUp = () =>{
    
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        console.log('Test Sign in');
    };
    return(
        <View>
          <Text style={{fontWeight:'bold', fontSize:30,marginBottom:10,}}>Hi Welcome Back!</Text>
          <Text>Hello again you have been missed!</Text>
              <Image
                resizeMode="contain"
                style={styles.img}
               source={require("../../../assets/imga/10050.png")}/> 
            <Input labe1="Email address" placeholder="Enter your email address@gmail.com" />
            <Input isPassword labe1="Password" placeholder="Enter your email password" />
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.fontText}>
                Don't have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    Register
                </Text>
            </Text>
        </View>

    );
};
export default SignUp;