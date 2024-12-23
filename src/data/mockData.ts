import { DayModule } from "@/types/learning";

export const mockLearningPath: DayModule[] = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  title: `Programming Fundamentals`,
  description: `Day ${i + 1} of your programming journey covers essential concepts and practical exercises.`,
  modules: [
    {
      title: `Morning Session`,
      subModules: [
        {
          title: "Theory",
          content: "Understanding core programming concepts and syntax."
        },
        {
          title: "Practice",
          content: "Hands-on coding exercises to reinforce learning."
        }
      ]
    },
    {
      title: `Afternoon Session`,
      subModules: [
        {
          title: "Project Work",
          content: "Building a small project using learned concepts."
        },
        {
          title: "Review",
          content: "Reviewing code and discussing improvements."
        }
      ]
    }
  ]
}));