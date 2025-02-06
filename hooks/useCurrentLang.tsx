import { useEffect, useState } from 'react';

const useCurrentLang = () => {
    const [currentLang, setCurrentLang] = useState(process.env.NEXT_PUBLIC_DEFAULT_LANG || 'en');

  useEffect(() => {
    const storedLang = localStorage.getItem('next-export-i18n-lang');
    if (storedLang) {
      setCurrentLang(storedLang);
    }
  }, []);

  return currentLang;
};

export default useCurrentLang;
