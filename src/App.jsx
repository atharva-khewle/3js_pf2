import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from "react"
import { Float ,Sparkles , Environment, OrbitControls, Preload, Sphere, Stage, Backdrop, CubeCamera, Cloud, Box, Edges, ScreenQuad, Gltf, MeshPortalMaterial, Plane, useCursor,CameraControls, Dodecahedron, Decal, MeshReflectorMaterial, RoundedBox, Outlines, SpotLight} from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import $ from 'jquery';
import { Fog, MeshStandardMaterial, Texture } from "three"
import { easing, geometry } from 'maath'
// import { Link, Outlet, useLocation, useRoutes } from "react-router-dom"
import { useRoute, useLocation } from 'wouter'
// import { RoundedPlaneGeometry } from 'maath/dist/declarations/src/geometry'

//1 add fog just by tag
//2 if project is not going by your way then accept the limitations and adapt . make something new
//3 click on vibrate
//add positionalaudio https://www.npmjs.com/package/drei#box
//outline
//loading screen
//portals---done
//if oyu want oto write a normal js line here. make  a functionn and call it here
//https://lottiefiles.com
//function({all variables})=>{} this is how you import variables
//gltf to jsx

//go into portal
//when the where=1 the camera goes inside the portal. aaa is referring to portal and aaa.current is reffering to its current state
//useFrame((state,dt)=>easing.damp(aaa.current,'blend',where?1:0,0.2,dt))

//you can change where spotlight points by 
/*{const light = useRef()
const viewport = useThree((state) => state.viewport)
useFrame((state) => {
  light.current.target.position.lerp(vec.set(0 , 0, 0), 0.1)
  light.current.target.updateMatrixWorld()
})

}*/



const App = ()=> {
  
const aust = useRef()

  const [isblack,setisblack]= useState(false);
  
  return (

    <div className={isblack?"god bg-[#000000] ":"god bg-[#ffffff] "}>


    <div className="realtive flex justify-center flex-col  " >

    
    <div className="canvacont flex flex-row justify-center ">

    <Canvas className={isblack?"bg-[#000000] ":"bg-[#f1f367]"} shadows style={{height:"80vh"  , width:"80vw"}}>
        <OrbitControls/>

        {/* <directionalLight/> */}
        {/* <pointLight position={[0,0,10]}  intensity={1000} color={isblack?"white":"white"}/> */}

      <ambientLight intensity={10}/>

      {/* <Cube1></Cube1> */}
      {/* <Model2></Model2> */}
 
      <>
      {/* //comment hider */}
{/* 
        <pointLight position={[0,0,30]}  intensity={1}  color={isblack?"white":"black"}/>
        <pointLight position={[0,10,0]}  intensity={1}  color={isblack?"white":"black"}/>
        <pointLight position={[10,0,0]}  intensity={1}  color={isblack?"white":"black"}/>
        <pointLight position={[0,0,-10]}  intensity={1}  color={isblack?"white":"black"}/>
        <pointLight position={[0,-10,0]}  intensity={1}  color={isblack?"white":"black"}/>
        <pointLight position={[-10,0,0]}  intensity={1}  color={isblack?"white":"black"}/> 
        */}
       
                {/* <spotLight castShadow color="white" intensity={700} position={[0, 0, 20]} angle={0.15} penumbra={1} shadow-normalBias={0.05} shadow-bias={0.0001} /> */}


        

            
            {/* <Stage adjustCamera intensity={5} shadows="contact"  environment="city"> */}

      

        {/* <Float> */}
         

        {/* <Model1 castShadows recieveShadows/> */}

        {/* <Sph castShadows/> */}

        
          {/* <Model2></Model2> */}



          {/* {isblack?<Model1/>:<Model2/>} */}

          
        </>



        <Tmesh pos={[0,0,-3]} rot={[0,0,0]}></Tmesh>
        {/* <Cmesh></Cmesh> */}
        
        {/* <SpotLight castShadow  penumbra={1} distance={10} color={"red"} position={[0,5,0]} angle={0.35} attenuation={50} anglePower={4} intensity={2}  /> */}
        
        {/* <fog attach="fog" args={['#202020', 5, 20]} /> */}

        
        {/* <Dimension ></Dimension> */}
        {/* <Test></Test> */}
        {/* <Test2 ></Test2> */}
        {/* <Cmesh pos={[0,0,5]}/> */}





      <>
      {/* comment hider */}
        {/* </Float> */}

        
 
        {/* </Stage> */}
      </>
      

      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10]} />
        {/* <Mirrormat/> */}
        <Mymat col='yellow' ></Mymat> 
        {/* <meshPhongMaterial /> */}
      </mesh>
        
      </Canvas>

    </div>

      <button className="theme text-red-50 inline-block" onClick={()=>{setisblack(!isblack)}} >click</button>
     

     <div className="text bg-slate-400"><Text></Text></div>
     
      

    </div>


    </div>
  )
}



