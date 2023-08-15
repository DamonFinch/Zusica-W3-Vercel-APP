import Image from "next/image"
import { useDeploy } from "../../providers/DeployContext"

const CoverArtUploadButton = () => {
  const { setCover, cubierta } = useDeploy()
  const src = cubierta && URL.createObjectURL(cubierta)
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setCover(file)
    }
  }

  return (
    <div>
      <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        <span>Elige una foto</span>
        <input type="file" accept="image/*, .gif" onChange={handleFileChange} className="hidden" />
      </label>
      {cubierta && <Image width={250} height={250} src={src} alt="cubierta" />}
    </div>
  )
}

export default CoverArtUploadButton
