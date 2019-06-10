import React from 'react';
import { request } from 'graphql-request';
const styles = {
	container: {},
	content: {}
};

export default class LiveIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [ { content: 'iam here' } ]
		};
		this.storeMessages = this.storeMessages.bind(this);
	}

	storeMessages(data) {
		console.log('this: ', this);
		this.setState({ messages: data.messages });
	}

	componentDidMount() {
		console.log('doing call');
		const query = `query{
            messages {
                content
            }
        }`;

		request('http://localhost:4000', query).then(this.storeMessages);
	}

	render() {
		const { messages } = this.state;
		console.log('messages: ', messages);
		return (
			<div style={styles.container}>
				<div style={styles.content}>{messages.map((m, index) => <p key={`p_${index}`}>{m.content}</p>)}</div>
			</div>
		);
	}
}
