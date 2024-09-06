function loadScript(url) {
    var script = document.createElement('script');
    script.src = url;
    script.onerror = function() {
        console.error('Failed to load script.');
    };
    document.head.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/gh/mewishmew9/Azzet@main/TOP%20SECRET%20FILE/BOBLOXSOURCEBv0.0.5.js")
loadScript("https://cdn.jsdelivr.net/gh/mewishmew9/Azzet@main/TOP%20SECRET%20FILE/BOBLOXSOURCEFILE%20v0.0.5.js")
loadScript("https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.2/dat.gui.min.js")
loadScript("https://assets.babylonjs.com/generated/Assets.js")
loadScript("https://cdn.babylonjs.com/recast.js")
loadScript("https://cdn.babylonjs.com/ammo.js")
loadScript("https://cdn.babylonjs.com/havok/HavokPhysics_umd.js")
loadScript("https://cdn.babylonjs.com/cannon.js")
loadScript("https://cdn.babylonjs.com/Oimo.js")
loadScript("https://cdn.babylonjs.com/earcut.min.js")
loadScript("https://cdn.babylonjs.com/babylon.js")
loadScript("https://cdn.babylonjs.com/materialsLibrary/babylonjs.materials.min.js")
loadScript("https://cdn.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js")
loadScript("https://cdn.babylonjs.com/postProcessesLibrary/babylonjs.postProcess.min.js")
loadScript("https://cdn.babylonjs.com/loaders/babylonjs.loaders.js")
loadScript("https://cdn.babylonjs.com/serializers/babylonjs.serializers.min.js")
loadScript("https://cdn.babylonjs.com/gui/babylon.gui.min.js")
loadScript("https://cdn.babylonjs.com/inspector/babylon.inspector.bundle.js")

Number.prototype.clamp = function(min, max) {
return Math.min(Math.max(this, min), max)
};
var canvas = document.getElementById("renderCanvas");
var startRenderLoop = function(engine, canvas) {
engine.runRenderLoop(function() {
  if (sceneToRender && sceneToRender.activeCamera) {
    sceneToRender.render();
  }
});
}

function dataURItoBlob(dataURI) {
var byteString = atob(dataURI.split(',')[1]);
var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
var ab = new ArrayBuffer(byteString.length);
var ia = new Uint8Array(ab);
for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
}
var blob = new Blob([ab], {type: mimeString});
return blob;
}


var keysheld = []
var shiftlock = false
var charlocked = false
var camOffset = new BABYLON.Vector3(0, 0, 0)
var keykallbaks = []
var engine = null;
var scene = null;
var sceneToRender = null;
var FallenPartDestroyLine = -100

var createDefaultEngine = async function() {
var engine = new BABYLON.WebGPUEngine(canvas);
await engine.initAsync();
await Ammo();
return engine;
};
var createScene = function() {
// This creates a basic Babylon Scene object (non-mesh)
var scene = new BABYLON.Scene(engine);
scene.clearColor = BABYLON.Color3.FromInts(184, 184, 184)
const Vector3 = {
  new: function(x,y,z) {
    return new BABYLON.Vector3(x,y,z)
  }
}
const Instance = {
  classes: {
    Part: function(parent) {
      var box = new BABYLON.MeshBuilder.CreateBox()
      box.scaling = Vector3.new(2,1,1)
      return {
        coreBObj: box,
        Destroy: function() {box.dispose},
      }
    }
  },
  new: function(instance) {
    return Instance.classes[instance]()
  }
}

const camera = new BABYLON.TransformNode();
var MainCamera = new BABYLON.FreeCamera("MainCamera", new BABYLON.Vector3(0, 0, -15), scene);
MainCamera.maxZ = 10000
MainCamera.minZ = 0.1; // (debugNode as BABYLON.FreeCamera)
MainCamera.fov = 1.1000; // (debugNode as BABYLON.FreeCamera)
MainCamera.parent = camera

// First, store the original CreateBox method


// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0, 3.12, -0.23), scene);
light.position = new BABYLON.Vector3(-2.579418897628784, 7.932126998901367, 6.347271919250488); // (debugNode as BABYLON.DirectionalLight)
light.direction = new BABYLON.Vector3(0.5, -1.5, -0.5);
var shadowGenerator = new BABYLON.CascadedShadowGenerator(1024, light);
shadowGenerator.numCascades = 2;// (debugNode as BABYLON.Unknown)
shadowGenerator.filteringQuality = 1; // (debugNode as BABYLON.Unknown)
shadowGenerator.shadowMaxZ = 200;// (debugNode as BABYLON.Unknown)
shadowGenerator.stabilizeCascades = true;// (debugNode as BABYLON.Unknown)
//shadowGenerator.filter = 7;

function gabs(mesh) {
    // Ensure the world matrix is up-to-date
    mesh.computeWorldMatrix(true);

    // Get the world matrix of the mesh
    let worldMatrix = mesh.getWorldMatrix();

    // Extract the translation (absolute position) from the world matrix
    let absolutePosition = worldMatrix.getTranslation();

    return absolutePosition;
}

scene.audioListenerPositionProvider = () => {  return gabs(MainCamera) };
BABYLON.Engine.audioEngine.useCustomUnlockedButton = true;

function dataURIToArrayBuffer(dataURI) {
  console.log(dataURI)
    const byteString = atob(dataURI.split(',')[1]);
    const arrayBuffer = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        arrayBuffer[i] = byteString.charCodeAt(i);
    }
    return arrayBuffer.buffer; // Return ArrayBuffer
}

const arrayBuffer = dataURItoBlob(window.BOBLOXSOURCEB.Music.CoffeeBreak);
BABYLON.Tools.ReadFile(arrayBuffer, (data) => {
    const sound = new BABYLON.Sound("mySound", data, scene, function() {
      sound.play()
    }, {
        autoplay: true,
        loop: true,
        volume: 1
    });
}, null, true);
/*const musicsound = URL.createObjectURL(dataURItoBlob(""))
const music = new BABYLON.Sound("Music", "https://cdn.jsdelivr.net/gh/mewishmew9/Azzet@main/Sounds/action_footsteps_plastic.mp3", scene, function () {
  music.play();
}, {
  playbackRate: 1,
  volume: 3,
  loop: true,
  spatialSound: true,
  maxDistance: 100,
  distanceModel: "exponential",
  rolloffFactor: 1,
});*/
//console.log(musicsound)
const Player = {
  "Character":null,
  "Backpack":[],
};
function waitForCondition(conditionFn, interval = 100) {
  return new Promise((resolve) => {
    function checkCondition() {
      var conditionfnss = conditionFn()
      if (conditionfnss) {
        resolve();
      } else {
        setTimeout(checkCondition, interval)
      }
    }
    checkCondition()
  });
}

const originalCreateBox = BABYLON.MeshBuilder.CreateBox;

