import { Text, View, StyleSheet, TextInput } from "react-native";

import { styles } from './styles'

export default function Home(){
	return(
		<View style={styles.container}
		>
			<Text key={123}
			
				style={styles.title}
			>
				Consegui!
			</Text>
			
			<Text key={1234}
				style={styles.description}
			> 
				Sabado, 11 de Fevereiro de 2023
			</Text>

			<TextInput value="Texto de exemplo" style={styles.input}/>
		</View>
	);
}