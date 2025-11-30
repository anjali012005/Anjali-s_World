import './Glimps.css'
import collage from '../../assets/collage-img.png'

const GlimpsCollage = () => {

  return (
    <div className="glimps-wrapper">
      <div className="collage">
        <img src={collage} className="box b1" alt="" />
      </div>

      <div className="right-content">
        <div className='right-side'>
          <div className='right-div'>
            <h1>How It All Started</h1>
            <p>
              A glimpse into my journey — from knowing nothing about tech to building things I never imagined. These moments represent growth, curiosity, and the steps that shaped who I am today.
            </p>
            <p className='second-parah'>
              Every picture you see here holds a story — late-night learning, countless errors, small wins, and breakthroughs that pushed me forward. This journey isn’t perfect, but it’s real, and it’s mine.
            </p>
          </div>
          <div className='right-div-button'>
            <button onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}>Know My Work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlimpsCollage;
