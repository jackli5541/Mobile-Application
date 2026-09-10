# Repository Guidelines

## Project Structure & Module Organization

This project is a Vue 3 frontend. Keep application code under `src/`: route-level components in `src/views/`, reusable UI in `src/components/`, composables in `src/composables/`, state stores in `src/stores/`, and API clients in `src/services/`. Store bundled assets in `src/assets/` and files copied unchanged in `public/`. Place tests beside their source or under `tests/`, following the same feature structure. Keep generated `dist/` and coverage output out of version control.

## Build, Test, and Development Commands

Use the scripts defined in `package.json`; the expected Vue/Vite command set is:

- `npm install` installs dependencies from the lockfile.
- `npm run dev` starts the Vite development server.
- `npm run build` type-checks and creates the production bundle.
- `npm run preview` serves the production bundle locally.
- `npm test` runs the Vitest suite when configured.
- `npm run lint` checks Vue, JavaScript, and TypeScript files.

Do not document commands that are not backed by repository scripts.

## Coding Style & Naming Conventions

Write Vue Single-File Components using `<script setup>` and the Composition API. Prefer TypeScript where project configuration supports it. Use two-space indentation, UTF-8 files, and final newlines. Name components and views in `PascalCase` (`UserProfile.vue`), composables with a `use` prefix (`useSession.ts`), and variables/functions in `camelCase`. Use `kebab-case` for asset filenames. Keep component props typed, emit declarations explicit, and move reusable stateful logic into composables. Run the configured ESLint and Prettier checks before submitting changes.

## Testing Guidelines

Use Vitest and Vue Test Utils when the test dependencies are configured. Name tests `*.spec.ts`, for example `src/components/UserProfile.spec.ts`. Test rendered behavior and user interaction rather than component internals. Add coverage for composables, stores, validation, boundary cases, and every bug fix. If automation is unavailable, document browser and viewport checks in the pull request.

## Commit & Pull Request Guidelines

There is no Git history from which to infer an existing convention. Use concise, imperative commit subjects, optionally following Conventional Commits, such as `feat: add login validation` or `fix: preserve session after restart`. Keep commits scoped to one logical change.

Pull requests should include a clear summary, testing evidence, and links to relevant issues. Add screenshots or recordings for visible UI changes. Call out configuration changes, migrations, or known follow-up work, and request review only after local checks pass.
