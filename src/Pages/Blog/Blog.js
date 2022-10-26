import { Accordion } from "flowbite-react";
import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto w-1/2 mt-20">
      <h2 className="text-center mb-10 text-4xl font-semibold underline">
        Need to Know{" "}
      </h2>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>What is CORS?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Why are you using firebase ? What the other options do you have for
            authentication ?{" "}
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Firebase is free and Firebase helps me develop high-quality apps,
              grow my user base, and earn more money. Each feature works
              independently, and they work even better together.Usually,
              authentication by a server entails the use of a user name and
              password. Other ways to authenticate can be through cards, retina
              scans, voice recognition, and fingerprints.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How does the private route work ?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is node ? How it work ?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.It is a used as backend
              service where javascript works on the server-side of the
              application. This way javascript is used on both frontend and
              backend. Node. js runs on chrome v8 engine which converts
              javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blog;
