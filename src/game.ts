import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../f7573b6c-f5d3-403c-ad74-2657adbe4a54/src/item"
import Script2 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script3 from "../a87c0a7e-f8f7-4bc8-b02d-60e053ccf939/src/item"
import Script4 from "../d367d3f2-9696-4d61-985a-7988fbf5f50d/src/item"
import Script5 from "../6c69b161-68f2-4086-aff0-1baf933435c3/src/item"
import Script6 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"
import Script7 from "../2263960d-51ff-483a-bd2a-a9d286558620/src/item"
import Script8 from "../b79a150e-5914-4fdf-a6b4-c7ff0c6833dd/src/item"
import Script9 from "../bc44be5b-ea9c-4dbe-8259-f7067e741960/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("ea013d0a-8f70-44ca-be3d-706d46cb7ed2/FloorBaseGrass_02/FloorBaseGrass_02.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform10)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform11)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform12)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform13)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform14)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform15)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform16)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform17)

const entity17 = new Entity('entity17')
engine.addEntity(entity17)
entity17.setParent(_scene)
entity17.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity17.addComponentOrReplace(transform18)

const entity18 = new Entity('entity18')
engine.addEntity(entity18)
entity18.setParent(_scene)
entity18.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity18.addComponentOrReplace(transform19)

const entity19 = new Entity('entity19')
engine.addEntity(entity19)
entity19.setParent(_scene)
entity19.addComponentOrReplace(gltfShape)
const transform20 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity19.addComponentOrReplace(transform20)

