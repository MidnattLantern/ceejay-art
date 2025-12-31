import './App.css'
import PreviewSideCroppedAlt from "./assets/preview/preview-side-cropped-alt.webp";
import PreviewSideCroppedNoPaint from "./assets/preview/preview-side-cropped-no-paint.webp";
import PreviewSideCropped from "./assets/preview/preview-side-cropped.webp";
import PreviewSideLosslessAlt from "./assets/preview/preview-side-lossless-alt.webp";
import PreviewSideLosslessNoPaint from "./assets/preview/preview-side-lossless-no-paint.webp";
import PreviewSideLossless from "./assets/preview/preview-side-lossless.webp";
import PreviewUpsideCroppedNoPaint from "./assets/preview/preview-upside-cropped-no-paint.webp";
import PreviewUpsideCropped from "./assets/preview/preview-upside-cropped.webp";
import PreviewUpsideLosslessNoPaint from "./assets/preview/preview-upside-lossless-no-paint.webp";
import PreviewUpsideLossless from "./assets/preview/preview-upside-lossless.webp";
import SideCroppedAlt from "./assets/downloadable/side-cropped-alt.png";
import SideCroppedNoPaint from "./assets/downloadable/side-cropped-no-paint.png";
import SideCropped from "./assets/downloadable/side-cropped.png";
import SideLosslessAlt from "./assets/downloadable/side-lossless-alt.png";
import SideLosslessNoPaint from "./assets/downloadable/side-lossless-no-paint.png";
import SideLossless from "./assets/downloadable/side-lossless.png";
import UpsideCropped from "./assets/downloadable/upside-cropped.png";
import UpsideLosslessNoPaint from "./assets/downloadable/upside-lossless-no-paint.png";
import UpsideLossless from "./assets/downloadable/upside-lossless.png";
import UpsideCroppedNoPaint from "./assets/downloadable/upside-cropped-no-paint.png";

function App() {

  return (
    <>
      <h1>CeeJay Avatar</h1>
      <p>Illustrated by Midnatt Lantern</p>
      <div className="Gallery">
        <div className="Image">
          <img src={PreviewSideCroppedAlt} alt="Side Cropped Alternative" width={2000} height={2000}/>
          <h2><span>Side Cropped</span><span>Alternative</span></h2>
          <a href={SideCroppedAlt} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewSideCroppedNoPaint} alt="Side Cropped No Paint" width={2000} height={2000}/>
          <h2><span>Side Cropped</span><span>No Paint</span></h2>
          <a href={SideCroppedNoPaint} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewSideCropped} alt="Side Cropped" width={2000} height={2000}/>
          <h2><span>Side Cropped</span></h2>
          <a href={SideCropped} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewSideLosslessAlt} alt="Side Lossless Alternative" width={2000} height={2000}/>
          <h2><span>Side Lossless</span><span>Alternative</span></h2>
          <a href={SideLosslessAlt} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewSideLosslessNoPaint} alt="Side Lossless No Paint" width={2000} height={2000}/>
          <h2><span>Side Lossless</span><span>No Paint</span></h2>
          <a href={SideLosslessNoPaint} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewSideLossless} alt="Side Lossless" width={2000} height={2000}/>
          <h2><span>Side Lossless</span></h2>
          <a href={SideLossless} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewUpsideCroppedNoPaint} alt="Upside Cropped No Paint" width={621} height={621}/>
          <h2><span>Upside Cropped</span><span>No Paint</span></h2>
          <a href={UpsideCroppedNoPaint} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewUpsideCropped} alt="Upside Cropped" width={621} height={621}/>
          <h2><span>Upside Cropped</span></h2>
          <a href={UpsideCropped} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewUpsideLosslessNoPaint} alt="Upside Lossless No Paint" width={2500} height={2000}/>
          <h2><span>Upside Lossless</span><span>No Paint</span></h2>
          <a href={UpsideLosslessNoPaint} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewUpsideLossless} alt="Upside Lossless" width={2500} height={2000}/>
          <h2><span>Upside Lossless</span></h2>
          <a href={UpsideLossless} download type="image/png">Download</a>
        </div>
      </div>
    </>
  )
}

export default App