// Create a wrapper function
BABYLON.MeshBuilder.CreateBox = function(name, options, scene) {
    // Call the original CreateBox method
    const box = originalCreateBox(name, options, scene);
    box.receiveShadows = true
    box.renderingGroupId = 1;
    if (!box.material) {
        const defaultMaterial = new BABYLON.StandardMaterial("defaultMaterial", scene);
        defaultMaterial.diffuseColor = new BABYLON.Color3.FromInts(120, 120, 120); // Example: red color
        defaultMaterial.emissiveColor = BABYLON.Color3.FromInts(30,30,30)
        defaultMaterial.specularColor = BABYLON.Color3.FromInts(90,90,90)
        box.material = defaultMaterial;
    }
    return box;
};

const originalCreateSphere = BABYLON.MeshBuilder.CreateSphere;

BABYLON.MeshBuilder.CreateSphere = function(name, options, scene) {
    const Sphere = originalCreateSphere(name, options, scene);

    Sphere.receiveShadows = true
    Sphere.renderingGroupId = 1;
    if (!Sphere.material) {
        const defaultMaterial = new BABYLON.StandardMaterial("defaultMaterial", scene);
        defaultMaterial.diffuseColor = new BABYLON.Color3.FromInts(120, 120, 120); // Example: red color
        defaultMaterial.emissiveColor = BABYLON.Color3.FromInts(30,30,30)
        defaultMaterial.specularColor = BABYLON.Color3.FromInts(90,90,90)
        Sphere.material = defaultMaterial;
    }
    // Return the box
    return Sphere;
};

function sub_mesh_cube(cube) {
  var verticesCount = cube.getTotalVertices();
  cube.subMeshes.push(new BABYLON.SubMesh(0, 0, verticesCount, 0, 6, cube));
  cube.subMeshes.push(new BABYLON.SubMesh(1, 1, verticesCount, 6, 6, cube));
  cube.subMeshes.push(new BABYLON.SubMesh(2, 2, verticesCount, 12, 6, cube));
  cube.subMeshes.push(new BABYLON.SubMesh(3, 3, verticesCount, 18, 6, cube));
  cube.subMeshes.push(new BABYLON.SubMesh(4, 4, verticesCount, 24, 6, cube));
  cube.subMeshes.push(new BABYLON.SubMesh(5, 5, verticesCount, 30, 6, cube));
}

function multi_mat_Cube(forward, back, left, right, top, bottom) {
  var multi = new BABYLON.MultiMaterial("multis" + mtls, scene);
  multi.subMaterials.push(forward);
  multi.subMaterials.push(back);
  multi.subMaterials.push(left);
  multi.subMaterials.push(right);
  multi.subMaterials.push(top);
  multi.subMaterials.push(bottom);
  return multi
}

const degrees_to_radians = deg => (deg * Math.PI) / 180.0; // Convert degrees to radians using the formula: radians = (degrees * Math.PI) / 180

var mtls = 0
const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {
  size: 20.0
}, scene);
skybox.infiniteDistance = true;
skybox.name = "SKYBOX"
skybox.renderingGroupId = 0;
skybox.applyFog = false
skybox.isPickable = false
skybox.subMeshes = [];
sub_mesh_cube(skybox)
var frontSky = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
frontSky.backFaceCulling = false;
frontSky.emissiveColor = new BABYLON.Color3(1, 1, 1);
frontSky.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/skybox/defaultFront.png")
frontSky.diffuseTexture.vScale = -1
var backSky = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
backSky.emissiveColor = new BABYLON.Color3(1, 1, 1);
backSky.backFaceCulling = false;
backSky.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/skybox/defaultBack.png")
backSky.diffuseTexture.uScale = -1
var leftSky = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
leftSky.emissiveColor = new BABYLON.Color3(1, 1, 1);
leftSky.backFaceCulling = false;
leftSky.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/skybox/defaultLeft.png")
leftSky.diffuseTexture.wAng = degrees_to_radians(90)
leftSky.diffuseTexture.vScale = -1
var rightSky = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
rightSky.emissiveColor = new BABYLON.Color3(1, 1, 1);
rightSky.backFaceCulling = false;
rightSky.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/skybox/defaultRight.png")
rightSky.diffuseTexture.wAng = degrees_to_radians(90)
rightSky.diffuseTexture.vScale = -1
var topSky = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
topSky.emissiveColor = new BABYLON.Color3(1, 1, 1);
topSky.backFaceCulling = false;
topSky.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/skybox/defaultTop.png")
topSky.diffuseTexture.vScale = -1
var bottomSky = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
bottomSky.emissiveColor = new BABYLON.Color3(1, 1, 1);
bottomSky.backFaceCulling = false;
bottomSky.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/skybox/defaultBottom.png")
bottomSky.diffuseTexture.vScale = -1
var multi = multi_mat_Cube(frontSky, backSky, leftSky, rightSky, topSky, bottomSky)
skybox.material = multi

const FwuatBox = BABYLON.MeshBuilder.CreateBox("skyBox", {}, scene);
FwuatBox.name = "FwuatBox"
FwuatBox.scaling = new BABYLON.Vector3(1,1,1)
FwuatBox.position = new BABYLON.Vector3(-20,4,20)
FwuatBox.renderingGroupId = 1;
FwuatBox.applyFog = false
FwuatBox.subMeshes = [];
sub_mesh_cube(FwuatBox)
var fs = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
fs.backFaceCulling = false;
fs.emissiveColor = new BABYLON.Color3(1, 1, 1);
fs.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/fwu1.png")
fs.diffuseTexture.vScale = -1
var bs = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
bs.emissiveColor = new BABYLON.Color3(1, 1, 1);
bs.backFaceCulling = false;
bs.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/fwu1.png")
bs.diffuseTexture.uScale = -1
var ls = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
ls.emissiveColor = new BABYLON.Color3(1, 1, 1);
ls.backFaceCulling = false;
ls.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/fwu1.png")
ls.diffuseTexture.wAng = degrees_to_radians(90)
ls.diffuseTexture.vScale = -1
var rs = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
rs.emissiveColor = new BABYLON.Color3(1, 1, 1);
rs.backFaceCulling = false;
rs.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/fwu1.png")
rs.diffuseTexture.wAng = degrees_to_radians(90)
rs.diffuseTexture.vScale = -1
var ts = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
ts.emissiveColor = new BABYLON.Color3(1, 1, 1);
ts.backFaceCulling = false;
ts.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/fwu1.png")
ts.diffuseTexture.vScale = -1
var bts = new BABYLON.StandardMaterial("MTRL" + mtls)
mtls += 1
bts.emissiveColor = new BABYLON.Color3(1, 1, 1);
bts.backFaceCulling = false;
bts.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/fwu1.png")
bts.diffuseTexture.vScale = -1
var multi2 = multi_mat_Cube(fs, bs, ls, rs, ts, bts)
FwuatBox.material = multi2

