import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:'#131016',
		paddingLeft:28,
		paddingRight:28
	},

	title:{
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 24,
		marginTop: 100,
		marginBottom: 10
	},
	
	description:{
		color:"#ffbc00",
		fontSize: 17,
		marginBottom: 10
	},

	input:{
		flex: 1,
		marginRight: 12,
		height: 56,	
		backgroundColor: "#1f1e25",
		borderRadius: 10,
		color: '#fdfcfe',
		padding: 16,
		fontSize: 16,
	},

	form:{
		width: "100%",
		flexDirection: 'row',
		marginTop: 36,
		marginBottom: 42,
	},

	button:{
		width:56,
		height: 56,
		borderRadius: 10,
		backgroundColor: '#31ef67',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttonText:{
		color: '#fdfcfe',
		fontSize: 24,
		fontWeight: 'bold',
	}


})