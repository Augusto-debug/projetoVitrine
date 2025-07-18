import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import styles from './FaleConosco.module.css';

function FaleConosco() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [statusEnvio, setStatusEnvio] = useState('');
  const [emailError, setEmailError] = useState('');
  const [telefoneError, setTelefoneError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateTelefone = (telefone) => {
    const cleanedTelefone = telefone.replace(/\D/g, '');
    const re = /^\d{10,11}$/;
    return re.test(cleanedTelefone);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError('');
    setTelefoneError('');
    setStatusEnvio('');

    let isValid = true;

    if (email.trim() === '') {
      setEmailError('O email é obrigatório.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Por favor, insira um email válido.');
      isValid = false;
    }

    if (telefone.trim() !== '' && !validateTelefone(telefone)) {
      setTelefoneError('Por favor, insira um telefone válido (apenas números, 10 ou 11 dígitos).');
      isValid = false;
    }

    if (!isValid) {
      setStatusEnvio('Por favor, corrija os erros no formulário.');
      return;
    }

    setStatusEnvio('Enviando...');

    const serviceID = 'service_9e2o0ws';
    const templateID = 'template_p3x3e4m';
    const publicKey = 'XzrrK9DHOJrdLn4wd';

    const templateParams = {
      user_name: nome,
      user_email: email,
      user_phone: telefone,
      message: mensagem,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        setStatusEnvio('Mensagem enviada com sucesso!');
        setNome('');
        setEmail('');
        setTelefone('');
        setMensagem('');
      })
      .catch((error) => {
        console.error('Falha ao enviar o e-mail:', error);
        setStatusEnvio('Erro ao enviar mensagem. Por favor, tente novamente.');
      });
  };

  return (
    <section id='faleConosco' className={styles.faleConoscoSection}>
      <div
        className={styles.topSection}
      >
        <div>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <h2>Seja um parceiro!</h2>
            <p>Eu quero ouvir você</p>

            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                required
              />
              {emailError && <p className={styles.errorMessage}>{emailError}</p>}
            </div>

            <div>
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={telefone}
                onChange={(e) => {
                  setTelefone(e.target.value);
                  setTelefoneError('');
                }}
              />
              {telefoneError && <p className={styles.errorMessage}>{telefoneError}</p>}
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit">
              <FaEnvelope style={{ marginRight: '8px' }} />
              Enviar Mensagem
            </button>
            {statusEnvio && (
              <p className={`${styles.statusMessage} ${statusEnvio.includes('sucesso') ? styles.success :
                statusEnvio.includes('Erro') ? styles.error : ''
                }`}>
                {statusEnvio}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default FaleConosco;