const entity20 = new Entity('entity20')
engine.addEntity(entity20)
entity20.setParent(_scene)
entity20.addComponentOrReplace(gltfShape)
const transform21 = new Transform({
  position: new Vector3(72, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity20.addComponentOrReplace(transform21)

const entity21 = new Entity('entity21')
engine.addEntity(entity21)
entity21.setParent(_scene)
entity21.addComponentOrReplace(gltfShape)
const transform22 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity21.addComponentOrReplace(transform22)

const entity22 = new Entity('entity22')
engine.addEntity(entity22)
entity22.setParent(_scene)
entity22.addComponentOrReplace(gltfShape)
const transform23 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity22.addComponentOrReplace(transform23)

const entity23 = new Entity('entity23')
engine.addEntity(entity23)
entity23.setParent(_scene)
entity23.addComponentOrReplace(gltfShape)
const transform24 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity23.addComponentOrReplace(transform24)

const entity24 = new Entity('entity24')
engine.addEntity(entity24)
entity24.setParent(_scene)
entity24.addComponentOrReplace(gltfShape)
const transform25 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity24.addComponentOrReplace(transform25)

const entity25 = new Entity('entity25')
engine.addEntity(entity25)
entity25.setParent(_scene)
entity25.addComponentOrReplace(gltfShape)
const transform26 = new Transform({
  position: new Vector3(72, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity25.addComponentOrReplace(transform26)

const entity26 = new Entity('entity26')
engine.addEntity(entity26)
entity26.setParent(_scene)
entity26.addComponentOrReplace(gltfShape)
const transform27 = new Transform({
  position: new Vector3(8, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity26.addComponentOrReplace(transform27)

const entity27 = new Entity('entity27')
engine.addEntity(entity27)
entity27.setParent(_scene)
entity27.addComponentOrReplace(gltfShape)
const transform28 = new Transform({
  position: new Vector3(24, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity27.addComponentOrReplace(transform28)

const entity28 = new Entity('entity28')
engine.addEntity(entity28)
entity28.setParent(_scene)
entity28.addComponentOrReplace(gltfShape)
const transform29 = new Transform({
  position: new Vector3(40, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity28.addComponentOrReplace(transform29)

const entity29 = new Entity('entity29')
engine.addEntity(entity29)
entity29.setParent(_scene)
entity29.addComponentOrReplace(gltfShape)
const transform30 = new Transform({
  position: new Vector3(56, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity29.addComponentOrReplace(transform30)

const entity30 = new Entity('entity30')
engine.addEntity(entity30)
entity30.setParent(_scene)
entity30.addComponentOrReplace(gltfShape)
const transform31 = new Transform({
  position: new Vector3(72, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity30.addComponentOrReplace(transform31)

const wallBrick = new Entity('wallBrick')
engine.addEntity(wallBrick)
wallBrick.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(80, 0, 95.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.5, 2, 1)
})
wallBrick.addComponentOrReplace(transform32)
const gltfShape2 = new GLTFShape("171c182d-e766-4e6d-a290-308fd81b3ac5/BrickWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallBrick.addComponentOrReplace(gltfShape2)

const wallBrick2 = new Entity('wallBrick2')
engine.addEntity(wallBrick2)
wallBrick2.setParent(_scene)
wallBrick2.addComponentOrReplace(gltfShape2)
const transform33 = new Transform({
  position: new Vector3(80, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.5, 2, 1)
})
wallBrick2.addComponentOrReplace(transform33)

const wallBrick3 = new Entity('wallBrick3')
engine.addEntity(wallBrick3)
wallBrick3.setParent(_scene)
wallBrick3.addComponentOrReplace(gltfShape2)
const transform34 = new Transform({
  position: new Vector3(59, 0, 95.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.937504768371582, 2, 1.0000026226043701)
})
wallBrick3.addComponentOrReplace(transform34)

const wallBrick4 = new Entity('wallBrick4')
engine.addEntity(wallBrick4)
wallBrick4.setParent(_scene)
wallBrick4.addComponentOrReplace(gltfShape2)
const transform35 = new Transform({
  position: new Vector3(79.5, 0, 95.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.9375057220458984, 2, 1.0000028610229492)
})
wallBrick4.addComponentOrReplace(transform35)

const highBuilding = new Entity('highBuilding')
engine.addEntity(highBuilding)
highBuilding.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(69.5, 0, 85),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.049952507019043, 0.08104687184095383, 1.0000005960464478)
})
highBuilding.addComponentOrReplace(transform36)
const gltfShape3 = new GLTFShape("2e08d31b-02a4-460c-aafe-3f7ecaf78332/High_Building_2.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
highBuilding.addComponentOrReplace(gltfShape3)

const roofGreyEdges = new Entity('roofGreyEdges')
engine.addEntity(roofGreyEdges)
roofGreyEdges.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(79.5, 4, 95.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.129938125610352, 1, 2)
})
roofGreyEdges.addComponentOrReplace(transform37)
const gltfShape4 = new GLTFShape("691f6673-fd28-4a28-8750-7e21cb1c3e66/GreyRoof_4Edges.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
roofGreyEdges.addComponentOrReplace(gltfShape4)

const grassTile = new Entity('grassTile')
engine.addEntity(grassTile)
grassTile.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(62.5, 2.5, 83.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 1, 1)
})
grassTile.addComponentOrReplace(transform38)
const gltfShape5 = new GLTFShape("7f2dbcb5-40f5-4e2f-9409-1886d26ce068/FloorBlock_05/FloorBlock_05.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
grassTile.addComponentOrReplace(gltfShape5)

const grassTile2 = new Entity('grassTile2')
engine.addEntity(grassTile2)
grassTile2.setParent(_scene)
grassTile2.addComponentOrReplace(gltfShape5)
const transform39 = new Transform({
  position: new Vector3(75, 2.5, 84),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.75, 1, 1.5)
})
grassTile2.addComponentOrReplace(transform39)

const grassTile3 = new Entity('grassTile3')
engine.addEntity(grassTile3)
grassTile3.setParent(_scene)
grassTile3.addComponentOrReplace(gltfShape5)
const transform40 = new Transform({
  position: new Vector3(65.5, 2.5, 85),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.5, 1, 1.0000016689300537)
})
grassTile3.addComponentOrReplace(transform40)

const grassTile4 = new Entity('grassTile4')
engine.addEntity(grassTile4)
grassTile4.setParent(_scene)
grassTile4.addComponentOrReplace(gltfShape5)
const transform41 = new Transform({
  position: new Vector3(61, 2.5, 85),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.5, 1, 1.0000019073486328)
})
grassTile4.addComponentOrReplace(transform41)

const stairsGlassPanelCorner = new Entity('stairsGlassPanelCorner')
engine.addEntity(stairsGlassPanelCorner)
stairsGlassPanelCorner.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(65.5, 0, 81.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.5000013709068298, 0.5624999403953552, 0.750002920627594)
})
stairsGlassPanelCorner.addComponentOrReplace(transform42)
const gltfShape6 = new GLTFShape("730ddd1e-3520-414d-a1e1-9398fd630841/glassPanelStairs_corner.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
stairsGlassPanelCorner.addComponentOrReplace(gltfShape6)

const stairsGlassPanelCorner2 = new Entity('stairsGlassPanelCorner2')
engine.addEntity(stairsGlassPanelCorner2)
stairsGlassPanelCorner2.setParent(_scene)
stairsGlassPanelCorner2.addComponentOrReplace(gltfShape6)
const transform43 = new Transform({
  position: new Vector3(72, 0, 81.5),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(-0.5000015497207642, 0.5624999403953552, 0.7425030469894409)
})
stairsGlassPanelCorner2.addComponentOrReplace(transform43)

const stairsFullHeight = new Entity('stairsFullHeight')
engine.addEntity(stairsFullHeight)
stairsFullHeight.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(56, 0, 83.5),
  rotation: new Quaternion(6.725456000759248e-15, -1, 1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(1.5, 0.5, 0.9999999403953552)
})
stairsFullHeight.addComponentOrReplace(transform44)
const gltfShape7 = new GLTFShape("339f46e5-cafd-4cd0-a4ae-7cfe7b8b74f5/fullHeightStairs.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
stairsFullHeight.addComponentOrReplace(gltfShape7)

const highBuilding2 = new Entity('highBuilding2')
engine.addEntity(highBuilding2)
highBuilding2.setParent(_scene)
highBuilding2.addComponentOrReplace(gltfShape3)
const transform45 = new Transform({
  position: new Vector3(53, 0, 91.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.549115777015686, 0.8547912836074829, 1.125005841255188)
})
highBuilding2.addComponentOrReplace(transform45)

const highBuilding3 = new Entity('highBuilding3')
engine.addEntity(highBuilding3)
highBuilding3.setParent(_scene)
highBuilding3.addComponentOrReplace(gltfShape3)
const transform46 = new Transform({
  position: new Vector3(44, 0, 90),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.065485715866089, 0.8547912836074829, 2.250014066696167)
})
highBuilding3.addComponentOrReplace(transform46)

const wallBrick5 = new Entity('wallBrick5')
engine.addEntity(wallBrick5)
wallBrick5.setParent(_scene)
wallBrick5.addComponentOrReplace(gltfShape2)
const transform47 = new Transform({
  position: new Vector3(59, 0, 92.5),
  rotation: new Quaternion(-6.364877675003118e-16, 0, -4.520432727412541e-16, 1),
  scale: new Vector3(1.4765642881393433, 2, 1.0000026226043701)
})
wallBrick5.addComponentOrReplace(transform47)

const floorConcrete = new Entity('floorConcrete')
engine.addEntity(floorConcrete)
floorConcrete.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(59, 2, 91.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7499998807907104, 1, 0.9999999403953552)
})
floorConcrete.addComponentOrReplace(transform48)
const gltfShape8 = new GLTFShape("12ce92bf-f0b8-4be1-81ad-97425bc3b45c/ConcreteFloor.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
floorConcrete.addComponentOrReplace(gltfShape8)

const door = new Entity('door')
engine.addEntity(door)
door.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(59, 1.5, 88.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
door.addComponentOrReplace(transform49)
const gltfShape9 = new GLTFShape("6e6a73cd-0918-4b47-aa1a-3db319b939a6/Door 8.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
door.addComponentOrReplace(gltfShape9)

const door2 = new Entity('door2')
engine.addEntity(door2)
door2.setParent(_scene)
door2.addComponentOrReplace(gltfShape9)
const transform50 = new Transform({
  position: new Vector3(59, 1.5, 89.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
door2.addComponentOrReplace(transform50)

const door3 = new Entity('door3')
engine.addEntity(door3)
door3.setParent(_scene)
door3.addComponentOrReplace(gltfShape9)
const transform51 = new Transform({
  position: new Vector3(59, 1.5, 90.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
door3.addComponentOrReplace(transform51)

const wallBathroomTiles = new Entity('wallBathroomTiles')
engine.addEntity(wallBathroomTiles)
wallBathroomTiles.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(43.5, 0, 85),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 6.20156192779541, 1)
})
wallBathroomTiles.addComponentOrReplace(transform52)
const gltfShape10 = new GLTFShape("c12b0faf-2187-489d-b838-06ba2c9cd6d0/BathroomTilesWall.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
wallBathroomTiles.addComponentOrReplace(gltfShape10)

const wallBathroomTiles2 = new Entity('wallBathroomTiles2')
engine.addEntity(wallBathroomTiles2)
wallBathroomTiles2.setParent(_scene)
wallBathroomTiles2.addComponentOrReplace(gltfShape10)
const transform53 = new Transform({
  position: new Vector3(56, 5, 87.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 4.651171684265137, 1)
})
wallBathroomTiles2.addComponentOrReplace(transform53)

const wallBathroomTiles3 = new Entity('wallBathroomTiles3')
engine.addEntity(wallBathroomTiles3)
wallBathroomTiles3.setParent(_scene)
wallBathroomTiles3.addComponentOrReplace(gltfShape10)
const transform54 = new Transform({
  position: new Vector3(50, 5, 85),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 4.651171684265137, 1)
})
wallBathroomTiles3.addComponentOrReplace(transform54)

const wallBrick6 = new Entity('wallBrick6')
engine.addEntity(wallBrick6)
wallBrick6.setParent(_scene)
wallBrick6.addComponentOrReplace(gltfShape2)
const transform55 = new Transform({
  position: new Vector3(38, 4, 82),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.5, 3, 1)
})
wallBrick6.addComponentOrReplace(transform55)

const wallBrick7 = new Entity('wallBrick7')
engine.addEntity(wallBrick7)
wallBrick7.setParent(_scene)
wallBrick7.addComponentOrReplace(gltfShape2)
const transform56 = new Transform({
  position: new Vector3(38, 4, 95.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.5, 3, 1)
})
wallBrick7.addComponentOrReplace(transform56)

const wallBrick8 = new Entity('wallBrick8')
engine.addEntity(wallBrick8)
wallBrick8.setParent(_scene)
wallBrick8.addComponentOrReplace(gltfShape2)
const transform57 = new Transform({
  position: new Vector3(17, 4, 95.5),
  rotation: new Quaternion(1.7572238474294335e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(6.8906636238098145, 3, 1.0000035762786865)
})
wallBrick8.addComponentOrReplace(transform57)

const wallBrick9 = new Entity('wallBrick9')
engine.addEntity(wallBrick9)
wallBrick9.setParent(_scene)
wallBrick9.addComponentOrReplace(gltfShape2)
const transform58 = new Transform({
  position: new Vector3(38, 4, 95.5),
  rotation: new Quaternion(1.7572238474294335e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(6.890660762786865, 3, 1.0000038146972656)
})
wallBrick9.addComponentOrReplace(transform58)

const roofGreyEdges2 = new Entity('roofGreyEdges2')
engine.addEntity(roofGreyEdges2)
roofGreyEdges2.setParent(_scene)
roofGreyEdges2.addComponentOrReplace(gltfShape4)
const transform59 = new Transform({
  position: new Vector3(37.5, 9, 95.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.129938125610352, 1.5, 3.375)
})
roofGreyEdges2.addComponentOrReplace(transform59)

const bricksRed = new Entity('bricksRed')
engine.addEntity(bricksRed)
bricksRed.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(37.5, 0, 82.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 4, 1)
})
bricksRed.addComponentOrReplace(transform60)
const gltfShape11 = new GLTFShape("a7c127cf-0f13-4da0-ab0a-4616868590dc/brick_red.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
bricksRed.addComponentOrReplace(gltfShape11)

const bricksRed2 = new Entity('bricksRed2')
engine.addEntity(bricksRed2)
bricksRed2.setParent(_scene)
bricksRed2.addComponentOrReplace(gltfShape11)
const transform61 = new Transform({
  position: new Vector3(17.5, 0, 82.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 4, 1)
})
bricksRed2.addComponentOrReplace(transform61)

const bricksRed3 = new Entity('bricksRed3')
engine.addEntity(bricksRed3)
bricksRed3.setParent(_scene)
bricksRed3.addComponentOrReplace(gltfShape11)
const transform62 = new Transform({
  position: new Vector3(17.5, 0, 95),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 4, 1)
})
bricksRed3.addComponentOrReplace(transform62)

const bricksRed4 = new Entity('bricksRed4')
engine.addEntity(bricksRed4)
bricksRed4.setParent(_scene)
bricksRed4.addComponentOrReplace(gltfShape11)
const transform63 = new Transform({
  position: new Vector3(37.5, 0, 95),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 4, 1)
})
bricksRed4.addComponentOrReplace(transform63)

const wallBathroomTiles4 = new Entity('wallBathroomTiles4')
engine.addEntity(wallBathroomTiles4)
wallBathroomTiles4.setParent(_scene)
wallBathroomTiles4.addComponentOrReplace(gltfShape10)
const transform64 = new Transform({
  position: new Vector3(37, 14.5, 82),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.000006675720215, 4.6077561378479, 0.9999998807907104)
})
wallBathroomTiles4.addComponentOrReplace(transform64)

const wallBathroomTiles5 = new Entity('wallBathroomTiles5')
engine.addEntity(wallBathroomTiles5)
wallBathroomTiles5.setParent(_scene)
wallBathroomTiles5.addComponentOrReplace(gltfShape10)
const transform65 = new Transform({
  position: new Vector3(37, 9.5, 82),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.000007152557373, 4.607757091522217, 0.9999998807907104)
})
wallBathroomTiles5.addComponentOrReplace(transform65)

const wallBrick10 = new Entity('wallBrick10')
engine.addEntity(wallBrick10)
wallBrick10.setParent(_scene)
wallBrick10.addComponentOrReplace(gltfShape2)
const transform66 = new Transform({
  position: new Vector3(71.5, 0, 54.25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.874998092651367, 4.5, 0.9999998807907104)
})
wallBrick10.addComponentOrReplace(transform66)

const wallBrick11 = new Entity('wallBrick11')
engine.addEntity(wallBrick11)
wallBrick11.setParent(_scene)
wallBrick11.addComponentOrReplace(gltfShape2)
const transform67 = new Transform({
  position: new Vector3(71.5, 0, 67.75),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.874998092651367, 4.5, 0.9999998807907104)
})
wallBrick11.addComponentOrReplace(transform67)

const wallBrick12 = new Entity('wallBrick12')
engine.addEntity(wallBrick12)
wallBrick12.setParent(_scene)
wallBrick12.addComponentOrReplace(gltfShape2)
const transform68 = new Transform({
  position: new Vector3(71.5, 0, 67.75),
  rotation: new Quaternion(1.7572238474294335e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(6.890680313110352, 4.5, 1.0000052452087402)
})
wallBrick12.addComponentOrReplace(transform68)

const wallBrick13 = new Entity('wallBrick13')
engine.addEntity(wallBrick13)
wallBrick13.setParent(_scene)
wallBrick13.addComponentOrReplace(gltfShape2)
const transform69 = new Transform({
  position: new Vector3(50.5, 6.5, 67.75),
  rotation: new Quaternion(1.7572238474294335e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(6.890686988830566, 3, 1.0000050067901611)
})
wallBrick13.addComponentOrReplace(transform69)

const roofGreyEdges3 = new Entity('roofGreyEdges3')
engine.addEntity(roofGreyEdges3)
roofGreyEdges3.setParent(_scene)
roofGreyEdges3.addComponentOrReplace(gltfShape4)
const transform70 = new Transform({
  position: new Vector3(71, 11.5, 67.75),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.129938125610352, 1.5, 3.375)
})
roofGreyEdges3.addComponentOrReplace(transform70)

const wallBrick14 = new Entity('wallBrick14')
engine.addEntity(wallBrick14)
wallBrick14.setParent(_scene)
wallBrick14.addComponentOrReplace(gltfShape2)
const transform71 = new Transform({
  position: new Vector3(71.625, 0, 57.125),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.875014305114746, 3, 0.5000012516975403)
})
wallBrick14.addComponentOrReplace(transform71)

const roofGreyEdges4 = new Entity('roofGreyEdges4')
engine.addEntity(roofGreyEdges4)
roofGreyEdges4.setParent(_scene)
roofGreyEdges4.addComponentOrReplace(gltfShape4)
const transform72 = new Transform({
  position: new Vector3(78.375, 3.999998092651367, 57.5),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(3.8474607467651367, 1.5, 1.6875057220458984)
})
roofGreyEdges4.addComponentOrReplace(transform72)

const wallBrick15 = new Entity('wallBrick15')
engine.addEntity(wallBrick15)
wallBrick15.setParent(_scene)
wallBrick15.addComponentOrReplace(gltfShape2)
const transform73 = new Transform({
  position: new Vector3(78.375, 0, 72.875),
  rotation: new Quaternion(6.413143094645326e-15, 0, 6.5551651089114545e-15, 1),
  scale: new Vector3(3.4453423023223877, 3, 0.7500038146972656)
})
wallBrick15.addComponentOrReplace(transform73)

const wallBrick16 = new Entity('wallBrick16')
engine.addEntity(wallBrick16)
wallBrick16.setParent(_scene)
wallBrick16.addComponentOrReplace(gltfShape2)
const transform74 = new Transform({
  position: new Vector3(78.375, 0, 57.125),
  rotation: new Quaternion(6.413143094645326e-15, 0, 6.5551651089114545e-15, 1),
  scale: new Vector3(3.4453399181365967, 3, 0.7500040531158447)
})
wallBrick16.addComponentOrReplace(transform74)

const wallBrick17 = new Entity('wallBrick17')
engine.addEntity(wallBrick17)
wallBrick17.setParent(_scene)
wallBrick17.addComponentOrReplace(gltfShape2)
const transform75 = new Transform({
  position: new Vector3(78.375, 0, 57.125),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.875014305114746, 3, 0.5000012516975403)
})
wallBrick17.addComponentOrReplace(transform75)

const floorConcrete2 = new Entity('floorConcrete2')
engine.addEntity(floorConcrete2)
floorConcrete2.setParent(_scene)
floorConcrete2.addComponentOrReplace(gltfShape8)
const transform76 = new Transform({
  position: new Vector3(56.5, 6.5, 67.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.499999761581421, 1, 3.374999523162842)
})
floorConcrete2.addComponentOrReplace(transform76)

const wallBrick18 = new Entity('wallBrick18')
engine.addEntity(wallBrick18)
wallBrick18.setParent(_scene)
wallBrick18.addComponentOrReplace(gltfShape2)
const transform77 = new Transform({
  position: new Vector3(50.5, 6.5, 54.25),
  rotation: new Quaternion(2.30425572421639e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(6.890687942504883, 3, 1.0000051259994507)
})
wallBrick18.addComponentOrReplace(transform77)

const wallBrick19 = new Entity('wallBrick19')
engine.addEntity(wallBrick19)
wallBrick19.setParent(_scene)
wallBrick19.addComponentOrReplace(gltfShape2)
const transform78 = new Transform({
  position: new Vector3(50.5, 6.5, 67.75),
  rotation: new Quaternion(2.30425572421639e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(6.890687942504883, 3, 1.0000051259994507)
})
wallBrick19.addComponentOrReplace(transform78)

const mediumStoneColumn = new Entity('mediumStoneColumn')
engine.addEntity(mediumStoneColumn)
mediumStoneColumn.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(51, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 8, 3.75)
})
mediumStoneColumn.addComponentOrReplace(transform79)
const gltfShape12 = new GLTFShape("9770c479-ea9c-40ad-9375-1b54e1427c2c/Fence_Stone_Block_03/Fence_Stone_Block_03.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
mediumStoneColumn.addComponentOrReplace(gltfShape12)

const mediumStoneColumn2 = new Entity('mediumStoneColumn2')
engine.addEntity(mediumStoneColumn2)
mediumStoneColumn2.setParent(_scene)
mediumStoneColumn2.addComponentOrReplace(gltfShape12)
const transform80 = new Transform({
  position: new Vector3(51, 0, 67.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 8, 3.75)
})
mediumStoneColumn2.addComponentOrReplace(transform80)

const verticalHallwayDoo = new Entity('verticalHallwayDoo')
engine.addEntity(verticalHallwayDoo)
verticalHallwayDoo.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(55.5, 0, 61),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.187506675720215, 1.5, 1.500007152557373)
})
verticalHallwayDoo.addComponentOrReplace(transform81)

const highBuilding4 = new Entity('highBuilding4')
engine.addEntity(highBuilding4)
highBuilding4.setParent(_scene)
highBuilding4.addComponentOrReplace(gltfShape3)
const transform82 = new Transform({
  position: new Vector3(38.5, 0, 58),
  rotation: new Quaternion(-2.177062080483132e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(2.323673725128174, 0.6410934925079346, 3.3750247955322266)
})
highBuilding4.addComponentOrReplace(transform82)

const buildingDecor = new Entity('buildingDecor')
engine.addEntity(buildingDecor)
buildingDecor.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(14, 0, 57.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(13.000022888183594, 26, 6.500009059906006)
})
buildingDecor.addComponentOrReplace(transform83)
const gltfShape13 = new GLTFShape("c4ebde41-e69e-43ef-b99d-853db9549697/Building_Decor_03.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
buildingDecor.addComponentOrReplace(gltfShape13)

const windowBathroomTiles5 = new Entity('windowBathroomTiles5')
engine.addEntity(windowBathroomTiles5)
windowBathroomTiles5.setParent(_scene)
const gltfShape14 = new GLTFShape("10a7af75-02a9-4c04-8aa5-48c637713a8d/BathroomTilesWindow.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
windowBathroomTiles5.addComponentOrReplace(gltfShape14)
const transform84 = new Transform({
  position: new Vector3(4.5, 0.5, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.5, 1)
})
windowBathroomTiles5.addComponentOrReplace(transform84)

const windowBathroomTiles = new Entity('windowBathroomTiles')
engine.addEntity(windowBathroomTiles)
windowBathroomTiles.setParent(_scene)
windowBathroomTiles.addComponentOrReplace(gltfShape14)
const transform85 = new Transform({
  position: new Vector3(11, 0.5, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.5, 1)
})
windowBathroomTiles.addComponentOrReplace(transform85)

const windowBathroomTiles2 = new Entity('windowBathroomTiles2')
engine.addEntity(windowBathroomTiles2)
windowBathroomTiles2.setParent(_scene)
windowBathroomTiles2.addComponentOrReplace(gltfShape14)
const transform86 = new Transform({
  position: new Vector3(17.5, 0.5, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.5, 1)
})
windowBathroomTiles2.addComponentOrReplace(transform86)

const windowBathroomTiles3 = new Entity('windowBathroomTiles3')
engine.addEntity(windowBathroomTiles3)
windowBathroomTiles3.setParent(_scene)
windowBathroomTiles3.addComponentOrReplace(gltfShape14)
const transform87 = new Transform({
  position: new Vector3(24, 0.5, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.5, 1)
})
windowBathroomTiles3.addComponentOrReplace(transform87)

const windowBathroomTiles4 = new Entity('windowBathroomTiles4')
engine.addEntity(windowBathroomTiles4)
windowBathroomTiles4.setParent(_scene)
windowBathroomTiles4.addComponentOrReplace(gltfShape14)
const transform88 = new Transform({
  position: new Vector3(4.5, 0.5, 64.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.5, 1)
})
windowBathroomTiles4.addComponentOrReplace(transform88)

const windowBathroomTiles6 = new Entity('windowBathroomTiles6')
engine.addEntity(windowBathroomTiles6)
windowBathroomTiles6.setParent(_scene)
windowBathroomTiles6.addComponentOrReplace(gltfShape14)
const transform89 = new Transform({
  position: new Vector3(11, 0.5, 64.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.5, 1)
})
windowBathroomTiles6.addComponentOrReplace(transform89)

const windowBathroomTiles7 = new Entity('windowBathroomTiles7')
engine.addEntity(windowBathroomTiles7)
windowBathroomTiles7.setParent(_scene)
windowBathroomTiles7.addComponentOrReplace(gltfShape14)
const transform90 = new Transform({
  position: new Vector3(17.5, 0.5, 64.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.5, 1)
})
windowBathroomTiles7.addComponentOrReplace(transform90)

const windowBathroomTiles8 = new Entity('windowBathroomTiles8')
engine.addEntity(windowBathroomTiles8)
windowBathroomTiles8.setParent(_scene)
windowBathroomTiles8.addComponentOrReplace(gltfShape14)
const transform91 = new Transform({
  position: new Vector3(24, 0.5, 64.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.5, 1)
})
windowBathroomTiles8.addComponentOrReplace(transform91)

const windowBathroomTiles9 = new Entity('windowBathroomTiles9')
engine.addEntity(windowBathroomTiles9)
windowBathroomTiles9.setParent(_scene)
windowBathroomTiles9.addComponentOrReplace(gltfShape14)
const transform92 = new Transform({
  position: new Vector3(41, 12, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles9.addComponentOrReplace(transform92)

const windowBathroomTiles10 = new Entity('windowBathroomTiles10')
engine.addEntity(windowBathroomTiles10)
windowBathroomTiles10.setParent(_scene)
windowBathroomTiles10.addComponentOrReplace(gltfShape14)
const transform93 = new Transform({
  position: new Vector3(41, 7, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles10.addComponentOrReplace(transform93)

const windowBathroomTiles11 = new Entity('windowBathroomTiles11')
engine.addEntity(windowBathroomTiles11)
windowBathroomTiles11.setParent(_scene)
windowBathroomTiles11.addComponentOrReplace(gltfShape14)
const transform94 = new Transform({
  position: new Vector3(41, 2, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles11.addComponentOrReplace(transform94)

const windowBathroomTiles12 = new Entity('windowBathroomTiles12')
engine.addEntity(windowBathroomTiles12)
windowBathroomTiles12.setParent(_scene)
windowBathroomTiles12.addComponentOrReplace(gltfShape14)
const transform95 = new Transform({
  position: new Vector3(37.5, 12, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles12.addComponentOrReplace(transform95)

const windowBathroomTiles13 = new Entity('windowBathroomTiles13')
engine.addEntity(windowBathroomTiles13)
windowBathroomTiles13.setParent(_scene)
windowBathroomTiles13.addComponentOrReplace(gltfShape14)
const transform96 = new Transform({
  position: new Vector3(37.5, 7, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles13.addComponentOrReplace(transform96)

const windowBathroomTiles14 = new Entity('windowBathroomTiles14')
engine.addEntity(windowBathroomTiles14)
windowBathroomTiles14.setParent(_scene)
windowBathroomTiles14.addComponentOrReplace(gltfShape14)
const transform97 = new Transform({
  position: new Vector3(37.5, 2, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles14.addComponentOrReplace(transform97)

const hepburn = new Entity('hepburn')
engine.addEntity(hepburn)
hepburn.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(76, 0, 29),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.5625025033950806, 0.75, 0.5000020861625671)
})
hepburn.addComponentOrReplace(transform98)
const gltfShape15 = new GLTFShape("bc0e5510-618f-43cd-83ca-dbc61ced8cfc/scene.gltf")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
hepburn.addComponentOrReplace(gltfShape15)

const lowPolyUniversity = new Entity('lowPolyUniversity')
engine.addEntity(lowPolyUniversity)
lowPolyUniversity.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(46.5, 0, 24),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.843755304813385, 0.84375, 1.1250051259994507)
})
lowPolyUniversity.addComponentOrReplace(transform99)
const gltfShape16 = new GLTFShape("3b89865e-0c9e-43a6-9fad-65e8fc025138/scene.gltf")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
lowPolyUniversity.addComponentOrReplace(gltfShape16)

const crossroadsCommunitytownHall = new Entity('crossroadsCommunitytownHall')
engine.addEntity(crossroadsCommunitytownHall)
crossroadsCommunitytownHall.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(38.5, 0, 6),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.7500056624412537, 1.265625, 1.0000042915344238)
})
crossroadsCommunitytownHall.addComponentOrReplace(transform100)
const gltfShape17 = new GLTFShape("19614fea-9ed6-4553-85a7-bfd29728e592/scene.gltf")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
crossroadsCommunitytownHall.addComponentOrReplace(gltfShape17)

const column = new Entity('column')
engine.addEntity(column)
column.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(66.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.218749523162842, 6.1875, 3.749999761581421)
})
column.addComponentOrReplace(transform101)
const gltfShape18 = new GLTFShape("ebec2cbe-ebdc-4cd0-8ddb-7def3a519f12/HWN20_Column_03.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
column.addComponentOrReplace(gltfShape18)

const column2 = new Entity('column2')
engine.addEntity(column2)
column2.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(70.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
column2.addComponentOrReplace(transform102)
const gltfShape19 = new GLTFShape("611ad6f2-7a64-4437-be88-f373a2698671/HWN20_Column_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
column2.addComponentOrReplace(gltfShape19)

const wallBathroomTiles6 = new Entity('wallBathroomTiles6')
engine.addEntity(wallBathroomTiles6)
wallBathroomTiles6.setParent(_scene)
wallBathroomTiles6.addComponentOrReplace(gltfShape10)
const transform103 = new Transform({
  position: new Vector3(50.5, 7.5, 54.5),
  rotation: new Quaternion(1.539415254273621e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(6.75, 2.3255858421325684, 1)
})
wallBathroomTiles6.addComponentOrReplace(transform103)

const windowBathroomTiles15 = new Entity('windowBathroomTiles15')
engine.addEntity(windowBathroomTiles15)
windowBathroomTiles15.setParent(_scene)
windowBathroomTiles15.addComponentOrReplace(gltfShape14)
const transform104 = new Transform({
  position: new Vector3(66, 14.5, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1.25, 1)
})
windowBathroomTiles15.addComponentOrReplace(transform104)

const windowBathroomTiles16 = new Entity('windowBathroomTiles16')
engine.addEntity(windowBathroomTiles16)
windowBathroomTiles16.setParent(_scene)
windowBathroomTiles16.addComponentOrReplace(gltfShape14)
const transform105 = new Transform({
  position: new Vector3(61, 14.5, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1.25, 1)
})
windowBathroomTiles16.addComponentOrReplace(transform105)

const windowBathroomTiles17 = new Entity('windowBathroomTiles17')
engine.addEntity(windowBathroomTiles17)
windowBathroomTiles17.setParent(_scene)
windowBathroomTiles17.addComponentOrReplace(gltfShape14)
const transform106 = new Transform({
  position: new Vector3(56, 14.5, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1.25, 1)
})
windowBathroomTiles17.addComponentOrReplace(transform106)

const windowBathroomTiles18 = new Entity('windowBathroomTiles18')
engine.addEntity(windowBathroomTiles18)
windowBathroomTiles18.setParent(_scene)
windowBathroomTiles18.addComponentOrReplace(gltfShape14)
const transform107 = new Transform({
  position: new Vector3(66, 10.5, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1.25, 1)
})
windowBathroomTiles18.addComponentOrReplace(transform107)

const windowBathroomTiles19 = new Entity('windowBathroomTiles19')
engine.addEntity(windowBathroomTiles19)
windowBathroomTiles19.setParent(_scene)
windowBathroomTiles19.addComponentOrReplace(gltfShape14)
const transform108 = new Transform({
  position: new Vector3(61, 10.5, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1.25, 1)
})
windowBathroomTiles19.addComponentOrReplace(transform108)

const windowBathroomTiles20 = new Entity('windowBathroomTiles20')
engine.addEntity(windowBathroomTiles20)
windowBathroomTiles20.setParent(_scene)
windowBathroomTiles20.addComponentOrReplace(gltfShape14)
const transform109 = new Transform({
  position: new Vector3(56, 10.5, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1.25, 1)
})
windowBathroomTiles20.addComponentOrReplace(transform109)

const windowBathroomTiles21 = new Entity('windowBathroomTiles21')
engine.addEntity(windowBathroomTiles21)
windowBathroomTiles21.setParent(_scene)
windowBathroomTiles21.addComponentOrReplace(gltfShape14)
const transform110 = new Transform({
  position: new Vector3(66, 6.5, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1.25, 1)
})
windowBathroomTiles21.addComponentOrReplace(transform110)

const windowBathroomTiles22 = new Entity('windowBathroomTiles22')
engine.addEntity(windowBathroomTiles22)
windowBathroomTiles22.setParent(_scene)
windowBathroomTiles22.addComponentOrReplace(gltfShape14)
const transform111 = new Transform({
  position: new Vector3(61, 6.5, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1.25, 1)
})
windowBathroomTiles22.addComponentOrReplace(transform111)

const windowBathroomTiles23 = new Entity('windowBathroomTiles23')
engine.addEntity(windowBathroomTiles23)
windowBathroomTiles23.setParent(_scene)
windowBathroomTiles23.addComponentOrReplace(gltfShape14)
const transform112 = new Transform({
  position: new Vector3(56, 6.5, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1.25, 1)
})
windowBathroomTiles23.addComponentOrReplace(transform112)

const windowBathroomTiles24 = new Entity('windowBathroomTiles24')
engine.addEntity(windowBathroomTiles24)
windowBathroomTiles24.setParent(_scene)
windowBathroomTiles24.addComponentOrReplace(gltfShape14)
const transform113 = new Transform({
  position: new Vector3(66, 2, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.25, 1)
})
windowBathroomTiles24.addComponentOrReplace(transform113)

const windowBathroomTiles25 = new Entity('windowBathroomTiles25')
engine.addEntity(windowBathroomTiles25)
windowBathroomTiles25.setParent(_scene)
windowBathroomTiles25.addComponentOrReplace(gltfShape14)
const transform114 = new Transform({
  position: new Vector3(61, 2, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.25, 1)
})
windowBathroomTiles25.addComponentOrReplace(transform114)

const windowBathroomTiles26 = new Entity('windowBathroomTiles26')
engine.addEntity(windowBathroomTiles26)
windowBathroomTiles26.setParent(_scene)
windowBathroomTiles26.addComponentOrReplace(gltfShape14)
const transform115 = new Transform({
  position: new Vector3(56, 2, 68.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.25, 1)
})
windowBathroomTiles26.addComponentOrReplace(transform115)

const windowBathroomTiles27 = new Entity('windowBathroomTiles27')
engine.addEntity(windowBathroomTiles27)
windowBathroomTiles27.setParent(_scene)
windowBathroomTiles27.addComponentOrReplace(gltfShape14)
const transform116 = new Transform({
  position: new Vector3(54.5, 7, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.5, 1)
})
windowBathroomTiles27.addComponentOrReplace(transform116)

const windowBathroomTiles28 = new Entity('windowBathroomTiles28')
engine.addEntity(windowBathroomTiles28)
windowBathroomTiles28.setParent(_scene)
windowBathroomTiles28.addComponentOrReplace(gltfShape14)
const transform117 = new Transform({
  position: new Vector3(32.5, 14.5, 50.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000017881393433, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles28.addComponentOrReplace(transform117)

const windowBathroomTiles29 = new Entity('windowBathroomTiles29')
engine.addEntity(windowBathroomTiles29)
windowBathroomTiles29.setParent(_scene)
windowBathroomTiles29.addComponentOrReplace(gltfShape14)
const transform118 = new Transform({
  position: new Vector3(32.5, 14.5, 55.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000017881393433, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles29.addComponentOrReplace(transform118)

const windowBathroomTiles30 = new Entity('windowBathroomTiles30')
engine.addEntity(windowBathroomTiles30)
windowBathroomTiles30.setParent(_scene)
windowBathroomTiles30.addComponentOrReplace(gltfShape14)
const transform119 = new Transform({
  position: new Vector3(32.5, 14.5, 60.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000017881393433, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles30.addComponentOrReplace(transform119)

const windowBathroomTiles31 = new Entity('windowBathroomTiles31')
engine.addEntity(windowBathroomTiles31)
windowBathroomTiles31.setParent(_scene)
windowBathroomTiles31.addComponentOrReplace(gltfShape14)
const transform120 = new Transform({
  position: new Vector3(32.5, 10.5, 60.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000020265579224, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles31.addComponentOrReplace(transform120)

const windowBathroomTiles32 = new Entity('windowBathroomTiles32')
engine.addEntity(windowBathroomTiles32)
windowBathroomTiles32.setParent(_scene)
windowBathroomTiles32.addComponentOrReplace(gltfShape14)
const transform121 = new Transform({
  position: new Vector3(32.5, 6.500000476837158, 60.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000022649765015, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles32.addComponentOrReplace(transform121)

const windowBathroomTiles33 = new Entity('windowBathroomTiles33')
engine.addEntity(windowBathroomTiles33)
windowBathroomTiles33.setParent(_scene)
windowBathroomTiles33.addComponentOrReplace(gltfShape14)
const transform122 = new Transform({
  position: new Vector3(32.5, 6.5, 55.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000022649765015, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles33.addComponentOrReplace(transform122)

const windowBathroomTiles34 = new Entity('windowBathroomTiles34')
engine.addEntity(windowBathroomTiles34)
windowBathroomTiles34.setParent(_scene)
windowBathroomTiles34.addComponentOrReplace(gltfShape14)
const transform123 = new Transform({
  position: new Vector3(32.5, 10.5, 55.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000020265579224, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles34.addComponentOrReplace(transform123)

const windowBathroomTiles35 = new Entity('windowBathroomTiles35')
engine.addEntity(windowBathroomTiles35)
windowBathroomTiles35.setParent(_scene)
windowBathroomTiles35.addComponentOrReplace(gltfShape14)
const transform124 = new Transform({
  position: new Vector3(32.5, 10.5, 50.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000020265579224, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles35.addComponentOrReplace(transform124)

const windowBathroomTiles36 = new Entity('windowBathroomTiles36')
engine.addEntity(windowBathroomTiles36)
windowBathroomTiles36.setParent(_scene)
windowBathroomTiles36.addComponentOrReplace(gltfShape14)
const transform125 = new Transform({
  position: new Vector3(32.5, 6.499999523162842, 50.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000022649765015, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles36.addComponentOrReplace(transform125)

const windowBathroomTiles37 = new Entity('windowBathroomTiles37')
engine.addEntity(windowBathroomTiles37)
windowBathroomTiles37.setParent(_scene)
windowBathroomTiles37.addComponentOrReplace(gltfShape14)
const transform126 = new Transform({
  position: new Vector3(32.5, 2, 55.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000025033950806, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles37.addComponentOrReplace(transform126)

const windowBathroomTiles38 = new Entity('windowBathroomTiles38')
engine.addEntity(windowBathroomTiles38)
windowBathroomTiles38.setParent(_scene)
windowBathroomTiles38.addComponentOrReplace(gltfShape14)
const transform127 = new Transform({
  position: new Vector3(32.5, 2.000000476837158, 60.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000025033950806, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles38.addComponentOrReplace(transform127)

const windowBathroomTiles39 = new Entity('windowBathroomTiles39')
engine.addEntity(windowBathroomTiles39)
windowBathroomTiles39.setParent(_scene)
windowBathroomTiles39.addComponentOrReplace(gltfShape14)
const transform128 = new Transform({
  position: new Vector3(32.5, 1.9999995231628418, 50.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000025033950806, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles39.addComponentOrReplace(transform128)

const windowBathroomTiles40 = new Entity('windowBathroomTiles40')
engine.addEntity(windowBathroomTiles40)
windowBathroomTiles40.setParent(_scene)
windowBathroomTiles40.addComponentOrReplace(gltfShape14)
const transform129 = new Transform({
  position: new Vector3(41, 12, 67.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles40.addComponentOrReplace(transform129)

const windowBathroomTiles41 = new Entity('windowBathroomTiles41')
engine.addEntity(windowBathroomTiles41)
windowBathroomTiles41.setParent(_scene)
windowBathroomTiles41.addComponentOrReplace(gltfShape14)
const transform130 = new Transform({
  position: new Vector3(37.5, 12, 67.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles41.addComponentOrReplace(transform130)

const windowBathroomTiles42 = new Entity('windowBathroomTiles42')
engine.addEntity(windowBathroomTiles42)
windowBathroomTiles42.setParent(_scene)
windowBathroomTiles42.addComponentOrReplace(gltfShape14)
const transform131 = new Transform({
  position: new Vector3(37.5, 7, 67.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles42.addComponentOrReplace(transform131)

const windowBathroomTiles43 = new Entity('windowBathroomTiles43')
engine.addEntity(windowBathroomTiles43)
windowBathroomTiles43.setParent(_scene)
windowBathroomTiles43.addComponentOrReplace(gltfShape14)
const transform132 = new Transform({
  position: new Vector3(41, 7, 67.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles43.addComponentOrReplace(transform132)

const windowBathroomTiles44 = new Entity('windowBathroomTiles44')
engine.addEntity(windowBathroomTiles44)
windowBathroomTiles44.setParent(_scene)
windowBathroomTiles44.addComponentOrReplace(gltfShape14)
const transform133 = new Transform({
  position: new Vector3(41, 2, 67.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles44.addComponentOrReplace(transform133)

const windowBathroomTiles45 = new Entity('windowBathroomTiles45')
engine.addEntity(windowBathroomTiles45)
windowBathroomTiles45.setParent(_scene)
windowBathroomTiles45.addComponentOrReplace(gltfShape14)
const transform134 = new Transform({
  position: new Vector3(37.5, 2, 67.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
windowBathroomTiles45.addComponentOrReplace(transform134)

const windowBathroomTiles46 = new Entity('windowBathroomTiles46')
engine.addEntity(windowBathroomTiles46)
windowBathroomTiles46.setParent(_scene)
windowBathroomTiles46.addComponentOrReplace(gltfShape14)
const transform135 = new Transform({
  position: new Vector3(66, 14.5, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1.25, 1)
})
windowBathroomTiles46.addComponentOrReplace(transform135)

const windowBathroomTiles47 = new Entity('windowBathroomTiles47')
engine.addEntity(windowBathroomTiles47)
windowBathroomTiles47.setParent(_scene)
windowBathroomTiles47.addComponentOrReplace(gltfShape14)
const transform136 = new Transform({
  position: new Vector3(61, 14.5, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1.25, 1)
})
windowBathroomTiles47.addComponentOrReplace(transform136)

const windowBathroomTiles48 = new Entity('windowBathroomTiles48')
engine.addEntity(windowBathroomTiles48)
windowBathroomTiles48.setParent(_scene)
windowBathroomTiles48.addComponentOrReplace(gltfShape14)
const transform137 = new Transform({
  position: new Vector3(56, 14.5, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1.25, 1)
})
windowBathroomTiles48.addComponentOrReplace(transform137)

const windowBathroomTiles49 = new Entity('windowBathroomTiles49')
engine.addEntity(windowBathroomTiles49)
windowBathroomTiles49.setParent(_scene)
windowBathroomTiles49.addComponentOrReplace(gltfShape14)
const transform138 = new Transform({
  position: new Vector3(56, 10.5, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1.25, 1)
})
windowBathroomTiles49.addComponentOrReplace(transform138)

const windowBathroomTiles50 = new Entity('windowBathroomTiles50')
engine.addEntity(windowBathroomTiles50)
windowBathroomTiles50.setParent(_scene)
windowBathroomTiles50.addComponentOrReplace(gltfShape14)
const transform139 = new Transform({
  position: new Vector3(61, 10.5, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1.25, 1)
})
windowBathroomTiles50.addComponentOrReplace(transform139)

const windowBathroomTiles51 = new Entity('windowBathroomTiles51')
engine.addEntity(windowBathroomTiles51)
windowBathroomTiles51.setParent(_scene)
windowBathroomTiles51.addComponentOrReplace(gltfShape14)
const transform140 = new Transform({
  position: new Vector3(66, 10.5, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1.25, 1)
})
windowBathroomTiles51.addComponentOrReplace(transform140)

const windowBathroomTiles52 = new Entity('windowBathroomTiles52')
engine.addEntity(windowBathroomTiles52)
windowBathroomTiles52.setParent(_scene)
windowBathroomTiles52.addComponentOrReplace(gltfShape14)
const transform141 = new Transform({
  position: new Vector3(66, 6.5, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.25, 1)
})
windowBathroomTiles52.addComponentOrReplace(transform141)

const windowBathroomTiles53 = new Entity('windowBathroomTiles53')
engine.addEntity(windowBathroomTiles53)
windowBathroomTiles53.setParent(_scene)
windowBathroomTiles53.addComponentOrReplace(gltfShape14)
const transform142 = new Transform({
  position: new Vector3(61, 6.5, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.25, 1)
})
windowBathroomTiles53.addComponentOrReplace(transform142)

const windowBathroomTiles54 = new Entity('windowBathroomTiles54')
engine.addEntity(windowBathroomTiles54)
windowBathroomTiles54.setParent(_scene)
windowBathroomTiles54.addComponentOrReplace(gltfShape14)
const transform143 = new Transform({
  position: new Vector3(56, 6.5, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.25, 1)
})
windowBathroomTiles54.addComponentOrReplace(transform143)

const windowBathroomTiles55 = new Entity('windowBathroomTiles55')
engine.addEntity(windowBathroomTiles55)
windowBathroomTiles55.setParent(_scene)
windowBathroomTiles55.addComponentOrReplace(gltfShape14)
const transform144 = new Transform({
  position: new Vector3(56, 2, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1.25, 1)
})
windowBathroomTiles55.addComponentOrReplace(transform144)

const windowBathroomTiles56 = new Entity('windowBathroomTiles56')
engine.addEntity(windowBathroomTiles56)
windowBathroomTiles56.setParent(_scene)
windowBathroomTiles56.addComponentOrReplace(gltfShape14)
const transform145 = new Transform({
  position: new Vector3(61, 2, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1.25, 1)
})
windowBathroomTiles56.addComponentOrReplace(transform145)

const windowBathroomTiles57 = new Entity('windowBathroomTiles57')
engine.addEntity(windowBathroomTiles57)
windowBathroomTiles57.setParent(_scene)
windowBathroomTiles57.addComponentOrReplace(gltfShape14)
const transform146 = new Transform({
  position: new Vector3(66, 2, 54),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1.25, 1)
})
windowBathroomTiles57.addComponentOrReplace(transform146)

const pazBus = new Entity('pazBus')
engine.addEntity(pazBus)
pazBus.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(7, 0, 85.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pazBus.addComponentOrReplace(transform147)
const gltfShape20 = new GLTFShape("3e6b7e2f-54d2-435a-bb29-1f7920ff06df/scene.gltf")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
pazBus.addComponentOrReplace(gltfShape20)

const pazBus2 = new Entity('pazBus2')
engine.addEntity(pazBus2)
pazBus2.setParent(_scene)
pazBus2.addComponentOrReplace(gltfShape20)
const transform148 = new Transform({
  position: new Vector3(2.5, 0, 85),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pazBus2.addComponentOrReplace(transform148)

const busStop = new Entity('busStop')
engine.addEntity(busStop)
busStop.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(4, 0, 91.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
busStop.addComponentOrReplace(transform149)
const gltfShape21 = new GLTFShape("1c766509-b044-4486-9b66-f046b32a0300/Bus_Stop.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
busStop.addComponentOrReplace(gltfShape21)

const windowBathroomTiles58 = new Entity('windowBathroomTiles58')
engine.addEntity(windowBathroomTiles58)
windowBathroomTiles58.setParent(_scene)
windowBathroomTiles58.addComponentOrReplace(gltfShape14)
const transform150 = new Transform({
  position: new Vector3(44.5, 14.5, 50.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000017881393433, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles58.addComponentOrReplace(transform150)

const windowBathroomTiles59 = new Entity('windowBathroomTiles59')
engine.addEntity(windowBathroomTiles59)
windowBathroomTiles59.setParent(_scene)
windowBathroomTiles59.addComponentOrReplace(gltfShape14)
const transform151 = new Transform({
  position: new Vector3(44.5, 14.5, 55.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000017881393433, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles59.addComponentOrReplace(transform151)

const windowBathroomTiles60 = new Entity('windowBathroomTiles60')
engine.addEntity(windowBathroomTiles60)
windowBathroomTiles60.setParent(_scene)
windowBathroomTiles60.addComponentOrReplace(gltfShape14)
const transform152 = new Transform({
  position: new Vector3(44.5, 14.5, 60.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000017881393433, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles60.addComponentOrReplace(transform152)

const windowBathroomTiles61 = new Entity('windowBathroomTiles61')
engine.addEntity(windowBathroomTiles61)
windowBathroomTiles61.setParent(_scene)
windowBathroomTiles61.addComponentOrReplace(gltfShape14)
const transform153 = new Transform({
  position: new Vector3(44.5, 10.5, 60.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000020265579224, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles61.addComponentOrReplace(transform153)

const windowBathroomTiles62 = new Entity('windowBathroomTiles62')
engine.addEntity(windowBathroomTiles62)
windowBathroomTiles62.setParent(_scene)
windowBathroomTiles62.addComponentOrReplace(gltfShape14)
const transform154 = new Transform({
  position: new Vector3(44.5, 10.5, 55.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000020265579224, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles62.addComponentOrReplace(transform154)

const windowBathroomTiles63 = new Entity('windowBathroomTiles63')
engine.addEntity(windowBathroomTiles63)
windowBathroomTiles63.setParent(_scene)
windowBathroomTiles63.addComponentOrReplace(gltfShape14)
const transform155 = new Transform({
  position: new Vector3(44.5, 10.5, 50.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000020265579224, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles63.addComponentOrReplace(transform155)

const windowBathroomTiles64 = new Entity('windowBathroomTiles64')
engine.addEntity(windowBathroomTiles64)
windowBathroomTiles64.setParent(_scene)
windowBathroomTiles64.addComponentOrReplace(gltfShape14)
const transform156 = new Transform({
  position: new Vector3(44.5, 6.499999523162842, 50.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000022649765015, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles64.addComponentOrReplace(transform156)

const windowBathroomTiles65 = new Entity('windowBathroomTiles65')
engine.addEntity(windowBathroomTiles65)
windowBathroomTiles65.setParent(_scene)
windowBathroomTiles65.addComponentOrReplace(gltfShape14)
const transform157 = new Transform({
  position: new Vector3(44.5, 6.5, 55.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000022649765015, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles65.addComponentOrReplace(transform157)

const windowBathroomTiles66 = new Entity('windowBathroomTiles66')
engine.addEntity(windowBathroomTiles66)
windowBathroomTiles66.setParent(_scene)
windowBathroomTiles66.addComponentOrReplace(gltfShape14)
const transform158 = new Transform({
  position: new Vector3(44.5, 6.500000476837158, 60.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000022649765015, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles66.addComponentOrReplace(transform158)

const windowBathroomTiles67 = new Entity('windowBathroomTiles67')
engine.addEntity(windowBathroomTiles67)
windowBathroomTiles67.setParent(_scene)
windowBathroomTiles67.addComponentOrReplace(gltfShape14)
const transform159 = new Transform({
  position: new Vector3(44.5, 2.000000476837158, 60.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000025033950806, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles67.addComponentOrReplace(transform159)

const windowBathroomTiles68 = new Entity('windowBathroomTiles68')
engine.addEntity(windowBathroomTiles68)
windowBathroomTiles68.setParent(_scene)
windowBathroomTiles68.addComponentOrReplace(gltfShape14)
const transform160 = new Transform({
  position: new Vector3(44.5, 2, 55.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000025033950806, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles68.addComponentOrReplace(transform160)

const windowBathroomTiles69 = new Entity('windowBathroomTiles69')
engine.addEntity(windowBathroomTiles69)
windowBathroomTiles69.setParent(_scene)
windowBathroomTiles69.addComponentOrReplace(gltfShape14)
const transform161 = new Transform({
  position: new Vector3(44.5, 1.9999995231628418, 50.5),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.0000025033950806, 1.250000238418579, 1.0000001192092896)
})
windowBathroomTiles69.addComponentOrReplace(transform161)

const bush = new Entity('bush')
engine.addEntity(bush)
bush.setParent(_scene)
const transform162 = new Transform({
  position: new Vector3(5, 0, 68.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush.addComponentOrReplace(transform162)
const gltfShape22 = new GLTFShape("b34ad4ca-db96-44fe-8fd6-86b4aa9f2218/HWN20_Bush.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
bush.addComponentOrReplace(gltfShape22)

const bush2 = new Entity('bush2')
engine.addEntity(bush2)
bush2.setParent(_scene)
bush2.addComponentOrReplace(gltfShape22)
const transform163 = new Transform({
  position: new Vector3(13, 0, 70.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush2.addComponentOrReplace(transform163)

const bush3 = new Entity('bush3')
engine.addEntity(bush3)
bush3.setParent(_scene)
bush3.addComponentOrReplace(gltfShape22)
const transform164 = new Transform({
  position: new Vector3(22.5, 0, 67),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush3.addComponentOrReplace(transform164)

const bloomingGreenAcaciaTree = new Entity('bloomingGreenAcaciaTree')
engine.addEntity(bloomingGreenAcaciaTree)
bloomingGreenAcaciaTree.setParent(_scene)
const transform165 = new Transform({
  position: new Vector3(30.5, 0, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bloomingGreenAcaciaTree.addComponentOrReplace(transform165)
const gltfShape23 = new GLTFShape("2dd72eee-1285-43e0-9787-8a60bf4cd46a/Tree_Forest_Green_02/Tree_Forest_Green_02.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
bloomingGreenAcaciaTree.addComponentOrReplace(gltfShape23)

const bloomingGreenAcaciaTree2 = new Entity('bloomingGreenAcaciaTree2')
engine.addEntity(bloomingGreenAcaciaTree2)
bloomingGreenAcaciaTree2.setParent(_scene)
bloomingGreenAcaciaTree2.addComponentOrReplace(gltfShape23)
const transform166 = new Transform({
  position: new Vector3(23, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bloomingGreenAcaciaTree2.addComponentOrReplace(transform166)

const greenAcaciaTree = new Entity('greenAcaciaTree')
engine.addEntity(greenAcaciaTree)
greenAcaciaTree.setParent(_scene)
const transform167 = new Transform({
  position: new Vector3(55.5, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenAcaciaTree.addComponentOrReplace(transform167)
const gltfShape24 = new GLTFShape("c72e0a49-875a-442b-8b05-ae3c9d1ed119/Tree_Forest_Green_01/Tree_Forest_Green_01.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
greenAcaciaTree.addComponentOrReplace(gltfShape24)

const bush4 = new Entity('bush4')
engine.addEntity(bush4)
bush4.setParent(_scene)
bush4.addComponentOrReplace(gltfShape22)
const transform168 = new Transform({
  position: new Vector3(75, 2.5, 86.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush4.addComponentOrReplace(transform168)

const greenAcaciaTree2 = new Entity('greenAcaciaTree2')
engine.addEntity(greenAcaciaTree2)
greenAcaciaTree2.setParent(_scene)
greenAcaciaTree2.addComponentOrReplace(gltfShape24)
const transform169 = new Transform({
  position: new Vector3(75.5, 2.5, 84.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 0.5, 0.4999999701976776)
})
greenAcaciaTree2.addComponentOrReplace(transform169)

const greenAcaciaTree3 = new Entity('greenAcaciaTree3')
engine.addEntity(greenAcaciaTree3)
greenAcaciaTree3.setParent(_scene)
greenAcaciaTree3.addComponentOrReplace(gltfShape24)
const transform170 = new Transform({
  position: new Vector3(63.5, 2.5, 86),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 0.5, 0.4999999701976776)
})
greenAcaciaTree3.addComponentOrReplace(transform170)

const bush5 = new Entity('bush5')
engine.addEntity(bush5)
bush5.setParent(_scene)
bush5.addComponentOrReplace(gltfShape22)
const transform171 = new Transform({
  position: new Vector3(65.5, 0, 70),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush5.addComponentOrReplace(transform171)

const bush6 = new Entity('bush6')
engine.addEntity(bush6)
bush6.setParent(_scene)
bush6.addComponentOrReplace(gltfShape22)
const transform172 = new Transform({
  position: new Vector3(60.5, 0, 69.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush6.addComponentOrReplace(transform172)

const bloomingGreenAcaciaTree3 = new Entity('bloomingGreenAcaciaTree3')
engine.addEntity(bloomingGreenAcaciaTree3)
bloomingGreenAcaciaTree3.setParent(_scene)
bloomingGreenAcaciaTree3.addComponentOrReplace(gltfShape23)
const transform173 = new Transform({
  position: new Vector3(13, 0, 67),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bloomingGreenAcaciaTree3.addComponentOrReplace(transform173)

const njcuLogoCL = new Entity('njcuLogoCL')
engine.addEntity(njcuLogoCL)
njcuLogoCL.setParent(_scene)
const transform174 = new Transform({
  position: new Vector3(17.5, 16.5, 35.5),
  rotation: new Quaternion(1.1920928955078125e-7, 0.7071067690849304, -2.9802322387695312e-8, 0.7071068286895752),
  scale: new Vector3(0.07171811908483505, 0.08859425783157349, 0.06875039637088776)
})
njcuLogoCL.addComponentOrReplace(transform174)
const gltfShape25 = new GLTFShape("b90577d0-6a70-4244-b055-8305de0a7249/njcu-logoCL.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
njcuLogoCL.addComponentOrReplace(gltfShape25)

const brickWhiteTile = new Entity('brickWhiteTile')
engine.addEntity(brickWhiteTile)
brickWhiteTile.setParent(_scene)
const transform175 = new Transform({
  position: new Vector3(64.5, 19.5, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2, 1)
})
brickWhiteTile.addComponentOrReplace(transform175)
const gltfShape26 = new GLTFShape("dd1bab8b-61a5-4fe0-8eb2-9febe60d2e67/brick_light_tile.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
brickWhiteTile.addComponentOrReplace(gltfShape26)

const brickWhiteTile2 = new Entity('brickWhiteTile2')
engine.addEntity(brickWhiteTile2)
brickWhiteTile2.setParent(_scene)
brickWhiteTile2.addComponentOrReplace(gltfShape26)
const transform176 = new Transform({
  position: new Vector3(68.5, 19.5, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2, 1)
})
brickWhiteTile2.addComponentOrReplace(transform176)

const brickWhiteTile3 = new Entity('brickWhiteTile3')
engine.addEntity(brickWhiteTile3)
brickWhiteTile3.setParent(_scene)
brickWhiteTile3.addComponentOrReplace(gltfShape26)
const transform177 = new Transform({
  position: new Vector3(68.5, 19.5, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2, 1)
})
brickWhiteTile3.addComponentOrReplace(transform177)

const brickWhiteTile4 = new Entity('brickWhiteTile4')
engine.addEntity(brickWhiteTile4)
brickWhiteTile4.setParent(_scene)
brickWhiteTile4.addComponentOrReplace(gltfShape26)
const transform178 = new Transform({
  position: new Vector3(64.5, 19.5, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2, 1)
})
brickWhiteTile4.addComponentOrReplace(transform178)

const bloomingGreenAcaciaTree4 = new Entity('bloomingGreenAcaciaTree4')
engine.addEntity(bloomingGreenAcaciaTree4)
bloomingGreenAcaciaTree4.setParent(_scene)
bloomingGreenAcaciaTree4.addComponentOrReplace(gltfShape23)
const transform179 = new Transform({
  position: new Vector3(73.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bloomingGreenAcaciaTree4.addComponentOrReplace(transform179)

const bloomingGreenAcaciaTree5 = new Entity('bloomingGreenAcaciaTree5')
engine.addEntity(bloomingGreenAcaciaTree5)
bloomingGreenAcaciaTree5.setParent(_scene)
bloomingGreenAcaciaTree5.addComponentOrReplace(gltfShape23)
const transform180 = new Transform({
  position: new Vector3(76, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bloomingGreenAcaciaTree5.addComponentOrReplace(transform180)

const greenAcaciaTree4 = new Entity('greenAcaciaTree4')
engine.addEntity(greenAcaciaTree4)
greenAcaciaTree4.setParent(_scene)
greenAcaciaTree4.addComponentOrReplace(gltfShape24)
const transform181 = new Transform({
  position: new Vector3(75.5, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenAcaciaTree4.addComponentOrReplace(transform181)

const bush7 = new Entity('bush7')
engine.addEntity(bush7)
bush7.setParent(_scene)
bush7.addComponentOrReplace(gltfShape22)
const transform182 = new Transform({
  position: new Vector3(69.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush7.addComponentOrReplace(transform182)

const greenAcaciaTree5 = new Entity('greenAcaciaTree5')
engine.addEntity(greenAcaciaTree5)
greenAcaciaTree5.setParent(_scene)
greenAcaciaTree5.addComponentOrReplace(gltfShape24)
const transform183 = new Transform({
  position: new Vector3(60, 0, 72.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenAcaciaTree5.addComponentOrReplace(transform183)

const floorConcrete3 = new Entity('floorConcrete3')
engine.addEntity(floorConcrete3)
floorConcrete3.setParent(_scene)
floorConcrete3.addComponentOrReplace(gltfShape8)
const transform184 = new Transform({
  position: new Vector3(18, 0, 96),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.499999046325684, 1, 4.374999523162842)
})
floorConcrete3.addComponentOrReplace(transform184)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform185 = new Transform({
  position: new Vector3(17.5, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 1)
})
wallPlainGlass.addComponentOrReplace(transform185)
const gltfShape27 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape27.withCollisions = true
gltfShape27.isPointerBlocker = true
gltfShape27.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape27)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape27)
const transform186 = new Transform({
  position: new Vector3(17.5, 0, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 1)
})
wallPlainGlass2.addComponentOrReplace(transform186)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape27)
const transform187 = new Transform({
  position: new Vector3(17.5, 0, 38),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.000001907348633, 1, 1.000000238418579)
})
wallPlainGlass3.addComponentOrReplace(transform187)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape27)
const transform188 = new Transform({
  position: new Vector3(1.5, 0, 38),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(10.128690719604492, 1, 1.0000100135803223)
})
wallPlainGlass4.addComponentOrReplace(transform188)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape27)
const transform189 = new Transform({
  position: new Vector3(5.5, 4, 38),
  rotation: new Quaternion(-0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(10.128702163696289, 3.0000009536743164, 1.000009298324585)
})
wallPlainGlass5.addComponentOrReplace(transform189)

const stairsFloatingUShape = new Entity('stairsFloatingUShape')
engine.addEntity(stairsFloatingUShape)
stairsFloatingUShape.setParent(_scene)
const transform190 = new Transform({
  position: new Vector3(5.5, 0, 20),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
stairsFloatingUShape.addComponentOrReplace(transform190)
const gltfShape28 = new GLTFShape("cb241026-bced-4622-8846-5f529727c84b/floatingUShapeStairs.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true
gltfShape28.visible = true
stairsFloatingUShape.addComponentOrReplace(gltfShape28)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape27)
const transform191 = new Transform({
  position: new Vector3(1.5, 4, 38),
  rotation: new Quaternion(-0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(8.071309089660645, 0.9899885654449463, 1.5000139474868774)
})
wallPlainGlass6.addComponentOrReplace(transform191)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform192 = new Transform({
  position: new Vector3(2, 1.5, 24),
  rotation: new Quaternion(2.369416115964091e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000016927719116, 3, 4.000014781951904)
})
nftPictureFrame.addComponentOrReplace(transform192)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
wallPlainGlass7.addComponentOrReplace(gltfShape27)
const transform193 = new Transform({
  position: new Vector3(17.5, 4, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 1)
})
wallPlainGlass7.addComponentOrReplace(transform193)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape27)
const transform194 = new Transform({
  position: new Vector3(17.5, 4, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 1)
})
wallPlainGlass8.addComponentOrReplace(transform194)

const wallPlainGlass9 = new Entity('wallPlainGlass9')
engine.addEntity(wallPlainGlass9)
wallPlainGlass9.setParent(_scene)
wallPlainGlass9.addComponentOrReplace(gltfShape27)
const transform195 = new Transform({
  position: new Vector3(1.5, 4, 38),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(10.128695487976074, 1, 1.0000097751617432)
})
wallPlainGlass9.addComponentOrReplace(transform195)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape27)
const transform196 = new Transform({
  position: new Vector3(17.5, 4, 38),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(10.128692626953125, 1, 1.0000109672546387)
})
wallPlainGlass10.addComponentOrReplace(transform196)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(2, 1.5, 29),
  rotation: new Quaternion(2.369416115964091e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000018835067749, 3, 4.000016689300537)
})
nftPictureFrame2.addComponentOrReplace(transform197)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform198 = new Transform({
  position: new Vector3(4.5, 1.5, 37.5),
  rotation: new Quaternion(-8.794344456460599e-16, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(3.000023365020752, 3, 4.000023365020752)
})
nftPictureFrame4.addComponentOrReplace(transform198)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform199 = new Transform({
  position: new Vector3(9, 1.5, 37.5),
  rotation: new Quaternion(-8.794344456460599e-16, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(3.000023365020752, 3, 4.000023365020752)
})
nftPictureFrame5.addComponentOrReplace(transform199)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform200 = new Transform({
  position: new Vector3(14, 1.5, 37.5),
  rotation: new Quaternion(-8.794344456460599e-16, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(3.000023365020752, 3, 4.000023365020752)
})
nftPictureFrame6.addComponentOrReplace(transform200)

const galleryLight = new Entity('galleryLight')
engine.addEntity(galleryLight)
galleryLight.setParent(_scene)
const transform201 = new Transform({
  position: new Vector3(2, 3, 23.5),
  rotation: new Quaternion(1.2559382719479033e-14, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(2.2500128746032715, 1.5, 1.500009536743164)
})
galleryLight.addComponentOrReplace(transform201)

const tableWithChairs = new Entity('tableWithChairs')
engine.addEntity(tableWithChairs)
tableWithChairs.setParent(_scene)
const transform202 = new Transform({
  position: new Vector3(10, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableWithChairs.addComponentOrReplace(transform202)
const gltfShape29 = new GLTFShape("f7de372b-3ac8-4f56-a822-640326132014/Table_with_Chairs.glb")
gltfShape29.withCollisions = true
gltfShape29.isPointerBlocker = true
gltfShape29.visible = true
tableWithChairs.addComponentOrReplace(gltfShape29)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform203 = new Transform({
  position: new Vector3(14, 9, 37.5),
  rotation: new Quaternion(-8.794344456460599e-16, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(3.000023365020752, 3, 4.000023365020752)
})
nftPictureFrame7.addComponentOrReplace(transform203)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform204 = new Transform({
  position: new Vector3(9, 9, 37.5),
  rotation: new Quaternion(-8.794344456460599e-16, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(3.000023365020752, 3, 4.000023365020752)
})
nftPictureFrame8.addComponentOrReplace(transform204)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform205 = new Transform({
  position: new Vector3(4.5, 9, 37.5),
  rotation: new Quaternion(-8.794344456460599e-16, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(3.000023365020752, 3, 4.000023365020752)
})
nftPictureFrame9.addComponentOrReplace(transform205)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform206 = new Transform({
  position: new Vector3(2, 5.5, 33.5),
  rotation: new Quaternion(2.369416115964091e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.0000195503234863, 3, 4.0000176429748535)
})
nftPictureFrame10.addComponentOrReplace(transform206)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform207 = new Transform({
  position: new Vector3(2, 5.5, 29),
  rotation: new Quaternion(2.369416115964091e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.0000202655792236, 3, 4.0000176429748535)
})
nftPictureFrame11.addComponentOrReplace(transform207)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform208 = new Transform({
  position: new Vector3(2, 9, 24),
  rotation: new Quaternion(2.369416115964091e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.0000193119049072, 3, 4.000016689300537)
})
nftPictureFrame12.addComponentOrReplace(transform208)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
wallPlainGlass11.addComponentOrReplace(gltfShape27)
const transform209 = new Transform({
  position: new Vector3(5.5, 8, 38),
  rotation: new Quaternion(-0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(10.128702163696289, 3.0000009536743164, 1.000009298324585)
})
wallPlainGlass11.addComponentOrReplace(transform209)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape27)
const transform210 = new Transform({
  position: new Vector3(1.5, 8, 38),
  rotation: new Quaternion(-0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(8.071309089660645, 0.9899885654449463, 1.5000139474868774)
})
wallPlainGlass12.addComponentOrReplace(transform210)

const stairsFloatingUShape2 = new Entity('stairsFloatingUShape2')
engine.addEntity(stairsFloatingUShape2)
stairsFloatingUShape2.setParent(_scene)
stairsFloatingUShape2.addComponentOrReplace(gltfShape28)
const transform211 = new Transform({
  position: new Vector3(5.5, 4, 20),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
stairsFloatingUShape2.addComponentOrReplace(transform211)

const instagramLink = new Entity('instagramLink')
engine.addEntity(instagramLink)
instagramLink.setParent(_scene)
const transform212 = new Transform({
  position: new Vector3(10, 1, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
instagramLink.addComponentOrReplace(transform212)

const galleryLight2 = new Entity('galleryLight2')
engine.addEntity(galleryLight2)
galleryLight2.setParent(_scene)
const transform213 = new Transform({
  position: new Vector3(2, 3, 28.5),
  rotation: new Quaternion(1.2559382719479033e-14, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(2.2500128746032715, 1.5, 1.500009536743164)
})
galleryLight2.addComponentOrReplace(transform213)

const galleryLight3 = new Entity('galleryLight3')
engine.addEntity(galleryLight3)
galleryLight3.setParent(_scene)
const transform214 = new Transform({
  position: new Vector3(2, 3, 33),
  rotation: new Quaternion(1.2559382719479033e-14, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(2.2500128746032715, 1.5, 1.500009536743164)
})
galleryLight3.addComponentOrReplace(transform214)

const greenTallSquaredTree = new Entity('greenTallSquaredTree')
engine.addEntity(greenTallSquaredTree)
greenTallSquaredTree.setParent(_scene)
const transform215 = new Transform({
  position: new Vector3(6.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenTallSquaredTree.addComponentOrReplace(transform215)
const gltfShape30 = new GLTFShape("98f35970-9633-410d-883b-493350654bc9/TreeTall_02/TreeTall_02.glb")
gltfShape30.withCollisions = true
gltfShape30.isPointerBlocker = true
gltfShape30.visible = true
greenTallSquaredTree.addComponentOrReplace(gltfShape30)

const greenAcaciaTree6 = new Entity('greenAcaciaTree6')
engine.addEntity(greenAcaciaTree6)
greenAcaciaTree6.setParent(_scene)
greenAcaciaTree6.addComponentOrReplace(gltfShape24)
const transform216 = new Transform({
  position: new Vector3(12, 0, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenAcaciaTree6.addComponentOrReplace(transform216)

const cactusWand = new Entity('cactusWand')
engine.addEntity(cactusWand)
cactusWand.setParent(_scene)
const transform217 = new Transform({
  position: new Vector3(26, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.5, 1.5)
})
cactusWand.addComponentOrReplace(transform217)
const gltfShape31 = new GLTFShape("5f25759e-dd1b-4294-9bc7-d8e66c198e9f/PlantSF_07/PlantSF_07.glb")
gltfShape31.withCollisions = true
gltfShape31.isPointerBlocker = true
gltfShape31.visible = true
cactusWand.addComponentOrReplace(gltfShape31)

const cactusWand2 = new Entity('cactusWand2')
engine.addEntity(cactusWand2)
cactusWand2.setParent(_scene)
cactusWand2.addComponentOrReplace(gltfShape31)
const transform218 = new Transform({
  position: new Vector3(28, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.5, 1.5)
})
cactusWand2.addComponentOrReplace(transform218)

const cactusWand3 = new Entity('cactusWand3')
engine.addEntity(cactusWand3)
cactusWand3.setParent(_scene)
cactusWand3.addComponentOrReplace(gltfShape31)
const transform219 = new Transform({
  position: new Vector3(16.5, 0, 41),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.5, 1.5)
})
cactusWand3.addComponentOrReplace(transform219)

const wallPlainGlass13 = new Entity('wallPlainGlass13')
engine.addEntity(wallPlainGlass13)
wallPlainGlass13.setParent(_scene)
wallPlainGlass13.addComponentOrReplace(gltfShape27)
const transform220 = new Transform({
  position: new Vector3(17.5, 8, 38),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(10.128698348999023, 1, 1.0000104904174805)
})
wallPlainGlass13.addComponentOrReplace(transform220)

const wallPlainGlass14 = new Entity('wallPlainGlass14')
engine.addEntity(wallPlainGlass14)
wallPlainGlass14.setParent(_scene)
wallPlainGlass14.addComponentOrReplace(gltfShape27)
const transform221 = new Transform({
  position: new Vector3(5.5, 12, 37.5),
  rotation: new Quaternion(-0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(10.128702163696289, 3.0000009536743164, 1.000009298324585)
})
wallPlainGlass14.addComponentOrReplace(transform221)

const wallPlainGlass15 = new Entity('wallPlainGlass15')
engine.addEntity(wallPlainGlass15)
wallPlainGlass15.setParent(_scene)
wallPlainGlass15.addComponentOrReplace(gltfShape27)
const transform222 = new Transform({
  position: new Vector3(17.5, 8, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 1)
})
wallPlainGlass15.addComponentOrReplace(transform222)

const wallPlainGlass16 = new Entity('wallPlainGlass16')
engine.addEntity(wallPlainGlass16)
wallPlainGlass16.setParent(_scene)
wallPlainGlass16.addComponentOrReplace(gltfShape27)
const transform223 = new Transform({
  position: new Vector3(1.5, 12, 38),
  rotation: new Quaternion(-0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(8.071309089660645, 0.9899885654449463, 1.5000139474868774)
})
wallPlainGlass16.addComponentOrReplace(transform223)

const wallPlainGlass17 = new Entity('wallPlainGlass17')
engine.addEntity(wallPlainGlass17)
wallPlainGlass17.setParent(_scene)
wallPlainGlass17.addComponentOrReplace(gltfShape27)
const transform224 = new Transform({
  position: new Vector3(1.5, 8, 38),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(10.128697395324707, 1, 1.0000100135803223)
})
wallPlainGlass17.addComponentOrReplace(transform224)

const stairsFloatingUShape3 = new Entity('stairsFloatingUShape3')
engine.addEntity(stairsFloatingUShape3)
stairsFloatingUShape3.setParent(_scene)
stairsFloatingUShape3.addComponentOrReplace(gltfShape28)
const transform225 = new Transform({
  position: new Vector3(5.5, 8, 20),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
stairsFloatingUShape3.addComponentOrReplace(transform225)

const wallPlainGlass18 = new Entity('wallPlainGlass18')
engine.addEntity(wallPlainGlass18)
wallPlainGlass18.setParent(_scene)
wallPlainGlass18.addComponentOrReplace(gltfShape27)
const transform226 = new Transform({
  position: new Vector3(17.5, 8, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 1)
})
wallPlainGlass18.addComponentOrReplace(transform226)

const longIronStoneFenceModule = new Entity('longIronStoneFenceModule')
engine.addEntity(longIronStoneFenceModule)
longIronStoneFenceModule.setParent(_scene)
const transform227 = new Transform({
  position: new Vector3(18, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6, 3, 1.5)
})
longIronStoneFenceModule.addComponentOrReplace(transform227)
const gltfShape32 = new GLTFShape("644e1195-13b3-440c-bb3a-ba1578c9b0c9/Fence_Iron_3M/Fence_Iron_3M.glb")
gltfShape32.withCollisions = true
gltfShape32.isPointerBlocker = true
gltfShape32.visible = true
longIronStoneFenceModule.addComponentOrReplace(gltfShape32)

const longIronStoneFenceModule2 = new Entity('longIronStoneFenceModule2')
engine.addEntity(longIronStoneFenceModule2)
longIronStoneFenceModule2.setParent(_scene)
longIronStoneFenceModule2.addComponentOrReplace(gltfShape32)
const transform228 = new Transform({
  position: new Vector3(0.5, 0, 50),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(9.000035285949707, 3, 1.5000072717666626)
})
longIronStoneFenceModule2.addComponentOrReplace(transform228)

const longIronStoneFenceModule3 = new Entity('longIronStoneFenceModule3')
engine.addEntity(longIronStoneFenceModule3)
longIronStoneFenceModule3.setParent(_scene)
longIronStoneFenceModule3.addComponentOrReplace(gltfShape32)
const transform229 = new Transform({
  position: new Vector3(0.5000000596046448, 0, 1.5),
  rotation: new Quaternion(1.5394153601527394e-15, 0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.000037670135498, 3, -1.5000094175338745)
})
longIronStoneFenceModule3.addComponentOrReplace(transform229)

const longIronStoneFenceModule4 = new Entity('longIronStoneFenceModule4')
engine.addEntity(longIronStoneFenceModule4)
longIronStoneFenceModule4.setParent(_scene)
longIronStoneFenceModule4.addComponentOrReplace(gltfShape32)
const transform230 = new Transform({
  position: new Vector3(0.5, 0, 72),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.750026702880859, 3, 1.5000076293945312)
})
longIronStoneFenceModule4.addComponentOrReplace(transform230)

const longIronStoneFenceModule5 = new Entity('longIronStoneFenceModule5')
engine.addEntity(longIronStoneFenceModule5)
longIronStoneFenceModule5.setParent(_scene)
longIronStoneFenceModule5.addComponentOrReplace(gltfShape32)
const transform231 = new Transform({
  position: new Vector3(0.5000000596046448, 0, 80),
  rotation: new Quaternion(1.5394153601527394e-15, 0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.062552452087402, 3, -1.5000180006027222)
})
longIronStoneFenceModule5.addComponentOrReplace(transform231)

const longIronStoneFenceModule6 = new Entity('longIronStoneFenceModule6')
engine.addEntity(longIronStoneFenceModule6)
longIronStoneFenceModule6.setParent(_scene)
longIronStoneFenceModule6.addComponentOrReplace(gltfShape32)
const transform232 = new Transform({
  position: new Vector3(36.5, 0, 0.4999977946281433),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6, 3, 1.5)
})
longIronStoneFenceModule6.addComponentOrReplace(transform232)

const longIronStoneFenceModule7 = new Entity('longIronStoneFenceModule7')
engine.addEntity(longIronStoneFenceModule7)
longIronStoneFenceModule7.setParent(_scene)
longIronStoneFenceModule7.addComponentOrReplace(gltfShape32)
const transform233 = new Transform({
  position: new Vector3(55, 0, 0.4999955892562866),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6, 3, 1.5)
})
longIronStoneFenceModule7.addComponentOrReplace(transform233)

const longIronStoneFenceModule8 = new Entity('longIronStoneFenceModule8')
engine.addEntity(longIronStoneFenceModule8)
longIronStoneFenceModule8.setParent(_scene)
longIronStoneFenceModule8.addComponentOrReplace(gltfShape32)
const transform234 = new Transform({
  position: new Vector3(62, 0, 0.49999475479125977),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-5.940001487731934, 3, 1.4999996423721313)
})
longIronStoneFenceModule8.addComponentOrReplace(transform234)

const longIronStoneFenceModule9 = new Entity('longIronStoneFenceModule9')
engine.addEntity(longIronStoneFenceModule9)
longIronStoneFenceModule9.setParent(_scene)
longIronStoneFenceModule9.addComponentOrReplace(gltfShape32)
const transform235 = new Transform({
  position: new Vector3(79.50000762939453, 0, 1.4999909400939941),
  rotation: new Quaternion(1.5394153601527394e-15, 0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.000040531158447, 3, -1.5000101327896118)
})
longIronStoneFenceModule9.addComponentOrReplace(transform235)

const longIronStoneFenceModule10 = new Entity('longIronStoneFenceModule10')
engine.addEntity(longIronStoneFenceModule10)
longIronStoneFenceModule10.setParent(_scene)
longIronStoneFenceModule10.addComponentOrReplace(gltfShape32)
const transform236 = new Transform({
  position: new Vector3(79.50000762939453, 0, 19.999990463256836),
  rotation: new Quaternion(1.5394153601527394e-15, 0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.0000481605529785, 3, -1.5000120401382446)
})
longIronStoneFenceModule10.addComponentOrReplace(transform236)

const longIronStoneFenceModule11 = new Entity('longIronStoneFenceModule11')
engine.addEntity(longIronStoneFenceModule11)
longIronStoneFenceModule11.setParent(_scene)
longIronStoneFenceModule11.addComponentOrReplace(gltfShape32)
const transform237 = new Transform({
  position: new Vector3(79.50000762939453, 0, 46.99999237060547),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.000056743621826, 3, 1.5000141859054565)
})
longIronStoneFenceModule11.addComponentOrReplace(transform237)

const longIronStoneFenceModule12 = new Entity('longIronStoneFenceModule12')
engine.addEntity(longIronStoneFenceModule12)
longIronStoneFenceModule12.setParent(_scene)
longIronStoneFenceModule12.addComponentOrReplace(gltfShape32)
const transform238 = new Transform({
  position: new Vector3(79.50000762939453, 0, 72.49999237060547),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.500051975250244, 3, 1.5000184774398804)
})
longIronStoneFenceModule12.addComponentOrReplace(transform238)

const longIronStoneFenceModule13 = new Entity('longIronStoneFenceModule13')
engine.addEntity(longIronStoneFenceModule13)
longIronStoneFenceModule13.setParent(_scene)
longIronStoneFenceModule13.addComponentOrReplace(gltfShape32)
const transform239 = new Transform({
  position: new Vector3(79.5, 0, 53.49999237060547),
  rotation: new Quaternion(1.5394153601527394e-15, 0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.500051498413086, 3, -1.5000211000442505)
})
longIronStoneFenceModule13.addComponentOrReplace(transform239)

const longIronStoneFenceModule14 = new Entity('longIronStoneFenceModule14')
engine.addEntity(longIronStoneFenceModule14)
longIronStoneFenceModule14.setParent(_scene)
longIronStoneFenceModule14.addComponentOrReplace(gltfShape32)
const transform240 = new Transform({
  position: new Vector3(0.9999999403953552, 0, 95.49999237060547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-5.940001487731934, 3, 1.4999996423721313)
})
longIronStoneFenceModule14.addComponentOrReplace(transform240)

const longIronStoneFenceModule15 = new Entity('longIronStoneFenceModule15')
engine.addEntity(longIronStoneFenceModule15)
longIronStoneFenceModule15.setParent(_scene)
longIronStoneFenceModule15.addComponentOrReplace(gltfShape32)
const transform241 = new Transform({
  position: new Vector3(0.5000000596046448, 0, 20),
  rotation: new Quaternion(1.5394153601527394e-15, 0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.000040531158447, 3, -1.5000101327896118)
})
longIronStoneFenceModule15.addComponentOrReplace(transform241)

const greenTallSquaredTree2 = new Entity('greenTallSquaredTree2')
engine.addEntity(greenTallSquaredTree2)
greenTallSquaredTree2.setParent(_scene)
greenTallSquaredTree2.addComponentOrReplace(gltfShape30)
const transform242 = new Transform({
  position: new Vector3(67.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenTallSquaredTree2.addComponentOrReplace(transform242)

const greenTallSquaredTree3 = new Entity('greenTallSquaredTree3')
engine.addEntity(greenTallSquaredTree3)
greenTallSquaredTree3.setParent(_scene)
greenTallSquaredTree3.addComponentOrReplace(gltfShape30)
const transform243 = new Transform({
  position: new Vector3(3, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenTallSquaredTree3.addComponentOrReplace(transform243)

const bloomingGreenAcaciaTree6 = new Entity('bloomingGreenAcaciaTree6')
engine.addEntity(bloomingGreenAcaciaTree6)
bloomingGreenAcaciaTree6.setParent(_scene)
bloomingGreenAcaciaTree6.addComponentOrReplace(gltfShape23)
const transform244 = new Transform({
  position: new Vector3(5.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bloomingGreenAcaciaTree6.addComponentOrReplace(transform244)

const bush8 = new Entity('bush8')
engine.addEntity(bush8)
bush8.setParent(_scene)
bush8.addComponentOrReplace(gltfShape22)
const transform245 = new Transform({
  position: new Vector3(7, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush8.addComponentOrReplace(transform245)

const bloomingGreenAcaciaTree7 = new Entity('bloomingGreenAcaciaTree7')
engine.addEntity(bloomingGreenAcaciaTree7)
bloomingGreenAcaciaTree7.setParent(_scene)
bloomingGreenAcaciaTree7.addComponentOrReplace(gltfShape23)
const transform246 = new Transform({
  position: new Vector3(15, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bloomingGreenAcaciaTree7.addComponentOrReplace(transform246)

const greenTallSquaredTree4 = new Entity('greenTallSquaredTree4')
engine.addEntity(greenTallSquaredTree4)
greenTallSquaredTree4.setParent(_scene)
greenTallSquaredTree4.addComponentOrReplace(gltfShape30)
const transform247 = new Transform({
  position: new Vector3(6.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenTallSquaredTree4.addComponentOrReplace(transform247)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform248 = new Transform({
  position: new Vector3(17.25, 8.999999046325684, 21.75),
  rotation: new Quaternion(-6.218540557266321e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(3.0000319480895996, 3, 4.00002908706665)
})
nftPictureFrame13.addComponentOrReplace(transform248)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform249 = new Transform({
  position: new Vector3(17.25, 9, 26.75),
  rotation: new Quaternion(-6.218540557266321e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(3.0000319480895996, 3, 4.00002908706665)
})
nftPictureFrame14.addComponentOrReplace(transform249)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform250 = new Transform({
  position: new Vector3(17.25, 9.000000953674316, 31.25),
  rotation: new Quaternion(-6.218540557266321e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(3.0000319480895996, 3, 4.00002908706665)
})
nftPictureFrame15.addComponentOrReplace(transform250)

const galleryInfoBeige = new Entity('galleryInfoBeige')
engine.addEntity(galleryInfoBeige)
galleryInfoBeige.setParent(_scene)
const transform251 = new Transform({
  position: new Vector3(18, 0, 22.5),
  rotation: new Quaternion(-1.053671461193062e-8, 0.7071068286895752, -9.483041196745035e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
galleryInfoBeige.addComponentOrReplace(transform251)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform252 = new Transform({
  position: new Vector3(2, 5.5, 24),
  rotation: new Quaternion(2.369416115964091e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000018358230591, 3, 4.000015735626221)
})
nftPictureFrame16.addComponentOrReplace(transform252)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform253 = new Transform({
  position: new Vector3(2, 9, 29),
  rotation: new Quaternion(2.369416115964091e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.00002121925354, 3, 4.00001859664917)
})
nftPictureFrame17.addComponentOrReplace(transform253)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform254 = new Transform({
  position: new Vector3(2, 9, 33.5),
  rotation: new Quaternion(2.369416115964091e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.0000205039978027, 3, 4.00001859664917)
})
nftPictureFrame18.addComponentOrReplace(transform254)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform255 = new Transform({
  position: new Vector3(10, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
rainLight.addComponentOrReplace(transform255)

const funkyFloorLight = new Entity('funkyFloorLight')
engine.addEntity(funkyFloorLight)
funkyFloorLight.setParent(_scene)
const transform256 = new Transform({
  position: new Vector3(2.5, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight.addComponentOrReplace(transform256)

const blockFloorLight2 = new Entity('blockFloorLight2')
engine.addEntity(blockFloorLight2)
blockFloorLight2.setParent(_scene)
const transform257 = new Transform({
  position: new Vector3(13.5, 0, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight2.addComponentOrReplace(transform257)

const blockFloorLight3 = new Entity('blockFloorLight3')
engine.addEntity(blockFloorLight3)
blockFloorLight3.setParent(_scene)
const transform258 = new Transform({
  position: new Vector3(6, 0, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight3.addComponentOrReplace(transform258)

const blockFloorLight4 = new Entity('blockFloorLight4')
engine.addEntity(blockFloorLight4)
blockFloorLight4.setParent(_scene)
const transform259 = new Transform({
  position: new Vector3(6, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight4.addComponentOrReplace(transform259)

const blockFloorLight5 = new Entity('blockFloorLight5')
engine.addEntity(blockFloorLight5)
blockFloorLight5.setParent(_scene)
const transform260 = new Transform({
  position: new Vector3(13.5, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight5.addComponentOrReplace(transform260)

const couchTwoSeater = new Entity('couchTwoSeater')
engine.addEntity(couchTwoSeater)
couchTwoSeater.setParent(_scene)
const transform261 = new Transform({
  position: new Vector3(11, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
couchTwoSeater.addComponentOrReplace(transform261)
const gltfShape33 = new GLTFShape("c28761f2-759f-4b9a-b497-9dfcabf3aa3f/TwoSeater_Couch.glb")
gltfShape33.withCollisions = true
gltfShape33.isPointerBlocker = true
gltfShape33.visible = true
couchTwoSeater.addComponentOrReplace(gltfShape33)

const doorframeGlass = new Entity('doorframeGlass')
engine.addEntity(doorframeGlass)
doorframeGlass.setParent(_scene)
const transform262 = new Transform({
  position: new Vector3(17.5, 0, 22.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.5000033378601074, 1, 1.0000014305114746)
})
doorframeGlass.addComponentOrReplace(transform262)
const gltfShape34 = new GLTFShape("f38f0a83-881b-4080-abba-a6f7ffe671a4/GlassDoorframe.glb")
gltfShape34.withCollisions = true
gltfShape34.isPointerBlocker = true
gltfShape34.visible = true
doorframeGlass.addComponentOrReplace(gltfShape34)

const pillarGlow = new Entity('pillarGlow')
engine.addEntity(pillarGlow)
pillarGlow.setParent(_scene)
const transform263 = new Transform({
  position: new Vector3(18, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3, 1)
})
pillarGlow.addComponentOrReplace(transform263)
const gltfShape35 = new GLTFShape("52481f8f-e316-4c1f-8c96-9b059e5d0909/GlowPillar.glb")
gltfShape35.withCollisions = true
gltfShape35.isPointerBlocker = true
gltfShape35.visible = true
pillarGlow.addComponentOrReplace(gltfShape35)

const pillarGlow2 = new Entity('pillarGlow2')
engine.addEntity(pillarGlow2)
pillarGlow2.setParent(_scene)
pillarGlow2.addComponentOrReplace(gltfShape35)
const transform264 = new Transform({
  position: new Vector3(2, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3, 1)
})
pillarGlow2.addComponentOrReplace(transform264)

const pillarGlow3 = new Entity('pillarGlow3')
engine.addEntity(pillarGlow3)
pillarGlow3.setParent(_scene)
pillarGlow3.addComponentOrReplace(gltfShape35)
const transform265 = new Transform({
  position: new Vector3(2, 0, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3, 1)
})
pillarGlow3.addComponentOrReplace(transform265)

const pillarGlow4 = new Entity('pillarGlow4')
engine.addEntity(pillarGlow4)
pillarGlow4.setParent(_scene)
pillarGlow4.addComponentOrReplace(gltfShape35)
const transform266 = new Transform({
  position: new Vector3(18, 0, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3, 1)
})
pillarGlow4.addComponentOrReplace(transform266)

const blockFloorLight = new Entity('blockFloorLight')
engine.addEntity(blockFloorLight)
blockFloorLight.setParent(_scene)
const transform267 = new Transform({
  position: new Vector3(13.5, 4, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight.addComponentOrReplace(transform267)

const blockFloorLight6 = new Entity('blockFloorLight6')
engine.addEntity(blockFloorLight6)
blockFloorLight6.setParent(_scene)
const transform268 = new Transform({
  position: new Vector3(6, 4, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight6.addComponentOrReplace(transform268)

const blockFloorLight7 = new Entity('blockFloorLight7')
engine.addEntity(blockFloorLight7)
blockFloorLight7.setParent(_scene)
const transform269 = new Transform({
  position: new Vector3(13.5, 4, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight7.addComponentOrReplace(transform269)

const blockFloorLight8 = new Entity('blockFloorLight8')
engine.addEntity(blockFloorLight8)
blockFloorLight8.setParent(_scene)
const transform270 = new Transform({
  position: new Vector3(6, 4, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight8.addComponentOrReplace(transform270)

const blockFloorLight9 = new Entity('blockFloorLight9')
engine.addEntity(blockFloorLight9)
blockFloorLight9.setParent(_scene)
const transform271 = new Transform({
  position: new Vector3(13.5, 8, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight9.addComponentOrReplace(transform271)

const blockFloorLight10 = new Entity('blockFloorLight10')
engine.addEntity(blockFloorLight10)
blockFloorLight10.setParent(_scene)
const transform272 = new Transform({
  position: new Vector3(6, 8, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight10.addComponentOrReplace(transform272)

const blockFloorLight11 = new Entity('blockFloorLight11')
engine.addEntity(blockFloorLight11)
blockFloorLight11.setParent(_scene)
const transform273 = new Transform({
  position: new Vector3(13.5, 8, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight11.addComponentOrReplace(transform273)

const blockFloorLight12 = new Entity('blockFloorLight12')
engine.addEntity(blockFloorLight12)
blockFloorLight12.setParent(_scene)
const transform274 = new Transform({
  position: new Vector3(6, 8, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2.940000057220459, 1.5)
})
blockFloorLight12.addComponentOrReplace(transform274)

const couchTwoSeater2 = new Entity('couchTwoSeater2')
engine.addEntity(couchTwoSeater2)
couchTwoSeater2.setParent(_scene)
couchTwoSeater2.addComponentOrReplace(gltfShape33)
const transform275 = new Transform({
  position: new Vector3(8.5, 4, 21.5),
  rotation: new Quaternion(6.725456000759248e-15, -1, 1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
couchTwoSeater2.addComponentOrReplace(transform275)

const couchTwoSeater3 = new Entity('couchTwoSeater3')
engine.addEntity(couchTwoSeater3)
couchTwoSeater3.setParent(_scene)
couchTwoSeater3.addComponentOrReplace(gltfShape33)
const transform276 = new Transform({
  position: new Vector3(11, 8, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
couchTwoSeater3.addComponentOrReplace(transform276)

const floorNavy = new Entity('floorNavy')
engine.addEntity(floorNavy)
floorNavy.setParent(_scene)
const transform277 = new Transform({
  position: new Vector3(18, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 1, 5)
})
floorNavy.addComponentOrReplace(transform277)
const gltfShape36 = new GLTFShape("cedb85f7-6daf-432c-bad7-bf4250b71daa/NavyFloor.glb")
gltfShape36.withCollisions = true
gltfShape36.isPointerBlocker = true
gltfShape36.visible = true
floorNavy.addComponentOrReplace(gltfShape36)

const sofaRound = new Entity('sofaRound')
engine.addEntity(sofaRound)
sofaRound.setParent(_scene)
const transform278 = new Transform({
  position: new Vector3(11.5, 8, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 1, 0.4999999701976776)
})
sofaRound.addComponentOrReplace(transform278)
const gltfShape37 = new GLTFShape("601d4a92-7b10-420e-858b-8c6c2358f3c8/RoundSofa.glb")
gltfShape37.withCollisions = true
gltfShape37.isPointerBlocker = true
gltfShape37.visible = true
sofaRound.addComponentOrReplace(gltfShape37)

const antiqueWoodenBookcaseGame = new Entity('antiqueWoodenBookcaseGame')
engine.addEntity(antiqueWoodenBookcaseGame)
antiqueWoodenBookcaseGame.setParent(_scene)
const transform279 = new Transform({
  position: new Vector3(9.5, 0, 26),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1.5000009536743164, 0.75, 1.0000005960464478)
})
antiqueWoodenBookcaseGame.addComponentOrReplace(transform279)
const gltfShape38 = new GLTFShape("726abff0-57cd-4245-a320-3687a38de0ae/scene.gltf")
gltfShape38.withCollisions = true
gltfShape38.isPointerBlocker = true
gltfShape38.visible = true
antiqueWoodenBookcaseGame.addComponentOrReplace(gltfShape38)

const antiqueWoodenBookcaseGame2 = new Entity('antiqueWoodenBookcaseGame2')
engine.addEntity(antiqueWoodenBookcaseGame2)
antiqueWoodenBookcaseGame2.setParent(_scene)
antiqueWoodenBookcaseGame2.addComponentOrReplace(gltfShape38)
const transform280 = new Transform({
  position: new Vector3(9.5, 0, 32.5),
  rotation: new Quaternion(1.3047332756377992e-22, -2.2351741790771484e-8, 1.7824273551266326e-14, -1),
  scale: new Vector3(1.5000009536743164, 0.75, 1.0000005960464478)
})
antiqueWoodenBookcaseGame2.addComponentOrReplace(transform280)

const antiqueWoodenBookcaseGame3 = new Entity('antiqueWoodenBookcaseGame3')
engine.addEntity(antiqueWoodenBookcaseGame3)
antiqueWoodenBookcaseGame3.setParent(_scene)
antiqueWoodenBookcaseGame3.addComponentOrReplace(gltfShape38)
const transform281 = new Transform({
  position: new Vector3(9.5, 4, 26),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1.5000009536743164, 0.75, 1.0000005960464478)
})
antiqueWoodenBookcaseGame3.addComponentOrReplace(transform281)

const antiqueWoodenBookcaseGame4 = new Entity('antiqueWoodenBookcaseGame4')
engine.addEntity(antiqueWoodenBookcaseGame4)
antiqueWoodenBookcaseGame4.setParent(_scene)
antiqueWoodenBookcaseGame4.addComponentOrReplace(gltfShape38)
const transform282 = new Transform({
  position: new Vector3(13.5, 4, 22.5),
  rotation: new Quaternion(-4.490548981516936e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.5000015497207642, 0.75, 1.0000009536743164)
})
antiqueWoodenBookcaseGame4.addComponentOrReplace(transform282)

const antiqueWoodenBookcaseGame5 = new Entity('antiqueWoodenBookcaseGame5')
engine.addEntity(antiqueWoodenBookcaseGame5)
antiqueWoodenBookcaseGame5.setParent(_scene)
antiqueWoodenBookcaseGame5.addComponentOrReplace(gltfShape38)
const transform283 = new Transform({
  position: new Vector3(9.5, 4, 29.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1.5000009536743164, 0.75, 1.0000005960464478)
})
antiqueWoodenBookcaseGame5.addComponentOrReplace(transform283)

const antiqueWoodenBookcaseGame6 = new Entity('antiqueWoodenBookcaseGame6')
engine.addEntity(antiqueWoodenBookcaseGame6)
antiqueWoodenBookcaseGame6.setParent(_scene)
antiqueWoodenBookcaseGame6.addComponentOrReplace(gltfShape38)
const transform284 = new Transform({
  position: new Vector3(9.5, 4, 32.5),
  rotation: new Quaternion(0, -1.391715325723326e-21, -1.1674555162118246e-14, 1),
  scale: new Vector3(1.5000009536743164, 0.75, 1.0000005960464478)
})
antiqueWoodenBookcaseGame6.addComponentOrReplace(transform284)

const antiqueWoodenBookcaseGame8 = new Entity('antiqueWoodenBookcaseGame8')
engine.addEntity(antiqueWoodenBookcaseGame8)
antiqueWoodenBookcaseGame8.setParent(_scene)
antiqueWoodenBookcaseGame8.addComponentOrReplace(gltfShape38)
const transform285 = new Transform({
  position: new Vector3(13.5, 8, 22.5),
  rotation: new Quaternion(-4.490548981516936e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.5000020265579224, 0.75, 1.0000011920928955)
})
antiqueWoodenBookcaseGame8.addComponentOrReplace(transform285)

const antiqueWoodenBookcaseGame9 = new Entity('antiqueWoodenBookcaseGame9')
engine.addEntity(antiqueWoodenBookcaseGame9)
antiqueWoodenBookcaseGame9.setParent(_scene)
antiqueWoodenBookcaseGame9.addComponentOrReplace(gltfShape38)
const transform286 = new Transform({
  position: new Vector3(13.5, 8, 29.5),
  rotation: new Quaternion(-4.490548981516936e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.5000025033950806, 0.75, 1.0000014305114746)
})
antiqueWoodenBookcaseGame9.addComponentOrReplace(transform286)

const antiqueWoodenBookcaseGame10 = new Entity('antiqueWoodenBookcaseGame10')
engine.addEntity(antiqueWoodenBookcaseGame10)
antiqueWoodenBookcaseGame10.setParent(_scene)
antiqueWoodenBookcaseGame10.addComponentOrReplace(gltfShape38)
const transform287 = new Transform({
  position: new Vector3(5.5, 8, 29.5),
  rotation: new Quaternion(-1.0747231114760763e-14, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000039339065552, 0.75, 1.000002145767212)
})
antiqueWoodenBookcaseGame10.addComponentOrReplace(transform287)

const floorConcrete4 = new Entity('floorConcrete4')
engine.addEntity(floorConcrete4)
floorConcrete4.setParent(_scene)
floorConcrete4.addComponentOrReplace(gltfShape8)
const transform288 = new Transform({
  position: new Vector3(79.5, 0, 82),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.046285629272461, 1, 2.187497854232788)
})
floorConcrete4.addComponentOrReplace(transform288)

const floorConcrete5 = new Entity('floorConcrete5')
engine.addEntity(floorConcrete5)
floorConcrete5.setParent(_scene)
floorConcrete5.addComponentOrReplace(gltfShape8)
const transform289 = new Transform({
  position: new Vector3(40.5, 0, 82),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.046285629272461, 1, 2.187497854232788)
})
floorConcrete5.addComponentOrReplace(transform289)

const floorConcrete6 = new Entity('floorConcrete6')
engine.addEntity(floorConcrete6)
floorConcrete6.setParent(_scene)
floorConcrete6.addComponentOrReplace(gltfShape8)
const transform290 = new Transform({
  position: new Vector3(27.5, 0, 79.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(10.046284675598145, 1, 1.0937495231628418)
})
floorConcrete6.addComponentOrReplace(transform290)

const floorConcrete7 = new Entity('floorConcrete7')
engine.addEntity(floorConcrete7)
floorConcrete7.setParent(_scene)
floorConcrete7.addComponentOrReplace(gltfShape8)
const transform291 = new Transform({
  position: new Vector3(45.5, 0, 79.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(10.046284675598145, 1, 1.09375)
})
floorConcrete7.addComponentOrReplace(transform291)

const floorConcrete8 = new Entity('floorConcrete8')
engine.addEntity(floorConcrete8)
floorConcrete8.setParent(_scene)
floorConcrete8.addComponentOrReplace(gltfShape8)
const transform292 = new Transform({
  position: new Vector3(49.5, 0, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.5347137451171875, 1, 2.187497615814209)
})
floorConcrete8.addComponentOrReplace(transform292)

const floorConcrete9 = new Entity('floorConcrete9')
engine.addEntity(floorConcrete9)
floorConcrete9.setParent(_scene)
floorConcrete9.addComponentOrReplace(gltfShape8)
const transform293 = new Transform({
  position: new Vector3(79.5, 0, 52.5),
  rotation: new Quaternion(-2.177062080483132e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(7.534714221954346, 1, 1.0937501192092896)
})
floorConcrete9.addComponentOrReplace(transform293)

const windowBathroomTiles70 = new Entity('windowBathroomTiles70')
engine.addEntity(windowBathroomTiles70)
windowBathroomTiles70.setParent(_scene)
windowBathroomTiles70.addComponentOrReplace(gltfShape14)
const transform294 = new Transform({
  position: new Vector3(67, 5, 87.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1.25, 1)
})
windowBathroomTiles70.addComponentOrReplace(transform294)

const windowBathroomTiles71 = new Entity('windowBathroomTiles71')
engine.addEntity(windowBathroomTiles71)
windowBathroomTiles71.setParent(_scene)
windowBathroomTiles71.addComponentOrReplace(gltfShape14)
const transform295 = new Transform({
  position: new Vector3(72, 5, 87.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1.25, 1)
})
windowBathroomTiles71.addComponentOrReplace(transform295)

const windowBathroomTiles72 = new Entity('windowBathroomTiles72')
engine.addEntity(windowBathroomTiles72)
windowBathroomTiles72.setParent(_scene)
windowBathroomTiles72.addComponentOrReplace(gltfShape14)
const transform296 = new Transform({
  position: new Vector3(62, 5, 87.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1.25, 1)
})
windowBathroomTiles72.addComponentOrReplace(transform296)

const wallBathroomTiles7 = new Entity('wallBathroomTiles7')
engine.addEntity(wallBathroomTiles7)
wallBathroomTiles7.setParent(_scene)
wallBathroomTiles7.addComponentOrReplace(gltfShape10)
const transform297 = new Transform({
  position: new Vector3(56, 5, 94.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000002861022949, 4.651171684265137, 1.0000004768371582)
})
wallBathroomTiles7.addComponentOrReplace(transform297)

const floorConcrete10 = new Entity('floorConcrete10')
engine.addEntity(floorConcrete10)
floorConcrete10.setParent(_scene)
floorConcrete10.addComponentOrReplace(gltfShape8)
const transform298 = new Transform({
  position: new Vector3(19, 0, 42),
  rotation: new Quaternion(-2.9191580217262283e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.534721374511719, 1, 2.187499523162842)
})
floorConcrete10.addComponentOrReplace(transform298)

const floorConcrete11 = new Entity('floorConcrete11')
engine.addEntity(floorConcrete11)
floorConcrete11.setParent(_scene)
floorConcrete11.addComponentOrReplace(gltfShape8)
const transform299 = new Transform({
  position: new Vector3(58, 0, 18.5),
  rotation: new Quaternion(-2.177062080483132e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(7.534714221954346, 1, 1.640625238418579)
})
floorConcrete11.addComponentOrReplace(transform299)

const floorConcrete12 = new Entity('floorConcrete12')
engine.addEntity(floorConcrete12)
floorConcrete12.setParent(_scene)
floorConcrete12.addComponentOrReplace(gltfShape8)
const transform300 = new Transform({
  position: new Vector3(60.5, 0, 0),
  rotation: new Quaternion(-9.07150793048319e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(4.858957290649414, 1, 1.0136617422103882)
})
floorConcrete12.addComponentOrReplace(transform300)

const wallBrick20 = new Entity('wallBrick20')
engine.addEntity(wallBrick20)
wallBrick20.setParent(_scene)
wallBrick20.addComponentOrReplace(gltfShape2)
const transform301 = new Transform({
  position: new Vector3(33.5, 2.5, 66.75),
  rotation: new Quaternion(2.30425572421639e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(5.168015480041504, 3.375, 1.0000050067901611)
})
wallBrick20.addComponentOrReplace(transform301)

const wallBrick21 = new Entity('wallBrick21')
engine.addEntity(wallBrick21)
wallBrick21.setParent(_scene)
wallBrick21.addComponentOrReplace(gltfShape2)
const transform302 = new Transform({
  position: new Vector3(33.5, 2.5, 48.75),
  rotation: new Quaternion(2.30425572421639e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(5.168015480041504, 3.375, 1.0000050067901611)
})
wallBrick21.addComponentOrReplace(transform302)

const wallBrick22 = new Entity('wallBrick22')
engine.addEntity(wallBrick22)
wallBrick22.setParent(_scene)
wallBrick22.addComponentOrReplace(gltfShape2)
const transform303 = new Transform({
  position: new Vector3(44.5, 2, 50),
  rotation: new Quaternion(8.734782476038216e-15, 0.7071067690849304, -8.429369557916289e-8, 0.70710688829422),
  scale: new Vector3(7.752043724060059, 3.796875, 1.0000078678131104)
})
wallBrick22.addComponentOrReplace(transform303)

const njcuLogoCL2 = new Entity('njcuLogoCL2')
engine.addEntity(njcuLogoCL2)
njcuLogoCL2.setParent(_scene)
njcuLogoCL2.addComponentOrReplace(gltfShape25)
const transform304 = new Transform({
  position: new Vector3(47, 16, 33),
  rotation: new Quaternion(-7.450579175838357e-8, 1.4389833324912615e-7, 3.4915586866191006e-8, -1),
  scale: new Vector3(0.0365762822329998, 0.022148583084344864, 0.06875038146972656)
})
njcuLogoCL2.addComponentOrReplace(transform304)

const galleryInfoGreyGreen = new Entity('galleryInfoGreyGreen')
engine.addEntity(galleryInfoGreyGreen)
galleryInfoGreyGreen.setParent(_scene)
const transform305 = new Transform({
  position: new Vector3(40, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGreyGreen.addComponentOrReplace(transform305)

const galleryInfoGreyGreen2 = new Entity('galleryInfoGreyGreen2')
engine.addEntity(galleryInfoGreyGreen2)
galleryInfoGreyGreen2.setParent(_scene)
const transform306 = new Transform({
  position: new Vector3(20.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGreyGreen2.addComponentOrReplace(transform306)

const galleryInfoGreyGreen3 = new Entity('galleryInfoGreyGreen3')
engine.addEntity(galleryInfoGreyGreen3)
galleryInfoGreyGreen3.setParent(_scene)
const transform307 = new Transform({
  position: new Vector3(44, 0, 68.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGreyGreen3.addComponentOrReplace(transform307)

const galleryInfoGreyGreen4 = new Entity('galleryInfoGreyGreen4')
engine.addEntity(galleryInfoGreyGreen4)
galleryInfoGreyGreen4.setParent(_scene)
const transform308 = new Transform({
  position: new Vector3(26, 0, 68.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGreyGreen4.addComponentOrReplace(transform308)

const galleryInfoGreyGreen5 = new Entity('galleryInfoGreyGreen5')
engine.addEntity(galleryInfoGreyGreen5)
galleryInfoGreyGreen5.setParent(_scene)
const transform309 = new Transform({
  position: new Vector3(52.5, 0, 68.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGreyGreen5.addComponentOrReplace(transform309)

const galleryInfoGreyGreen6 = new Entity('galleryInfoGreyGreen6')
engine.addEntity(galleryInfoGreyGreen6)
galleryInfoGreyGreen6.setParent(_scene)
const transform310 = new Transform({
  position: new Vector3(38.5, 0, 82),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
galleryInfoGreyGreen6.addComponentOrReplace(transform310)

const galleryInfoGreyGreen7 = new Entity('galleryInfoGreyGreen7')
engine.addEntity(galleryInfoGreyGreen7)
galleryInfoGreyGreen7.setParent(_scene)
const transform311 = new Transform({
  position: new Vector3(50.5, 0, 86.5),
  rotation: new Quaternion(-2.177062080483132e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
galleryInfoGreyGreen7.addComponentOrReplace(transform311)

const galleryInfoGreyGreen8 = new Entity('galleryInfoGreyGreen8')
engine.addEntity(galleryInfoGreyGreen8)
galleryInfoGreyGreen8.setParent(_scene)
const transform312 = new Transform({
  position: new Vector3(59.5, 0, 82),
  rotation: new Quaternion(-2.177062080483132e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
galleryInfoGreyGreen8.addComponentOrReplace(transform312)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform313 = new Transform({
  position: new Vector3(2, 1.5, 33.5),
  rotation: new Quaternion(2.369416115964091e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.0000178813934326, 3, 4.000015735626221)
})
nftPictureFrame3.addComponentOrReplace(transform313)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform314 = new Transform({
  position: new Vector3(50, 0, 44),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(13.500141143798828, 13.5, 4.000030040740967)
})
nftPictureFrame19.addComponentOrReplace(transform314)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script1.spawn(verticalHallwayDoo, {"onOpen":[{"entityName":"verticalHallwayDoo","actionId":"toggle","values":{}}],"onClose":[]}, createChannel(channelId, verticalHallwayDoo, channelBus))
script2.spawn(nftPictureFrame, {"id":"64638094087640837550748819481124868105234376130250711584370591429207208755201","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true,"uiText":"nft"}, createChannel(channelId, nftPictureFrame, channelBus))
script2.spawn(nftPictureFrame2, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script2.spawn(nftPictureFrame4, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script2.spawn(nftPictureFrame5, {"id":"64638094087640837550748819481124868105234376130250711584370591429207208755201","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script2.spawn(nftPictureFrame6, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script3.spawn(galleryLight, {"startOn":true,"clickable":true}, createChannel(channelId, galleryLight, channelBus))
script2.spawn(nftPictureFrame7, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script2.spawn(nftPictureFrame8, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script2.spawn(nftPictureFrame9, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script2.spawn(nftPictureFrame10, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script2.spawn(nftPictureFrame11, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script2.spawn(nftPictureFrame12, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script4.spawn(instagramLink, {"url":"njcuniversity","bnw":false}, createChannel(channelId, instagramLink, channelBus))
script3.spawn(galleryLight2, {"startOn":true,"clickable":true}, createChannel(channelId, galleryLight2, channelBus))
script3.spawn(galleryLight3, {"startOn":true,"clickable":true}, createChannel(channelId, galleryLight3, channelBus))
script2.spawn(nftPictureFrame13, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script2.spawn(nftPictureFrame14, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script2.spawn(nftPictureFrame15, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script5.spawn(galleryInfoBeige, {"text":"Welcome to NJCU\nGallery/Library","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoBeige, channelBus))
script2.spawn(nftPictureFrame16, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script2.spawn(nftPictureFrame17, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script2.spawn(nftPictureFrame18, {"id":"82415033556124419301928696540717219209912883526282442821970322584650213490689","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script6.spawn(rainLight, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight, channelBus))
script7.spawn(funkyFloorLight, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight, channelBus))
script8.spawn(blockFloorLight2, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight2, channelBus))
script8.spawn(blockFloorLight3, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight3, channelBus))
script8.spawn(blockFloorLight4, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight4, channelBus))
script8.spawn(blockFloorLight5, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight5, channelBus))
script8.spawn(blockFloorLight, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight, channelBus))
script8.spawn(blockFloorLight6, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight6, channelBus))
script8.spawn(blockFloorLight7, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight7, channelBus))
script8.spawn(blockFloorLight8, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight8, channelBus))
script8.spawn(blockFloorLight9, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight9, channelBus))
script8.spawn(blockFloorLight10, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight10, channelBus))
script8.spawn(blockFloorLight11, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight11, channelBus))
script8.spawn(blockFloorLight12, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight12, channelBus))
script9.spawn(galleryInfoGreyGreen, {"text":"Hepburn Hall","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGreyGreen, channelBus))
script9.spawn(galleryInfoGreyGreen2, {"text":"Grossnickle Hall","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGreyGreen2, channelBus))
script9.spawn(galleryInfoGreyGreen3, {"text":"Rossey Hall","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGreyGreen3, channelBus))
script9.spawn(galleryInfoGreyGreen4, {"text":"Vodra Hall","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGreyGreen4, channelBus))
script9.spawn(galleryInfoGreyGreen5, {"text":"Karnoutsos Hall","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGreyGreen5, channelBus))
script9.spawn(galleryInfoGreyGreen6, {"text":"Professional Studies Building","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGreyGreen6, channelBus))
script9.spawn(galleryInfoGreyGreen7, {"text":"Science Building","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGreyGreen7, channelBus))
script9.spawn(galleryInfoGreyGreen8, {"text":"Student Union","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGreyGreen8, channelBus))
script2.spawn(nftPictureFrame3, {"id":"64638094087640837550748819481124868105234376130250711584370591429207208755201","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true,"uiText":"nft"}, createChannel(channelId, nftPictureFrame3, channelBus))
script2.spawn(nftPictureFrame19, {"id":"64638094087640837550748819481124868105234376130250711584370591430306720382977","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true,"uiText":"nft"}, createChannel(channelId, nftPictureFrame19, channelBus))