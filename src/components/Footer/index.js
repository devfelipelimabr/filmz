
function Footer() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  return (
    <>
      <footer>
        <div class="backTop">
          <a href="#top">
            <h4 class="grayText">Back to top ↑</h4>
          </a>
        </div>
        <div class="msg">
          <h4>follow your dreams</h4>
        </div>
        <div class="bottomFooter">
          <div class="logo" id="footerLogo">
            <a href="/">
              <img
              className="logo"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="logo"
              />
            </a>
          </div>
          <div class="year">
            <h1 class="year">{anoAtual}</h1>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
