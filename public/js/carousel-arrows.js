document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".carousel-track-wrapper");

  wrappers.forEach(wrapper => {
    const track = wrapper.querySelector(".carousel-track");
    const btnLeft = wrapper.querySelector(".carousel-arrow.left");
    const btnRight = wrapper.querySelector(".carousel-arrow.right");

    btnLeft.addEventListener("click", () => {
      wrapper.scrollBy({ left: -300, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      wrapper.scrollBy({ left: 300, behavior: "smooth" });
    });
  });
});
