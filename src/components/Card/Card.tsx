import React from 'react';
import cn from 'classnames';
import Text from 'components/Text';
import styles from './Card.module.scss';

export type CardProps = {
  className?: string;
  image: string;
  captionSlot?: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  contentSlot?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  actionSlot?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  className,
  image,
  title,
  subtitle,
  captionSlot,
  contentSlot,
  actionSlot,
  onClick,
}) => {
  return (
    <div
      role="presentation"
      className={cn(styles.card, className)}
      onClick={onClick}
    >
      <div className={styles.card_header}>
        <img className={styles.card_headerSrc} src={image} alt="card" />
      </div>
      <div className={styles.card_body}>
        {captionSlot && (
          <Text
            className={styles.card_caption}
            view="p-14"
            weight="medium"
            color="secondary"
          >
            {captionSlot}
          </Text>
        )}
        <Text tag="h4" maxLines={2} view="p-20" weight="medium" color="primary">
          {title}
        </Text>
        <Text
          className={styles.card_subtitle}
          maxLines={1}
          view="p-16"
          color="secondary"
        >
          {subtitle}
        </Text>
        <div className={styles.card_footer}>
          {contentSlot && (
            <Text view="p-18" weight="bold">
              {contentSlot}
            </Text>
          )}
          {actionSlot && <div className={styles.card_action}>{actionSlot}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
