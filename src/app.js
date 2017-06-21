import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, CardSection, Button } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
    state = {loggedIn: false }
    componentWillMount() { 
        firebase.initializeApp({
            apiKey: 'AIzaSyCVsR8A9MzWWOIwUfCvlnTbs-EUNC0OeGY',
            authDomain: 'auth-ea25d.firebaseapp.com',
            databaseURL: 'https://auth-ea25d.firebaseio.com',
            projectId: 'auth-ea25d',
            storageBucket: 'auth-ea25d.appspot.com',
            messagingSenderId: '1025463423566'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }else {
                this.setState({ loggedIn: false });
            }
        });

    }
    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button>
                    LogOut
                </Button>
            );
        }
        return <LoginForm />
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
             {this.renderContent()}   
            </View>
        );
    }
}
export default App; 