// Default intensity is 1. Let's dim the light a small amount
scene.enablePhysics(new BABYLON.Vector3(0, -185, 0), new BABYLON.AmmoJSPlugin());

function CheckFirstChild(Parent, Name, Recursive) {
  if (!Recursive) {
    var hasgot = false
    Parent.getChildren().forEach(function(index) {
      if (index.name == Name) {
        hasgot = true;
      }
    })
    return hasgot
  } else {
    var hasgot = false
    Parent.getDescendants().forEach(function(index) {
      if (index.name == Name) {
        hasgot = true
      }
    })
    return hasgot
  }
}

function FindFirstChild(Parent, Name, Recursive) {
  if (!Recursive) {
    var hasgot = null;
    Parent.getChildren().forEach(function(index) {
      if (index.name == Name) {
        hasgot = index;
      }
    })
    return hasgot
  } else {
    var hasgot = null;
    Parent.getDescendants().forEach(function(index) {
      if (index.name == Name) {
        hasgot = index;
      }
    })
    return hasgot
  }
}

function AnchorB(mesh, mass) {
  shadowGenerator.getShadowMap().renderList.push(mesh)
  mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
    mass: mass,
    friction: 1,
    restitution: 0.3
  }, scene);
}

AnchorB(FwuatBox,0)

function AnchorM(mesh, mass) {
  shadowGenerator.getShadowMap().renderList.push(mesh)
  mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, {
    mass: mass,
    friction: 0.7,
    restitution: 0.9
  }, scene);
}

light.intensity = 1;
light.shadowMinZ = 0;
light.shadowMaxZ = 300;
shadowGenerator.shadowMaxZ = 300;
shadowGenerator.bias = 0.01; // (debugNode as BABYLON.Unknown)
shadowGenerator.lambda = 0.3600; // (debugNode as BABYLON.Unknown)
shadowGenerator.darkness = 0.5; // (debugNode as BABYLON.Unknown)

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
}

function pose(Character, Pose) {
    if (Pose["Left Leg"]) {
    FindFirstChild(Character,"Left Hip",true).rotation.x = Pose["Left Leg"]["rotation"].z
    FindFirstChild(Character,"Left Hip",true).rotation.y = -Pose["Left Leg"]["rotation"].y
    FindFirstChild(Character,"Left Hip",true).rotation.z = -Pose["Left Leg"]["rotation"].x
    
    FindFirstChild(Character,"Left Hip",true).position.x = -(Pose["Left Leg"]["Position"].z)-1
    FindFirstChild(Character,"Left Hip",true).position.y = Pose["Left Leg"]["Position"].y-1
    FindFirstChild(Character,"Left Hip",true).position.z = -Pose["Left Leg"]["Position"].x/2
  }
  if (Pose["Right Leg"]) {
    FindFirstChild(Character,"Right Hip",true).rotation.x = -Pose["Right Leg"]["rotation"].z
    FindFirstChild(Character,"Right Hip",true).rotation.y = -Pose["Right Leg"]["rotation"].y
    FindFirstChild(Character,"Right Hip",true).rotation.z = -Pose["Right Leg"]["rotation"].x/2
    
    FindFirstChild(Character,"Right Hip",true).position.x = Pose["Right Leg"]["Position"].z+1
    FindFirstChild(Character,"Right Hip",true).position.y = Pose["Right Leg"]["Position"].y-1
    FindFirstChild(Character,"Right Hip",true).position.z = Pose["Right Leg"]["Position"].x
  }
  if (Pose["Right Arm"]) {
    FindFirstChild(Character,"Right Shoulder",true).rotation.x = -Pose["Right Arm"]["rotation"].z
    FindFirstChild(Character,"Right Shoulder",true).rotation.y = -Pose["Right Arm"]["rotation"].y
    FindFirstChild(Character,"Right Shoulder",true).rotation.z = -Pose["Right Arm"]["rotation"].x
    
    FindFirstChild(Character,"Right Shoulder",true).position.x = Pose["Right Arm"]["Position"].z+1
    FindFirstChild(Character,"Right Shoulder",true).position.y = Pose["Right Arm"]["Position"].y+0.5
    FindFirstChild(Character,"Right Shoulder",true).position.z = Pose["Right Arm"]["Position"].x
  }
  if (Pose["Left Arm"]) {
    FindFirstChild(Character,"Left Shoulder",true).rotation.x = Pose["Left Arm"]["rotation"].z
    FindFirstChild(Character,"Left Shoulder",true).rotation.y = -Pose["Left Arm"]["rotation"].y
    FindFirstChild(Character,"Left Shoulder",true).rotation.z = Pose["Left Arm"]["rotation"].x
    
    FindFirstChild(Character,"Left Shoulder",true).position.x = -Pose["Left Arm"]["Position"].z-1
    FindFirstChild(Character,"Left Shoulder",true).position.y = Pose["Left Arm"]["Position"].y+0.5
    FindFirstChild(Character,"Left Shoulder",true).position.z = -Pose["Left Arm"]["Position"].x
  }
  
  if (Pose["Torso"]) {
    FindFirstChild(Character,"Torso",true).rotation.x = Pose["Torso"]["rotation"].x
    FindFirstChild(Character,"Torso",true).rotation.y = Pose["Torso"]["rotation"].z
    FindFirstChild(Character,"Torso",true).rotation.z = -Pose["Torso"]["rotation"].y
    
    FindFirstChild(Character,"Torso",true).position.x = Pose["Torso"]["Position"].x
    FindFirstChild(Character,"Torso",true).position.y = Pose["Torso"]["Position"].z
    FindFirstChild(Character,"Torso",true).position.z = Pose["Torso"]["Position"].y
  }
  
  if (Pose["Head"]) {
    FindFirstChild(Character,"Neck",true).rotation.x = Pose["Head"]["rotation"].x
    FindFirstChild(Character,"Neck",true).rotation.y = Pose["Head"]["rotation"].z
    FindFirstChild(Character,"Neck",true).rotation.z = -Pose["Head"]["rotation"].y
    
    FindFirstChild(Character,"Neck",true).position.x = Pose["Head"]["Position"].x
    FindFirstChild(Character,"Neck",true).position.y = Pose["Head"]["Position"].z+1
    FindFirstChild(Character,"Neck",true).position.z = Pose["Head"]["Position"].y
  }
}

async function LegacyPlayAnimation(Character, Animation, speed = 1) {
    var TimeStarted = new Date() / 1000;
    while (true) { // Infinite loop to keep the animation playing
    for (const frame of Animation) {
        pose(Character, frame["KeyFrames"]);
        if (Animation[Animation.indexOf(frame)+1]) {
            await wait((Animation[Animation.indexOf(frame)+1].Time-frame.Time)*(1000/speed));
          
        }
    }
    var timefinished = TimeStarted-(new Date() / 1000);
  }
}

