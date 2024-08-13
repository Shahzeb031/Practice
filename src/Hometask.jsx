import React, {useState} from 'react';
const TextAnalyzer = () => {
    const [text, setText] = useState('');
    const [analysis, setAnalysis] = useState({
      words: 0,
      paragraphs: 0,
      spaces: 0,
      commas: 0,
      fullStops: 0,
    });
  
    const analyzeText = () => {
      const trimmedText = text.trim();
      
      const words = trimmedText.split(/\s+/).filter(word => word).length;
      const paragraphs = trimmedText.split(/\n+/).filter(paragraph => paragraph).length;
      const spaces = (trimmedText.match(/ /g) || []).length;
      const commas = (trimmedText.match(/,/g) || []).length;
      const fullStops = (trimmedText.match(/\./g) || []).length;
  
      setAnalysis({ words, paragraphs, spaces, commas, fullStops });
    };
  
    return (
      <div>
        <textarea
          rows="10"
          cols="50"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your paragraph here"
        />
        <br />
        <br />
        <button className=" border border-blue-500 gap-2 rounded px-3 py-2 flex text-black-500" onClick={analyzeText}>Analyze Text</button>
        <br />
        <div>
          <p>Words: {analysis.words}</p>
          <p>Paragraphs: {analysis.paragraphs}</p>
          <p>Spaces: {analysis.spaces}</p>
          <p>Commas: {analysis.commas}</p>
          <p>Full Stops: {analysis.fullStops}</p>
        </div>
      </div>
    );
  };
  
  export default TextAnalyzer;