import { useForm } from "react-hook-form";
import "./styles.css";

function ContactMe() {

  interface FormData {
    fname: string;
    email: string;
    msg: string;
  }

  const { register, handleSubmit } = useForm<FormData>({
    mode: 'onBlur'
  });

  const onSubmit = (data: FormData) => {
  
    console.log(data)
  }
  // const schema = z.object({
  //   name: z.string().min(3, 'Por favor, informe um nome válido')
  //   email: z.string().min(3, 'Por favor, informe um email válido')
  //   msg: z.string().min(3, 'Por favor, informe uma mensagem válida')
  // })

  return (
    <section className="section-contact">
      <div id="container-texts">
        <h1>Entre em contato!</h1>
        <h3>Entre em contato e vamos conversar, estou aberto a qualquer tipo de conversa, seja sobre trabalho ou alguma dica construtiva!</h3>
      </div>
      <div id="form-area">
        <form className="formContact" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="form-itens">
            
          <label htmlFor="fname"></label>
          <input type="text" id="fname" {...register("fname")} placeholder="Seu Nome:"/>
          
          <label htmlFor="email"></label>
          <input type="text" id="email" {...register("email")} placeholder="Digite seu e-mail:" />
          
          <textarea id="mensagem" {...register("msg")} placeholder="Digite sua Mensagem: " rows={8} cols={35}></textarea>
          <input className="btn-submit" type="submit" value="Enviar" />
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
