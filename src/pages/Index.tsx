import { useState } from "react";
import PromptInput from "@/components/PromptInput";
import LearningModule from "@/components/LearningModule";

// This is mock data - replace with actual API response when backend is ready
const mockResponse = {
  modules: [
    {
      title: "Day 1 - Getting Started",
      subModules: [
        {
          title: "Module 1.1 - Introduction",
          content: "Basic concepts and setting up your development environment."
        },
        {
          title: "Module 1.2 - First Steps",
          content: "Writing your first program and understanding basic syntax."
        }
      ]
    },
    {
      title: "Day 2 - Core Concepts",
      subModules: [
        {
          title: "Module 2.1 - Variables",
          content: "Understanding variables, data types, and basic operations."
        },
        {
          title: "Module 2.2 - Control Flow",
          content: "Learning about if statements, loops, and basic program flow."
        }
      ]
    }
  ]
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<typeof mockResponse | null>(null);

  const handleSubmit = async (prompt: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResponse(mockResponse);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Learning Path Generator</h1>
        <p className="text-gray-600 text-center mb-8">
          Enter what you want to learn, and we'll create a personalized learning path for you
        </p>
        
        <PromptInput onSubmit={handleSubmit} isLoading={isLoading} />
        
        {isLoading && (
          <div className="text-center mt-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
          </div>
        )}
        
        {response && !isLoading && (
          <LearningModule modules={response.modules} />
        )}
      </div>
    </div>
  );
};

export default Index;