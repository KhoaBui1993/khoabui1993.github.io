import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className="work__img-container">
        <img src={item.image} alt={item.title} className="work__img" loading="lazy" />
      </div>

      <div className="work__header-row">
        <span className="work__category-badge">{item.categoryLabel || item.category}</span>
        {item.badge && (
          <span className="work__status-badge">
            <i className="bx bx-check-circle work__status-icon"></i> {item.badge}
          </span>
        )}
      </div>

      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>

      {item.highlights && item.highlights.length > 0 && (
        <div className="work__highlights-grid">
          {item.highlights.map((h, hIdx) => (
            <div className="work__highlight-item" key={hIdx}>
              <i className="bx bx-check work__highlight-check"></i>
              <span><strong>{h.label}:</strong> {h.val}</span>
            </div>
          ))}
        </div>
      )}

      <div className="work__tags">
        {item.tags?.map((tag, idx) => (
          <span className="work__tag" key={idx}>{tag}</span>
        ))}
      </div>

      <div className="work__links">
        {item.demo && (
          <a href={item.demo} target='_blank' className="work__button" rel="noreferrer">
            Live Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}
        {item.github && (
          <a href={item.github} target='_blank' className="work__button" rel="noreferrer">
            View on GitHub <i className="bx bxl-github work__button-icon"></i>
          </a>
        )}
        {item.docs && (
          <a href={item.docs} target='_blank' className="work__button work__button--alt" rel="noreferrer">
            Architecture Docs <i className="bx bx-book-open work__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkItems;