function animatorRender(Character,Humanoid) {
  try {
    Humanoid.Animator.forEach(function(Track) {
    if (Track.IsPlaying == true) {
      const animation = Track.Animation
      if (Track.CURRTimeFrame != -1) {
        var fin = false
        if (Track.EndTime/Track.Speed<(new Date() / 1000)-Track.TimeWhenStarted && Track.Looped == true) {
          Track.TimeWhenStarted = new Date() / 1000;
          Track.CURRTimeFrame = -1;
        } else {
          if (Track.Looped == false && Track.EndTime/Track.Speed<(new Date() / 1000)-Track.TimeWhenStarted) {
            Track.IsPlaying = false
          }
        }
        animation.forEach(function(frame) {
          if ((new Date() / 1000)-Track.TimeWhenStarted<frame.Time/Track.Speed && fin == false ) {
            
            if (Track.CURRTimeFrame != frame.Time/Track.Speed) {
                pose(Character,frame["KeyFrames"])
            }
            Track.CURRTimeFrame = frame.Time/Track.Speed
            fin = true
          }
        });
      } else {
        pose(Character,animation[0]["KeyFrames"])
        Track.CURRTimeFrame = 0
      };
    }
  });
  } catch(err) {
    console.log(String(err))
  }
};




var debris = new BABYLON.TransformNode("Debris");

