let controller;
const url = "https://www.youtube.com/watch?v=iZLso4Lro64&ab_channel=MangUA";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("Download aborted");
  }
});

async function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(url, { signal });
    console.log("Download completed", response);
  } catch (err) {
    console.error(`Download error: ${err.message}`);
  }
}
