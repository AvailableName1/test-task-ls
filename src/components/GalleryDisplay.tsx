import { DisplayProps } from './Types';

export default function GalleryDisplay(props: DisplayProps) {
  const { JSONdata, listURL } = props;
  return (
    <div>
      {JSONdata != null && 'galleryImages' in JSONdata
        ? JSONdata.galleryImages.map((each) => <img src={each.url} alt="" />)
        : null}
      {listURL.length < 1 ? null : listURL.map((each) => <img src={each} alt="" />)}
    </div>
  );
}
