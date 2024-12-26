// app/events/layout.tsx
"use client";

import React, { ReactNode } from "react";

interface EventsLayoutProps {
  children: ReactNode;
}

const EventsLayout: React.FC<EventsLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 ">
      <main className="mt-[23]">{children}</main>
    </div>
  );
};

export default EventsLayout;
