import { Button } from "../buttonGroup/button";
import ProgrammeCard from "./ProgrammeCard";

const SimilarProgrammes = () => {
    return (
        <div className="p-20 bg-[#EDF3F6]">
            <h1 className="text-4xl font-bold text-secondary mb-10">Other interesting programmes for you</h1>
            <div className="programmes-container grid grid-cols-4 gap-5 mb-16">
                <ProgrammeCard></ProgrammeCard>
            </div>
            <div className="flex justify-center">
                <Button>See other suggestions</Button>
            </div>
        </div>
    );
};

export default SimilarProgrammes;