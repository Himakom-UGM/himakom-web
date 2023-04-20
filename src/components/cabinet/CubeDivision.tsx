import Router, { useRouter } from 'next/router';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useTexture, OrbitControls } from '@react-three/drei';

import { divisionData } from './data';


export default function CubeDivision(props: any) {
	const [hover, setHover] = useState(false);
	const clickTimeout = useRef<NodeJS.Timeout | null>(null);

	const handlePointerUp = (e: any) => {
		if (clickTimeout.current !== null) {
			clearTimeout(clickTimeout.current);
		}

		// Set a new click timeout
		clickTimeout.current = setTimeout(() => {}, 50); // Wait 500 milliseconds before registering the click event
	};

	const handlePointerDown = () => {
		// Cancel the click timeout
		if (clickTimeout.current !== null) {
			clearTimeout(clickTimeout.current);
		}
	};

	const handleClick = (e: any) => {
		const face = e.face;
		const index = face.materialIndex;
		const division = divisionData[index];
		Router.push(division.url);
	};

	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001));
	return (
		<mesh {...props} ref={mesh} onClick={(e) => handleClick(e)}>
			<boxGeometry args={[3, 3, 3]} />
			{divisionData.map((d, i) => (
				<meshStandardMaterial
					key={i}
					map={material[i]}
					attach={`material-${i}`}
				/>
			))}
		</mesh>
	);
}
