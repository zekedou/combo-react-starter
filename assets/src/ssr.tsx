import type { Page } from "@inertiajs/core"
import { createInertiaApp } from "@inertiajs/react"
import { resolvePageComponent } from "./inertia-helper"
import ReactDOMServer from "react-dom/server"

const appName = "MyApp"

export function render(page: Page) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
      resolvePageComponent(
        `./pages/${name}.tsx`,
        import.meta.glob("./pages/**/*.tsx", { eager: true }),
      ),
    setup: ({ App, props }) => <App {...props} />,
  })
}
