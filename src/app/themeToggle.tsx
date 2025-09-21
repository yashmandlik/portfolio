"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiSun, HiMoon } from 'react-icons/hi2';

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        null
    )

    if (resolvedTheme === 'dark') {
        return <HiSun onClick={() => setTheme('light')} />
    }

    if (resolvedTheme === 'light') {
        return <HiMoon onClick={() => setTheme('dark')} />
    }
}