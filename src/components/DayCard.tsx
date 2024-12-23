import { DayModule } from "@/types/learning";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

interface DayCardProps {
  day: DayModule;
}

const DayCard = ({ day }: DayCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 cursor-pointer animate-fadeIn hover:scale-105 border-2 border-gray-100"
      onClick={() => navigate(`/day/${day.day}`)}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Calendar className="w-5 h-5" />
          Day {day.day}
        </CardTitle>
        <div className="mt-2">
          <h3 className="font-semibold text-lg text-gray-800">{day.title}</h3>
          <CardDescription className="mt-2 line-clamp-2">
            {day.description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default DayCard;