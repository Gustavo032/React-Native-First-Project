import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from './styles'

export default function Home(){
	function handleParticipantAdd(){
		console.log("Participant added!")
	}

	function handleParticipantRemove(name:string){
		console.log(`Participant removed ${name}!`)
	}

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

			<View style={styles.form}>

				<TextInput 
				style={styles.input}
				placeholder="nome do participante"
				placeholderTextColor="#484848"
				keyboardType="default"			  
				/>	

				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text
						
						style={styles.buttonText}
					>
						+ 	
					</Text>
				</TouchableOpacity>	
			</View>

			<Participant name="Gustavo Ramos" onRemove={()=>{handleParticipantRemove("rodrigo")}}/>
			<Participant name="Gustavo Ramos" onRemove={()=>{handleParticipantRemove("rodrigo")}}/>
			<Participant name="Gustavo Ramos" onRemove={()=>{handleParticipantRemove("rodrigo")}}/>
			<Participant name="Gustavo Ramos" onRemove={()=>{handleParticipantRemove("rodrigo")}}/>
			<Participant name="Gustavo Ramos" onRemove={()=>{handleParticipantRemove("rodrigo")}}/>
			<Participant name="Gustavo Ramos" onRemove={()=>{handleParticipantRemove("rodrigo")}}/>

		</View>
	);
}