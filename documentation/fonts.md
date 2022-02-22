** Install fonts with expo
- >> expo install expo-font @expo-google-fonts/<font_name>

** install expo splash library to hold the splash screen while the fonts are being loaded
- >> expo install expo-app-loading

* Feat
- Reference to use <fonts>:
    - `src/App.tsx` (import and provide the font to the project)
    - `src/global/theme.ts` (declare fonts for global usage)