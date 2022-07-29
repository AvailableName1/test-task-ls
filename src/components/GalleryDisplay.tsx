/* eslint-disable react/jsx-indent */
/* eslint-disable @typescript-eslint/indent */
import { DisplayProps } from './Types';
import './GalleryDisplay.sass';

export default function GalleryDisplay(props: DisplayProps) {
  const { JSONdata, listURL } = props;
  return (
    <div className="gallery">
      {JSONdata != null && 'galleryImages' in JSONdata
        ? JSONdata!.galleryImages.map((each) => (
            <img
              className="gallery__img"
              src={each.url}
              alt=""
              style={{ aspectRatio: `${each.width} / ${each.height}` }}
            />
          ))
        : null}
      {listURL.length < 1
        ? null
        : listURL.map((each) => <img className="gallery__img" src={each} alt="" />)}
    </div>
  );
}
