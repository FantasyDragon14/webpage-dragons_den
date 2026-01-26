let webdragonsMembershipStatus;
let webdragonsWidget;
let serverURL;
let ringMemberId;

addEventListener("DOMContentLoaded", async (event) => {
  webdragonsWidget = document.querySelector(".webdragons-wrapper");
  serverURL = webdragonsWidget.getAttribute("url");
  ringMemberId = Number(webdragonsWidget.getAttribute("webdragonID"));

  const style = document.createElement("style");
  style.textContent =
    "@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');";
  document.querySelector("head").appendChild(style);
  const response = await fetch(serverURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ load: "widget" }),
  });
  const htmlComment = await response.text();
  const uncommentedHtml = htmlComment.slice(4, -3);
  const shadow = webdragonsWidget.attachShadow({ mode: "open" });
  shadow.innerHTML += uncommentedHtml;
  const response2 = await fetch(serverURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ load: "script" }),
  });
  const scriptData = await response2.text();
  const script = document.createElement("script");
  script.textContent = scriptData;
  document.body.appendChild(script);
  webdragonsMembershipStatus = document.getElementById(
    "webdragonsMembershipStatus"
  );
  loadWidgetData();
});