/*
{
  const xyz = ()=>{
    return(

    );
  }
}
*/


const Dimension = ({pos=[0,0,0]})=>{
  const dim = useRef()
  const indim = useRef()
  console.log(indim)
  const [where2,setwhere2]=useState(false);
  useFrame((state,dt)=>easing.damp(dim.current,'blend',where2?1:0,0.2,dt))

  return(
    <mesh position={pos} castShadow   onDoubleClick={()=>{ console.log("clicked");  setwhere2(true) }}>
      <sphereGeometry/>

      <MeshPortalMaterial  ref={dim}>
        <ambientLight intensity={2}/>
      <Gltf src="./src/assets/models/sea_keep_lonely_watcher/scene.gltf"  ref={indim} scale={0.01} position={[0,-3,0]}  onDoubleClick={()=>{ console.log("clicked");  }} ></Gltf>

      </MeshPortalMaterial>
    </mesh>
  );
}




const Rbox =()=>{
  return(
<RoundedBox ref={aust}
  args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
  radius={0.05} // Radius of the rounded corners. Default is 0.05
  smoothness={4} // The number of curve segments. Default is 4
  bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
  creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
  // {...meshProps} // All THREE.Mesh props are valid
>   <Outlines thickness={0.05} color="hotpink" />

<MeshPortalMaterial  >
  <Cube1 a={0.25} pos={[0,0,0]  } col="green"></Cube1>
  </MeshPortalMaterial>
  
  
  </RoundedBox>
  );
}

const Cmesh = ({pos=[0,0,0]})=>{
  const ttt= useRef()
  console.log("this>>>")
  console.log(ttt)
  console.log("this<<<<")

  
  return(
    <>
    {/* <Dodecahedron ref={ttt}> */}
    <mesh position={pos}>
      <dodecahedronGeometry ref={ttt} />

      <Edges/>
      {/* <Mymat/> */}
      <Mirrormat></Mirrormat>

  <MeshPortalMaterial attach={"-1"} >
    <Cube1 a={0.2} pos={[0,0,0]  } col="yellow"></Cube1>
  </MeshPortalMaterial>
  <MeshPortalMaterial attach={"2"} >
    <Cube1 a={1} pos={[0,0,0]  } col="pink"></Cube1>
  </MeshPortalMaterial>


      </mesh>
    {/* </Dodecahedron> */}
    
    </>
  );
}


const Tmesh = ({pos=[0,0,0], rot=[0,0,0]} )=>{
  return(
    <>
    <mesh position={pos} rotation={rot}>
      {/* <roundedPlaneGeometry args={[2,2,2]}/> */}
      <planeGeometry args={[3,3,3]} />
      
     

  
      <Mymat></Mymat>
    </mesh>
    </>
  );
}



const Mymat = ({col="blue"})=>{
  return(

    <meshStandardMaterial
        color={col}
        aoMapIntensity={1}
        emissive={col}
        emissiveIntensity={1}
        roughness={1}
      />
  );
  }

const Mirrormat = ()=>{
  return(
  //   <MeshReflectorMaterial
  //   blur={[0, 0]} // Blur ground reflections (width, height), 0 skips blur
  //   mixBlur={0} // How much blur mixes with surface roughness (default = 1)
  //   mixStrength={1} // Strength of the reflections
  //   mixContrast={1} // Contrast of the reflections
  //   resolution={256*2} // Off-buffer resolution, lower=faster, higher=better quality, slower
  //   mirror={1} // Mirror environment, 0 = texture colors, 1 = pick up env colors
  //   depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
  //   minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
  //   maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
  //   depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
  //   distortion={1} // Amount of distortion based on the distortionMap texture
  //   // distortionMap={} // The red channel of this texture is used as the distortion map. Default is null
  //   debug={3} /* Depending on the assigned value, one of the following channels is shown:
  //     0 = no debug
  //     1 = depth channel
  //     2 = base channel
  //     3 = distortion channel
  //     4 = lod channel (based on the roughness)
  //   */
  //   reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
  // />
  <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
  );
}

