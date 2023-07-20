

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="text-center my-4 md:w-4/12 mx-auto">
            <p className="text-yellow-600 mb-2">--- {subHeading}--- </p>
            <h3 className="text-3xl border-y-4 py-4 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;