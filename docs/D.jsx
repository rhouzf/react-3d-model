/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 d.gltf 
Author: Fridqeir (https://sketchfab.com/Fridqeir)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-building-lowpoly-1f304c6e56324c19955a18aa79b15b9f
Title: Old Building | Lowpoly
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/assets/d.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 382.448, 0]} rotation={[0, Math.PI / 2, 0]} scale={1105.531}>
          <mesh geometry={nodes.building_Building_0.geometry} material={materials.Building} />
          <mesh geometry={nodes.building_Windows_0.geometry} material={materials.Windows} />
        </group>
        <group position={[-480.078, 382.448, 424.292]} scale={1105.531}>
          <mesh geometry={nodes.building001_Building_0.geometry} material={materials.Building} />
          <mesh geometry={nodes.building001_Windows_0.geometry} material={materials.Windows} />
        </group>
        <group position={[-904.373, 382.448, -55.782]} rotation={[0, -Math.PI / 2, 0]} scale={1105.531}>
          <mesh geometry={nodes.building002_Building_0.geometry} material={materials.Building} />
          <mesh geometry={nodes.building002_Windows_0.geometry} material={materials.Windows} />
        </group>
        <group position={[-424.295, 382.448, -480.075]} rotation={[Math.PI, 0, -Math.PI]} scale={1105.531}>
          <mesh geometry={nodes.building003_Building_0.geometry} material={materials.Building} />
          <mesh geometry={nodes.building003_Windows_0.geometry} material={materials.Windows} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/d.gltf')
