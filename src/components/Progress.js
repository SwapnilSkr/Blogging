import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';

export default function LinearDeterminate() {
  const [progress, setProgress] = useState(0);
    const {blogContentLoading} = useSelector(state => state.blog)
  useEffect(() => {
    if(blogContentLoading)
    {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 100;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }
    else setProgress(0)
  }, [blogContentLoading]);

  return (
      blogContentLoading && <LinearProgress className='w-full fixed -translate-y-4 top-0' variant="determinate" value={progress} />
  );
}