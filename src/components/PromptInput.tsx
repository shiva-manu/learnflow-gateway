import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
  isDisabled?: boolean;
}

const PromptInput = ({ onSubmit, isLoading, isDisabled }: PromptInputProps) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      <Textarea
        placeholder="Enter what you want to learn (e.g., 'I want to learn Python')"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="min-h-[100px] resize-none focus:ring-2 focus:ring-primary/20 transition-all"
        disabled={isDisabled}
      />
      <Button 
        type="submit" 
        className="w-full gap-2 bg-primary hover:bg-primary/90 transition-colors"
        disabled={isLoading || !prompt.trim() || isDisabled}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            Processing...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Generate Learning Path
          </>
        )}
      </Button>
    </form>
  );
};

export default PromptInput;