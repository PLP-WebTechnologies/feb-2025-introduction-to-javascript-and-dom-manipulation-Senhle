function changeAbout() {
    document.getElementById("about-text").textContent = 
      "TechNova is leading the way in AI, Cloud, and IoT solutions for a smarter planet.";
  }
  
  function changeStyle() {
    const vision = document.getElementById("vision-text");
    vision.style.color = "#fff";
    vision.style.backgroundColor = "#007acc";
    vision.style.padding = "12px";
    vision.style.borderRadius = "6px";
  }
  
  function addService() {
    const list = document.getElementById("services-list");
    const newService = document.createElement("li");
    newService.textContent = `Service ${list.children.length + 1}`;
    list.appendChild(newService);
  }
  
  function removeService() {
    const list = document.getElementById("services-list");
    if (list.children.length > 0) {
      list.removeChild(list.lastElementChild);
    }
  }
  