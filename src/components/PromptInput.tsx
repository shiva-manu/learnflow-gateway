import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const PromptInput = ({ onSubmit, isLoading }: PromptInputProps) => {
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
        className="min-h-[100px] resize-none"
      />
      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading || !prompt.trim()}
      >
        {isLoading ? "Processing..." : "Generate Learning Path"}
      </Button>
    </form>
  );
};

export default PromptInput;