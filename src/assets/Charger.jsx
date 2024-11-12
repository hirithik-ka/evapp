import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Charger(props) {
  const { scene } = useGLTF('/charger.glb')
  const { nodes } = useGraph(scene)

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 3, 0]} scale={new THREE.Vector3(1.8, 1, 1.1)}>
          {/* This rectangle keeps the original size */}
          <mesh
            geometry={nodes.Rectangle.geometry}
            material={new THREE.MeshStandardMaterial({ color: 'yellow' })}
            position={[0, -1, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          {/* Apply yellow color and scaling to each of the other rectangles directly */}
          <mesh
            geometry={nodes.Rectangle_9.geometry}
            material={new THREE.MeshStandardMaterial({ color: 'yellow' })}
            position={nodes.Rectangle_9.position}
            rotation={nodes.Rectangle_9.rotation}
            scale={new THREE.Vector3(1, 1.2, 1)} // Adjust the scale as needed
          />
          <mesh
            geometry={nodes.Rectangle_8.geometry}
            material={new THREE.MeshStandardMaterial({ color: 'yellow' })}
            position={nodes.Rectangle_8.position}
            rotation={nodes.Rectangle_8.rotation}
            scale={new THREE.Vector3(1, 1.2, 1)} // Adjust the scale as needed
          />
          <mesh
            geometry={nodes.Rectangle_7.geometry}
            material={new THREE.MeshStandardMaterial({ color: 'yellow' })}
            position={nodes.Rectangle_7.position}
            rotation={nodes.Rectangle_7.rotation}
            scale={new THREE.Vector3(1, 1.2, 1)} // Adjust the scale as needed
          />
          <mesh
            geometry={nodes.Rectangle_6.geometry}
            material={new THREE.MeshStandardMaterial({ color: 'yellow' })}
            position={nodes.Rectangle_6.position}
            rotation={nodes.Rectangle_6.rotation}
            scale={new THREE.Vector3(1, 1.2, 1)} // Adjust the scale as needed
          />
          <mesh
            geometry={nodes.Rectangle_5.geometry}
            material={new THREE.MeshStandardMaterial({ color: 'yellow' })}
            position={nodes.Rectangle_5.position}
            rotation={nodes.Rectangle_5.rotation}
            scale={new THREE.Vector3(1, 1.2, 1)} // Adjust the scale as needed
          />
          <mesh
            geometry={nodes.Rectangle_4.geometry}
            material={new THREE.MeshStandardMaterial({ color: 'yellow' })}
            position={nodes.Rectangle_4.position}
            rotation={nodes.Rectangle_4.rotation}
            scale={new THREE.Vector3(1, 1.2, 1)} // Adjust the scale as needed
          />
          <mesh
            geometry={nodes.Rectangle_3.geometry}
            material={new THREE.MeshStandardMaterial({ color: 'yellow' })}
            position={nodes.Rectangle_3.position}
            rotation={nodes.Rectangle_3.rotation}
            scale={new THREE.Vector3(1, 1.2, 1)} // Adjust the scale as needed
          />
          {/* This rectangle keeps the original material */}
          <mesh
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        {/* Keep the cube mesh */}
        {/* <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/charger.glb')
