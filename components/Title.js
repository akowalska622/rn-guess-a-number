import { Text, StyleSheet } from 'react-native';

export const Title = ({ children }) => (
	<Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#ddb52f',
		textAlign: 'center',
		borderWidth: 2,
		borderColor: '#ddb52f',
		padding: 12,
	},
});
