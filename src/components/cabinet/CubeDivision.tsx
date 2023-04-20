import Router, { useRouter } from 'next/router';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useTexture, OrbitControls } from '@react-three/drei';
import { PHPI } from '.';

export default function CubeDivision(props: any) {
	const [hover, setHover] = useState(false);

	const divisionData = [
		{
			texture: '/cabinet/textures/Hublu.png',
			url: '/about/hublu',
		},
		{
			texture: '/cabinet/textures/Kewirush.png',
			url: '/about/kewirausahaan',
		},
		{
			texture: '/cabinet/textures/KPM.png',
			url: '/about/kpm',
		},
		{
			texture: '/cabinet/textures/Mikat.png',
			url: '/about/mikat',
		},
		{
			texture: '/cabinet/textures/PO.png',
			url: '/about/po',
		},
		{
			texture: '/cabinet/textures/PSDMA.png',
			url: '/about/psdma',
		},
	];

	const handleClick = (e: any) => {
		Router.push(divisionData[e.face?.materialIndex].url);
	};


	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001));
	return (
		<mesh {...props} ref={mesh} onClick={(e) => handleClick(e)}>
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