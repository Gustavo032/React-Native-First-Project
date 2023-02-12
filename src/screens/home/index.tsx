import { Text, View, TextInput } from "react-native";

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

			<TextInput 
			 style={styles.input}
			 placeholder="nome do participante"
			 placeholderTextColor="#484848"
			 keyboardType="default"			  
			/>
		</View>
	);
}