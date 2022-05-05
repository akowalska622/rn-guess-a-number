import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { Title } from '../components/Title';
import { NumberContainer } from '../components/NumberContainer';
import { PrimaryButton } from '../components/PrimaryButton';
import { generateRandomBetween } from '../utils/generateRandomBetween';

let min = 1;
let max = 100;

export const GameScreen = ({ chosenNumber, onGameOver }) => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(min, max, chosenNumber)
	);

	useEffect(() => {
		if (currentGuess === chosenNumber) {
			onGameOver(true);
		}
	}, [currentGuess]);

	const handleNextGuess = direction => {
		if (
			(direction === 'lower' && currentGuess < chosenNumber) ||
			(direction === 'higher' && currentGuess > chosenNumber)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong...', [
				{ text: 'Sorry!', style: 'cancel' },
			]);
			return;
		}
		if (direction === 'lower') {
			max = currentGuess;
		} else {
			min = currentGuess + 1;
		}
		const newRandomNum = generateRandomBetween(min, max, currentGuess);
		setCurrentGuess(newRandomNum);
	};

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View style={styles.buttonWrapper}>
					<PrimaryButton onPress={handleNextGuess.bind(null, 'lower')}>
						-
					</PrimaryButton>
					<PrimaryButton onPress={handleNextGuess.bind(null, 'higher')}>
						+
					</PrimaryButton>
				</View>
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
	buttonWrapper: {
		flexDirection: 'row',
	},
});
