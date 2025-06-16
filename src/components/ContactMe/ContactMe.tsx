import { useForm } from "react-hook-form";
import "./styles.css";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { useState } from "react";

function ContactMe() {
  interface FormData {
    nome: string;
    email: string;
    mensagem: string;
  }


  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const [isSending, setIsSending] = useState(false)

  const onSubmit = async (data: FormData) => {

    if(isSending) return;
    
    setIsSending(true);

    try {
      const response = await fetch("https://api-yudev-portifolio.onrender.com/api/contato", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(data),
      });
      

      if (response.ok) {
        toast.success("Dados enviados com sucesso");
        reset();
      } else {
        toast.error("Erro ao enviar, Tente novamente mais tarde.")
      }
    } catch (error) {
      toast.error(
        "Erro no envio do formulário, revise seus dados e tente novamente"
      );
    } finally {
      setIsSending(false);
      
    }
  };

  return (
    <section className="section-contact">
      <div id="container-texts">
        <h1>Entre em contato!</h1>
        <h3>
          Entre em contato e vamos conversar, estou aberto a qualquer tipo de
          conversa, seja sobre trabalho ou alguma dica construtiva!
        </h3>
      </div>
      <div id="form-area">
        <form className="formContact" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="form-itens">
            <label htmlFor="fname"></label>
            {errors.nome && (
              <p className={errors.nome ? "inputerror" : ""}>
                Escreva um nome válido
              </p>
            )}
            <input
              type="text"
              id="fname"
              {...register("nome", {
                required: true,
                minLength: {
                  value: 3,
                  message: "O nome deve conter ao menos 3 letras",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="Seu Nome:"
            />

            <label htmlFor="email"></label>
            {errors.email && (
              <p className={errors.email ? "inputerror" : ""} role="email">
                Escreva um e-mail válido
              </p>
            )}
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Email adress is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "email invalido",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="Digite seu e-mail:"
            />

            <textarea
              id="mensagem"
              {...register("mensagem")}
              placeholder="Digite sua Mensagem: "
              rows={8}
              cols={35}
            ></textarea>
            <input className={isSending ? "btn-submitDisabled" : "btn-submit"} type="submit" value={isSending ? "Enviando..." : 'Enviar'} disabled={isSending} />
          </fieldset>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </section>
  );
}

export default ContactMe;
