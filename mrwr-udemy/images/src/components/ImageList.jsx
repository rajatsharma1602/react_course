import ImageShow from "./ImageShow"

function ImageList({ images }) {
    return (<>
        {images.map(image => <ImageShow key={image.id} imageUrl={image.urls.small} alt={image.alt_description} />)}
    </>)
}
export default ImageList