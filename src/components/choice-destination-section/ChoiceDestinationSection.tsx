import DestinationCard from "./DestinationCard";


const ChoiceDestinationSection = () => {

    const destinationData: any = [
        {
            _id: "destination001",
            image: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2023/01/Frame-10750.svg",
            title: "Study In Canada"
        },
        {
            _id: "destination002",
            image: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2023/01/Frame-10749.svg",
            title: "Study In the UK"
        },
        {
            _id: "destination003",
            image: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2023/01/Frame-10749-1.svg",
            title: "Study In the USA"
        },
        {
            _id: "destination004",
            image: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2023/01/Frame-10749-2.svg",
            title: "Study In Australia"
        },
        {
            _id: "destination005",
            image: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2023/01/Frame-10749-3.svg",
            title: "Study In Ireland"
        }
    ]





    return (
        <section className="py-8 md:pt-12 px-6 md:px-10">
            <div className="pt-8 md:pt-10 pb-4 md:pb-6">
                <h1 className="text-2xl md:text-5xl text-center font-bold">Choose Your Study Abroad Destination</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 py-6 md:py-10">

                {
                    destinationData.map((country: any) => <DestinationCard
                        key={country?._id}
                        data={country}></DestinationCard>
                    )
                }


            </div>
        </section>
    );
};

export default ChoiceDestinationSection;