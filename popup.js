document.addEventListener('DOMContentLoaded', function() {
  const clearButton = document.getElementById('clearButton');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  clearButton.addEventListener('click', async function() {
    try {
      // Get the current active tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      // Check if we're on Reddit
      if (!tab.url.includes('reddit.com')) {
        showError('Please navigate to Reddit first');
        return;
      }

      // Execute the localStorage removal on the current tab
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: clearRecentSubreddits
      });

      showSuccess();
    } catch (error) {
      console.error('Error clearing recent subreddits:', error);
      showError('Failed to clear recent subreddits');
    }
  });

  function clearRecentSubreddits() {
    localStorage.removeItem('recent-subreddits-store');
  }

  function showSuccess() {
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    clearButton.textContent = '✓ Cleared!';
    clearButton.style.background = '#28a745';
    
    setTimeout(() => {
      clearButton.textContent = 'Clear Recent Subreddits';
      clearButton.style.background = '#ff4500';
      successMessage.style.display = 'none';
    }, 2000);
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 3000);
  }
});