import { createStateMachine } from 'state-composer';
import { useState } from 'react';

import './App.css';
import Experience from './Experience';

import map from './assets/map.png';
import pin from './assets/pin.png';

export const State = createStateMachine('mapScreen', {
	states: {
		mapScreen: {},
		evScreen: {},
		endScreen: {},
	},
});

function App() {
	const [state, setState] = useState(State.state);

	const changeState = () => {
		State.enter('evScreen');
		setState(State.state);
	};

	return (
		<div className='App'>
			<State.Match state='mapScreen'>
				<div style={{ position: 'relative', width: '900px', height: 'auto' }}>
					<img
						src={map}
						alt='Map'
						style={{ width: '100%', height: 'auto' }}
					/>
					{/* Place pins on the map at different positions */}
					<img
						onClick={changeState}
						src={pin}
						alt='Pin'
						style={{
							position: 'absolute',
							top: '100px',
							left: '150px',
							width: '50px',
							height: 'auto',
						}}
					/>
					<img
						onClick={changeState}
						src={pin}
						alt='Pin'
						style={{
							position: 'absolute',
							top: '200px',
							left: '300px',
							width: '50px',
							height: 'auto',
						}}
					/>
					<img
						onClick={changeState}
						src={pin}
						alt='Pin'
						style={{
							position: 'absolute',
							top: '350px',
							left: '700px',
							width: '50px',
							height: 'auto',
						}}
					/>
				</div>
			</State.Match>
			<State.Match state='endScreen'>
				<h1>Charging Begins</h1>
			</State.Match>
			<State.Match state='evScreen'>
				<Experience
					state={state}
					setState={setState}
				/>
			</State.Match>
		</div>
	);
}

export default App;