async function buildCharacter(Name,mass = 3,customface = "https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/cute.png",pants = "https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/144076760.png") {
  const CharacterPhysic = new BABYLON.MeshBuilder.CreateBox("PlayerPhysics", {
    width: 2,
    height: 2,
    capSubdivisions: 2,
    subdivisions: 2,
    tessellation: 8
  }, scene)
  CharacterPhysic.visibility = 0; // (debugNode as BABYLON.Mesh)
  CharacterPhysic.renderingGroupId = 1;
  CharacterPhysic.position.y += 10
  CharacterPhysic.scaling = new BABYLON.Vector3(1, 1, 1)
  CharacterPhysic.physicsImpostor = new BABYLON.PhysicsImpostor(CharacterPhysic, BABYLON.PhysicsImpostor.BoxImpostor, {
    mass: mass,
    friction: 0.7,
    restitution: 0
  }, scene);
  const Character = new BABYLON.TransformNode(Name);
  Character.scaling = new BABYLON.Vector3(1, 1, 1)
  Character.parent = CharacterPhysic
  
  var animIDs = 0
  
  const Humanoid = {
    ["Animator"]: [],
    ["Health"]: 100,
    ["MaxHealth"]: 100,
    ["CleanUpTime"]: 5,
                ["Dead"]: false,
    ["minCamera"]: -0.1,
    ["maxCamera"]: 25,
    ["CameraSubject"]: CharacterPhysic,
    ["BreakJointsOnDeath"]: true,
    ["LoadAnimation"]: async function(anim) {
      animIDs += 1
      const A_ID = animIDs
      const Tracc = {
        ["Animation"]: anim,
        ["TimeWhenStarted"]: new Date() / 1000,
        ["EndTime"]: anim[anim.length-1].Time,
        ["CURRTimeFrame"]: -1,
        ["Speed"]: 1,
        ["IsPlaying"]: false,
        ["Looped"]: false,
        ["Priority"]: 0,
        ["ID"]: A_ID,
        ["Play"]: async function() {
          await waitForCondition(function() {return FindFirstChild(Character, "Head", true)}, 1);
          await waitForCondition(function() {return FindFirstChild(Character, "Right Leg", true)}, 1);
          Tracc.TimeWhenStarted = new Date() / 1000,
          Tracc.IsPlaying = true
        },
        ["Stop"]: async function() {
          await waitForCondition(function() {return FindFirstChild(Character, "Head", true)}, 1);
          await waitForCondition(function() {return FindFirstChild(Character, "Right Leg", true)}, 1);
          Tracc.CURRTimeFrame -1,
          Tracc.IsPlaying = false
        },
      }
      Humanoid.Animator.push(Tracc);
      return Tracc;
    },
  };

  var Torso
  new BABYLON.SceneLoader.ImportMesh("","",URL.createObjectURL(dataURItoBlob(window.BOBLOXSOURCE.ObjFiles.BodyParts.Torso)),scene, async function (meshes) {
    const mat = new BABYLON.StandardMaterial();
    mat.diffuseColor = new BABYLON.Color3.FromInts(0, 0, 255)
    mat.emissiveColor = new BABYLON.Color3(0, 0, 0.34);
    Torso = meshes[0]
    Torso.receiveShadows = true;
    Torso.name = "Torso"
    Torso.material = mat
    Torso.renderingGroupId = 1;
    shadowGenerator.getShadowMap().renderList.push(Torso);
    Torso.parent = Character

    const Neck = new BABYLON.TransformNode("Neck");
    Neck.position = new BABYLON.Vector3(0, 1, 0)
    Neck.parent = Torso;
    var Head
    var Face
    new BABYLON.SceneLoader.ImportMesh("","",URL.createObjectURL(dataURItoBlob(window.BOBLOXSOURCE.ObjFiles.BodyParts.Head)),scene, async function (meshes) {
      Head = meshes[0]
      Head.name = "Head"
      Head.renderingGroupId = 1;
      const mat = new BABYLON.StandardMaterial();
      mat.diffuseColor = new BABYLON.Color3.FromInts(255, 255, 0)
      mat.emissiveColor = new BABYLON.Color3(0.34, 0.34, 0);
      Head.material = mat
      Head.receiveShadows = true;
      Head.position = new BABYLON.Vector3(0, 0.5, 0);
      shadowGenerator.getShadowMap().renderList.push(Head);
      const billboard = BABYLON.Mesh.CreatePlane('billboard', 20, scene)
      billboard.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL
      billboard.position.y = 1.5
      billboard.renderingGroupId = 1;
      const ui = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(billboard, 680, 340, false)
      ui.renderScale = 5
      const label = new BABYLON.GUI.TextBlock("NAME")
      label.text = Name;
      label.scaleX = 0.5
      label.fontSize = 60;
      label.color = "white";
      label.outlineWidth = 1;
      label.outlineColor = "black";

      //ui.addControl(label)
      billboard.parent = Head
      Head.parent = Neck
      new BABYLON.SceneLoader.ImportMesh("","",URL.createObjectURL(dataURItoBlob(window.BOBLOXSOURCE.ObjFiles.BodyParts.Head)),scene, async function (meshes) {
        Face = meshes[0]
        Face.name = "Face"
        Face.applyFog = true;
        Face.scaling = new BABYLON.Vector3(1.01, 1.01, 1.01)
        Face.renderingGroupId = 1;
        Face.rotation.y = BABYLON.Tools.ToRadians(180);
        const mat2 = new BABYLON.StandardMaterial();
        mat2.diffuseTexture = new BABYLON.Texture(customface, scene);
        mat2.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        mat2.diffuseTexture.hasAlpha = true; // (debugNode as BABYLON.Texture)
        mat2.useAlphaFromDiffuseTexture = true; // (debugNode as BABYLON.StandardMaterial)
        Face.material = mat2
        Face.receiveShadows = true;
        shadowGenerator.getShadowMap().renderList.push(Face);
        Face.parent = Head
      },null,null,".obj");
    },null,null,".obj");

    var RightShoulder = new BABYLON.TransformNode("Right Shoulder");
    RightShoulder.position = new BABYLON.Vector3(1, 0.5, 0)
    RightShoulder.parent = Torso;
    var RightArm
    new BABYLON.SceneLoader.ImportMesh("","",URL.createObjectURL(dataURItoBlob(window.BOBLOXSOURCE.ObjFiles.BodyParts.RightArm)),scene, async function (meshes) {
      RightArm = meshes[0]
      RightArm.name = "Right Arm"
      RightArm.rotation.y = BABYLON.Tools.ToRadians(180)
      const mat = new BABYLON.StandardMaterial();
      mat.diffuseColor = new BABYLON.Color3.FromInts(255, 255, 0)
      mat.emissiveColor = new BABYLON.Color3(0.34, 0.34, 0);
      RightArm.renderingGroupId = 1;
      RightArm.material = mat
      RightArm.receiveShadows = true;
      shadowGenerator.getShadowMap().renderList.push(RightArm);
      RightArm.position = new BABYLON.Vector3(0.5, -0.5, 0);
      RightArm.parent = RightShoulder
    },null,null,".obj");

    var LeftShoulder = new BABYLON.TransformNode("Left Shoulder");
    LeftShoulder.position = new BABYLON.Vector3(-1, 0.5, 0)
    LeftShoulder.parent = Torso;
    var LeftArm
    new BABYLON.SceneLoader.ImportMesh("","",URL.createObjectURL(dataURItoBlob(window.BOBLOXSOURCE.ObjFiles.BodyParts.LeftArm)),scene, async function (meshes) {
      LeftArm = meshes[0]
      LeftArm.rotation.y = BABYLON.Tools.ToRadians(180)
      LeftArm.name = "Left Arm"
      const mat = new BABYLON.StandardMaterial();
      mat.diffuseColor = new BABYLON.Color3.FromInts(255, 255, 0)
      mat.emissiveColor = new BABYLON.Color3(0.34, 0.34, 0);
      LeftArm.renderingGroupId = 1;
      LeftArm.material = mat
      shadowGenerator.getShadowMap().renderList.push(LeftArm);
      LeftArm.position = new BABYLON.Vector3(-0.5, -0.5, 0);
      LeftArm.parent = LeftShoulder
    },null,null,".obj");

    var LeftHip = new BABYLON.TransformNode("Left Hip");
    LeftHip.position = new BABYLON.Vector3(-1, -1, 0)
    LeftHip.parent = Torso;
    var LeftLeg
    new BABYLON.SceneLoader.ImportMesh("","",URL.createObjectURL(dataURItoBlob(window.BOBLOXSOURCE.ObjFiles.BodyParts.LeftLeg)),scene, async function (meshes) {
      LeftLeg = meshes[0]
      LeftLeg.rotation.y = BABYLON.Tools.ToRadians(180)
      const mat = new BABYLON.StandardMaterial();
      mat.diffuseColor = new BABYLON.Color3.FromInts(58, 201, 118)
      mat.emissiveColor = new BABYLON.Color3(0.1, 0.3, 0.2);
      LeftLeg.renderingGroupId = 1;
      LeftLeg.material = mat
      LeftLeg.name = "Left Leg"
      shadowGenerator.getShadowMap().renderList.push(LeftLeg);
      LeftLeg.position = new BABYLON.Vector3(0.5, -1, 0);
      LeftLeg.parent = LeftHip
    },null,null,".obj");

    var RightHip = new BABYLON.TransformNode("Right Hip");
    RightHip.position = new BABYLON.Vector3(1, -1, 0)
    RightHip.parent = Torso;
    var RightLeg
    new BABYLON.SceneLoader.ImportMesh("","",URL.createObjectURL(dataURItoBlob(window.BOBLOXSOURCE.ObjFiles.BodyParts.RightLeg)),scene, async function (meshes) {
      RightLeg = meshes[0]
      RightLeg.rotation.y = BABYLON.Tools.ToRadians(180)
      const mat = new BABYLON.StandardMaterial();
      mat.diffuseColor = new BABYLON.Color3.FromInts(58, 201, 118)
      mat.emissiveColor = new BABYLON.Color3(0.1, 0.3, 0.2);
      RightLeg.renderingGroupId = 1;
      RightLeg.material = mat
      RightLeg.name = "Right Leg"
      shadowGenerator.getShadowMap().renderList.push(RightLeg);
      RightLeg.position = new BABYLON.Vector3(-0.5, -1, 0);
      RightLeg.parent = RightHip
    },null,null,".obj");
  },null,null,".obj");
  
  function step(characterMesh, rayLength) {
      const physicsWorld = scene.getPhysicsEngine().getPhysicsPlugin().world;

      // Get the character's rotation in radians
      const rotationY = CharacterPhysic.rotationQuaternion.toEulerAngles().y; // Assuming Y-axis rotation
      // Define directions relative to the character's rotation
      const directions = [
          { x: 0, z: 0 },  // straight down
          { x: 0, z: -0.46 }, // backward
          { x: 0, z: 0.46 },  // forward
          { x: 0.96, z: 0 },  // right
          { x: 0.96, z: -0.46 }, // right-backward
          { x: 0.96, z: 0.46 },  // right-forward
          { x: -0.96, z: 0 },  // left
          { x: -0.96, z: -0.46 }, // left-backward
          { x: -0.96, z: 0.46 }  // left-forward
      ];

      const from = CharacterPhysic.physicsImpostor.physicsBody.getWorldTransform().getOrigin();
      let isOnGround = false;

      for (let dir of directions) {
          // Calculate the direction based on the character's rotation
          const rotatedX = dir.x * Math.cos(rotationY) - dir.z * Math.sin(rotationY);
          const rotatedZ = dir.x * Math.sin(rotationY) + dir.z * Math.cos(rotationY);

          const to = new Ammo.btVector3(from.x() + rotatedX, from.y() - rayLength, from.z() + rotatedZ);
          const rayCallback = new Ammo.ClosestRayResultCallback(from, to);
          physicsWorld.rayTest(from, to, rayCallback);

          if (rayCallback.hasHit()) {
              const hitPoint = rayCallback.get_m_hitPointWorld();
              const hitPointVec = new BABYLON.Vector3(hitPoint.x(), hitPoint.y(), hitPoint.z());
              const y = (CharacterPhysic.physicsImpostor.physicsBody.getWorldTransform().getOrigin().y() - rayLength) - hitPointVec.y;
              const origvel = CharacterPhysic.physicsImpostor.getLinearVelocity();
              
              if (keysheld.indexOf(" ") == -1) {
                CharacterPhysic.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(null, 0, null));
              }
              var smoothingFactor = 0.3;
              CharacterPhysic.position.y = BABYLON.Scalar.Lerp(CharacterPhysic.position.y, CharacterPhysic.position.y-y+0.05, smoothingFactor);

              isOnGround = true;
          }

          Ammo.destroy(rayCallback);
          Ammo.destroy(to);

          if (isOnGround) {
              break; // no need to check other directions if already on ground
          }
      }

      return { isOnGround };
  }       
  
  async function CharacterMain() {
    await waitForCondition(function() {return FindFirstChild(Character, "Head", true)}, 1);
    await waitForCondition(function() {return FindFirstChild(Character, "Right Leg", true)}, 1);  
                
    
    async function dec_part(par,nam) {
        await waitForCondition(function() {return FindFirstChild(par, nam, true)}, 1);
      const part = FindFirstChild(par, nam, true)
      const lastpos = part.getAbsolutePosition()
      part.parent = debris.parent
      part.position = lastpos
      AnchorB(part,2)
      await wait(Humanoid.CleanUpTime*1000)
      part.dispose()
      return partaw
    }
    
    
    

    scene.registerBeforeRender( async function() {
      animatorRender(Character,Humanoid)
      CharacterPhysic.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0,0,0))
      try {
       step(Character,3)
      } catch(err) {
        console.log(String(err))
      }
        CharacterPhysic.rotationQuaternion = new BABYLON.Quaternion.FromEulerAngles(0, CharacterPhysic.rotationQuaternion.toEulerAngles().y, 0)
      if (CharacterPhysic.position.y<FallenPartDestroyLine) {
        Humanoid.Health = 0
        CharacterPhysic.dispose()
      }
                    if (Humanoid.Dead == false && Humanoid.Health<1) {
        Humanoid.Dead = true
        if (Humanoid.BreakJointsOnDeath == true) {
            await waitForCondition(function() {return FindFirstChild(Character, "Head", true)}, 1);
          Humanoid.CameraSubject = FindFirstChild(Character, "Head", true)
            var headeee = dec_part(Character,"Head")
          dec_part(Character,"Left Arm")
          dec_part(Character,"Right Arm")
          dec_part(Character,"Left Leg")
          dec_part(Character,"Right Leg")
        }
        dec_part(Character,"Torso")
        console.log(Name+" Died")
      }
    });
  };
  CharacterMain()

  


  // Finished wit character

  return [Character, CharacterPhysic, Humanoid]
}
async function goofyahhnpc() {
  const npc = await buildCharacter("NPC",3,"https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/ManFace.png")
  const Physics = npc[1]
  const Human = npc[2]
  Physics.position = new BABYLON.Vector3(0,3,-15)
  var Dance = await Human.LoadAnimation(window.BOBLOXSOURCE.Animation.Default.Dance2)
  Dance.Looped = true
  Dance.Speed = 1
  Dance.Play()
}
goofyahhnpc()
async function goofyahhnpc2() {
  const npc = await buildCharacter("NPC",3,"https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/ManFace.png")
  const Physics = npc[1]
  const Human = npc[2]
  Physics.position = new BABYLON.Vector3(4,3,-15)
  var Dance = await Human.LoadAnimation(window.BOBLOXSOURCE.Animation.Default.Dance3)
  Dance.Looped = true
  Dance.Speed = 1
  Dance.Play()
}
goofyahhnpc2()




