import { useCallback, useMemo, useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState<number>(1);
  const [isShow, setIsShow] = useState<boolean>(true);

  const doubleCount = useMemo(() => {
    return count * 2
  }, [count]);

  const handleClick = useCallback(() => {
    // console.log(e.target.href)
    // e.preventDefault();
    if (count < 10){
      setCount((prev) => prev + 1)
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prev) => !prev)
  }, []);

  return {count, doubleCount, isShow, handleClick, handleDisplay};
}
