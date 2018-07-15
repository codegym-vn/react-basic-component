/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, TextInput, Image, Switch, Picker, Button, Alert,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            language: 'vn',
            name: '',
            gender: false,
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        let gender = this.state.gender ? 'Nữ' : 'Nam';
        let string = this.state.name + '|' + gender + '|' + this.state.language;
        Alert.alert(
            'Thông tin học viện',
            string
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Chào mừng bạn đến với CodeGym
                </Text>
                <View style={styles.wrapperName}>
                    <Text style={styles.titleStyle}>Họ và Tên</Text>
                    <TextInput
                        placeholder='Nguyễn Tuấn Anh'
                        style={styles.inputName}
                        onChangeText={(name) => this.setState({ name })}
                    />
                </View>
                <View style={styles.wrapperAvatar}>
                    <Text style={styles.titleStyle}>Ảnh Avatar</Text>
                    <Image
                        style={styles.avatarStyle}
                        source={require('./img/avartar_demo.jpg')}
                    />
                </View>
                <View style={styles.wrapperGender}>
                    <Text style={styles.titleStyle}>Giới tính</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                        <Text>Nam</Text><Switch onValueChange={(gender) => this.setState({ gender })} value={this.state.gender} /><Text>Nữ</Text>
                    </View>
                </View>
                <View style={styles.wrapperLanguage}>
                    <Text style={styles.titleStyle}>Ngôn ngữ</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 80, width: 200, marginTop: -20 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                        <Picker.Item label="Japanese" value="ja" />
                        <Picker.Item label="Vietnam" value="vn" />
                    </Picker>
                </View>
                <Button title='Submit' onPress={this.onSubmit} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    wrapperName: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    titleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        marginRight: 15,
    },
    inputName: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 10,
        width: 200,
    },
    avatarStyle: {
        width: 200,
        height: 100,
    },
    wrapperAvatar: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 20,
    },
    wrapperGender: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginRight: 120,
    },
    wrapperLanguage: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    }
});