function calculateWalkingVector(player, char) {
  // Base speed of the player
  const speed = 0.1;

  // Directional vectors based on the player's current rotation
  const forward = new BABYLON.Vector3(
    Math.sin(player.rotation.y),
    0,
    Math.cos(player.rotation.y)
  );

  const right = new BABYLON.Vector3(
    Math.sin(player.rotation.y + Math.PI / 2),
    0,
    Math.cos(player.rotation.y + Math.PI / 2)
  );

  // Initialize movement vector
  let movementVector = BABYLON.Vector3.Zero();

  // Apply forward/backward movement
  if (keysheld.indexOf("w") != -1) {
    movementVector.addInPlace(forward.scale(speed));
  }
  if (keysheld.indexOf("s") != -1) {
    movementVector.addInPlace(forward.scale(-speed));
  }

  // Apply left/right movement
  if (keysheld.indexOf("a") != -1) {
    movementVector.addInPlace(right.scale(-speed));
  }
  if (keysheld.indexOf("d") != -1) {
    movementVector.addInPlace(right.scale(speed));
  }

  let targetRotationY = char.rotation.y;
  if (!movementVector.equals(BABYLON.Vector3.Zero())) {
    targetRotationY = Math.atan2(movementVector.x, movementVector.z);
  }

  movementVector = movementVector.normalize()

  return [movementVector, targetRotationY];
}


