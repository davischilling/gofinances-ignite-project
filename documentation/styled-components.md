* Chore

** install styled-components
- >> yarn add styled-components
** install styled-components types
- >> yarn add -D @types/styled-components-react-native

* Feat
- Reference to use <styled-components>:
    - `src/screens/Dashboard/styles.ts` (declare style)
    - `src/screens/Dashboard/index.tsx` (use style)
- Reference to use <global_styles> on the application:
    - `src/global/theme.ts` (implement global styles)
    - `src/global/styled.d.ts` (declare global style type)
    - `src/App.tsx` (provide global style)
    - `src/screens/Dashboard/styles.ts` (use global style)