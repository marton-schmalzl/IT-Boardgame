import React from 'react';
import styles from './EmployeeCard.module.css';
import { Programmer } from '../../../model/cards/Person';
import { Stats } from '../../../model/Stats';
import classNames from 'classnames';

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
    <div className={styles['skill-bar']}>
      {Array.from({ length: 7 }, (_, idx) => (
        <div
          key={idx}
          className={classNames({ [styles.filled]: idx < level })}
        ></div>
      ))}
    </div>
  );

  return (
    <div className={styles.card}>
      {/* Header with Job Title and Cost */}
      <div className={styles['card-header']}>
        <div className={styles['job-title']}>{employee.title?.en}</div>
        <div className={styles.price}>${employee.cost}</div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles['info-left']}>
          {/* Name Information */}
          <div className={styles['outlined-box']}>
            <label htmlFor="name">Name</label>
            <div className={styles['personal-info']}>
              <div className={styles.name}>{employee.name?.en}</div>
            </div>
          </div>

          {/* Background Information */}
          <div
            className={classNames(
              styles['outlined-box'],
              styles['background-box']
            )}
          >
            <label htmlFor="background">Background</label>
            <div className={styles['personal-info']}>
              <div className={styles['flavor-text']}>
                {employee.flavorText?.en}
              </div>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className={styles.photo}>
          <img
            src={'images/product_team/' + employee.photoSrc}
            alt={'Employee Headshot'}
          />
        </div>
      </div>

      {/* Description */}
      <div className={classNames(styles['outlined-box'], styles['description-box'])}>
        <label htmlFor="description">Description</label>
        <div className={styles.description}>{employee.text?.en}</div>
      </div>

      {/* Skills */}
      <div className={classNames(styles['outlined-box'], styles['skill-container'])}>
        <label>Skills</label>
        <div className={styles.skills}>
          {Object.entries(employee.skills).map(([skillName, level]) => (
            <div className={styles['skill-category']} key={skillName}>
              <div className={styles['skill-icon-container']}>
                <span className={styles['skill-icon']}>
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
