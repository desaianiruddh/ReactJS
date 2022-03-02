import {useEffect, useRef} from 'react'

const useRenderCounter = (count) => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
    document.title=`Render Counter: (${renderCount.current})`;
  },[count])
}

export default useRenderCounter;