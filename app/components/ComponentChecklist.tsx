"use client";

import { useState, useMemo } from "react";

const hardwareItems = [
  {
    id: "board",
    name: "Arduino Microcontroller",
    description: "The central brain processing the sensor logic.",
    used: "Arduino Uno",
  },
  {
    id: "temp",
    name: "Temperature Sensor",
    description: "Detects room warmth to trigger the fan.",
    used: "DHT11",
  },
  {
    id: "light",
    name: "Photoresistor (LDR)",
    description: "Detects ambient light levels to control LEDs and curtains.",
    used: "GL5528",
  },
  {
    id: "servo",
    name: "Servo Motor",
    description: "The actuator used to physically open and close the curtains.",
    used: "SG90",
  },
  {
    id: "fan",
    name: "Small DC Motor / Fan",
    description: "Provides the cooling action when the temperature spikes.",
    used: "5V DC Fan",
  },
  {
    id: "led",
    name: "LEDs",
    description: "For the visual light output.",
    used: "Standard 5mm green LED",
  },
  {
    id: "wires",
    name: "Breadboard & Jumper Wires",
    description: "Essential for prototyping the circuit without soldering.",
    used: "Breadboard and Jumper Wires",
  },
];

export default function ComponentChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  // 1. Sort the items: unchecked items first, checked items last.
  // We use useMemo so it only recalculates when checkedItems changes.
  const sortedItems = useMemo(() => {
    return [...hardwareItems].sort((a, b) => {
      const aChecked = checkedItems.has(a.id);
      const bChecked = checkedItems.has(b.id);

      if (aChecked && !bChecked) return 1; // Move 'a' down if it is checked
      if (!aChecked && bChecked) return -1; // Move 'a' up if it is unchecked and 'b' is checked
      return 0; // Keep original order if both share the same state
    });
  }, [checkedItems]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-[#07333b]">
          Build it yourself
        </h2>
        <p className="text-base text-[#265a60]">
          Check off the components you already have to see what you need for the
          prototype.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {/* 2. Map over sortedItems instead of the static hardwareItems */}
        {sortedItems.map((item) => {
          const isChecked = checkedItems.has(item.id);
          return (
            <label
              key={item.id}
              className={`group flex cursor-pointer items-start gap-4 rounded-[1.25rem] border p-4 transition-all duration-300 ${
                isChecked
                  ? "border-[#0f7f84]/40 bg-[#effffd] shadow-sm"
                  : "border-[#0f7f84]/15 bg-white hover:border-[#0f7f84]/30 hover:bg-gray-50"
              }`}>
              <div className="relative mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-[0.4rem] border-2 border-[#0f7f84]/30 bg-white transition-colors checked:border-[#0b7f86] checked:bg-[#0b7f86]"
                  checked={isChecked}
                  onChange={() => toggleItem(item.id)}
                />
                <svg
                  className={`pointer-events-none absolute h-3 w-3 text-white transition-opacity duration-200 ${
                    isChecked ? "opacity-100" : "opacity-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className={`font-display text-lg transition-colors duration-200 ${
                    isChecked
                      ? "text-[#0b7f86] line-through decoration-[#0b7f86]/40"
                      : "text-[#07333b]"
                  }`}>
                  {item.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#265a60]">
                  {item.description}
                </p>
                <p className="mt-1 text-xs italic text-[#0f7f84]">
                  We used: {item.used}
                </p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
