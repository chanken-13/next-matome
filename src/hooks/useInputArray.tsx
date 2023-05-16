import { useCallback, useState } from 'react'

export const useInputArray = () => {
  const [text, setText] = useState<string>("");
  const [array, setArray] = useState<string[]>([]);

  const handleChange = useCallback((e: any) => {
    if (e.target.value.length > 5) {
      alert("xxx")
      return;
    }
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prev) => {
      // if (prev.some(item => item === text)){
      if (prev.includes(text)){
        alert("同じ要素が既に存在します")
        return prev
      }
      return [...prev, text]
    });
  }, [text]);

  return {text, array, handleChange, handleAdd};
}