const Test = ({poss=[0,0,0]})=>{
  const aaa=useRef();
  const [where,setwhere] = useState(false)
  const invi = useRef();
  const a1=useRef()
  console.log(a1)
  // useFrame((state,delta)=>{
  //     invi.current.rotation.y -= 0.04;
  //   invi.current.rotation.z -= 0.05;
  //   invi.current.rotation.x += 0.03;
  //  });
  
  
  // const portal = useRef();
  // const [,setLocation] =useLocation();
  // const [, params]  = useRoutes('/item/:id');
  // const [hovered, hover] = useState(false)
    // useCursor(hovered)
//when the where=1 the camera goes inside the portal. aaa is referring to portal and aaa.current is reffering to its current state
useFrame((state,dt)=>easing.damp(aaa.current,'blend',where?1:0,0.2,dt))

return(
  <mesh clip onClick={console.log("hiiiiiii")} ref={invi} position={poss}>
      <boxGeometry
        args={[2,2,2] }
    
        ref={a1}
        />
        <Edges/>
      

    <MeshPortalMaterial ref ={aaa} attach={"material-0"}  >
    {/* <Thebox/> */}


    <mesh scale={0.5} position={[0,0,0]}>
        <boxGeometry
        args={[2,2,2]}
        
        />
        <Edges/>

        <meshStandardMaterial
        color={"blue"}
        aoMapIntensity={1}
        emissive={"blue"}
        emissiveIntensity={1}
        roughness={1}
        />
      
        </mesh>

    </MeshPortalMaterial>



  <MeshPortalMaterial name='02' attach={"material-2"} >
  <Cube1 a={0.5} pos={[0,0,0]  } col="green"></Cube1>
  </MeshPortalMaterial>

  <MeshPortalMaterial attach={"material-1"} >
    <Cube1 a={0.5} pos={[0,0,0]  } col="red"></Cube1>
  </MeshPortalMaterial>

  <MeshPortalMaterial attach={"material-3"} >
    <Cube1 a={0.5} pos={[0,0,0]  } col="yellow"></Cube1>
  </MeshPortalMaterial>

  <MeshPortalMaterial attach={"material-4"} >
    <Cube1 a={0.5} pos={[0,0,0]  } col="orange"></Cube1>
  </MeshPortalMaterial>



  <MeshPortalMaterial attach={"material-5"} >
    <Cube1 a={0.5} pos={[0,0,0]  } col="pink"></Cube1>
  </MeshPortalMaterial>
</mesh>
  );
}

const Test2 = ({scl=0.01})=>{
  const { nodes, materials } = useGLTF('./src/assets/models/glb/real-time_bones_demo_phoenix_bird.glb')
  return (
    <group  dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.MatI_Ride_FengHuang_01a} skeleton={nodes.Object_7.skeleton} />
      <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.MatI_Ride_FengHuang_01b} skeleton={nodes.Object_8.skeleton} />
    </group>
    );
}

// const Look = ()=>{
//   const aaa = useRef()
  

  

//   return (
 
    

//   );
// }


const Thebox = ()=>{
  return(
    <>
          <Plane args={[3,3]} position={[0,0,-1]} > <meshLambertMaterial color={"red"} emissive={"red"} emissiveIntensity={1}/></Plane>
          <Plane args={[3,3]} position={[0,0,1]}> <meshLambertMaterial color={"red"} emissive={"red"} emissiveIntensity={1}/></Plane>
    </>
  );
}


const Cube1 = ({pos=[0,0,0] ,a=1,col="blue"})=>{

  return(
    <group>
      <mesh scale={a}
      position={pos}>
        <boxGeometry
        args={[2,2,2]}
        
        />
        <Edges/>

        <meshStandardMaterial
        color={col}
        aoMapIntensity={1}
        emissive={col}
        emissiveIntensity={1}
        roughness={1}
        />
      
        </mesh>
    </group>
  );
} 






