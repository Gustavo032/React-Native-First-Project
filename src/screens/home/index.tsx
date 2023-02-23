import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { useState } from "react";

import { styles } from './styles'

export default function Home(){
	const [ participants, setParticipants ] = useState(['Gustavo']);

	
	
	function handleParticipantAdd(name: string){
		if(participants.includes(name='Paulo')){
			return Alert.alert("Gustavo já existe", "cadastre uma variação deste nome")
		}

		setParticipants(prevState=>[...prevState, name])

		console.log("Participant added!")
	}
	
	function handleParticipantRemove(name:string){
		Alert.alert("Remover", `Remover o Participante? ${name}`, [
			{
				text: "Sim",
				onPress: ()=> Alert.alert(`USUÁRIO ${name} DELETADO!`)
			},
			{
				text: "Não",
				style: 'cancel'
			}
		])
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

				<TouchableOpacity style={styles.button} onPress={()=>{handleParticipantAdd('Paulo')}}>
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