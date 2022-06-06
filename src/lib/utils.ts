export function sendEvent(eventName: string, eventProps = {}) {
  if (!window['plausible'] || process.env.NODE_ENV === "development") {
    return console.log({
      event_name: eventName,
      event_data: eventProps,
    });
  }

  window["plausible"](eventName, {
    props: eventProps,
  });
}
