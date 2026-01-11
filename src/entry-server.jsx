// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
          <title>Kik Messaging, Chat App, Groups &amp; Communities</title>
          {assets}
        </head>

        <body
          style={{
            display: "flex",
            "flex-direction": "column",
            "justify-content": "center",
            width: "100vw",
            height: "100vh",
            "background-image": "url('/bg-body.gif')"
          }}
        >
          <div 
            id="app"

            style={{
              display: "flex",
              "flex-direction": "column",
              "justify-content": "center",
              "align-items": "center",
              width: "100vw",
              height: "100vh"
            }}
          >
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));