const Sph = ()=>{
  return(
    <group>

    <Sphere args={[0.5,10,10]}
    position={[0,0,0]}>
      <meshStandardMaterial
      color={"blue"}
      //emissive means light comes ffrom object
      emissive={"yellow"}
      emissiveIntensity={0.5}
      roughness={0.5}/>
    </Sphere>
    <Sphere args={[0.5,10,10]}
    position={[0,2,0]}>
      <meshStandardMaterial
      color={"blue"}
      //emissive means light comes ffrom object
      emissive={"yellow"}
      emissiveIntensity={0.5}
      roughness={0.5}/>
    </Sphere>
      </group>
      
      );
}



const Model1 = ()=>{

  const Mod1 = useGLTF("./src/assets/models/python/scene.gltf")
  const mod1ref = useRef();
    useFrame((state,delta)=>{
   mod1ref.current.rotation.y -= 0.002;
  });
  return(
    
    <>
      <primitive
      object={Mod1.scene}
      scale = '2'
      ref={mod1ref}
      // onClick={()=>{window.open('', '_blank')}}
      >
      </primitive>
      <Environment preset={"city"} />
      </>

);
}





const Model2 = ()=>{
  const mod2ref = useRef();
    useFrame((state,delta)=>{
   mod2ref.current.rotation.y -= 0.002;
  });
  return(
    <Gltf src="./src/assets/models/python/scene.gltf" ref={mod2ref} scale={5}></Gltf>
  );
}


