import { useEffect, useState } from 'react';
import styles from './Membership.module.scss';

export const Membership = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && wallet) {
      setSuccessMessage('Form was succesfully submitted');
      setIsVisible(true);

      setName('');
      setEmail('');
      setWallet('');
    } else {
      setSuccessMessage('');
      alert('Fill in all fields');
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setIsVisible(false);

        setTimeout(() => setSuccessMessage(null), 500);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className={styles.membership__container}>
      <div className={styles.membership__general}>
        <h1 data-aos="fade-down-right" className={styles.membership__general_title}>
          Want to become <b>part</b> of the community?
        </h1>

        <form onSubmit={handleSubmit} className={styles.membership__form}>
          <div data-aos="fade-right" className={styles.membership__form_group}>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ivan Ivanovych"
              required
            />
          </div>

          <div data-aos="fade-left" className={styles.membership__form_group}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="qwerty@gmail.com"
              required
            />
          </div>

          <div data-aos="fade-right" className={styles.membership__form_group}>
            <input
              type="text"
              id="wallet"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              placeholder="Ethereum або Binance Smart Chain adress"
              required
            />
          </div>

          <button data-aos="fade-left" type="submit" className={styles.membership__submit_button}>
            Apply
          </button>
        </form>

        {successMessage && (
          <div
            className={`${styles.membership__success_message} ${
              isVisible
                ? styles.membership__success_message_visible
                : styles.membership__success_message_hidden
            }`}
          >
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};
