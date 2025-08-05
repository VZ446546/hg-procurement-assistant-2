import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Sparkles } from 'lucide-react';

export default function ProcurementAssistant() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = async () => {
    const mockResponse = `🔎 Searching for: "${query}"

✅ Found 3 suppliers with quotes for Brook House fire doors:
- ABC Joinery (£4,200, 2-week lead time)
- TimberTech Ltd (£4,050, 3-week lead time)
- DoorsDirect (£3,980, 4-week lead time)

📄 PO draft created with best value supplier.`;
    setResponse(mockResponse);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Sparkles className="text-teal-500" /> HG Offsite Procurement Assistant
      </h1>
      <Card>
        <CardContent className="p-4 space-y-4">
          <Input
            placeholder="Ask me anything about your procurement data..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleAsk}>Ask</Button>
          {response && (
            <div className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md">
              {response}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}