const Model3 = (props)=>{
  const mod2ref = useRef();
  const { nodes, materials } = useGLTF('./src/assets/models/carr/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.015, -0.009, 0.063]} rotation={[-Math.PI / 2, 0, 0]} scale={0.578}>
        <group position={[0, -0.003, 0.007]}>
          <mesh geometry={nodes.windshield_0.geometry} material={materials.window} emissive={"pink"} emissiveIntensity={10}/>
          <mesh geometry={nodes.windshield_1.geometry} material={materials.plastic} />
        </group>
        <group position={[0, 0, 0.029]}>
          <mesh geometry={nodes.Cylinder000_0.geometry} material={materials.silver} />
          <mesh geometry={nodes.Cylinder000_1.geometry} material={materials.plastic} />
          <mesh geometry={nodes.Cylinder000_2.geometry} material={materials.rubber} />
          <mesh geometry={nodes.Cylinder000_3.geometry} material={materials['Material.001']} />
        </group>
        <group position={[0, 0, 0.029]}>
          <mesh geometry={nodes.Cylinder001_0.geometry} material={materials.silver} />
          <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.plastic} />
          <mesh geometry={nodes.Cylinder001_2.geometry} material={materials.rubber} />
          <mesh geometry={nodes.Cylinder001_3.geometry} material={materials['Material.001']} />
        </group>
        <mesh  geometry={nodes.window_rear_0.geometry} material={materials.window} />
        <mesh  geometry={nodes.Plane002_0.geometry} material={materials.paint} position={[-1.053, 3.51, -0.126]} rotation={[-1.439, -0.62, 0.775]} scale={0.024} />
        <mesh  geometry={nodes.Plane003_0.geometry} material={materials.paint} position={[0.436, 3.723, -0.117]} rotation={[-1.483, 0.105, 0.803]} scale={0.024} />
        <mesh  geometry={nodes.Plane004_0.geometry} material={materials.paint} position={[-0.488, 3.684, -0.328]} rotation={[-1.415, -0.045, 0.802]} scale={0.059} />
        <mesh  geometry={nodes.boot_0.geometry} material={materials.full_black} />
        <mesh  geometry={nodes.underbody_0.geometry} material={materials.full_black} />
        <mesh  geometry={nodes.Plane_0.geometry} material={materials.Material} position={[0, 0, -1.054]} scale={[6.953, 9.785, 7.496]} />
        <mesh  geometry={nodes.Cube001_0.geometry} material={materials.plastic} position={[0.036, -1.56, 0.333]} rotation={[0.709, -0.071, -0.245]} scale={[0.014, 0.014, 0.012]} />
        <mesh  geometry={nodes.bumper_front004_0.geometry} material={materials.silver} />
        <mesh  geometry={nodes.bumper_front004_1.geometry} material={materials.lights} />
        <mesh  geometry={nodes.bumper_front004_2.geometry} material={materials.plastic} />
        <mesh  geometry={nodes.bumper_front007_0.geometry} material={materials.glass} rotation={[-0.006, 0, 0]} scale={1.036} />
        <mesh  geometry={nodes.bumper_front009_0.geometry} material={materials.tex_shiny} />
        <mesh  geometry={nodes.bumper_front001_0.geometry} material={materials.plastic} />
        <mesh  geometry={nodes.bumper_front001_1.geometry} material={materials.silver} />
        <mesh  geometry={nodes.bumper_front001_2.geometry} material={materials.lights} />
        <mesh  geometry={nodes.bumper_front003_0.geometry} material={materials.plastic} />
        <mesh geometry={nodes.bumper_front003_1.geometry} material={materials.glass} />
        <mesh geometry={nodes.boot001_0.geometry} material={materials.paint} />
        <mesh geometry={nodes.boot002_0.geometry} material={materials.paint} />
        <mesh geometry={nodes.Plane001_0.geometry} material={materials.tex_shiny} position={[0.005, 3.581, 0.107]} />
        <mesh geometry={nodes.boot003_0.geometry} material={materials.tex_shiny} position={[0, 0.003, 0]} />
        <mesh geometry={nodes.boot004_0.geometry} material={materials.window} />
        <mesh geometry={nodes.boot005_0.geometry} material={materials.paint} />
        <mesh geometry={nodes.boot006_0.geometry} material={materials.full_black} />
        <mesh geometry={nodes.window_rear001_0.geometry} material={materials.full_black} />
        <mesh geometry={nodes.boot007_0.geometry} material={materials.logo} />
        <mesh geometry={nodes.Plane005_0.geometry} material={materials.license} position={[0, 3.704, -0.292]} rotation={[0.114, 0, 0]} scale={[0.393, 0.393, 0.356]} />
        <mesh geometry={nodes.Plane006_0.geometry} material={materials.license} position={[0, -3.75, -0.432]} rotation={[0.082, 0, Math.PI]} scale={[0.395, 0.395, 0.357]} />
        <mesh geometry={nodes.boot008_0.geometry} material={materials.paint} />
        <mesh geometry={nodes.boot009_0.geometry} material={materials.silver} />
        <mesh geometry={nodes.boot010_0.geometry} material={materials.plastic} />
        <mesh geometry={nodes.boot011_0.geometry} material={materials.coat} />
        <mesh geometry={nodes.boot011_0_1.geometry} material={materials.coat} />
        <mesh geometry={nodes.Cube002_0.geometry} material={materials.full_black} scale={[0.332, 0.318, 0.318]} />
      </group>
    </group>
  );
}




