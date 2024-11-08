import React from 'react';
import styles from './TechnologyCard.module.css';
import { Stats } from '../../../model/Stats';
import classNames from 'classnames';
import { Technology } from '../../../model/contracts/Contract';

interface TechnologyCardProps {
  technology: Technology;
}

const skillIcons: { [key in keyof Stats]: string } = {
  knowledge: '⚙️',
  organization: '📋',
  creativity: '💡',
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {
  const renderSkillBar = (level: number) => (
    <div className={styles['skill-bar']}>
      {Array.from({ length: 10 }, (_, idx) => (
        <div
          key={idx}
          className={classNames({ [styles.filled]: idx < level })}
        ></div>
      ))}
    </div>
  );

  return (
    <div className={styles.card}>
      {/* Left Section with Header and Descriptions */}
      <div className={styles['left-section']}>
        {/* Header with Name and Story Points */}
        <div className={styles['card-header']}>
          <div className={styles['story-points']}>{technology.storyPoints}</div>
          <div className={styles['tech-name']}>{technology.name.en}</div>
        </div>
        {/* Descriptions */}
        <div className={styles['description-container']}>
          {/* Top Description */}
          <div className={styles['description-box']}>
            <label>Top Effect</label>
            <div className={styles['description-text']}>
              {technology.topDescription?.en || ''}
            </div>
          </div>
          {/* Bottom Description */}
          <div className={styles['description-box']}>
            <label>Bottom Effect</label>
            <div className={styles['description-text']}>
              {technology.bottomDescription?.en || ''}
            </div>
          </div>
        </div>
      </div>
      {/* Right Section with Image and Skills */}
      <div className={styles['right-section']}>
        {/* Image Section */}
        <div className={styles['image-section']}>
          <img
            src={'images/technology/' + technology.photoSrc}
            alt={'Technology Illustration'}
          />
        </div>
        {/* Skill Requirements */}
        <div className={styles['skill-container']}>
          <label>Required Skills</label>
          <div className={styles.skills}>
            {Object.entries(technology.requiredSkills).map(
              ([skillName, level]) => (
                <div className={styles['skill-category']} key={skillName}>
                  <div className={styles['skill-icon-container']}>
                    <span className={styles['skill-icon']}>
                      {skillIcons[skillName as keyof Stats]}
                    </span>
                  </div>
                  {renderSkillBar(level)}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
