import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Title } from '../components/Title';
import { NumberContainer } from '../components/NumberContainer';
import { generateRandomBetween } from '../utils/generateRandomBetween';

export const GameScreen = ({ chosenNumber }) => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, chosenNumber)
	);

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
			</View>
			<View></View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 25,
	},
});
