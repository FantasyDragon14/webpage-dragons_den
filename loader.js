let webdragonsMembershipStatus;
let webdragonsWidget;
let serverURL;
let ringMemberId;

addEventListener("DOMContentLoaded", async (event) => {
    webdragonsWidget = document.querySelector('.webdragons-wrapper');
    serverURL = webdragonsWidget.getAttribute('url');
    ringMemberId = Number(webdragonsWidget.getAttribute('webdragonID'));

    const response = await fetch(serverURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ load: "widget" })
    });
    const htmlComment = await response.text();
    const uncommentedHtml = htmlComment.slice(4, -3);
    webdragonsWidget.innerHTML += uncommentedHtml;
    const response2 = await fetch(serverURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ load: "script" })
    });
    const scriptData = await response2.text();
    const script = document.createElement("script");
    script.textContent = scriptData;
    document.body.appendChild(script);
    webdragonsMembershipStatus = document.getElementById("webdragonsMembershipStatus");
    loadWidgetData();
})


