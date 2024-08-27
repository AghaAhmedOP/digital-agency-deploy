"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, SettingsIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();
  const buttonIcon = (theme) => {
    if (theme === "system") {
      return <SettingsIcon />;
    } else if (theme === "light") {
      return <Sun />;
    } else if (theme === "dark") {
      return <Moon />;
    } else {
      return "Invalid";
    }
  };

  return (
    <div className="fixed bottom-10 right-10">
      <Button
        variant={"outline"}
        onClick={() => {
          if (theme === "system") {
            setTheme("light");
          } else if (theme === "light") {
            setTheme("dark");
          } else if (theme === "dark") {
            setTheme("light");
          }
        }}
      >
        {buttonIcon(theme)}
      </Button>
    </div>
  );
};

export default ToggleTheme;