const Sparks = (bbb)=>{
  return(
    <>
    <Sparkles
    color={bbb?"white":"black"}
    size={5}
    scale={[100,100,100]}
    speed={1}
    count={10000}
    position={[0,0,0]}
    />
    </>
  );
}

    const Text = ()=>{
      return(
        <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat deserunt fuga doloremque magni vero quasi veritatis consectetur incidunt sapiente? Voluptas laboriosam asperiores cupiditate ut magni natus, aspernatur voluptatum error maxime? Earum unde et, ab saepe quasi exercitationem, provident molestiae omnis, expedita quibusdam ut aliquid molestias facilis voluptatum reprehenderit quam nemo delectus odit ratione explicabo ex ipsam. Amet minima fugit quia commodi in corporis nostrum beatae totam. Quae quia vel tenetur adipisci corrupti ducimus autem? Molestias optio cupiditate nulla tempora veniam mollitia provident velit vero repellat, placeat vitae, amet obcaecati. Fugit eligendi libero magni ratione, mollitia maxime quibusdam veniam ipsum. Nesciunt sunt perferendis, veniam possimus placeat nostrum inventore natus deleniti exercitationem facere consequatur, culpa quo aspernatur sapiente labore reprehenderit minima, perspiciatis quos voluptas commodi ratione tempore sit qui. Nisi minima temporibus earum perspiciatis autem. Et odio id eveniet beatae iste rerum ipsa temporibus, repudiandae excepturi ullam veritatis fuga voluptates, quo iure fugit voluptatem dolores dolore ut placeat. Necessitatibus cumque illo vel ullam fugiat ab quidem veniam placeat fuga enim culpa ipsa mollitia quod dicta doloremque, odio neque, odit unde quisquam est id. Qui neque at quod aperiam quae eveniet voluptatem deleniti enim architecto maxime alias provident inventore, cupiditate asperiores numquam ex. Tenetur quam perferendis doloremque eos eum? Quibusdam quos commodi nostrum minima corporis accusantium labore molestias magnam distinctio sit quo totam id quia ullam laboriosam, aut possimus modi laborum? Dignissimos aliquid sit harum, in, veniam earum beatae eum ut impedit expedita tempora? Aut voluptatem autem eos ratione similique eius repudiandae dolorum, quasi maiores excepturi! Repudiandae nemo soluta, rerum inventore id ipsa velit rem totam animi, deleniti quisquam dignissimos, consectetur non fugit praesentium officiis aliquam voluptatum numquam. Voluptatibus maiores dolorum blanditiis. Assumenda a porro aliquam natus illo tempore ullam error, earum tenetur nulla velit voluptatum aliquid ex quam officia autem doloribus? Voluptate dignissimos provident officiis hic fuga reprehenderit nam dolores ea consectetur ipsum omnis deleniti id at dolor magni dolorum, voluptates molestias enim est atque! Facilis praesentium, alias deleniti eaque voluptate soluta, cupiditate incidunt odit quas consectetur porro dicta vel assumenda fuga magni sit omnis quaerat maiores cumque. Maxime id quasi odit facilis sunt saepe fuga ducimus, at laboriosam reprehenderit, repellat dignissimos molestiae quidem cumque veritatis deleniti totam earum quia laborum. Rerum praesentium ad odit quo vel sed qui voluptatum libero asperiores ratione! Dolore, magni eveniet labore, illum, eos nulla sint reprehenderit rem consectetur iste praesentium sed. Aliquam, a modi? Et officia animi illum nostrum consequatur numquam sint! Aliquid, minus libero. Veritatis quae nobis quidem dolorem! Ipsum rerum odio hic ab, doloremque, harum mollitia natus molestias voluptas corrupti cupiditate. Maiores temporibus provident eos voluptas ducimus atque qui! Eveniet, tempore repudiandae quo odit doloremque voluptas officiis atque dicta quaerat explicabo! Laborum expedita tempore consequuntur mollitia? Odio corporis eveniet voluptate accusantium consequatur officia sit amet nihil voluptatem molestiae, labore ex? Voluptatem ut asperiores perspiciatis eius commodi repellat temporibus necessitatibus voluptas, obcaecati nesciunt quibusdam. Nostrum esse dolores corporis atque sint iusto ab culpa, accusantium illum! Ipsum quae doloribus modi obcaecati voluptatum, esse similique, incidunt, iste eius numquam voluptas vel aspernatur libero. Asperiores molestias ad nihil cum quas veniam amet optio similique, illum eius accusantium, fugit autem, quaerat repellendus fuga eos enim doloribus itaque? Corrupti rerum fugiat dicta voluptatem minus ipsam similique tempore officiis distinctio totam, temporibus quia! Et rem ex quidem voluptatem autem architecto dolores, ratione debitis nobis hic reiciendis eos ipsa recusandae suscipit reprehenderit maxime asperiores nulla ipsam dolorum quo sint dolor consectetur? Molestiae unde distinctio sequi, odio nemo tempore quae soluta quis fugit repellat, temporibus deleniti ut, fugiat officia ducimus reprehenderit iure voluptatibus eligendi nobis. Ipsa rerum fuga officiis aspernatur! Aperiam alias, eius, excepturi temporibus mollitia tenetur illo voluptatem quasi ipsam quae voluptas eligendi impedit asperiores rerum exercitationem sed dolorem error architecto. Distinctio tempore cupiditate maiores magni illum officiis velit, aspernatur praesentium repellendus veniam minima consequuntur ea, maxime fugit, aliquid voluptatem delectus rem! Ullam nostrum culpa mollitia, explicabo optio enim quisquam iste, voluptatum amet vitae debitis fugiat a ratione, cum omnis incidunt dolore vel et accusamus reprehenderit. Voluptatum eos pariatur ipsam quam illo sed hic quidem, doloribus quibusdam corporis tempore. Adipisci expedita alias laboriosam fuga tempora quis omnis veritatis tempore, a in corrupti iusto pariatur, natus magni vitae ipsum corporis eius. Esse distinctio eveniet rerum dolorem porro doloremque error nihil quisquam voluptatum, culpa autem reiciendis quas molestiae consectetur nisi rem quod enim, eos amet assumenda quis! Nemo, porro tempore error delectus temporibus nam dicta modi. Dolorum, voluptate deserunt! Officiis placeat quos iusto quasi iste veritatis reiciendis temporibus dignissimos optio inventore, dolorem possimus quam itaque magnam, voluptates unde consectetur ullam necessitatibus iure! Veritatis ex nam aliquid eum sed esse numquam perspiciatis molestias, perferendis dolor. Officia voluptate voluptatem suscipit deleniti consequatur sit, eaque numquam incidunt accusamus! Maxime consectetur magnam nesciunt repellendus quo sit ad consequuntur unde, cumque saepe odio, facilis quaerat obcaecati velit vero in voluptatem! Vel non eos nostrum officia perferendis numquam magnam asperiores dolorem laboriosam alias, nobis atque quo, reprehenderit molestias ab eius! Saepe obcaecati, eius cumque eaque minima atque ipsam incidunt placeat distinctio illum. Maiores explicabo ex expedita totam dolore quos adipisci illo consequatur magni perspiciatis dolor amet, odit voluptatibus quasi nulla repellat omnis unde, rem assumenda recusandae quas? Inventore aut minima impedit obcaecati accusamus necessitatibus repellat iste magnam voluptatibus? Culpa incidunt nobis, dolore reiciendis sapiente excepturi ullam fugit, deleniti ab officiis, rerum magnam praesentium nisi consectetur! Culpa voluptatem quo minima commodi delectus officiis unde minus sequi doloribus aut quae vero quasi quidem tempora nulla perspiciatis consectetur itaque porro consequuntur, fugit molestias. Similique illo voluptatum laboriosam. Sapiente, dolorum quas sunt tempora facere minus dicta aliquid. Tempora non at, molestiae maxime error quis hic corrupti dignissimos necessitatibus voluptatibus vitae doloribus eum beatae expedita illum soluta vel dolore ut corporis eaque esse fuga a aut. Maxime ut accusamus, neque voluptate magnam consectetur facere molestiae laudantium pariatur minima sequi ex veritatis rem amet. Praesentium, quam dolore pariatur quis odio deleniti, laborum dolorum officiis, exercitationem excepturi vitae omnis debitis labore ratione. Fugit non at obcaecati voluptatum saepe alias repudiandae. Ullam rerum ea, error obcaecati vitae voluptas.
        </>
      );
    }







