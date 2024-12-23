import { useState } from "react";
import PromptInput from "@/components/PromptInput";
import DayCard from "@/components/DayCard";
import { mockLearningPath } from "@/data/mockData";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (prompt: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
          Learning Path Generator
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Enter what you want to learn, and we'll create a personalized learning path for you
        </p>
        
        <PromptInput onSubmit={handleSubmit} isLoading={isLoading} />
        
        {isLoading && (
          <div className="text-center mt-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {mockLearningPath.map((day) => (
            <DayCard key={day.day} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;