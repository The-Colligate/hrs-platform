"use client";

import { ConfigProvider } from "antd";

export function Providers({ children }: { children: React.ReactNode }) {
  type ThemeData = {
    borderRadius: number;
    colorPrimary: string;
  };

  const customTheme: ThemeData = {
    borderRadius: 8,
    colorPrimary: "#283E55",
  };

  return (
    <ConfigProvider theme={{ token: { ...customTheme } }}>
      {children}
    </ConfigProvider>
  );
}