const Thecanvas = ()=>{
  return (
    <Canvas
    className="bg-[#f78989] " 
    style={{height:"100vh"}}
    frameloop="demand"
    shadows
    camera={{position:[0,0,20] , fov:25}}
    gl={{preserveDrawingBuffer: true}}
    >
    <Suspense fallback= {<CanvasLoader/>}>
    <OrbitControls
    enableZoom={true}/>
            <directionalLight/>
        <pointLight position={[0,5,10]}  power={10.0}/>
        <Model1/>
    </Suspense>
    <Preload all/>
    </Canvas>
  );

  }

{
  
// const Cam2 = ({   position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) })=>{

//   const { controls, scene } = useThree();
//   const [, params] = useRoute('/item/:id')

// useEffect(
//   ()=>{
//     const active = scene.getObjectbyName(params?.id)
//     if (active){
//       active.parent.localToWorld(position.set(0, 0.5, 0.25))
//       active.parent.localToWorld(focus.set(0, 0, -2))
//     }
//     controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
//   }
// )

// //outside camera
//   return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
// }


}

// const Layout = ()=>{
//   return (
//     <>
//     <nav>

//     <Link to={"/"}>home</Link>
//     <Link to={"apple"}>apple</Link>
//     <Link to={"ball"}>ball</Link>
//     <Link to={"cat"}>cat</Link>
//     </nav>
//     <Outlet/>
//     </>
//   );
// }

export default App
