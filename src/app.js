import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, CardSection, Button } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
    componentWillMount() { 
        firebase.initializeApp({
            apiKey: 'AIzaSyCVsR8A9MzWWOIwUfCvlnTbs-EUNC0OeGY',
            authDomain: 'auth-ea25d.firebaseapp.com',
            databaseURL: 'https://auth-ea25d.firebaseio.com',
            projectId: 'auth-ea25d',
            storageBucket: 'auth-ea25d.appspot.com',
            messagingSenderId: '1025463423566'
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
               <LoginForm />    
            </View>
        );
    }
}
export default App; 