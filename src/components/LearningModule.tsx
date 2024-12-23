import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SubModule {
  title: string;
  content: string;
}

interface Module {
  title: string;
  subModules: SubModule[];
}

interface LearningModuleProps {
  modules: Module[];
}

const LearningModule = ({ modules }: LearningModuleProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 space-y-4 animate-fadeIn">
      <Accordion type="single" collapsible className="w-full">
        {modules.map((module, index) => (
          <AccordionItem key={index} value={`module-${index}`}>
            <AccordionTrigger className="text-lg font-semibold">
              {module.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pl-4">
                {module.subModules.map((subModule, subIndex) => (
                  <div key={subIndex} className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium text-base mb-2">{subModule.title}</h4>
                    <p className="text-sm text-gray-600">{subModule.content}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default LearningModule;