import './FabricLayer.css'

interface Props {
  index: number
}

export default function FabricLayer({ index }: Props) {
  return <div className={`fabric-layer fabric-layer--${index}`} />
}
