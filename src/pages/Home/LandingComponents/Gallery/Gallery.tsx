import SectionHead from "@/components/SectionHead/SectionHead";
import { useGetAllGalleryQuery } from "@/redux/apis/publicApis";
import GalleryItem from "./GalleryItem";
import { TGallery } from "@/types/gallery.type";

const Gallery = () => {
    const { data } = useGetAllGalleryQuery(undefined)
    return (
        <section>
            <SectionHead title="Our Humanitarian Works" description="our impactful initiatives, from emergency relief to community healthcare. Join us in making a difference where it matters most." />

            <div className="grid grid-cols-12 mt-14 items-center justify-center">
                {
                    data?.map((items: TGallery) => <GalleryItem item={items} key={items?._id} />)
                }
            </div>
        </section>
    );
};

export default Gallery;