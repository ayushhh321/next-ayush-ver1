

document.addEventListener("DOMContentLoaded", function() {
  // Wait for the entire page to load including images and styles
  window.addEventListener("load", function() {
      // Ensure the loading animation stays for at least 3 seconds
      setTimeout(function() {
          // Start the fade-out transition
          document.getElementById('loading-animation').style.opacity = '0';

          // When the transition ends, hide the loading animation and show the content
          document.getElementById('loading-animation').addEventListener('transitionend', function() {
              document.getElementById('loading-animation').style.display = 'none';
              document.getElementById('content').style.opacity = '1';
              document.body.style.overflow = 'auto'; // Restore scroll
          });
      }, 0); // 3000 milliseconds = 3 seconds
  });
});

/* Aside */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function(){
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("back-section");
          }
          for(let j=0; j<totalNavList; j++)  
          {
              if(navList[j].querySelector("a").classList.contains("active"))
              {
                 allSection[j].classList.add("back-section");
              }
              navList[j].querySelector("a").classList.remove("active");
          }
          this.classList.add("active")
          showSection(this);
          /* click any mavbar button to close the navbar in 1199px views */
          if(window.innerWidth < 1200)
          {
              asideSectionTogglerBtn(); 
          }
        })
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click",()=>
      {
          asideSectionTogglerBtn()
      })
      function asideSectionTogglerBtn() {
          aside.classList.toggle("open");
          navTogglerBtn.classList.toggle("open");
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.toggle("open");
          }
      }


  
  function updateViewCount() {
          // Get the current count from localStorage
          let count = localStorage.getItem('viewCount');
          
          // If the count is not found, initialize it to 0
         if (!count || parseInt(count) < 3000) {
              count = 3000;
          }
          
          // Increment the count
          count = parseInt(count) + 1;
          
          // Store the new count in localStorage
          localStorage.setItem('viewCount', count);
          
          // Update the displayed count on the page
          document.getElementById('view-count').textContent = count;
      }

      // Run the updateViewCount function when the page loads
      document.addEventListener('DOMContentLoaded', (event) => {
          updateViewCount();
      });