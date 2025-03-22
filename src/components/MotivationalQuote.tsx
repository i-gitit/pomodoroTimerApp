import { useEffect, useRef, useState } from "react";

const quoteAPI = "https://qapi.vercel.app/api/random";

type Quote = {
  id: number;
  quote: string;
  author: string;
};

const MotivationalQuote = () => {
  const intervalRef = useRef<any>(null)
  const [quote, setQuote] = useState<Quote | null>();

  const getQuote = async () => {
    const response = await fetch(quoteAPI);
    const result = await response.json();
    setQuote(result);
  }

  useEffect(()=>{
    intervalRef.current = setInterval(getQuote, 10000)
    getQuote();
    return ()=>{
      clearInterval(intervalRef.current)
    }
  }, []);

  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {quote?.quote}
    </blockquote>
  );
};

export default MotivationalQuote;
