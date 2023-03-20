import Router, { useRouter } from 'next/router';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { useTexture, OrbitControls } from '@react-three/drei';
import THREE from 'three';

export default function CubeDivision(props: any) {
	const divisionData = [
		{
			texture: '/cabinet/textures/Hublu.png',
			url: '/division/hublu',
		},
		{
			texture: '/cabinet/textures/Kewirush.png',
			url: '/division/Kewirush',
		},
		{
			texture: '/cabinet/textures/KPM.png',
			url: '/division/KPM',
		},
		{
			texture: '/cabinet/textures/Mikat.png',
			url: '/division/Mikat',
		},
		{
			texture: '/cabinet/textures/PO.png',
			url: '/division/PO',
		},
		{
			texture: '/cabinet/textures/PSDMA.png',
			url: '/division/PSDMA',
		},
	];
	  

	const clickTimeout = useRef<NodeJS.Timeout | null>(null);

	const handlePointerUp = (e: any) => {
		if (clickTimeout.current !== null) {
			clearTimeout(clickTimeout.current);
		}

		// Set a new click timeout
		clickTimeout.current = setTimeout(() => {
		}, 50); // Wait 500 milliseconds before registering the click event
	};

	const handlePointerDown = () => {
		// Cancel the click timeout
		console.log(clickTimeout.current, 'dowm')
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

	const material = useTexture(divisionData.map((d) => d.texture));

	const mesh = useRef<THREE.Mesh>();
	
	return (
		<mesh
			onPointerUp={handlePointerUp}
			onPointerDown={handlePointerDown}
			{...props}
			ref={mesh}
			onClick={(e : any) => console.log(e.face)}
			
		
		>
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
