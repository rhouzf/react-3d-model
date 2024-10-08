/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 scene.gltf 
Author: hnanw (https://sketchfab.com/hnanw)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/skyscraper-09af72062ec644e68b8b753cf0618bb3
Title: Skyscraper
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['A.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['A.001']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Color_Green.002']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.048']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.051']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.052']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.053']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Material.054']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Material.088']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['Material.091']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['Material.098']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.coloor} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['coloor.002']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Color_Green} />
        <mesh geometry={nodes.Object_22.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Object_23.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.coloor} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
