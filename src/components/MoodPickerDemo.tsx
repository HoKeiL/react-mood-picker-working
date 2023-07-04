import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    const nextMood = "happy";
    queueRerenderWithNewMoodValue(nextMood);
  };

  const handleMoodChangeToConfused = () => {
    const nextMood = "confused";
    queueRerenderWithNewMoodValue(nextMood);
  };

  const handleMoodChangeToSad = () => {
    const nextMood = "sad";
    queueRerenderWithNewMoodValue(nextMood);
  };
  
  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
    </>
  );
}

export default MoodPickerDemo;
