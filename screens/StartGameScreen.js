import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

export const StartGameScreen = () => {
	const [enteredNumber, setEnteredNumber] = useState('');

	const handleInput = input => {
		setEnteredNumber(input);
	};

	const resetInput = () => {
		setEnteredNumber('');
	};

	const confirmInput = () => {
		const chosenNumber = +enteredNumber;

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number!',
				'Number has to be a number between 1 and 99',
				[
					{
						text: 'Okay',
						style: 'destructive',
						onPress: resetInput,
					},
				]
			);
			return;
		}

		console.log('valid number!');
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType='number-pad'
				value={enteredNumber}
				onChangeText={handleInput}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: 'center',
		marginTop: 100,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: '#4e0329',
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: '#ddb52f',
		borderBottomWidth: 2,
		color: '#ddb52f',
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
});

// elevation <-- ANDROID
// shadowX <-- IOS
