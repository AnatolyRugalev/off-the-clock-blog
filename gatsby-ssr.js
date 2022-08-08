import React from "react";

const panelbearConfig = {
  site: "484zFQ9lsHm",
  spaMode: "history",
  debug: false,
  honorDNT: true,
};

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
        key="panelbear-analytics-src"
        async
        src={`https://cdn.panelbear.com/analytics.js?site=${panelbearConfig.site}`}
    />,
    <script
        key="panelbear-analytics-code"
        dangerouslySetInnerHTML={{
          __html: `
          window.panelbear = window.panelbear || function() { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
          panelbear('config', ${JSON.stringify(panelbearConfig)});
        `,
        }}
    />,
  ]);
};
