const SectionHead = ({ title, description }: { title: string, description?: string }) => {
    return (
        <div className="text-center">
            <h1 className="brandFont text-3xl mb-3">{title}</h1>
            <p className="font-medium">{description}</p>
        </div>
    );
};

export default SectionHead;