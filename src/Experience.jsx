import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { DoubleSide } from 'three';
import { Car } from './assets/Car';
import { Charger } from './assets/Charger';

import { State } from './App';

const Experience = ({ state, setState }) => {
	const [carPosition, setCarPosition] = useState([5, 0, 3]); // Initial car position
	const [carRotation, setCarRotation] = useState(0); // Rotation angle for steering

	const carRef = useRef();

	// Rectangle_2's position and size (adjust based on actual model)
	const rectangle2Bounds = {
		xMin: -0.5,
		xMax: 0.5,
		zMin: -0.5,
		zMax: 0.5,
	};

	// Check if the car is fully inside Rectangle_2
	const isCarInRectangle2 = (carPos) => {
		const [x, , z] = carPos;
		return (
			x > rectangle2Bounds.xMin &&
			x < rectangle2Bounds.xMax &&
			z > rectangle2Bounds.zMin &&
			z < rectangle2Bounds.zMax
		);
	};

	// Keydown handler to update car position and rotation
	const handleKeyDown = (event) => {
		setCarPosition((prevPosition) => {
			const [x, y, z] = prevPosition;
			const moveDistance = 0.1;
			const rotationSpeed = 0.05;

			let newPosition = [...prevPosition];
			switch (event.key) {
				case 'w':
					newPosition = [
						x + Math.sin(carRotation) * moveDistance,
						y,
						z + Math.cos(carRotation) * moveDistance,
					];
					break;
				case 's':
					newPosition = [
						x - Math.sin(carRotation) * moveDistance,
						y,
						z - Math.cos(carRotation) * moveDistance,
					];
					break;
				case 'a':
					setCarRotation((prev) => prev + rotationSpeed);
					break;
				case 'd':
					setCarRotation((prev) => prev - rotationSpeed);
					break;
				default:
					break;
			}
			return newPosition;
		});
	};

	useEffect(() => {
		// Add event listener for keydown
		window.addEventListener('keydown', handleKeyDown);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [carRotation]);

	// Check for car position change and update state if within bounds
	useEffect(() => {
		if (isCarInRectangle2(carPosition)) {
			State.enter('endScreen');
			setState(State.state);
      console.log('Done')
		}
	}, [carPosition, setState]); // Run only when carPosition changes

	return (
		<Canvas camera={{ position: [0, 10, 5] }}>
			<mesh rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[20, 20]} />
				<meshStandardMaterial side={DoubleSide} />
			</mesh>
			<Charger />
			<Car position={carPosition} rotation={[0, carRotation, 0]} ref={carRef} />
			<OrbitControls />
			<directionalLight
				position={[5, 10, 5]}
				intensity={1.5}
				castShadow
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
			/>
			<ambientLight intensity={0.5} />
		</Canvas>
	);
};

export default Experience;
