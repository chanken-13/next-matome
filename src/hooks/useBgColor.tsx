import { useRouter } from 'next/router';
import {useEffect, useMemo } from 'react'

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {

    switch (router.pathname) {
      case "/shimabu": {
        return "lightblue"
      }
      case "/shimabu/about": {
        return "beige"
      }
      default: {
        return ""
      }
    }
  }, [router.pathname])


  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = bgColor;

    // アンマウント時の処理(return)
    return () => {
      document.body.style.backgroundColor = ""
    };
  },[bgColor]);
}