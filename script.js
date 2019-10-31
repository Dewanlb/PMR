fetch("https://www.reddit.com/r/aww/.json")
  // Convert the response JSON into JavaScript objects & arrays
  .then(res => res.json())
  // Work with that data
  .then(information => {
    const sectionEl = document.getElementById("main");
    for (let posts of information.data.children) {
      let content = posts.data;
      let titleEl = document.createElement("h3");
      titleEl.innerText = content.title;
      sectionEl.appendChild(titleEl);
      let imageEl = document.createElement("img");
      imageEl.setAttribute("src", `${content.thumbnail}`);

      sectionEl.appendChild(imageEl);
      let link = document.createElement("a");
      link.setAttribute("href", `https://www.reddit.com${content.permalink}`);
      sectionEl.appendChild(link);
      link.innerText = `https://www.reddit.com${content.permalink}`;
    }
  });
