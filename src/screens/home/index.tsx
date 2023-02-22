import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from './styles'

export default function Home(){
	const participants = ['Gustavo', 'Eliana', 'Rafael', 'Angelica', 'Geovane', 'Miriam', "Gisele", "Joelma", "Leia", "Eliane", "Vanessa", "Imaculada", "Fernanda", "Renato", "Marcus", "Juan", "Ariane", 'Adriana', "Alexandre", "Larissa", "Rosana", "Ramiro", "Paulo", "Luciano", "Cristiane"]
	
	
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

			<FlatList 
				data={participants}
				keyExtractor={item => item}	
				renderItem={({item})=>(
					<Participant 
						key={item}
						name={item} 
						onRemove={()=>{handleParticipantRemove(item)}}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={()=>(
					<Text style={styles.listEmptyText}>
						Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
					</Text>
				)}
			/>
		
		</View>
	);
}