import React from 'react';
import './style.css';
import whatsappIcon from '../../images/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://conteudo.imguol.com.br/c/entretenimento/58/2017/05/30/pikachu-nervoso-1496159464346_v2_1191x670.png" alt="foto" />
        <div>
          <strong>Pikachu pistola</strong>
          <strong>Quimica</strong>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fuga quo
        <br /><br />
        eaque quidem dignissimos a reprehenderit earum, est quam nostrum ducimus quae reiciendis. Doloribus expedita cupiditate mollitia cumque ullam accusamus.
      </p>

      <footer>
        <p>Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;