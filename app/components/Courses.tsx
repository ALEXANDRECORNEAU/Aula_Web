export default function Courses() {
    return (
<main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div className="md:col-span-2 lg:col-span-3 mt-4 text-center text-white">
    <h2>
      CONHEÇA NOSSOS <span>CURSOS</span>
    </h2>
  </div>
  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="/curso_html.html">
      <img src="/img/html.svg" alt="" />
      <div className="text-center text-white">
        <h3>CURSO DE HTML</h3>
        <p>curso é realizado por profissionais</p>
      </div>
    </a>
  </div>
  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="/curso_css.html">
      <img src="/img/css.svg" alt="" />
      <div className="text-center text-white">
        <h3>CURSO DE CSS</h3>
        <p>curso é realizado por profissionais</p>
      </div>
    </a>
  </div>
  <div className="bg-[#4d4d4d] rounded-lg pb-2">
    <a href="/curso_js.html">
      <img src="/img/js.svg" alt="" />
      <div className="text-center text-white">
        <h3>CURSO DE HTML</h3>
        <p>curso é realizado por profissionais</p>
      </div>
    </a>
  </div>
  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="/curso_design.html">
      <img src="/img/design.svg" alt="" />
      <div className="text-center text-white">
        <h3>CURSO DE DESIGN</h3>
        <p>curso é realizado por profissionais</p>
      </div>
    </a>
  </div>
  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="/curso_games.html">
      <img src="/img/games.svg" alt="" />
      <div className="text-center text-white">
        <h3>CURSO DE games</h3>
        <p>curso é realizado por profissionais</p>
      </div>
    </a>
  </div>
  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="/curso_games.html">
      <img src="/img/games.svg" alt="" />
      <div className="text-center text-white">
        <h3>CURSO DE games</h3>
        <p>curso é realizado por profissionais</p>
      </div>
    </a>
  </div>
  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="/curso_robot.html">
      <img src="/img/robot.svg" alt="" />
      <div className="text-center text-white">
        <h3>CURSO DE ROBÓTICA</h3>
        <p>curso é realizado por profissionais</p>
      </div>
    </a>
  </div>
</main>
    )
}