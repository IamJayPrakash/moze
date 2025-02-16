"use client";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

// Group history items by date categories
function groupHistory(historyArray) {
  const grouped = {
    Today: [],
    Yesterday: [],
    "Past Week": [],
    "Past Month": [],
    Older: [],
  };

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const oneDay = 24 * 60 * 60 * 1000;

  historyArray.forEach((item) => {
    const ts = new Date(item.timestamp);
    const itemDate = new Date(ts.getFullYear(), ts.getMonth(), ts.getDate());
    const dayDiff = Math.floor((today - itemDate) / oneDay);
    if (dayDiff === 0) {
      grouped["Today"].push(item);
    } else if (dayDiff === 1) {
      grouped["Yesterday"].push(item);
    } else if (dayDiff < 7) {
      grouped["Past Week"].push(item);
    } else if (dayDiff < 30) {
      grouped["Past Month"].push(item);
    } else {
      grouped["Older"].push(item);
    }
  });
  return grouped;
}

export default function Player() {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [history, setHistory] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Today");
  const [videoError, setVideoError] = useState(false);
  const [playing, setPlaying] = useState(true);

  // Load history from localStorage on mount
  useEffect(() => {
    const storedHistory = localStorage.getItem("videoHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Save history whenever it changes
  useEffect(() => {
    localStorage.setItem("videoHistory", JSON.stringify(history));
  }, [history]);

  const handlePlay = () => {
    if (url) {
      setVideoUrl(url);
      setPlaying(true);
      setVideoError(false);
      // Add new history item with timestamp (unique entries only)
      setHistory((prev) => {
        const filtered = prev.filter((item) => item.url !== url);
        return [{ url, timestamp: new Date().toISOString() }, ...filtered];
      });
    }
  };

  const removeHistoryItem = (urlToRemove) => {
    setHistory(history.filter((item) => item.url !== urlToRemove));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const groupedHistory = groupHistory(history);
  const categories = Object.keys(groupedHistory).filter(
    (cat) => groupedHistory[cat].length > 0
  );

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-16 bottom-0 z-20 w-64 p-6 transform transition-transform duration-300
          bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border-r border-gray-300 dark:border-gray-700
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            History
          </h2>
          <button
            title="Clear all history"
            onClick={clearHistory}
            className="text-sm text-red-500 hover:underline"
          >
            Clear All
          </button>
        </div>
        {/* Category Tabs */}
        <div className="flex space-x-2 mb-4 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 whitespace-nowrap
              ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* History List */}
        <div className="space-y-3 overflow-y-auto max-h-[60vh]">
          {groupedHistory[selectedCategory] &&
          groupedHistory[selectedCategory].length > 0 ? (
            groupedHistory[selectedCategory].map((item, index) => (
              <div
                key={index}
                className="p-3 bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-md shadow hover:shadow-lg transition-all duration-200 flex justify-between items-center"
              >
                <button
                  onClick={() => {
                    setUrl(item.url);
                    setVideoUrl(item.url);
                    setVideoError(false);
                    setPlaying(true);
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-left break-all flex-1"
                >
                  {item.url}
                </button>
                <button
                  title="Remove from history"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeHistoryItem(item.url);
                  }}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No history available.
            </p>
          )}
        </div>
      </div>

      {/* Vertical Toggle Button with Clock Icon */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-1/2 transform -translate-y-1/2 z-30 bg-blue-600 text-white w-8 h-48 flex flex-col items-center justify-center rounded-r-lg hover:bg-blue-700 transition-all duration-300"
        style={{
          left: sidebarOpen ? "16rem" : "0",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          zIndex: 300,
        }}
      >
        <span className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{sidebarOpen ? "Hide History" : "Show History"}</span>
        </span>
      </button>

      {/* Main Content Area */}
      <div className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300">
        <div className="sticky top-16 pb-4 p-4 rounded-md bg-white dark:bg-gray-900 shadow">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Mozi YouTube Player
          </h1>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Enter YouTube URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlePlay();
                }
              }}
              className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <button
              onClick={handlePlay}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Play
            </button>
            {videoUrl && (
              <button
                onClick={() => setPlaying(!playing)}
                className="px-4 py-3 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-all duration-300"
              >
                {playing ? "Pause" : "Resume"}
              </button>
            )}
          </div>
        </div>
        {videoUrl && !videoError ? (
          <div className="mt-16">
            <ReactPlayer
              url={videoUrl}
              controls
              playing={playing}
              width="100%"
              height="500px"
              onError={() => setVideoError(true)}
              onReady={() => setVideoError(false)}
              className="mx-auto"
            />
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12">
            {videoError ? (
              <p className="text-xl text-red-500 font-bold">
                Video not playable 😢
              </p>
            ) : (
              <>
                <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
                  No video played yet!
                </p>
                <span className="text-6xl">🎬</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
