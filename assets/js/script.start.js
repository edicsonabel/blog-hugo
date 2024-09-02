const lsTheme = 'theme'

function getThemeMode() {
  let theme = window.localStorage.getItem(lsTheme)
  if (theme) {
    return theme
  }

  // Check to see if Media-Queries are supported
  if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Dark
      return 'dark'
    } else {
      // Light
      return 'light'
    }
  } else {
    // Default (when Media-Queries are not supported)
    return 'light'
  }
}

function setThemeMode(theme = false) {
  if (!theme) {
    theme = getThemeMode()
  }
  if (['light', 'dark'].includes(theme)) {
    const $root = document.querySelector('html')
    $root.classList.add(theme)
    if (theme === 'dark') {
      $root.classList.remove('light')
    } else {
      $root.classList.remove('dark')
    }
    window.localStorage.setItem(lsTheme, theme)
  }
}

setThemeMode()
