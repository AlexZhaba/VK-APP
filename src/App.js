import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Registration from './panels/registration';
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'reg',
			fetchedUser: null,
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		console.log(e.currentTarget)
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
				{/*<Persik id="persik" go={this.go} />*/}
				{/*<Registration id="reg"  go={this.go} fetchedUser={this.state.fetchedUser}/>*/}
			</View>
		);
	}
}

export default App;
