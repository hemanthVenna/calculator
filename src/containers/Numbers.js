import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { bindActionCreators } from 'redux';

import { one, two, three, four, five, six, seven, eight, nine, zero,addition,multiplication,subtraction,division,clearText,equalTo } from '../actions/index'


class KeyBoard extends Component {
    // handleFind(){
    //     console.log("equal clicked")
    //     eval(props.item)

    // }
    render() {


        const { KeyboardWrap, numberStyle, numRowStyle, textStyle } = styles
        return (
            <View style={KeyboardWrap}>
                
                <View style={numRowStyle}>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(zero())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >0</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(clearText())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >C</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(division())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >%</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(multiplication())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >X</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={numRowStyle}>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(seven())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >7</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(eight())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >8</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(nine())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >9</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(subtraction())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >-</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={numRowStyle} >
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(four())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >4</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(five())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >5</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(six())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >6</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch( addition())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >+</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={numRowStyle}>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(one())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >1</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(two())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >2</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(three())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >3</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.dispatch(equalTo())} >
                        <View style={numberStyle} >
                            <Text style={textStyle} >=</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const styles = {
    KeyboardWrap: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end'
    },
    numberStyle: {
        flex: 1,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "#EAFAF1",
        backgroundColor: "#FFF"
    },
    numRowStyle: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    textStyle: {
        color: "#00adef",
        fontSize: 28
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators({ one, two, three, four, five, six, seven, eight, nine, zero,addition,multiplication,subtraction,division,clearText,equalTo }, dispatch)
    }
}
export default connect(mapDispatchToProps)(KeyBoard)