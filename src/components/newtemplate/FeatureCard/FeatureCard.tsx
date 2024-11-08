import React from 'react';
import styles from './FeatureCard.module.css';
import { Stats } from '../../../model/Stats';
import classNames from 'classnames';
import { Feature } from '../../../model/contracts/Contract';


interface FeatureCardProps {
  feature: Feature;
}

const skillIcons: { [key in keyof Stats]: string } = {
  knowledge: '⚙️',
  organization: '📋',
  creativity: '💡',
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
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
        {/* Header with Story Points and Name */}
        <div className={styles['card-header']}>
          <div className={styles['story-points']}>{feature.storyPoints}</div>
          <div className={styles['feature-name']}>{feature.name.en}</div>
        </div>
        {/* Descriptions */}
        <div className={styles['description-container']}>
          {/* Effect Description */}
          <div className={styles['description-box']}>
            <label>Effect</label>
            <div className={styles['description-text']}>
              {feature.effectDescription?.en}
            </div>
          </div>
          {/* Flavor Text */}
          <div className={styles['flavor-text-box']}>
            <label>Flavor Text</label>
            <div className={styles['flavor-text']}>
              {feature.flavorText?.en || ''}
            </div>
          </div>
        </div>
      </div>
      {/* Right Section with Image and Skills */}
      <div className={styles['right-section']}>
        {/* Image Section */}
        <div className={styles['image-section']}>
          <img
            src={'images/features/' + feature.photoSrc}
            alt={'Feature Illustration'}
          />
        </div>
        {/* Skill Requirements */}
        <div className={styles['skill-container']}>
          <label>Required Skills</label>
          <div className={styles.skills}>
            {Object.entries(feature.requiredSkills).map(([skillName, level]) => (
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
    </div>
  );
};

export default FeatureCard;
