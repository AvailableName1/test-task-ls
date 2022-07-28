import { HTMLInputTypeAttribute, Dispatch, SetStateAction } from 'react';

export interface GalleryImage {
  url: string;
  width: number;
  height: number;
}

export interface RootObject {
  galleryImages: GalleryImage[];
}

export interface DisplayProps {
  listURL: string[] | [];
  JSONdata: RootObject | null;
}

export interface InputFileProps {
  type: HTMLInputTypeAttribute;
  accept: string;
  id: string;
  labelText: string;
  className: string;
  setImagesJSON: Dispatch<SetStateAction<ImagesJSON>>;
}

export type URLImagesList = string[] | [];
export type ImagesJSON = RootObject | null;
