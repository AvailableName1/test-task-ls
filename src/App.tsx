import './App.sass';
import React, { useCallback, useState } from 'react';
import InputFile from './components/InputFile';
import GalleryDisplay from './components/GalleryDisplay';
import { URLImagesList, ImagesJSON } from './components/Types';

export default function App() {
  const [images, setImages] = useState<URLImagesList>([]);
  const [imagesJSON, setImagesJSON] = useState<ImagesJSON>(null);
  const [value, setValue] = useState('');
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
    [],
  );
  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      setImages((prevImages) => [...prevImages, value]);
      setValue('');
    },
    [value],
  );
  return (
    <div className="App">
      <div className="header">
        <InputFile
          className="input-file"
          labelText="Upload json"
          id="file-input"
          type="file"
          accept=".json"
          setImagesJSON={setImagesJSON}
        />
        <form id="get-image-by-url" onSubmit={handleSubmit}>
          <input
            className="input-url"
            id="input-url"
            type="url"
            value={value}
            onChange={handleChange}
          />
          <button form="get-image-by-url" type="submit">
            Add
          </button>
        </form>
      </div>
      <GalleryDisplay JSONdata={imagesJSON} listURL={images} />
    </div>
  );
}
