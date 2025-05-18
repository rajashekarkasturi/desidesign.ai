import { useState } from 'react';

export default function Generate() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('prompt', prompt);
    const res = await fetch('http://localhost:8000/api/generate/', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    setImage(data.image_url);
    setLoading(false);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Generate AI Poster or Logo</h1>
      <input
        type="text"
        placeholder="Describe your design..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
      {image && <img src={image} alt="Generated" className="mt-4 rounded" />}
    </div>
  );
}