import MoreHelpCard from "./MoreHelpCard";


const MoreHelpSection = () => {
    const infoData = [
        {
            _id: "info001",
            image: "https://studyportals.com/wp-content/uploads/2015/06/Scholarship-01.png",
            title: "Find scholarships",
            body: "Over 1,000 scholarships and grants to finance the study of your dreams.",
            btnContent: "Search Scholarships"
        },
        {
            _id: "info002",
            image: "https://studyportals.com/wp-content/uploads/2015/06/stexx-01.png",
            title: "Write a review",
            body: "Your opinion can have an impact on fellow students who want to study abroad.",
            btnContent: "Review your University"
        },
        {
            _id: "info003",
            image: "https://studyportals.com/wp-content/uploads/2015/06/Gift-01.png",
            title: "Get your enrolment gift",
            body: "Found your programme via Studyportals? Tell us where you started studying and get a gift!",
            btnContent: "Get your Gift"
        }
    ]
    return (
        <section className="py-8 md:py-12">
            <div className="py-4 md:py-6" >
                <h2 className="text-2xl md:text-5xl text-center font-semibold">How can Studyportals help you even more?</h2>
            </div>
           <div className="flex justify-center">
           <div className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-3 mx-2 md:mx-4">
                {
                    infoData.map(data => {
                        return <MoreHelpCard
                            key={data?._id}
                            data={data}>
                        </MoreHelpCard>
                    })
                }
            </div>
           </div>
        </section>
    );
};

export default MoreHelpSection;