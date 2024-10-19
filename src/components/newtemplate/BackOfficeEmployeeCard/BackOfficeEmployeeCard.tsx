import React from 'react';
import styles from './BackOfficeEmployeeCard.module.css';
import { Person } from '../../../model/cards/Person';

interface BackOfficeEmployeeCardProps {
  employee: Person
}

const BackOfficeEmployeeCard: React.FC<BackOfficeEmployeeCardProps> = ({ employee }) => {
  return (
    <div className={styles.card}>
      {/* Header with Job Title and Cost */}
      <div className={styles.cardHeader}>
        <div className={styles.jobTitle}>{employee.title?.en}</div>
        <div className={styles.price}>${employee.cost}</div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.infoLeft}>
          {/* Name Information */}
          <div className={styles.outlinedBox}>
            <label htmlFor="name">Name</label>
            <div className={styles.personalInfo}>
              <div className={styles.name}>{employee.name?.en}</div>
            </div>
          </div>

          {/* Background Information */}
          <div className={`${styles.outlinedBox} ${styles.backgroundBox}`}>
            <label htmlFor="background">Background</label>
            <div className={styles.personalInfo}>
              <div className={styles.flavorText}>{employee.flavorText?.en}</div>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className={styles.photo}>
          <img
            src={employee.photoSrc}
            alt={'Employee Headshot'}
          />
        </div>
      </div>

      {/* Description */}
      <div className={`${styles.outlinedBox} ${styles.descriptionBox}`}>
        <label htmlFor="description">Description</label>
        <div className={styles.description}>{employee.text?.en}</div>
      </div>

      {/* No Skills Section */}
    </div>
  );
};

export default BackOfficeEmployeeCard;
