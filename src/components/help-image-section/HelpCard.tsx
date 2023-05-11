

const HelpCard = ({ data }: any) => {

    return (
        <div className="mx-auto w-56">
            <div>
                <div className="flex justify-center items-center">
                    <img src={data?.image} className="w-24 h-24" alt="" />
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-medium text-center">{data?.title}</h3>
            </div>
        </div>
    );
};

export default HelpCard;