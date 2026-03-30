"use client";

import { useState } from "react";
import { processSteps } from "@/data/process";

export default function ProcessTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = processSteps[activeIndex];

  return (
    <div className="rounded-3xl border border-near-black/10 overflow-hidden flex flex-col h-panel-process">
      {/* ── Tab bar ── */}
      <div className="flex border-b border-near-black/10" role="tablist" aria-label="Этапы работы">
        {processSteps.map((step, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={step.index}
              role="tab"
              aria-selected={isActive}
              aria-controls={`process-panel-${step.index}`}
              id={`process-tab-${step.index}`}
              data-testid={`process-tab-${step.index}`}
              data-ai-action={`select-process-step-${step.index}`}
              onClick={() => setActiveIndex(i)}
              className={`flex-1 flex items-center justify-between px-5 h-12 text-sm transition-colors duration-200 ${
                i < processSteps.length - 1 ? "border-r border-near-black/10" : ""
              } ${
                isActive
                  ? "bg-pricing text-near-black"
                  : "bg-transparent text-near-black/50 hover:text-near-black hover:bg-near-black/5"
              }`}
            >
              <span className="font-medium">{step.shortTitle}</span>
              <span
                className={`font-mono text-xs px-2 py-1 rounded-lg ${
                  isActive
                    ? "border border-near-black/20 text-near-black"
                    : "text-near-black/40"
                }`}
              >
                {step.index}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Tab panel ── */}
      <div
        role="tabpanel"
        id={`process-panel-${active.index}`}
        aria-labelledby={`process-tab-${active.index}`}
        className="flex-1 p-8 flex flex-col justify-between"
      >
        {/* Statement */}
        <p className="text-display text-near-black font-semibold whitespace-pre-line mt-auto">
          {active.statementBefore}
          <span className="text-accent">{active.statementAccent}</span>
        </p>

        {/* Bottom meta row */}
        <div className="flex items-end justify-between mt-8">
          <span className="text-xs text-near-black/40 font-mono">{active.label}</span>
          <span className="text-xs text-near-black/40 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-near-black/40 inline-block" aria-hidden="true" />
            {active.index} / {String(processSteps.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
