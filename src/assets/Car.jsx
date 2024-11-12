import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Car = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/car.glb');
  
  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh geometry={nodes['SportsCar2_Cube006-Mesh'].geometry} material={materials.White} />
      <mesh geometry={nodes['SportsCar2_Cube006-Mesh_1'].geometry} material={materials.Windows} />
      <mesh geometry={nodes['SportsCar2_Cube006-Mesh_2'].geometry} material={materials.Grey} />
      <mesh geometry={nodes['SportsCar2_Cube006-Mesh_3'].geometry} material={materials.Headlights} />
      <mesh geometry={nodes['SportsCar2_Cube006-Mesh_4'].geometry} material={materials.TailLights} />
      <mesh geometry={nodes['SportsCar2_BackWheels_Cylinder002-Mesh'].geometry} material={materials.Black} />
      <mesh geometry={nodes['SportsCar2_BackWheels_Cylinder002-Mesh_1'].geometry} material={materials.Grey} />
      <mesh geometry={nodes['SportsCar2_FrontLeftWheel_Cylinder017-Mesh'].geometry} material={materials.Grey} />
      <mesh geometry={nodes['SportsCar2_FrontLeftWheel_Cylinder017-Mesh_1'].geometry} material={materials.Black} />
      <mesh geometry={nodes['SportsCar2_FrontRightWheel_Cylinder018-Mesh'].geometry} material={materials.Grey} />
      <mesh geometry={nodes['SportsCar2_FrontRightWheel_Cylinder018-Mesh_1'].geometry} material={materials.Black} />
    </group>
  );
});

useGLTF.preload('/car.glb');

export { Car };
