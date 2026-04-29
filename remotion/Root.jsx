import { Composition, registerRoot } from 'remotion'
import NetworkTopologyComp from './NetworkTopologyComp'

function Root() {
  return (
    <Composition
      id="NetworkTopology"
      component={NetworkTopologyComp}
      durationInFrames={300}
      fps={30}
      width={1280}
      height={520}
    />
  )
}

registerRoot(Root)
