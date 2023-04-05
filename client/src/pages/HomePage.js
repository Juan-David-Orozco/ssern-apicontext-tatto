export function HomePage() {
  return (
    <section>
      <div className="container-fluid p-0 h-100">
        <div className="row d-flex justify-content-center align-items-center text-center mx-auto" id="content_home_intro">
          <div className="col-12 text-white">
            <span id="slogan">Slogan</span>
            <h2 className="mt-4 mb-3">Tatto Studio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, aut quis culpa eum iusto blanditiis hic quidem non odio dolorum, dolorem neque pariatur vitae delectus! Provident earum doloribus eius id!</p>
            <a id="btn_home_intro" href="#!" className="btn px-5 py-2 mt-3">Explore Tatto</a>
          </div>
          {/* <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1680659820/tatto/home_intro_vv7lyz.jpg" alt="home_intro_tatto" height="500px" id="home_intro_tatto"/> */}
        </div>
        <div className="row d-flex justify-content-center align-items-center text-center mx-auto">
          <p>Home Page</p>
        </div>
      </div>
    </section>
  )
}