async function SetupPlayer(cam) {

  var CHAR = await buildCharacter("Player",3,"https://raw.githubusercontent.com/mewishmew9/Azzet/main/images/Smile2.0.png")
  var PlayerCharacter = await CHAR[0]
  var Physics = CHAR[1]
  var Humanoid = CHAR[2]
  Player.Character = PlayerCharacter

  var WalkAnimation = await Humanoid.LoadAnimation(window.BOBLOXSOURCE.Animation.Default.WalkAnimation)
  WalkAnimation.Looped = true
  WalkAnimation.Speed = 1
  var JumpAnimation = await Humanoid.LoadAnimation(window.BOBLOXSOURCE.Animation.Default.JumpAnimation)
  JumpAnimation.Looped = false
  JumpAnimation.Priority = 1
  JumpAnimation.Speed = 1
  var FallAnimation = await Humanoid.LoadAnimation(window.BOBLOXSOURCE.Animation.Default.FallAnimation)
  FallAnimation.Looped = false
  FallAnimation.Priority = 1
  FallAnimation.Speed = 1
  var IdleAnimation = await Humanoid.LoadAnimation(window.BOBLOXSOURCE.Animation.Default.IdleAnimation)
  IdleAnimation.Looped = true
  IdleAnimation.Speed = 1


  await waitForCondition(function() {
    return FindFirstChild(PlayerCharacter, "Head", true)
  }, 1);
  await waitForCondition(function() {
    return FindFirstChild(PlayerCharacter, "Right Leg", true)
  }, 1);

  canvas.addEventListener("pointermove", function(e) {
    if (turning || charlocked) {
      var Y = e.movementX
      var X = e.movementY

      cam.rotation.y += Y / 100
      cam.rotation.x += X / 100
      cam.rotation.x = cam.rotation.x.clamp(-1.5, 1.5)
    }
  });

  function lerp(a, b, c) {
    return a + (b - a) * c
  }

  var cameraposz = 15

  scene.onPointerObservable.add((e) => {
    switch (e.type) {
      case BABYLON.PointerEventTypes.POINTERDOWN:
        if (e.event.button == 2) {
          turning = true
        }
        break;
      case BABYLON.PointerEventTypes.POINTERUP:
        if (e.event.button == 2) {
          turning = false
        }
        break;
      case BABYLON.PointerEventTypes.POINTERMOVE:
        break;
      case BABYLON.PointerEventTypes.POINTERWHEEL:
        cameraposz = (cameraposz-(-e.event.deltaY / 35)).clamp(Humanoid.minCamera,Humanoid.maxCamera)
        break;
      case BABYLON.PointerEventTypes.POINTERPICK:
        break;
      case BABYLON.PointerEventTypes.POINTERTAP:
        break;
      case BABYLON.PointerEventTypes.POINTERDOUBLETAP:
        break;
    }
  });


  function isCharacterOnGround(characterMesh, rayLength) {
      const physicsWorld = scene.getPhysicsEngine().getPhysicsPlugin().world;

      // Get the character's rotation in radians
      const rotationY = Physics.rotationQuaternion.toEulerAngles().y; // Assuming Y-axis rotation
      // Define directions relative to the character's rotation
      const directions = [
          { x: 0, z: 0 },  // straight down
          { x: 0, z: -0.46 }, // backward
          { x: 0, z: 0.46 },  // forward
          { x: 0.96, z: 0 },  // right
          { x: 0.96, z: -0.46 }, // right-backward
          { x: 0.96, z: 0.46 },  // right-forward
          { x: -0.96, z: 0 },  // left
          { x: -0.96, z: -0.46 }, // left-backward
          { x: -0.96, z: 0.46 }  // left-forward
      ];

      const from = Physics.physicsImpostor.physicsBody.getWorldTransform().getOrigin();
      let isOnGround = false;

      for (let dir of directions) {
          // Calculate the direction based on the character's rotation
          const rotatedX = dir.x * Math.cos(rotationY) - dir.z * Math.sin(rotationY);
          const rotatedZ = dir.x * Math.sin(rotationY) + dir.z * Math.cos(rotationY);

          const to = new Ammo.btVector3(from.x() + rotatedX, from.y() - rayLength, from.z() + rotatedZ);
          const rayCallback = new Ammo.ClosestRayResultCallback(from, to);
          physicsWorld.rayTest(from, to, rayCallback);

          if (rayCallback.hasHit()) {
              isOnGround = true;
          }

          Ammo.destroy(rayCallback);
          Ammo.destroy(to);

          if (isOnGround) {
              break; // no need to check other directions if already on ground
          }
      }

      return isOnGround;
  }




  function lerpAngle(from, to, t) {
    // Normalize the angles to the range [-π, π]
    let difference = to - from;

    // Wrap the difference within the range [-π, π]
    while (difference < -Math.PI) difference += 2 * Math.PI;
    while (difference > Math.PI) difference -= 2 * Math.PI;

    // Interpolate the angle
    return from + difference * t;
  }

  keykallbaks.push(function(key) {
    if (key == "") {
      shiftlock = !shiftlock
    }
  })
            var dt = new Date() / 1000
  var last = new Date() / 1000
  var CharacterAfterRenderMain
  CharacterAfterRenderMain = function() {
        dt = new Date() / 1000-last
    last = new Date() / 1000
    var err = false
    cam.position = gabs(Humanoid.CameraSubject).add(new BABYLON.Vector3(0, 1.5, 0))
    try {
      Physics.physicsImpostor.getLinearVelocity()
    } catch(rr) {
      err = true
    }
    if (err == false) {
      var dir = calculateWalkingVector(camera, PlayerCharacter)
      var origvel = Physics.physicsImpostor.getLinearVelocity()
      var origang = Physics.physicsImpostor.getAngularVelocity()
      const isOnGround = isCharacterOnGround(PlayerCharacter, 3)
      if (keysheld.indexOf("w") != -1 || keysheld.indexOf("s") != -1 || keysheld.indexOf("a") != -1 || keysheld.indexOf("d") != -1) {
        if (!WalkAnimation.IsPlaying && !JumpAnimation.IsPlaying && isOnGround) {
          WalkAnimation.Play()
        }
        if (IdleAnimation.IsPlaying) {
          IdleAnimation.Stop()
        }
        Physics.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(dir[0].x * 16, origvel.y, dir[0].z * 16))
        if (!charlocked) {
          Physics.rotationQuaternion = new BABYLON.Quaternion.FromEulerAngles(0, lerpAngle(Physics.rotationQuaternion.toEulerAngles().y, dir[1], 10*dt), 0)
        }
      } else {
        if (WalkAnimation.IsPlaying) {
          WalkAnimation.Stop()
        }
        if (!IdleAnimation.IsPlaying && !JumpAnimation.IsPlaying && isOnGround) {
          IdleAnimation.Play()
        }
        Physics.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0,0,0))
        Physics.physicsImpostor._physicsBody.setAngularFactor(new Ammo.btVector3(0, 0, 0));
        Physics.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, origvel.y, 0))
      }
    } else {
      scene.unregisterAfterRender(CharacterAfterRenderMain);
    }
  };
  scene.registerAfterRender(CharacterAfterRenderMain);



  var regbef
  regbef = function(dt) {
    if (Humanoid.Dead == false) {
      const physicsWorld = scene.getPhysicsEngine().getPhysicsPlugin().world;
      const fromvec = gabs(cam);
      const tovec = gabs(MainCamera);
      const from1 = new Ammo.btVector3(fromvec.x, fromvec.y, fromvec.z);
      const to1 = new Ammo.btVector3(tovec.x, tovec.y, tovec.z);
      const rayCallback1 = new Ammo.ClosestRayResultCallback(from1, to1);
      physicsWorld.rayTest(from1, to1, rayCallback1);  
      if (rayCallback1.hasHit()) {
        
      }
      Ammo.destroy(rayCallback1);
      Ammo.destroy(to1);
      Ammo.destroy(from1);
      MainCamera.position.z = lerp(MainCamera.position.z, -cameraposz, 0.35)
      if (charlocked) {
        Physics.rotationQuaternion = new BABYLON.Quaternion.FromEulerAngles(0, camera.rotation.y, 0)
      }
      var visiblity = Math.abs((-MainCamera.position.z / 3))

      if (-MainCamera.position.z > 3) {
        visiblity = 1
      }
      if (shiftlock) {
        charlocked = true
        camOffset = new BABYLON.Vector3(1.5, 0, 0)
      } else {
        if (-MainCamera.position.z < 0.1) {
          charlocked = true
          camOffset = new BABYLON.Vector3(0, 0, 0)
        } else {
          charlocked = false
          camOffset = new BABYLON.Vector3(0, 0, 0)
        }
      }
      if (-MainCamera.position.z < 0.1) {
        visiblity = 0
        charlocked = true
      } else {
        if (!shiftlock) {
          charlocked = false
        }
      }
      PlayerCharacter.getDescendants().forEach(function(index) {
        index.visibility = visiblity
      })
      cam.position = gabs(Humanoid.CameraSubject).add(new BABYLON.Vector3(0, 1.5, 0))
      MainCamera.position = new BABYLON.Vector3(camOffset.x, camOffset.y, MainCamera.position.z)
      const isOnGround = isCharacterOnGround(PlayerCharacter, 3.35)
      if (!isOnGround) {
        JumpAnimation.Stop()
      }
      if (keysheld.indexOf(" ") != -1) {
        var origvel = Physics.physicsImpostor.getLinearVelocity()
        if (isOnGround) {
          Physics.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(origvel.x, 50, origvel.z))
          JumpAnimation.Play()
          WalkAnimation.Stop()
          IdleAnimation.Stop()
        }
      }
    } else {
      scene.unregisterBeforeRender(regbef)
    }
  };

  scene.registerBeforeRender(regbef)

}
SetupPlayer(camera)

