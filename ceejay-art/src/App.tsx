import './App.css'
import PreviewSideCroppedAlt from "./assets/preview/preview-side-cropped-alt.webp";
import PreviewSideCroppedNoPaint from "./assets/preview/preview-side-cropped-no-paint.webp";
import PreviewSideCropped from "./assets/preview/preview-side-cropped.webp";
import PreviewSideLoslessAlt from "./assets/preview/preview-side-lossless-alt.webp";
import PreviewSideLosslessNoPaint from "./assets/preview/preview-side-lossless-no-paint.webp";
import PreviewSideLossless from "./assets/preview/preview-side-lossless.webp";
import PreviewUpsideCroppedNoPaint from "./assets/preview/preview-upside-cropped-no-paint.webp";
import PreviewUpsideCropped from "./assets/preview/preview-upside-cropped.webp";
import PreviewUpsideLosslessNoPaint from "./assets/preview/preview-upside-lossless-no-paint.webp";
import PreviewUpsideLossless from "./assets/preview/preview-upside-lossless.webp";

function App() {

  return (
    <>
      <h1>CeeJay Avatar</h1>
      <p>Illustrated by Midnatt Lantern</p>
      <div className="Gallery">
        <img src={PreviewSideCroppedAlt} className="Image"/>
        <img src={PreviewSideCroppedNoPaint} className="Image"/>
        <img src={PreviewSideCropped} className="Image"/>
        <img src={PreviewSideLoslessAlt} className="Image"/>
        <img src={PreviewSideLosslessNoPaint} className="Image"/>
        <img src={PreviewSideLossless} className="Image"/>
        <img src={PreviewUpsideCroppedNoPaint} className="Image"/>
        <img src={PreviewUpsideCropped} className="Image"/>
        <img src={PreviewUpsideLosslessNoPaint} className="Image"/>
        <img src={PreviewUpsideLossless} className="Image"/>
      </div>
    </>
  )
}

export default App
