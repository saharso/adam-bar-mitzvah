import Masonry from "@mui/lab/Masonry";

export default function Gallery(props: {images: string[], columns?: number}){
    const {images, columns = 5} = props;
    return <div className={"h-full"}>
        <Masonry columns={columns}>
            {images.map((url)=><img key={url} src={url}/>)}
        </Masonry>
    </div>
}