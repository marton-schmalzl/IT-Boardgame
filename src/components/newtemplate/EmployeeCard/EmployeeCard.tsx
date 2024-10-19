import React from 'react';
import './EmployeeCard.css';
import { Programmer } from '../../../model/cards/Person';
import { Stats } from '../../../model/Stats';


interface EmployeeCardProps {
  employee: Programmer;
}

const skillIcons: { [key in keyof Stats]: string } = {
  knowledge: '⚙️',
  organization: '📋',
  creativity: '💡',
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const renderSkillBar = (level: number) => (
    <div className="skill-bar">
      {Array.from({ length: 7 }, (_, idx) => (
        <div key={idx} className={idx < level ? 'filled' : ''}></div>
      ))}
    </div>
  );

  return (
    <div className="card">
      {/* Header with Job Title and Cost */}
      <div className="card-header">
        <div className="job-title">{employee.title?.en}</div>
        <div className="price">${employee.cost}</div>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="info-left">
          {/* Name Information */}
          <div className="outlined-box">
            <label htmlFor="name">Name</label>
            <div className="personal-info">
              <div className="name">{employee.name?.en}</div>
            </div>
          </div>

          {/* Background Information */}
          <div className="outlined-box background-box">
            <label htmlFor="background">Background</label>
            <div className="personal-info">
              <div className="flavor-text">{employee.flavorText?.en}</div>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="photo">
          <img

            alt={'Employee Headshot'}
          />
        </div>
      </div>

      {/* Description */}
      <div className="outlined-box description-box">
        <label htmlFor="description">Description</label>
        <div className="description">{employee.text?.en}</div>
      </div>

      {/* Skills */}
      <div className="outlined-box skill-container">
        <label>Skills</label>
        <div className="skills">
          {Object.entries(employee.skills).map(([skillName, level]) => (
            <div className="skill-category" key={skillName}>
              <div className="skill-icon-container">
                <span className="skill-icon">
                  {skillIcons[skillName as keyof Stats]}
                </span>
              </div>
              {renderSkillBar(level)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
