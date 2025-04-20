import './Account.css'

export const Account = ({ title, total, description, editDescription }) => {
      return (
            <div>
                  <section className="account">
                        <div className="account-content-wrapper">
                              <h3 className="account-title">{title}</h3>
                              <p className="account-amount">{total}</p>
                              <p className="account-amount-description">{description}</p>
                        </div>
                        <div className="account-content-wrapper chevron">
                              <i className="fa-solid fa-chevron-right"></i>
                        </div>
                  </section>
            </div>
      )
}