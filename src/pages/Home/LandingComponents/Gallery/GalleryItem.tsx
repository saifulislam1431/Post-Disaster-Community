import { motion } from "framer-motion"
import { TGallery } from "@/types/gallery.type";

const GalleryItem = ({ item }: { item: TGallery }) => {
    return (
        <motion.div className="col-span-12 lg:col-span-4 h-72 relative hover:border hover:border-secondary cursor-pointer overflow-hidden"
            whileHover={{
                scale: 1.1,
                zIndex: 1,
                transition: {
                    duration: 0.5
                }
            }}
            whileTap={{
                scale: 1.1,
                zIndex: 1,
                transition: {
                    duration: 0.5
                }
            }}
        >
            <img src={item?.image} alt={item?.title} className="h-72 w-full" />

            <div className="absolute top-0 bg-secondary opacity-0 hover:opacity-80 h-full w-full p-3">
                <h1 className="brandFont text-2xl">{item?.title}</h1>
                <p className="text-lg font-medium mt-3">{item?.short_description}</p>
            </div>
        </motion.div>
    );
};

export default GalleryItem;