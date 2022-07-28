import React from 'react';
import './InputFile.sass';
import { InputFileProps } from './Types';

export default function InputFile(props: InputFileProps) {
  const { type, accept, id, labelText, className, setImagesJSON } = props;
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.currentTarget.files![0]);
    fileReader.addEventListener('load', () => {
      if (typeof fileReader.result === 'string') {
        setImagesJSON(JSON.parse(fileReader.result));
      }
    });
  };
  return (
    <label htmlFor={id} className={className}>
      {labelText}
      <input id={id} type={type} accept={accept} onChange={handleFile} />
    </label>
  );
}