function SetupGUI() {
  var GameUIHolder = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Game");
  var MessageUiHolder = new BABYLON.GUI.Container("msgui");
  GameUIHolder.addControl(MessageUiHolder)
  var TopbarUI = new BABYLON.GUI.Container("Topbar");
  GameUIHolder.addControl(TopbarUI)
  TopbarUI.verticalAlignment = 0;
  TopbarUI.background = "black"
  TopbarUI.height = "35px"
    TopbarUI.background = "rgba(0,0,0,0.5)"
  var RightUI = new BABYLON.GUI.Container("Topbar");
  TopbarUI.addControl(RightUI)
  RightUI.horizontalAlignment = 1;
  RightUI.verticalAlignment = 0;
  RightUI.height = "35px"
  RightUI.width = "200px"
    RightUI.background = "rgba(0,0,0,0)"
  var text1 = new BABYLON.GUI.TextBlock();
  text1.text = "Boblox™ Engine [ DO NOT RELEASE ]";
  text1.color = "white";
  text1.fontSize = 18;
  text1.textVerticalAlignment = 0;
  text1.outlineWidth = 1;
  text1.outlineColor = "black";
  var username = new BABYLON.GUI.TextBlock();
  username.text = "Boblox™ Engine [ DO NOT RELEASE ]";
  username.color = "white";
  username.fontSize = 18;
  username.textVerticalAlignment = 0;
  username.outlineWidth = 1;
  username.outlineColor = "black";
  MessageUiHolder.verticalAlignment = 0;
  MessageUiHolder.top = "35px"
  MessageUiHolder.height = "23px"
  MessageUiHolder.background = "black"
  RightUI.addControl(username);
  MessageUiHolder.addControl(text1);
  
  
}
SetupGUI()

scene.debugLayer.show({embedMode: true});



var turning = false



scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.85);
scene.fogDensity = 0;

const ball = BABYLON.MeshBuilder.CreateSphere("ball", {
  segments: 9
});
ball.scaling = new BABYLON.Vector3(5.5, 5.5, 5.5)
ball.position = new BABYLON.Vector3(0, 2, 28)
ball.material.diffuseColor = BABYLON.Color3.FromInts(54, 75, 194)
AnchorM(ball, 0)

const ball2 = BABYLON.MeshBuilder.CreateSphere("ball", {
  segments: 9
});
ball2.scaling = new BABYLON.Vector3(5.5, 5.5, 5.5)
ball2.position = new BABYLON.Vector3(4, 0, 40)
ball2.material.diffuseColor = BABYLON.Color3.FromInts(194, 30, 54)
AnchorM(ball2, 0)

const ball3 = BABYLON.MeshBuilder.CreateSphere("ball", {
  segments: 9
});
ball3.scaling = new BABYLON.Vector3(5.5, 5.5, 5.5)
ball3.position = new BABYLON.Vector3(-1, 0, 52)
ball3.material.diffuseColor = BABYLON.Color3.FromInts(194, 194, 54)
AnchorM(ball3, 0)

// Our built-in 'ground' shape.
var ground = BABYLON.MeshBuilder.CreateBox("SpawnFloor", {}, scene);
ground.scaling = new BABYLON.Vector3(40, 16, 40)
ground.position.y -= 8
AnchorB(ground, 0)
var ground2 = BABYLON.MeshBuilder.CreateBox("SpawnFloor", {}, scene);
ground2.scaling = new BABYLON.Vector3(40, 16, 40)
ground2.position = Vector3.new(0,-8,80)
AnchorB(ground2, 0)
var Spawn = BABYLON.MeshBuilder.CreateBox("Spawn", {}, scene);
Spawn.material.diffuseColor = BABYLON.Color3.FromInts(222,222,222)
Spawn.position.y += 0.5
Spawn.scaling = new BABYLON.Vector3(10, 1, 10)
AnchorB(Spawn, 0)

ground.receiveShadows = true;

scene.registerBeforeRender(function() {
  BABYLON.Engine.audioEngine.unlock()
  FwuatBox.rotationQuaternion = new BABYLON.Quaternion.FromEulerAngles(0,FwuatBox.rotationQuaternion.toEulerAngles().y+0.01,FwuatBox.rotationQuaternion.toEulerAngles().z+0.01)
})

return scene;
};
window.initFunction = async function() {



var asyncEngineCreation = async function() {
  try {
    return createDefaultEngine();
  } catch (e) {
    console.log("the available createEngine function failed. Creating the default engine instead");
    return createDefaultEngine();
  }
}

window.engine = await asyncEngineCreation();
if (!engine) throw 'engine should not be null.';
startRenderLoop(engine, canvas);
window.scene = createScene();
};
initFunction().then(() => {
sceneToRender = scene
});


document.onkeydown = function(e) {
e = e || window.event;
var key = String.fromCharCode(e.keyCode).toLowerCase()
keykallbaks.forEach(function(index) {
  index(key)
})
if (keysheld.indexOf(key) == -1) {
  keysheld.push(key)
}
};

document.onkeyup = function(e) {
e = e || window.event;
var key = String.fromCharCode(e.keyCode).toLowerCase()
if (keysheld.indexOf(key) != -1) {
  keysheld.splice(keysheld.indexOf(key), 1);
}
};

// Resize
window.addEventListener("resize", function() {
engine.resize();
});
