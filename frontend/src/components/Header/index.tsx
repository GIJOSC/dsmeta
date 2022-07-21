import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta do GIJO</h1>
        <p>
          Desenvolvido por Gesiel Neves na semana Dev Superior         
        </p>
        <p>
          Créditos ao mestre Nélio Alves
          <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
