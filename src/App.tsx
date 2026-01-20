import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import BottomNavigation from "@/components/BottomNavigation";
import { initializeCapacitor } from "@/lib/capacitor";
import Home from "./pages/Home";
import Books from "./pages/Books";
import QuizSetup from "./pages/QuizSetup";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import DailyChallenge from "./pages/DailyChallenge";
import Achievements from "./pages/Achievements";
import Leaderboard from "./pages/Leaderboard";
import Bookmarks from "./pages/Bookmarks";
import Flashcards from "./pages/Flashcards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Initialize Capacitor on mount
  useEffect(() => {
    initializeCapacitor();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="max-w-lg mx-auto min-h-screen bg-background relative overflow-x-hidden">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/quiz-setup/:bookId" element={<QuizSetup />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/results" element={<Results />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/daily-challenge" element={<DailyChallenge />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/flashcards" element={<Flashcards />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <BottomNavigation />
            </div>
          </BrowserRouter>
        </AppProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
