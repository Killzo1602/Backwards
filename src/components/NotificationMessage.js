import React from "react";
import ".//styles/notification.css";

export default function NotificationMessage() {
  return (
    <>
      <section className="notification-message">
        <div className="notification-message-text">
          <strong className="notification-message-text">Buy me a beer</strong>-{" "}
          <a
            href="https://www.patreon.com"
            className="notification-message-text"
          >
            Patreon
          </a>{" "}
          ----
        </div>
      </section>
    </>
  );
}
