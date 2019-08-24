var accordions = document.getElementsByClassName("tbs-accordion");
var i;

for (i = 0; i < accordions.length; i++)
{
  var accordion = accordions[i]
  accordion.addEventListener("click", function()
  {
    this.classList.toggle("active");
    var collapse = this.nextElementSibling;
    if (collapse.style.display === "block")
    {
      collapse.style.display = "none";
    }
    else
    {
      collapse.style.display = "block";
    }
  });
}