import { useState } from 'react';
import styles from './Membership.module.scss';

export const Membership = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && wallet) {
      setSuccessMessage('Form was succesfulli submitted');

      setName('');
      setEmail('');
      setWallet('');
    } else {
      setSuccessMessage('');
      alert('Fill in all fields');
    }
  };

  return (
    <div className={styles.membership__container}>
      <div className={styles.membership__general}>
        <h1 className={styles.membership__general_title}>
          Want to become <b>part</b> of the community?
        </h1>

        <form onSubmit={handleSubmit} className={styles.membership__form}>
          <div className={styles.membership__form_group}>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ivan Ivanovych"
              required
            />
          </div>

          <div className={styles.membership__form_group}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="qwerty@gmail.com"
              required
            />
          </div>

          <div className={styles.membership__form_group}>
            <input
              type="text"
              id="wallet"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              placeholder="Ethereum або Binance Smart Chain adress"
              required
            />
          </div>

          <button type="submit" className={styles.membership__submit_button}>
            Apply
          </button>
        </form>

        {successMessage && (
          <div className={styles.membership__success_message}>
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};
