import { DayModule } from "@/types/learning";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface DayCardProps {
  day: DayModule;
}

const DayCard = ({ day }: DayCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer animate-fadeIn"
      onClick={() => navigate(`/day/${day.day}`)}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Day {day.day} - {day.title}
        </CardTitle>
        <CardDescription>{day.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default DayCard;