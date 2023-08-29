export function HomePage() {
  return (
    <section>
      <div className="container-fluid p-0">
        <div className="row d-flex justify-content-center align-items-center text-center mx-auto" id="content_home_intro">
          <div className="col-12 text-white">
            <span id="slogan">Slogan</span>
            <h2 className="mt-4 mb-3">Tatto Studio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, aut quis culpa eum iusto blanditiis hic quidem non odio dolorum, dolorem neque pariatur vitae delectus! Provident earum doloribus eius id!</p>
            <a id="btn_home_intro" href="#!" className="btn px-5 py-2 mt-3">Explore Tatto</a>
          </div>
          {/* <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1680659820/tatto/home_intro_vv7lyz.jpg" alt="home_intro_tatto" height="500px" id="home_intro_tatto"/> */}
        </div>
        <div className="row d-flex justify-content-center align-items-center text-center mx-auto my-5 p-3">
          <div className="col-12 col-sm-6 col-md-4 mx-auto">
            <div className="row text-left">
              <span>Juan Daniel</span>
              <h2>Que hacemos</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque autem cupiditate. Vel dolor, voluptatibus veritatis animi aliquid quibusdam quidem dolorum cum enim! Corporis minima quasi ad illo repellat. Possimus!</p>
            </div>
            <div className="row text-center">
              <div className="col-12 d-flex justify-content-around">
                <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1680735653/tatto/tatto_serpient_r3axec.webp" alt="icon-home-1" className="bg-dark rounded-circle" height="50px"/>
                <span>Tatto Quality</span> 
              </div>
              <div className="col-12 d-flex justify-content-around">
                <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1680735653/tatto/tatto_machine_jxwgwv.webp" alt="icon-home-2" className="bg-dark rounded-circle" height="50px"/>
                <span>Using the best equimpent</span> 
              </div>
              <div className="col-12 d-flex justify-content-around">
                <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1680737353/tatto/tatto_woman_rmzpgr.webp" alt="icon-home-2" className="bg-dark rounded-circle" height="50px"/>
                <span>Experience Artist</span> 
              </div>
            </div>
            <div className="row text-center">
              <a href="#!" className="btn btn-sm btn-secondary">About Us</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mx-auto"> 
            <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1680730422/tatto/tatto_home_section2_p9nds3.webp" alt="home_intro_tatto" id="home_intro_tatto" />
          </div>
          <div className="col-12 col-md-4 mx-auto">
            <div className="row mx-auto border p-2 my-2 text-justify">
              <h4>WORKING HOURS</h4>
              <div className="col-4 col-sm-6 col-md-12 border-bottom">Lunes 08:00 - 19:00</div>
              <div className="col-4 col-sm-6 col-md-12 border-bottom">Martes 08:00 - 19:00</div>
              <div className="col-4 col-sm-6 col-md-12 border-bottom">Miercoles 08:00 - 19:00</div>
              <div className="col-4 col-sm-6 col-md-12 border-bottom">Jueves 08:00 - 19:00</div>
              <div className="col-4 col-sm-6 col-md-12 border-bottom">Viernes 08:00 - 19:00</div>
              <div className="col-4 col-sm-6 col-md-12 border-bottom">Sabado 08:00 - 19:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}