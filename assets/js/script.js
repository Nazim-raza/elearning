const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const button = item.querySelector(".accordion-button");
  const timelineConnector = item.previousElementSibling?.querySelector(
    ".timeline-connector"
  );

  button.addEventListener("click", (e) => {
    setTimeout(() => {
      const accordionBody = item.querySelector(".accordion-body");
      const newHeight = accordionBody?.scrollHeight || 0;

      if (timelineConnector) {
        timelineConnector.style.height = `${newHeight + 40}px`; // Adjust for padding
      }
    }, 300); // Wait for collapse animation to finish
  });
});
