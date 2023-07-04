import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewMoodValue("happy");
  };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue("confused");
  };

  const handleMoodChangeToSad = () => {
    queueRerenderWithNewMoodValue('sad');
  };

  const handleMoodChangeToCheeky = () => {
    queueRerenderWithNewMoodValue('cheeky');
  };

  const handleMoodChangeToSleepy = () => {
    queueRerenderWithNewMoodValue('sleppy');
  };

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToCheeky}>😛</button>
      <button onClick={handleMoodChangeToSleepy}>😪</button>
      <button onClick= {() => {queueRerenderWithNewMoodValue('worried')}}>😟</button>
    </>
  );
}

export default MoodPickerDemo;
