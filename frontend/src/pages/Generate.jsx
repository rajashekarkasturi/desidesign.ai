import React, { useState } from 'react';
const Generate = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const generateImage = async () => {
    const res = await fetch('http://localhost:8000/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setImage(data.url);
  };
  return (
    <div className="p-4">
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Describe your logo or poster..." className="border p-2 w-full" />
      <button onClick={generateImage} className="mt-2 bg-blue-500 text-white px-4 py-2">Generate</button>
      {image && <img src={image} alt="Generated" className="mt-4 w-full max-w-md" />}
    </div>
  );
};
export default Generate;