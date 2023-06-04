document.addEventListener("DOMContentLoaded", function() {
   const btnAddTimelineItem = document.querySelector(".timeline-item-add");
   btnAddTimelineItem.addEventListener("click", AddTimelineItem);

   function AddTimelineItem(){
      let newTimelineItem = document.createElement("div");
      newTimelineItem.className = "timeline-item";

      let dotElement = document.createElement("div");
      dotElement.className = "timeline-dot";

      let idElement = document.createElement("div");
      idElement.className = "timeline-id";
      const id = Math.random().toString(36).substring(2);
      idElement.textContent = id;

      let contentElement = document.createElement("div");
      contentElement.className = "timeline-content";

      let titleElement = document.createElement("h3");
      titleElement.textContent = "Timeline Item Title";

      let paragraphElement = document.createElement("p");
      paragraphElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

      contentElement.appendChild(titleElement);
      contentElement.appendChild(paragraphElement);

      newTimelineItem.appendChild(dotElement);
      newTimelineItem.appendChild(idElement);
      newTimelineItem.appendChild(contentElement);

      document.getElementsByClassName("timeline-items")[0].appendChild(newTimelineItem);
   }
});
