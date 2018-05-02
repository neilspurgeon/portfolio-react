import React from 'react';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import Container from 'components/Container/Container.js';
import Button from 'components/Button/Button.js';
import { Helmet } from 'react-helmet';

const borderHeight = 1;

class Contact extends React.Component {

  resize = () => {
    let ta = this.refs.autosize;

    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + borderHeight + 'px';
    ta.scrollTop = ta.scrollHeight;
  }

  render() {
    return (
      <div>

        <Helmet>
          <title>Contact – Neil Spurgeon. Product Designer</title>
        </Helmet>

        <Header />

        <div className={styles.pushFooter}>

          <Container>

            <section className={styles.contactWrapper}>
              <h1 className={styles.pageHeader}>Get in touch</h1>
              <p>If you want to work together or just say hi.</p>

              <form
                className={styles.contactForm}
                action="https://formspree.io/hello@neilspurgeon.com"
                method="POST"
                >
                <input className={styles.input} type="text" placeholder="Name" autoComplete="name" name="name" required />
                <input className={styles.input} type="email" placeholder="Email" autoComplete="email" name="_replyto" required />
                <input type="hidden" name="_cc" value="neilspurgeon@gmail.com" />

                <textarea
                  ref="autosize"
                  className={styles.textArea}
                  onChange={this.resize}
                  rows="1"
                  name="message"
                  required
                  placeholder="Message" />

                  <Button type="submit" text="Send" className={styles.submit} />

              </form>

            </section>

          </Container>

        </div>

        <Footer />
      </div>
    );
  }
};

export default Contact;
