import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput,Keyboard } from 'react-native';
import KeyBoard from '../containers/Numbers';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'


class Header extends Component {
	hideKeyBoard(){
		console.log("keybaord hidden")
		Keyboard.dismiss();
		// this.onFocus()

	}
	
	render() {
		const { containerStyle, headerStyle, headerTextStyle, scrollContainer, scrollText,inputStyle,inputTextStyle } = styles;
		return (
			<View style={containerStyle}>
				<View style={headerStyle}>
					<Text style={headerTextStyle}>Calculator</Text>
				</View>
				<View style={inputStyle}>
					<TextInput autoFocus={true} onFocus={this.hideKeyBoard} style={inputTextStyle}>{this.props.item} </TextInput>
				</View>
				<KeyBoard></KeyBoard>
			</View>
		)
	}

}

const styles = {
	containerStyle: {
		display: 'flex',
		flex: 1
	},
	headerStyle: {
		height: 60,
		justifyContent: "center",
		backgroundColor: '#00adef',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 20 },
		shadowOpacity: 1,
		elevation: 1,
		padding: 15
	},
	scrollContainer: {
		backgroundColor: "#eee"
	},
	headerTextStyle: {
		fontSize: 24,
		color: '#fff'
	},
	scrollText: {
		color: '#14ccad',
		padding: 15,
		lineHeight: 30
	},
	inputStyle:{
		backgroundColor:"#fff",
		flex:1,
		justifyContent:"flex-end",
		alignItems:'flex-end'
	},
	inputTextStyle:{
		fontSize:40,
		color:"#82E0AA"

	}

}

function mapStateToProps(state) {
	return {
		item: state.item
	}
}


export default connect(mapStateToProps)(Header);