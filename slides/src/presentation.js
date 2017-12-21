import React from "react";
import createTheme from "spectacle/lib/themes/default";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Fit,
  Fill,
  Image,
  Notes
} from "spectacle";

import LyftPWAImage from "./images/lyft-pwa.png";
import StarbucksPWAImage from "./images/starbucks-pwa.png";
import PinterestPWAImage from "./images/pinterest-pwa.png";
import TwitterPWAImage from "./images/twitter-pwa.png";

require("normalize.css");

const theme = createTheme(
  {
    primary: "#FAFAFA",
    secondary: "#33302D",
    tertiary: "#63A6ED",
    quartenary: "#999"
  },
  {
    primary: "Questrial",
    secondary: "Cutive Mono"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          progressColor="quartenary"
        >
          <Heading size={3} lineHeight={1} textColor="secondary">
            Progressive Web Apps
          </Heading>
          <Heading
            margin="20px 0 0 0"
            size={5}
            lineHeight={1}
            textColor="secondary"
          >
            With React & Redux
          </Heading>
          <Text
            margin="200px 0 0 0"
            textSize="1.2em"
            textFont="secondary"
            lineHeight={1}
            textColor="secondary"
          >
            Kyle Cesmat - @kylecesmat
          </Text>
          <Text
            margin="20px 0 0 0"
            size={1}
            textSize="1em"
            textFont="secondary"
            lineHeight={1}
            textColor="quartenary"
          >
            PHX ReactJS Meetup 12/10/17
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="#C43B31">
          <Notes>
            - about me
            <br />
            - Software developer at formidable
            <br />
            - We are a software consultancy
            <br />
            - Build web & native apps ranging in size
            <br />
            - we are hiring node developers
          </Notes>
          <svg width="407" height="84" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fillRule="nonzero">
              <path d="M98.35 28.917H118V19H88v47h10.45V48.42h17.184v-9.552H98.35zM134.464 32.007c-9.663.019-17.482 7.867-17.464 17.53.018 9.663 7.867 17.481 17.53 17.463 9.664-.018 17.483-7.867 17.464-17.53a17.031 17.031 0 0 0-17.53-17.463zm0 25.697a7.47 7.47 0 0 1-7.437-8.233 7.47 7.47 0 1 1 14.874 0 7.403 7.403 0 0 1-7.437 8.233zM164.769 37.724v-4.371H155V67h9.968V52.159c0-6.777 3.655-9.149 7.71-9.149a13.435 13.435 0 0 1 3.322.339v-9.996a9.786 9.786 0 0 0-2.658-.339c-3.498-.194-6.808 1.625-8.573 4.71zM218.583 32.037c-4.145-.253-8.104 1.719-10.35 5.154-1.977-3.476-5.842-5.493-9.878-5.154-3.802-.055-7.391 1.722-9.61 4.757v-3.6H179V66h10.08V46.97a5.267 5.267 0 0 1 1.482-4.035 5.456 5.456 0 0 1 4.03-1.648 5.12 5.12 0 0 1 4.01 1.538 4.937 4.937 0 0 1 1.365 4.013v19.03h10.081V46.904a5.269 5.269 0 0 1 1.53-4.016 5.458 5.458 0 0 1 4.048-1.6 5.119 5.119 0 0 1 3.964 1.563 4.936 4.936 0 0 1 1.345 3.987v19.03h10.013V44.59a11.382 11.382 0 0 0-3.241-9.077 11.802 11.802 0 0 0-9.124-3.477zM236 33h10v33h-10zM240.933 17a6 6 0 1 0 .134 12 6 6 0 0 0-.134-12zM283.736 18h-9.914v17.704c-.793-1.265-3.305-3.328-8.857-3.328a15.976 15.976 0 0 0-11.671 5.145 16.208 16.208 0 0 0-4.257 12.093 16.44 16.44 0 0 0 4.397 12.228 16.205 16.205 0 0 0 11.862 5.143 10.576 10.576 0 0 0 8.79-3.927 23.12 23.12 0 0 0 .265 3.328H284c0-.732-.264-2.928-.264-5.923V18zm-17.184 39.933a7.38 7.38 0 0 1-5.577-2.49 7.489 7.489 0 0 1-1.826-5.862 7.504 7.504 0 0 1 3.484-7.069 7.391 7.391 0 0 1 7.837 0 7.504 7.504 0 0 1 3.484 7.069 7.488 7.488 0 0 1-1.866 5.795 7.38 7.38 0 0 1-5.536 2.458v.1zM317.67 44.811c0-6.672-3.9-12.811-14.538-12.811-9.647 0-14.009 6.272-14.405 11.01l8.722 1.801c.195-2.91 2.667-5.123 5.551-4.97a4.033 4.033 0 0 1 3.198.727 4.113 4.113 0 0 1 1.626 2.875 2.28 2.28 0 0 1-.704 1.654c-.45.43-1.057.652-1.675.615l-7.731 1.201c-5.36.195-9.63 4.594-9.714 10.009.617 4.681 3.981 8.518 8.508 9.705 4.527 1.187 9.314-.514 12.109-4.3a16.065 16.065 0 0 0 .33 3.736H318a32.84 32.84 0 0 1-.396-5.138V44.811h.066zm-9.912 8.34a5.743 5.743 0 0 1-1.387 4.826 5.621 5.621 0 0 1-4.627 1.847 3.281 3.281 0 0 1-2.73-.736 3.35 3.35 0 0 1-1.168-2.6c0-.985.392-1.929 1.088-2.619a3.616 3.616 0 0 1 2.612-1.05l6.212-1.002v1.368-.033zM342.57 32.304a11.932 11.932 0 0 0-9.55 3.935V18H323v48.247h9.819v-3.734c2.136 3 5.67 4.689 9.35 4.468 9.285 0 15.831-7.269 15.831-17.405 0-10.137-5.811-17.272-15.43-17.272zm-2.204 25.607a7.553 7.553 0 0 1-5.614-2.46 7.528 7.528 0 0 1-1.933-5.809 7.532 7.532 0 0 1 3.537-7.112 7.558 7.558 0 0 1 7.954 0 7.532 7.532 0 0 1 3.537 7.112 7.428 7.428 0 0 1-1.873 5.818 7.453 7.453 0 0 1-5.608 2.451zM362 18h10v48h-10zM407 48.912C407 38.3 400.732 32 390.51 32a16.447 16.447 0 0 0-11.95 5.134 16.632 16.632 0 0 0-4.54 12.242 16.83 16.83 0 0 0 4.733 12.53 16.641 16.641 0 0 0 12.35 5.045c6.95.567 13.34-3.85 15.303-10.578l-8.377-2.388a6.332 6.332 0 0 1-6.596 4.311c-3.776.216-7.055-2.585-7.454-6.367h22.822c.141-.999.207-2.008.198-3.017zm-22.823-3.316c.363-3.332 3.27-5.786 6.596-5.571a5.848 5.848 0 0 1 4.508 1.337 5.914 5.914 0 0 1 2.088 4.234h-13.192zM19 0L0 76l19-22.386z" />
              <path opacity=".15" d="M19 0l42 40.025L19 54z" />
              <path opacity=".45" d="M19 84l42-44-42 13.84z" />
              <path opacity=".7" d="M0 76.212L19 54v30z" />
            </g>
          </svg>
        </Slide>
        <Slide
          align="flex-start"
          transition={["zoom"]}
          bgColor="primary"
          progressColor="quartenary"
        >
          <Notes>
            - offline/low connectivity
            <br />
            - its a way of thinking when building web applications
          </Notes>
          <Heading size={3} fit lineHeight={1} textColor="secondary">
            What's a Progressive Web App (PWA)?
          </Heading>
          <List ordered>
            <Appear order={1}>
              <ListItem margin="0 0 0.25em 0">Built for resilience</ListItem>
            </Appear>
            <Appear order={2}>
              <ListItem margin="0 0 0.25em 0">
                Widely-accessible accross devices & networks
              </ListItem>
            </Appear>
            <Appear order={3}>
              <ListItem margin="0 0 0.25em 0">
                Performant, optimized expierence
              </ListItem>
            </Appear>
            <Appear order={3}>
              <ListItem margin="0 0 0.25em 0">
                A modern web app with offline, low-bandwidth, installable
                capabilities
              </ListItem>
            </Appear>
          </List>
          <Appear order={4}>
            <BlockQuote textColor="secondary" textSize="1.5em" italic>
              It’s just a website that took all the right vitamins - Alex
              Russell
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide
          align="flex-start"
          transition={["zoom"]}
          bgColor="primary"
          progressColor="quartenary"
        >
          <Heading size={3} fit lineHeight={1} textColor="secondary">
            Who's building PWAs?
          </Heading>
          <Notes>
            - Lyft built their entire ride request system in the browser
            <br />
            - Starbucks wanted to explore emerging markets and provide value to
            low-connectivity users
            <br />
            - Pinterest made mobile web a priority, boost in core engagements by
            60%
            <br />
            - 44% user-generated ad revenue
            <br />
            - Twitter wanted to provide offline support to the web
            <br />
            - Much smaller and faster expierence
            <br />
            - Some say faster than native
          </Notes>
          <div>
            <Image
              src={LyftPWAImage}
              height={380}
              display="inline-block"
              margin="0.5em 0.5em"
            />
            <Image
              src={StarbucksPWAImage}
              height={380}
              display="inline-block"
              margin="0.5em 0.5em"
            />
            <Image
              src={PinterestPWAImage}
              height={380}
              display="inline-block"
              margin="0.5em 0.5em"
            />
            <Image
              src={TwitterPWAImage}
              height={380}
              display="inline-block"
              margin="0.5em 0.5em"
            />
          </div>
        </Slide>
        <Slide
          align="flex-start"
          transition={["zoom"]}
          bgColor="primary"
          progressColor="quartenary"
        >
          <Notes>
            - Push assets to browser using http2/server push
            <br />
            - Chunk your modules, only push critical rendering pieces
            <br />
            - Service worker is a browser-installed javascript mechanism to
            enable push messaging, background sync, geofencing and network
            control
            <br />
            - Platform is almost ready. Modern browsers ship with support for
            SWs, and chrome provides additional APIs
          </Notes>
          <Heading size={3} fit lineHeight={1} textColor="secondary">
            How do we build a PWA?
          </Heading>
          <List ordered>
            <Appear order={1}>
              <ListItem margin="0 0 0.25em 0">Use PRPL pattern</ListItem>
            </Appear>
            <List>
              <Appear order={2}>
                <ListItem textSize="1em" margin="0 0 5px 0">
                  <strong>Push</strong> critical resources for the initial URL
                  route
                </ListItem>
              </Appear>
              <Appear order={3}>
                <ListItem textSize="1em" margin="0 0 5px 0">
                  <strong>Render</strong> initial route
                </ListItem>
              </Appear>
              <Appear order={4}>
                <ListItem textSize="1em" margin="0 0 5px 0">
                  <strong>Pre-load</strong> remaining routes
                </ListItem>
              </Appear>
              <Appear order={5}>
                <ListItem textSize="1em" margin="0 0 5px 0">
                  <strong>Lazy-load</strong> and create remaining routes on
                  demand
                </ListItem>
              </Appear>
            </List>
            <Appear order={5}>
              <ListItem margin="0 0 0.25em 0">
                Use a ServiceWorker & App Manifest
              </ListItem>
            </Appear>
            <Appear order={6}>
              <ListItem margin="0 0 0.25em 0">
                Optimize assets (SVGOMG, webpack-image-loader, etc)
              </ListItem>
            </Appear>
            <Appear order={7}>
              <ListItem margin="0 0 0.25em 0">Use the platform</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          align="flex-start"
          transition={["zoom"]}
          bgColor="primary"
          progressColor="quartenary"
        >
          <Heading size={3} fit lineHeight={1} textColor="secondary">
            Common methods using React & Redux
          </Heading>
          <List ordered>
            <Appear order={1}>
              <ListItem margin="0 0 0.25em 0">
                Persist & restore redux state locally
              </ListItem>
            </Appear>
            <Appear order={1}>
              <ListItem margin="0 0 0.25em 0">
                Code splitting on routes
              </ListItem>
            </Appear>
            <Appear order={1}>
              <ListItem margin="0 0 0.25em 0">
                Modularize offline/online components
              </ListItem>
            </Appear>
            <Appear order={1}>
              <ListItem margin="0 0 0.25em 0">
                Use libraries like <code>redux-offline</code>,{" "}
                <code>redux-persist</code>, <code>react-detect-offline</code>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          align="flex-start"
          transition={["zoom"]}
          bgColor="primary"
          progressColor="quartenary"
        >
          <Heading size={3} fit lineHeight={1} textColor="secondary">
            Additional Considerations
          </Heading>
          <List ordered>
            <Appear order={1}>
              <ListItem margin="0 0 0.25em 0">
                Serviceworkers are hard to version & test
              </ListItem>
            </Appear>
            <Appear order={1}>
              <ListItem margin="0 0 0.25em 0">
                The platform is (almost) ready
              </ListItem>
            </Appear>
            <Appear order={1}>
              <ListItem margin="0 0 0.25em 0">
                Consider pulling back features for PWAs, focus on core
                featureset.
              </ListItem>
            </Appear>
            <Appear order={1}>
              <ListItem margin="0 0 0.25em 0">
                React & redux is great, but preact or lightweight state lib may
                be better
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          align="flex-start"
          transition={["zoom"]}
          bgColor="primary"
          progressColor="quartenary"
        >
          <Heading size={3} fit lineHeight={1} textColor="secondary">
            Demo
          </Heading>
        </Slide>
        <Slide
          align="flex-start"
          transition={["zoom"]}
          bgColor="primary"
          progressColor="quartenary"
        >
          <Heading size={3} fit lineHeight={1} textColor="secondary">
            Thank You!
          </Heading>
          <Text
            margin="200px 0 0 0"
            textSize="1.2em"
            textFont="secondary"
            lineHeight={1}
            textColor="secondary"
          >
            Kyle Cesmat - @kylecesmat
          </Text>
          <Text
            margin="20px 0 0 0"
            size={1}
            textSize="1em"
            textFont="secondary"
            lineHeight={1}
            textColor="quartenary"
          >
            PHX ReactJS Meetup 12/10/17
          </Text>
        </Slide>
      </Deck>
    );
  }
}
