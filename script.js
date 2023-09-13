// Javascipt tings

//Dark Mode
  const themeToggleBtn = document.querySelector('.theme-toggle');  // selectors
  const theme = localStorage.getItem('theme');  // state
  theme && document.body.classList.add(theme);  // on mount

  const handleThemeToggle = () => {  // handlers
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) 
      {localStorage.setItem('theme', 'dark-mode');} 
    else 
      {localStorage.removeItem('theme');}
  };

  themeToggleBtn.addEventListener('click', handleThemeToggle);  // events