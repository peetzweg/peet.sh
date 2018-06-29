import React from 'react';
import { PromptSymbolColor, DirectoryColor, CommandColor, CaretColor } from '../Colors';

const styles = {
	path: {
		color: DirectoryColor
	},
	input: {
		display: 'flex',
		flexDirection: 'row'
	},
	prompt: {
		color: PromptSymbolColor,
		marginRight: '0.5rem'
	},
	command: {
		color: CommandColor,
		marginRight: '0.5rem'
	},
	args: {
		marginRight: '0.5rem'
	},
	caret: {
		backgroundColor: CaretColor,
		width: '0.6rem',
		heigth: '1rem'
	}
};

const Prompt = ({ path = '~', command, args, ...rest }) => {
	return (
		<div {...rest}>
			<div style={styles.path}>{path}</div>
			<div style={styles.input}>
				<b style={styles.prompt}>❯</b>

				{command ? <b style={styles.command}>{` ${command}`}</b> : <span style={styles.caret}> </span>}
				{args ? <span>{` ${args}`}</span> : null}
			</div>
		</div>
	);
};

export default Prompt;
