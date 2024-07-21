import RSlogo from '../public/RSlogo.png';
import './App.css';
import Progress from 'react-circle-progress-bar';
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0); // Initial progress value
  const [showBulletPoints, setShowBulletPoints] = useState(false); // State to control bullet points visibility

  const onClick = () => {
    // Generate a random number between 0 and 100
    const randomProgress = Math.floor(Math.random() * 101);
    setProgress(randomProgress);
    setShowBulletPoints(true); // Show bullet points when button is pressed
  };

  const getBulletPoints = (progress: number): string[] => {
    if (progress >= 0 && progress <= 45) {
      return [
        "The device is very responsive and easy to connect.",
        "Some users have experienced issues with the device's voice pickup and response time.",
        "The device can be buggy and has limited time zone options.",
        "The screen is not as bright as expected, and the buttons on top are angled back, making them harder to use.",
        "Some users have experienced issues with the device's WiFi connection and streaming music from Apple Music."
      ];
    } else if (progress >= 46 && progress <= 74) {
      return [
        "The device is very responsive and easy to connect.",
        "The sound quality is great, and the camera slider is a nice feature.",
        "It's fun to use and can control various smart devices in the home.",
        "Some users have experienced issues with the device's voice pickup and response time.",
        "The device can be buggy and has limited time zone options.",
        "The screen is not as bright as expected, and the buttons on top are angled back, making them harder to use."
      ];
    } else if (progress >= 75 && progress <= 95) {
      return [
        "The device is very responsive and easy to connect.",
        "The sound quality is great, and the camera slider is a nice feature.",
        "It's fun to use and can control various smart devices in the home.",
        "The device is compact and has a nice design.",
        "Some users have experienced issues with the device's voice pickup and response time."
      ];
    } else if (progress >= 96 && progress <= 100) {
      return [
        "The device is very responsive and easy to connect.",
        "The sound quality is great, and the camera slider is a nice feature.",
        "It's fun to use and can control various smart devices in the home.",
        "The device is compact and has a nice design."
      ];
    }
    return [];
  };

  const bulletPoints = getBulletPoints(progress);

  return (
    <div className='background'>
      <div>
        <img src={RSlogo} className="logo" alt="RSlogo" />
      </div>

      <h1 className='title'>Turning Review Rants into Sense.</h1>

      <div className="card">
        <button onClick={onClick}>Check Product</button>
      </div>

      <div className='progress-wrapper'>
        <Progress
          progress={progress} // Use the state variable for progress
          strokeWidth={8}
          ballStrokeWidth={25}
          gradient={[
            { stop: 0.0, color: '#00ff00' }, // Red at 0%
            { stop: 0.5, color: '#ffff00' }, // Yellow at 50%
            { stop: 1.0, color: '#ff0000' }  // Green at 100%
          ]}
          hideValue={true} // Hide the default text in the progress bar
          style={{ width: '150px', height: '150px' }}
        />
        <div className='progress-text'>{progress}%</div>
      </div>

      {showBulletPoints && (
        <div className='bullet-points'>
          <h1>Main notes:</h1> {/* Heading for the bullet points */}
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
