import { useParams } from "react-router-dom";
import LearningModule from "@/components/LearningModule";
import { mockLearningPath } from "@/data/mockData";

const DayDetails = () => {
  const { day } = useParams();
  const dayData = mockLearningPath.find(
    (module) => module.day === Number(day)
  );

  if (!dayData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Day not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">
          Day {dayData.day} - {dayData.title}
        </h1>
        <p className="text-gray-600 text-center mb-8">{dayData.description}</p>
        <LearningModule modules={dayData.modules} />
      </div>
    </div>
  );
};

export default DayDetails;