import './Features.css'

export const Features = ({ icon, alt, title, description }) => {
      return (
            <div className="feature-item">
                  <img src={icon} alt={alt} className="feature-icon" />
                  <h3 className="feature-item-title">{title}</h3>
                  <p>{description}</p>
            </div>
      );
};
