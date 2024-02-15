import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const {progress} = useProgress();
  console.log('progress', progress);

  return (
    <div>{progress} % loaded</div>
  )
}