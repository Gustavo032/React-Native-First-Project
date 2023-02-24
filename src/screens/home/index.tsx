import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { useState } from "react";

import { styles } from './styles'

export default function Home(){
	const [ participants, setParticipants ] = useState<string[]>([]);
	const [ participantName, setParticipantName ] = useState('')
	const today = new Date()
	
	
	function handleParticipantAdd(){
		if(participants?.includes(participantName)){
			return Alert.alert(`${participantName} já existe", "cadastre uma variação deste nome`)
		}

		setParticipants(prevState=>[...prevState, participantName])
		setParticipantName('')

		console.log("Participant added!")
	}
	
	function handleParticipantRemove(name:string){
		
		
		Alert.alert("Remover", `Remover o Participante? ${name}`, [
			{
				text: "Sim",
				onPress: ()=> setParticipants(prevState=>prevState.filter(participant => participant !== name))
			},
			{
				text: "Não",
				style: 'cancel'
			}
		])

		
		console.log(`Participant removed ${name}!`)
	}

	const meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
	
	
	return(
		<View style={styles.container}
		>
			<Text key={123}
			
				style={styles.title}
			>
				Contabilize Evento
			</Text>
			
			<Text key={1234}
				style={styles.description}
				> 
					{today.getDay() == 0 && ('Domingo')}
					{today.getDay() == 1 && ('Segunda-Feira')}	
					{today.getDay() == 2 && ('Terça-Feira')}
					{today.getDay() == 3 && ('Quarta-Feira')}
					{today.getDay() == 4 && ('Quinta-Feira')}
					{today.getDay() == 5 && ('Sexta-Feira')}
					{today.getDay() == 6 && ('Sábado')}
					, {today.getDate()} de { meses[today.getMonth()]} de {today.getFullYear()}
			</Text>

			<View style={styles.form}>

				<TextInput 
				style={styles.input}
				placeholder="nome do participante"
				placeholderTextColor="#484848"
				keyboardType="default"		
				onChangeText={text => setParticipantName(text)}	 
				value={participantName} 
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