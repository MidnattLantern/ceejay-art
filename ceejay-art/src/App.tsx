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
          <img src={PreviewSideCroppedAlt} alt="Side Cropped Alternative"/>
          <h2>Side Cropped Alt</h2>
          <a href={SideCroppedAlt} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewSideCroppedNoPaint} />
          <h2>Side Cropped No Paint</h2>
          <a href={SideCroppedNoPaint} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewSideCropped} />
          <h2>Side Cropped</h2>
          <a href={SideCropped} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewSideLosslessAlt} />
          <h2>Side Losless Alt</h2>
          <a href={SideLosslessAlt} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewSideLosslessNoPaint} />
          <h2>Side Lossless No Paint</h2>
          <a href={SideLosslessNoPaint} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewSideLossless} />
          <h2>Side Lossless</h2>
          <a href={SideLossless} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewUpsideCroppedNoPaint} />
          <h2>Upside Cropped No Paint</h2>
          <a href={UpsideCroppedNoPaint} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewUpsideCropped} />
          <h2>Upside Cropped</h2>
          <a href={UpsideCropped} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewUpsideLosslessNoPaint} />
          <h2>Upside Lossless No Paint</h2>
          <a href={UpsideLosslessNoPaint} download type="image/png">Download</a>
        </div>
        <div className="Image">
          <img src={PreviewUpsideLossless} />
          <h2>Upside Lossless</h2>
          <a href={UpsideLossless} download type="image/png">Download</a>
        </div>
      </div>
    </>
  )
}

export default App
