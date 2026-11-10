import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (selectedFilter === 'all') {
      setProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) => project.category === selectedFilter);
      setProjects(filtered);
    }
  }, [selectedFilter]);

  const handleFilterClick = (navItem, index) => {
    setSelectedFilter(navItem.name);
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={() => handleFilterClick(navItem, index)}
            className={`${active === index ? 'active-work' : ''} work__item`}
            key={index}
          >
            {navItem.label || navItem.name}
          </span>
        ))}
      </div>

      <div className="work__container grid">
        {projects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
