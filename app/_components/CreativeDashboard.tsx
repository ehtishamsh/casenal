"use client";

import {
  Check,
  ChevronRight,
  Code,
  Zap,
  Settings,
  Maximize2,
  X,
  Copy,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function CreativeDashboard() {
  const [activeTab, setActiveTab] = useState("text");
  const [showNotification, setShowNotification] = useState(false);
  const [jsonInput, setJsonInput] = useState(
    `${
      activeTab === "text"
        ? " lorem ipsum dolor sit amet consectetur adipiscing elit "
        : '{"name": "John", "age": 30 }'
    }`
  );

  const [jsonOutput, setJsonOutput] = useState("");
  const [error, setError] = useState("");
  const [toolType, setToolType] = useState(false);
  useEffect(() => {
    setJsonInput(
      `${
        activeTab === "text"
          ? " lorem ipsum dolor sit amet consectetur adipiscing elit "
          : '{"name": "John", "age": 30 }'
      }`
    );
    setJsonOutput("");
    setError("");
    setShowNotification(false);
  }, [activeTab]);
  const handleBeautify = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed, null, 2));
      setShowNotification(true);
      setError("");
    } catch (err: any) {
      setError("Invalid JSON. Please correct and try again.");
      setShowNotification(false);
    }
  };

  const handleClear = () => {
    setJsonInput("");
    setJsonOutput("");
    setError("");
    setShowNotification(false);
  };

  const handleUppercase = () => {
    setJsonOutput(jsonInput.toUpperCase());
    setShowNotification(true);
    setError("");
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-20 relative">
      <div className="rounded-xl overflow-hidden shadow-2xl border border-blue-200 bg-white relative">
        <div className="bg-blue-300/80 backdrop-blur-sm p-3 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="mx-auto bg-blue-100/70 rounded-md px-4 py-1 w-1/3 text-center text-blue-500/70 text-sm">
            devtools.app
          </div>
          <div className="flex space-x-2">
            <button className="text-blue-500/70 hover:text-blue-600">
              <Maximize2 size={16} />
            </button>
            <button className="text-blue-500/70 hover:text-blue-600">
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-blue-50 to-white">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 text-white p-2 rounded-lg shadow-lg shadow-blue-200">
                <Zap size={18} />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Tools
              </h1>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-100 hover:bg-blue-200 transition-colors p-2 rounded-lg text-blue-500">
                <Settings size={20} />
              </button>
              <button className="bg-blue-100 hover:bg-blue-200 transition-colors p-2 rounded-lg text-blue-500">
                <Code size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              className={`py-2 px-4 rounded-xl text-sm text-center font-medium transition-all ${
                activeTab === "text"
                  ? "bg-blue-400 text-white shadow-lg shadow-blue-200"
                  : "bg-blue-100 text-blue-500 hover:bg-blue-200"
              }`}
              onClick={() => {
                setActiveTab("text");
                setToolType(false);
              }}
            >
              Text Tools
            </button>
            <button
              className={`py-2 px-4 rounded-xl text-sm text-center font-medium transition-all ${
                activeTab === "web"
                  ? "bg-blue-400 text-white shadow-lg shadow-blue-200"
                  : "bg-blue-100 text-blue-500 hover:bg-blue-200"
              }`}
              onClick={() => {
                setActiveTab("web");
                setToolType(true);
              }}
            >
              Web Tools
            </button>
          </div>

          {toolType ? (
            <div className="relative">
              <div className="border border-blue-100 rounded-2xl bg-white shadow-xl p-6 relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-400 text-white p-1.5 rounded-lg">
                      <Code size={16} />
                    </div>
                    <h2 className="font-semibold text-gray-700">
                      JSON Beautifier
                    </h2>
                  </div>
                  <div className="flex space-x-1">
                    <button
                      className="p-1 rounded bg-blue-50 text-blue-400 hover:bg-blue-100"
                      onClick={() => navigator.clipboard.writeText(jsonOutput)}
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    className="w-full bg-blue-50 border border-blue-100 rounded-xl p-3 text-sm outline-none resize-none h-24 text-gray-700"
                    placeholder="Paste your JSON here..."
                    spellCheck="false"
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </div>

                <div className="flex space-x-3 mb-4">
                  <button
                    className="flex-1 bg-blue-400 hover:bg-blue-500 text-white py-2 text-sm rounded-xl font-medium transition-colors flex items-center justify-center"
                    onClick={handleBeautify}
                  >
                    Beautify
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                  <button
                    className="px-3 py-2 text-sm border border-blue-200 rounded-xl text-blue-500 hover:bg-blue-50"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>

                {jsonOutput && (
                  <div className="border border-blue-100 rounded-xl p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                    <pre className="text-xs font-mono text-gray-700 whitespace-pre-wrap">
                      {jsonOutput}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="border border-blue-100 rounded-2xl bg-white shadow-xl p-6 relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-400 text-white p-1.5 rounded-lg">
                      <Code size={16} />
                    </div>
                    <h2 className="font-semibold text-gray-700">
                      Uppercase Text Converter
                    </h2>
                  </div>
                  <div className="flex space-x-1">
                    <button
                      className="p-1 rounded bg-blue-50 text-blue-400 hover:bg-blue-100"
                      onClick={() => navigator.clipboard.writeText(jsonOutput)}
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    className="w-full bg-blue-50 border border-blue-100 rounded-xl p-3 text-sm outline-none resize-none h-24 text-gray-700"
                    placeholder="Enter your text here..."
                    spellCheck="false"
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                  />
                </div>

                <div className="flex space-x-3 mb-4">
                  <button
                    className="flex-1 bg-blue-400 hover:bg-blue-500 text-white py-2 text-sm rounded-xl font-medium transition-colors flex items-center justify-center"
                    onClick={handleUppercase}
                  >
                    Convert
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                  <button
                    className="px-3 py-2 text-sm border border-blue-200 rounded-xl text-blue-500 hover:bg-blue-50"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>

                {jsonOutput && (
                  <div className="border border-blue-100 rounded-xl p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                    <pre className="text-xs font-mono text-gray-700 whitespace-pre-wrap">
                      {jsonOutput}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 text-white text-center text-sm mt-6">
            Access 20+ powerful tools to boost your productivity
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="absolute top-32 right-8 z-50 bg-white border border-green-100 rounded-xl p-4 shadow-lg w-64 animate-fade-in-right">
          <div className="flex items-start">
            <div className="bg-green-100 p-1 rounded-full text-green-500 mr-3">
              <Check size={16} />
            </div>
            <div>
              <h3 className="font-medium text-green-500">
                Operation Successful
              </h3>
              <p className="text-sm text-gray-500">
                Your content was processed successfully.
              </p>
            </div>
            <button
              className="ml-auto text-gray-400 hover:text-gray-600"
              onClick={() => setShowNotification(false)}
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
