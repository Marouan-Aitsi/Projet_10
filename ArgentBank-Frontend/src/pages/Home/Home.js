import { Features } from "../../components/Features/Features"
import "./Home.css"
import IconChat from '../../img/icon-chat.webp'
import IconMoney from '../../img/icon-money.webp'
import IconSecurity from '../../img/icon-security.webp'

export default function Home() {
      return (
            <main>
                  <div className="hero">
                        <section className="hero-content">
                              <h2 className="sr-only">Promoted Content</h2>
                              <p className="subtitle">No fees.</p>
                              <p className="subtitle">No minimum deposit.</p>
                              <p className="subtitle">High interest rates.</p>
                              <p className="text">Open a savings account with Argent Bank today!</p>
                        </section>
                  </div>
                  <section className="features">
                        <h2 className="sr-only">Features</h2>
                        <Features
                              icon={IconChat}
                              alt="Chat Icon"
                              title="You are our #1 priority"
                              description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                        />
                        <Features
                              icon={IconMoney}
                              alt="Money Icon"
                              title="More savings means higher rates"
                              description="The more you save with us, the higher your interest rate will be!"
                        />
                        <Features
                              icon={IconSecurity}
                              alt="Security Icon"
                              title="Security you can trust"
                              description="We use top of the line encryption to make sure your data and money is always safe."
                        />
                  </section>
            </main>
      )
}