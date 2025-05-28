import "./styles.css";

function ContactMe() {
  return (
    <section className="section-contact">
      <div id="container-texts">
        <h1>Entre em contato!</h1>
        <h3>Entre em contato e vamos conversar, estou aberto a qualquer tipo de conversa, seja sobre trabalho ou alguma dica construtiva!</h3>
      </div>
      <div id="form-area">
        <form className="formContact" autoComplete="off">
          <fieldset className="form-itens">
            
          <label htmlFor="fname"></label>
          <input type="text" id="fname" name="fname" placeholder="Seu Nome:"/>
          
          <label htmlFor="email"></label>
          <input type="text" id="email" name="email" placeholder="Digite seu e-mail:" />
          
          <label htmlFor="msg"></label><textarea name="msg" id="mensagem" placeholder="Digite sua Mensagem: " rows={8} cols={35}></textarea>
          <input className="btn-submit" type="submit" value="Enviar" />
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
