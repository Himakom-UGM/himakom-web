import Router, { useRouter } from 'next/router';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { useTexture, OrbitControls } from '@react-three/drei';


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

	const handleClick = (e: any) => {
		Router.push(divisionData[e.face?.materialIndex].url);
	};

	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001));
	return (
		<mesh {...props} ref={mesh} onClick={(e) => console.log(e.face)}>
			<boxGeometry args={[3, 3, 3]} />
			{divisionData.map((d, i) => <meshStandardMaterial
				{...useTexture({
					map: d.texture
				})}
				attach={`material-${i}`}
			/>)}
		</mesh>
	);
}