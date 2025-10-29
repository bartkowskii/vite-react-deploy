// src/components/FullScreenNotification.tsx
import { useState, useEffect } from "react";

export default function FullScreenNotification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Pokazuj tylko raz (dopóki użytkownik nie zamknie)
    const hasSeen = localStorage.getItem("hasSeenNotification");
    if (!hasSeen) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("hasSeenNotification", "true");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-white text-center rounded-2xl p-8 max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Hej! 👋</h2>
        <p className="mb-6">
          Witamy na stronie!  
          Zapadam w sen zimowy od listopada do marca :) 
          Przez ten czas nie realizuję zleceń w tygodniu (tylko soboty).
          Do zobaczenia :)

        </p>
        <button
          onClick={handleClose}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
}
